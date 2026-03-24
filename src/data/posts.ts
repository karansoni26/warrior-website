export interface Post {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  content: string; // HTML allowed for rich text
  image?: string;
}

export const BLOG_POSTS: Post[] = [
  {
    slug: 'day-14-brain-healing-roadmap',
    title: 'Day 14 Brain Healing Proof: NoRelapse Biological Roadmap Explained',
    excerpt: 'The first two weeks feel like hell. See the scientific milestones that happen exactly on Day 14 and why the NoRelapse Roadmap is the key to recovery.',
    date: 'March 25, 2026',
    readTime: '5 min read',
    image: '/roadmap-day-14.png',
    content: `
      <p>The first two weeks of quitting PMO feel like hell. Friction is at its peak, and willpower is at its lowest. But science says something incredible starts happening right at the 2-week mark.</p>
      
      <h3>The Day 14 Milestone</h3>
      <p>Around <strong>Day 14</strong>, your brain’s prefrontal cortex begins the critical work of repairing <strong>dopamine receptors</strong>. These are the "receiving stations" for joy and motivation that were previously offline due to hyper-stimulation.</p>
      
      <p>When you reach this point:</p>
      <ul>
        <li><strong>Decision-making Power Returns</strong>: You no longer act purely on impulse.</li>
        <li><strong>Urges Become Weaker</strong>: The biological pressure starts to dissipate.</li>
        <li><strong>Cravings Lose Their Grip</strong>: Your baseline dopamine begins to stabilize.</li>
      </ul>

      <div style="margin: 40px 0; border: 1px solid var(--iron); border-radius: 12px; overflow: hidden; background: #000;">
        <img src="/roadmap-day-14.png" alt="NoRelapse Biological Roadmap Graph" style="width: 100%; display: block;" />
        <div style="padding: 15px; font-size: 0.9rem; color: var(--ghost); text-align: center;">NoRelapse Warrior's Biological Roadmap Interface</div>
      </div>

      <p>NoRelapse Warrior’s <strong>Biological Roadmap</strong> tracks exactly that. It doesn’t just count streaks — it shows real brain healing milestones using proven neuroscience. It visualizes the battle within, giving you the clarity needed to cross the "Two-Week Rubicon."</p>
      
      <blockquote>"I’ve seen hundreds of warriors hit this milestone and say the same thing: 'It finally feels real.' The 14-day mark isn't just a number, it's a structural shift in your nervous system."</blockquote>

      <p>Download the free APK today and watch your own brain healing timeline unfold. Stop guessing, start measuring.</p>
    `
  },
  {
    slug: 'guardian-shield-vs-normal-blockers',
    title: 'Guardian Shield vs Normal Blockers – System-Level Demo',
    excerpt: 'Most blockers only work when the app is open. Guardian Shield blocks triggers everywhere using native Android Accessibility. No root, no drain, 100% protection.',
    date: 'March 25, 2026',
    readTime: '4 min read',
    content: `
      <p>Most porn blockers promise a lot but only work when their own app is open. They are easily bypassed by simply swiping them away or using an incognito tab. <strong>Guardian Shield is built different.</strong></p>
      
      <p>Using native <strong>Android Accessibility Service</strong>, it blocks triggers everywhere — Chrome, YouTube, Instagram, Telegram, WhatsApp, and every single app on your phone. It doesn't just "block a website"; it monitors the system for harmful intent.</p>

      <h3>See It In Action:</h3>
      <div style="margin: 40px 0; border: 1px solid var(--rh); border-radius: 12px; overflow: hidden; background: #000; box-shadow: 0 0 30px rgba(0, 255, 136, 0.1);">
        <video 
          src="/gaurdian.mp4" 
          controls 
          muted 
          autoPlay 
          loop 
          playsInline 
          style="width: 100%; display: block; max-height: 500px; object-fit: contain;"
        >
          Your browser does not support the video tag.
        </video>
        <div style="padding: 15px; font-size: 0.9rem; color: var(--rh); text-align: center; background: rgba(0, 255, 136, 0.05);">15-Second Live Demo: Real-Time Trigger Blockage</div>
      </div>

      <h3>Why System-Level Matters:</h3>
      <ul>
        <li><strong>No Root Required</strong>: Works on any modern Android device.</li>
        <li><strong>Zero Battery Drain</strong>: Optimized at the binary level for efficiency.</li>
        <li><strong>Zero Data Collection</strong>: 100% privacy-first. Your triggers never leave your device.</li>
      </ul>

      <p>Normal blockers provide half protection. They are a lock that anyone can open. Guardian Shield is a <strong>full phone bodyguard</strong> that actually understands the Android ecosystem to keep you safe.</p>

      <p>Ready to make your phone safe again? Turn your device from a liability into a fortress today.</p>
    `
  }
];
