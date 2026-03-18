import { supabase } from './supabase';

document.addEventListener('DOMContentLoaded', () => {
  initUserCount();
  initScrollAnimations();
  initSquadFeed();
  initSmoothScroll();
  initDynamicDownload();
});

async function initDynamicDownload() {
  const downloadBtns = document.querySelectorAll('.app-btn-main, .download-btn-trigger');
  
  // Try to fetch latest APK from Supabase
  try {
    const { data } = await supabase.from('app_config').select('warrior_settings').eq('id', 'global').single();
    const apkUrl = data?.warrior_settings?.latest_apk_url;
    
    if (apkUrl) {
      downloadBtns.forEach(btn => {
        btn.addEventListener('click', () => {
          window.location.href = apkUrl;
        });
        (btn as HTMLElement).style.cursor = 'pointer';
      });
    }
  } catch (err) {
    console.error('Failed to fetch dynamic APK:', err);
  }
}

function initUserCount() {
  const userCountEl = document.getElementById('user-count');
  const victoriesEl = document.getElementById('total-victories');
  if (!userCountEl || !victoriesEl) return;

  let baseCount = 12410;
  let victories = 8912;
  
  setInterval(() => {
    baseCount += Math.floor(Math.random() * 3);
    victories += Math.floor(Math.random() * 2);
    userCountEl.textContent = baseCount.toLocaleString() + '+';
    victoriesEl.textContent = victories.toLocaleString();
  }, 5000);
}

function initScrollAnimations() {
  const elements = document.querySelectorAll('.feature-card, .guide-step, .pricing-card');
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        (entry.target as HTMLElement).style.opacity = '1';
        (entry.target as HTMLElement).style.transform = 'translateY(0)';
      }
    });
  }, { threshold: 0.1 });

  elements.forEach(el => {
    (el as HTMLElement).style.opacity = '0';
    (el as HTMLElement).style.transform = 'translateY(50px)';
    (el as HTMLElement).style.transition = 'all 0.8s cubic-bezier(0.2, 0.8, 0.2, 1)';
    observer.observe(el);
  });
}

function initSquadFeed() {
  const feed = document.getElementById('squad-feed');
  if (!feed) return;

  const names = ['Aryan', 'Vikram', 'Sam', 'Rohan', 'John', 'Alex', 'Kabir'];
  const actions = ['conquered a level 5 urge', 'hit a 30-day streak!', 'just joined the squad!', 'completed their daily quest'];

  function addFeedItem() {
    if (!feed) return;
    const item = document.createElement('div');
    item.className = 'feed-item';
    const name = names[Math.floor(Math.random() * names.length)];
    const action = actions[Math.floor(Math.random() * actions.length)];
    item.innerHTML = `<strong>${name}</strong> <span>${action}</span>`;
    
    feed.prepend(item);
    if (feed.children.length > 4) {
      feed.lastElementChild?.remove();
    }
  }

  setInterval(addFeedItem, 4000);
  addFeedItem();
}

function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (this: HTMLAnchorElement, e: Event) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      if (!targetId) return;
      document.querySelector(targetId)?.scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
}

// Micro-interaction for the Hero Title
const heroTitle = document.querySelector('.hero-title');
if (heroTitle) {
  heroTitle.addEventListener('mousemove', (e: any) => {
    const { clientX, clientY } = e;
    const { left, top, width, height } = heroTitle.getBoundingClientRect();
    const x = (clientX - left) / width - 0.5;
    const y = (clientY - top) / height - 0.5;
    
    (heroTitle as HTMLElement).style.transform = `perspective(1000px) rotateY(${x * 10}deg) rotateX(${-y * 10}deg)`;
  });

  heroTitle.addEventListener('mouseleave', () => {
    (heroTitle as HTMLElement).style.transform = `perspective(1000px) rotateY(0deg) rotateX(0deg)`;
  });
}
