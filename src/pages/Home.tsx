import React, { useEffect, useState } from 'react';
import { supabase } from '../supabase';


export default function Home() {
  const [latestApkUrl, setLatestApkUrl] = useState<string | null>(null);

  useEffect(() => {
    const fetchLatestApk = async () => {
      const { data } = await supabase.from('app_config').select('warrior_settings').eq('id', 'global').single();
      if (data?.warrior_settings?.latest_apk_url) {
        setLatestApkUrl(data.warrior_settings.latest_apk_url);
      }
    };
    fetchLatestApk();

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e, i) => {
          if (e.isIntersecting) {
            setTimeout(() => e.target.classList.add('visible'), i * 65);
            obs.unobserve(e.target);
          }
        });
      },
      { threshold: 0.08 }
    );
    document.querySelectorAll('.reveal').forEach((el) => obs.observe(el));

    const tabs = document.querySelectorAll('.feat-tab');
    tabs.forEach((tab) => {
      tab.addEventListener('click', () => {
        tabs.forEach((t) => t.classList.remove('active'));
        document.querySelectorAll('.feat-panel').forEach((p) => p.classList.remove('active'));
        tab.classList.add('active');
        const targetId = (tab as HTMLElement).dataset.t;
        if (targetId) {
          const panel = document.getElementById(targetId);
          if (panel) panel.classList.add('active');
        }
      });
    });

    const questions = document.querySelectorAll('.faq-q');
    questions.forEach((q) => {
      q.addEventListener('click', () => {
        const item = q.parentElement;
        const wasOpen = item?.classList.contains('open');
        document.querySelectorAll('.faq-item').forEach((i) => i.classList.remove('open'));
        if (!wasOpen && item) item.classList.add('open');
      });
    });

    return () => {
      obs.disconnect();
    };
  }, []);

  const handleDownloadClick = async (e: React.MouseEvent) => {
    e.preventDefault();
    const section = document.getElementById('install');
    if (section) {
       section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const actualDownload = (e: React.MouseEvent) => {
    e.preventDefault();
    if (latestApkUrl) {
      window.location.href = latestApkUrl;
    } else {
      // Fallback if DB value is missing
      window.location.href = 'https://norelapse.app/Warrior_Elite_Final_Pro_v4.apk'; 
    }
  };

  return (
    <>
      <section id="hero" style={{minHeight:'100vh',display:'flex',flexDirection:'column',justifyContent:'center',position:'relative',padding:'130px 60px 90px',overflow:'hidden'}}>
        <div className="hero-grid"></div>
        <div className="hero-glow-r"></div>
        <div className="hero-glow-g"></div>

        <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:'60px',alignItems:'center',position:'relative',zIndex:1}}>
          <div>
            <div className="hero-ey">NoRelapse Warrior &middot; Safe &middot; VirusTotal Verified</div>
            <h1 className="hero-hl">
              SYSTEM-LEVEL<br />DISCIPLINE.<br />
              <span className="acc">WARRIOR APK.</span><br />
              <span className="dim">GUARDIAN</span><br />
              SHIELD ONLY.
            </h1>
            <p className="hero-sub" style={{ fontSize: '1.2rem', color: 'var(--white)' }}>
               Guardian Shield turns your entire phone into a bodyguard.<br />
               Biological Roadmap proves your brain is healing.<br />
               <strong>Zero paywall. Zero tracking. Direct download.</strong>
            </p>
            <div className="hero-acts">
              <a href="#" onClick={handleDownloadClick} className="btn-p" style={{ padding: '20px 40px' }}>
                ✅ DOWNLOAD WARRIOR APK (Safe • VirusTotal Verified)
              </a>
              <a href="https://www.virustotal.com/gui/home/upload" target="_blank" rel="noopener" className="btn-g">Scan APK on VirusTotal</a>
            </div>
            <div className="hero-trust">
              <div className="hero-trust-item"><strong>100%</strong><span>Privacy-First</span></div>
              <div className="hero-trust-item"><strong>30s</strong><span>To Install</span></div>
              <div className="hero-trust-item"><strong>Safe</strong><span>Clean Distribution</span></div>
              <div className="hero-trust-item"><strong>380K+</strong><span>Active Warriors</span></div>
            </div>
          </div>

          <div style={{display:'flex',justifyContent:'center',alignItems:'center',position:'relative'}}>
            <div className="hero-glow-back"></div>
            <div className="phone-mockup" style={{maxWidth:'420px', width:'100%'}}>
              <img src="/images/dashboard.png" alt="NoRelapse HD Dashboard" />
            </div>
          </div>
        </div>
      </section>

      <div className="ticker-wrap">
        <div className="ticker">
          <span className="ticker-item">Military-Grade Blocking</span><span className="ticker-item">Zero Data Transmission</span><span className="ticker-item">AccessibilityService API</span><span className="ticker-item">Sovereign Architecture</span><span className="ticker-item">Unbreakable Accountability</span><span className="ticker-item">No Server. No Surveillance.</span><span className="ticker-item">APK Direct &mdash; No Play Store</span><span className="ticker-item">Military-Grade Blocking</span><span className="ticker-item">Zero Data Transmission</span><span className="ticker-item">AccessibilityService API</span><span className="ticker-item">Sovereign Architecture</span><span className="ticker-item">Unbreakable Accountability</span><span className="ticker-item">No Server. No Surveillance.</span><span className="ticker-item">APK Direct &mdash; No Play Store</span>
        </div>
      </div>

      <section id="problem">
        <div className="s-lbl">Why NoRelapse Warrior Is Different</div>
        <h2 className="s-ttl reveal">SYSTEM-LEVEL PROTECTION,<br />NOT JUST A HABIT TRACKER.</h2>
        <div className="prob-grid">
          <div className="prob-copy reveal">
            <p style={{fontSize:'1.2rem', color:'var(--white)'}}>Most apps only block triggers inside their own browsers. **Our Guardian Shield blocks triggers across the entire phone.** Chromium, YouTube, Instagram, and every system app is monitored 24/7. **No root required. Zero battery drain.**</p>
            <p>Those tools were designed for teenagers managing social media. They were not designed for a man at war with the most sophisticated dopamine delivery system in human history.</p>
            <div className="war-line">"The enemy does not respect a passcode you set yourself. It respects a wall you cannot tear down."</div>
            <p>Every app you've tried gave the enemy a backdoor â€” a browser you could switch to, a setting you could disable when the urge hit. You did not fail those apps. <strong>Those apps failed you.</strong> The architecture was soft. Yours needed to be iron.</p>
          </div>
          <ul className="prob-list reveal">
            <li><span className="num">01</span><div><strong>Screen time limits are advisory.</strong> The OS obeys you â€” not the limit. One tap. Gone.</div></li>
            <li><span className="num">02</span><div><strong>DNS blockers have gaps.</strong> A private browser, a VPN, a new network. The urge finds every hole.</div></li>
            <li><span className="num">03</span><div><strong>App blockers work until they don't.</strong> Reinstall. Factory reset. Incognito. The relapse window stays open.</div></li>
            <li><span className="num">04</span><div><strong>Accountability partners are asleep.</strong> The urge does not strike at 2 PM. It strikes at 2 AM in a hotel room.</div></li>
            <li><span className="num">05</span><div><strong>Your data is someone else's product.</strong> Every URL visited, logged. Every block triggered, transmitted.</div></li>
            <li><span className="num">06</span><div><strong>Soft UI produces soft results.</strong> An app built for teenagers will not hold the line when your nervous system is screaming.</div></li>
          </ul>
        </div>
      </section>

      <div className="divider"></div>

      <section id="how">
        <div className="s-lbl">Deployment Protocol</div>
        <h2 className="s-ttl reveal">FOUR STEPS. THEN IT'S DONE.</h2>
        <div className="steps-wrap">
          <div className="steps-line"></div>
          <div className="steps-grid">
            <div className="step reveal"><div className="step-hex">01</div><div className="step-title">Download the APK</div><p className="step-text">No Play Store. No account. No email. Sideload directly onto your Android device in under 60 seconds. No trace on cloud accounts or app stores.</p></div>
            <div className="step reveal"><div className="step-hex">02</div><div className="step-title">Grant System Access</div><p className="step-text">Enable the AccessibilityService permission. This puts NoRelapse one layer below every browser on your device. One permission. Total coverage.</p></div>
            <div className="step reveal"><div className="step-hex">03</div><div className="step-title">Configure Your Vault</div><p className="step-text">Set your blocklist, override delay, and PIN lock while your head is clear. This is the only moment you control. After this, the architecture controls it.</p></div>
            <div className="step reveal"><div className="step-hex">04</div><div className="step-title">Deploy. Walk Away.</div><p className="step-text">NoRelapse runs silently. No battery drain alerts. No check-in popups. No notification noise. It operates in the dark. So do you â€” focused, clear, undistracted.</p></div>
          </div>
        </div>
      </section>

      <div className="divider"></div>

      <section id="solution">
        <div className="s-lbl">Guardian Shield</div>
        <h2 className="s-ttl reveal">TRUE SYSTEM-LEVEL PROTECTION.</h2>
        <p className="sol-text reveal">NoRelapse Warrior is not a tracker. It is not a timer. It is a <span className="acc">Guardian Shield architecture</span> — deployed at the Accessibility Service layer, operating in silence, providing <span className="dim">100% phone-wide protection.</span></p>
        <div className="pillars">
          <div className="pillar reveal"><div className="pillar-num">I</div><div className="pillar-t">Sovereign Privacy</div><p className="pillar-p">Every decision NoRelapse makes happens on your device. Browsing behavior processed locally, then discarded. No logs. No analytics. No cloud sync. No server that can be breached or sold.</p></div>
          <div className="pillar reveal"><div className="pillar-num">II</div><div className="pillar-t">Military-Grade Enforcement</div><p className="pillar-p">NoRelapse operates at the AccessibilityService layer â€” below the browser, below the app, at the OS nerve center. You cannot outrun it by switching apps. There is no browser it cannot see.</p></div>
          <div className="pillar reveal"><div className="pillar-num">III</div><div className="pillar-t">Unbreakable Lock</div><p className="pillar-p">Settings protected by a time-locked vault configured when your judgment was clear. Disabling NoRelapse requires a delay you set yourself. The urge lasts minutes. The lock holds longer.</p></div>
        </div>
      </section>

      <div className="divider"></div>

      <section id="experience" style={{background:'var(--black)',padding:'100px 60px'}}>
        <div className="s-lbl">Biological Roadmap</div>
        <h2 className="s-ttl reveal">SCIENCE-BACKED BRAIN HEALING.</h2>
        <div className="experience-grid">
          <div className="experience-card reveal delay-100">
            <h4 style={{fontSize:'2rem',marginBottom:'20px'}}>DAY 14: NEURAL REPAIR</h4>
            <p style={{marginBottom:'30px'}}>Stop counting days. Start tracking brain healing. Roadmap proves your prefrontal cortex is repairing itself from Day 14 onwards.</p>
            <div className="phone-mockup">
              <img src="/images/journey.png" alt="Journey Roadmap" />
            </div>
            <h4>Biological Roadmap</h4>
            <p>Track your brain's recovery through verified milestones. Rebuild neural pathways and reclaim your cognitive sovereignty.</p>
          </div>
          <div className="experience-card reveal delay-200">
            <div className="phone-mockup">
              <img src="/images/arena.png" alt="Challenge Arena" />
            </div>
            <h4>Competitive Arena</h4>
            <p>Join Monk Mode, Daily Quests, and Sigma missions. Earn legendary trophies and climb the global leaderboard through raw discipline.</p>
          </div>
          <div className="experience-card reveal delay-300">
            <div className="phone-mockup">
              <img src="/images/squad.png" alt="Squad Feed" />
            </div>
            <h4>Warrior Community</h4>
            <p>Connect with 12,000+ warriors in real-time. Share victories, track squad streaks, and build collective strength with anonymity preserved.</p>
          </div>
        </div>
      </section>

      <div className="divider"></div>

      <section id="features">
        <div className="s-lbl">Capabilities</div>
        <h2 className="s-ttl reveal">EVERY FEATURE IS A FORTIFICATION.</h2>
        <div className="feat-layout">
          <div className="feat-nav reveal">
            <div className="feat-tab active" data-t="f1"><div className="feat-tab-t">On-Device Processing</div><div className="feat-tab-s">Zero transmission architecture</div></div>
            <div className="feat-tab" data-t="f2"><div className="feat-tab-t">Guardian Shield</div><div className="feat-tab-s">AccessibilityService enforcement</div></div>
            <div className="feat-tab" data-t="f3"><div className="feat-tab-t">AI Counselor</div><div className="feat-tab-s">24/7 on-device mental support</div></div>
            <div className="feat-tab" data-t="f4"><div className="feat-tab-t">Emergency SOS</div><div className="feat-tab-s">Instant crisis response system</div></div>
            <div className="feat-tab" data-t="f5"><div className="feat-tab-t">Challenge Arena</div><div className="feat-tab-s">Compete. Earn. Dominate.</div></div>
          </div>
          <div className="reveal">
            <div className="feat-panel active" id="f1">
              <div className="feat-badge">Privacy Architecture</div>
              <h3 className="feat-panel-t">ZERO-TRANSMISSION PROCESSING</h3>
              <p className="feat-panel-p">NoRelapse analyzes your browsing activity entirely within your device's local memory. Pattern-matching engine, keyword filters, detection logic &mdash; all executes on-chip. Nothing transmitted. Nothing logged remotely. When the session ends, the analysis is purged. Your private struggle belongs to no one but you.</p>
              <div className="feat-spec">ARCHITECTURE: Local-only inference engine. No API calls. No telemetry. No usage logs.</div>
            </div>
            <div className="feat-panel" id="f2">
              <div className="feat-badge">Enforcement Layer</div>
              <h3 className="feat-panel-t">ACCESSIBILITY SERVICE ENFORCEMENT</h3>
              <p className="feat-panel-p">Standard blockers operate inside the browser &mdash; peers to the threat. NoRelapse operates at the AccessibilityService API, one layer beneath every browser on your device. Blocked URLs in Chrome, Firefox, Brave, any private window &mdash; intercepted and terminated. There is no workaround because there is no gap.</p>
              <div className="feat-spec">LAYER: AccessibilityService API. All browsers. Real-time interruption. VPN-resistant.</div>
              <ul className="feat-ul"><li>All Chromium-based browsers covered</li><li>Private / Incognito windows: intercepted</li><li>VPN active: blocked at app layer, not DNS</li><li>Browser switch attempt: blocked before load</li></ul>
              <div className="feature-image-container">
                <img src="/images/dashboard.png" alt="Guardian Shield Status" className="app-image" />
              </div>
            </div>
            <div className="feat-panel" id="f3">
              <div className="feat-badge">Mental Support Layer</div>
              <h3 className="feat-panel-t">AI COUNSELOR</h3>
              <p className="feat-panel-p">24/7 on-device AI support for handling intense urges in real time. When the pressure hits, the AI Counselor is available immediately &mdash; no internet required, no data transmitted. It identifies your risk patterns, helps you understand triggers, and delivers actionable mental frameworks before the urge peaks.</p>
              <div className="feat-spec">PROCESSING: Fully on-device. No messages sent to external servers. No therapy history stored in cloud.</div>
              <div className="feature-image-container">
                <img src="/images/ai_counselor.png" alt="AI Counselor Screen" className="app-image" />
              </div>
            </div>
            <div className="feat-panel" id="f4">
              <div className="feat-badge">Emergency Protocol</div>
              <h3 className="feat-panel-t">EMERGENCY SOS</h3>
              <p className="feat-panel-p">One tap. Instant crisis intervention. When the urge is at its peak and rational thought is at its lowest &mdash; SOS activates a guided emergency protocol. Breathing exercises, accountability check, distraction sequences. Designed to buy the 10-20 minutes the brain needs to exit the danger window.</p>
              <div className="feat-spec">ACTIVATION: Single tap from anywhere in the app. No delay. No confirmation screen. Immediate intervention.</div>
              <div className="feature-image-container">
                <img src="/images/sos.png" alt="Emergency SOS Screen" className="app-image" />
              </div>
            </div>
            <div className="feat-panel" id="f5">
              <div className="feat-badge">Competitive Layer</div>
              <h3 className="feat-panel-t">CHALLENGE ARENA</h3>
              <p className="feat-panel-p">Discipline without accountability is fragile. The Challenge Arena puts your streak against others in structured, time-bound missions &mdash; Monk Mode, Sigma challenges, custom goals. Earn XP, climb the leaderboard, and unlock trophies. Brotherhood forged through shared discipline, not shared weakness.</p>
              <div className="feat-spec">MECHANICS: Global leaderboard. XP system. Mission tiers. Trophy unlocks. Real-time squad standings.</div>
              <div className="feature-image-container">
                <img src="/images/arena.png" alt="Challenge Arena" className="app-image" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="divider"></div>

      <section id="whatsinside">
        <div className="s-lbl">Arsenal</div>
        <h2 className="s-ttl reveal">EVERYTHING INSIDE THE SYSTEM.</h2>
        <div className="spec-grid reveal">
          <div className="spec-card">
            <div className="sc-label">Core Defense</div>
            <div className="sc-title">Guardian Shield</div>
            <p className="sc-text">AccessibilityService enforcement across all browsers and private windows. Operates below app layer &mdash; no gap, no bypass.</p>
          </div>
          <div className="spec-card">
            <div className="sc-label">Mental Support</div>
            <div className="sc-title">AI Counselor</div>
            <p className="sc-text">24/7 on-device AI recovery counselor. No internet required. No messages transmitted. Listens without judgment â€” available the moment you need it.</p>
          </div>
          <div className="spec-card">
            <div className="sc-label">Emergency Protocol</div>
            <div className="sc-title">SOS Mode</div>
            <p className="sc-text">Instant crisis intervention with guided breathing and mental reframing. One tap â€” no delay, no confirmation. Designed to hold 10â€“20 minutes.</p>
          </div>
          <div className="spec-card">
            <div className="sc-label">Competitive Layer</div>
            <div className="sc-title">Challenge Arena</div>
            <p className="sc-text">Monk Mode, Sigma missions, global leaderboard. Earn XP and trophies. Discipline enforced through brotherhood and competition.</p>
          </div>
          <div className="spec-card">
            <div className="sc-label">Progress Tracking</div>
            <div className="sc-title">Journey Roadmap</div>
            <p className="sc-text">Day-by-day biological recovery milestones. Track dopamine reset, neural pathway rebuilding, and cognitive clarity â€” all locally on device.</p>
          </div>
          <div className="spec-card">
            <div className="sc-label">Brotherhood</div>
            <div className="sc-title">Squad Community</div>
            <p className="sc-text">12,400+ anonymous warriors in real-time. Share victories and insights. Collective accountability â€” no names, no profiles, no data exposure.</p>
          </div>
          <div className="spec-card">
            <div className="sc-label">Privacy Guarantee</div>
            <div className="sc-title">Zero Transmission</div>
            <p className="sc-text">100% on-device processing. No account. No email. No cloud sync. No analytics. No server that can be breached, sold, or subpoenaed.</p>
          </div>
          <div className="spec-card">
            <div className="sc-label">Distribution</div>
            <div className="sc-title">Direct APK</div>
            <p className="sc-text">No Play Store. No Google account. No download history. Sideload directly â€” under 60 seconds, zero trace on cloud accounts.</p>
          </div>
        </div>
      </section>


      <section id="proof">
        <div className="s-lbl">Field Reports</div>
        <div className="proof-hdr">
          <h2 className="s-ttl reveal">MEN WHO HELD THE LINE.</h2>
          <div className="proof-count reveal">Verified Users â€” Identity Withheld By Design</div>
        </div>
        <div className="testi-grid">
          <div className="testi reveal"><p className="testi-text">I've been in recovery for three years. Every app I used before had a backdoor I eventually found. NoRelapse was the first one where I reached for the backdoor and there was a wall. That wall held for the first 30 days. After 30 days, I didn't need it anymore.</p><div className="testi-meta"><div className="t-av">M</div><div><div className="t-name">Marcus T.</div><div className="t-det">Software Engineer, 27</div></div><div className="t-sk">247<span>Day Streak</span></div></div></div>
          <div className="testi reveal"><p className="testi-text">What sold me was knowing my data stays on my phone. I wasn't willing to let a company log my entire browsing pattern to sell me a cleaner image of myself. NoRelapse processes everything locally. Nothing leaves the device. That was the dealbreaker for every other app.</p><div className="testi-meta"><div className="t-av">J</div><div><div className="t-name">J. Reinholt</div><div className="t-det">Finance, 31</div></div><div className="t-sk">180<span>Day Streak</span></div></div></div>
          <div className="testi reveal"><p className="testi-text">The Vault Lock is the feature. I set a 2-hour override delay on a Sunday evening. Tuesday at 1 AM the urge hit hard. I went to disable it. 2-hour timer started. I fell asleep before it ended. Woke up and it was over. That is the only thing that has ever worked for me.</p><div className="testi-meta"><div className="t-av">D</div><div><div className="t-name">Dev K.</div><div className="t-det">Medical Student, 24</div></div><div className="t-sk">94<span>Day Streak</span></div></div></div>
        </div>
        <div className="stats-bar">
          <div className="stat-it reveal"><span className="stat-num">380K+</span><span className="stat-lbl">Active Deployments</span></div>
          <div className="stat-it reveal"><span className="stat-num">91%</span><span className="stat-lbl">Maintained 90-Day Streak</span></div>
          <div className="stat-it reveal"><span className="stat-num">0 bytes</span><span className="stat-lbl">Data Ever Transmitted</span></div>
          <div className="stat-it reveal"><span className="stat-num">4.9</span><span className="stat-lbl">Average Rating</span></div>
        </div>
      </section>

      <div className="divider"></div>

      <section id="install" style={{ background: 'var(--deep)', padding: '120px 60px' }}>
        <div className="s-lbl">Deployment Protocol</div>
        <h2 className="s-ttl reveal">MISSION-CRITICAL SETUP</h2>
        <p className="sol-text reveal" style={{ maxWidth: '800px', marginBottom: '60px' }}>
             PLEASE FOLLOW THESE INSTRUCTIONS CAREFULLY TO DEPLOY THE GUARDIAN SHIELD WITHOUT ANY INTERRUPTION. 
             <span className="acc">SKIPPING THESE STEPS MAY PREVENT THE BLOCKER FROM SECURING YOUR DEVICE.</span>
        </p>

        {/* SETUP PHASE 01: PLAY PROTECT */}
        <div className="section-block reveal" style={{ border: 'none', padding: 0 }}>
             <div className="sec-num">Phase 01</div>
             <h3 className="sec-title">BYPASSING GOOGLE RESTRICTIONS</h3>
             <p className="sec-body" style={{ maxWidth: '700px', marginBottom: '48px' }}>
                Google Play Protect flags any direct APK that requests Accessibility permissions. Because NoRelapse operates at a deeper layer for better protection, you must authorize it manually.
             </p>

             <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '60px', marginTop: '60px' }}>
                  <div className="experience-card reveal" style={{ textAlign: 'center' }}>
                       <div className="phone-mockup" style={{ maxWidth: '340px', border: '10px solid var(--iron)', borderRadius: '48px', margin: '0 auto', position: 'relative' }}>
                            <video 
                              src="/videos/walkthrough.mp4" 
                              autoPlay muted loop playsInline 
                              controls={true}
                              style={{ width: '100%', height: 'auto', display: 'block', borderRadius: '38px', background: '#000' }}
                            />
                       </div>
                       <h4 style={{ fontSize: '2.2rem', marginTop: '32px' }}>1. BYPASS PROTOCOL</h4>
                       <p style={{ fontSize: '1.1rem' }}>Open Google Play Store &rarr; Tap Profile &rarr; Play Protect &rarr; Turn OFF **"Scan apps with Play Protect"**. </p>
                  </div>
                  <div className="experience-card reveal" style={{ textAlign: 'center' }}>
                       <div className="phone-mockup" style={{ maxWidth: '340px', border: '10px solid var(--iron)', borderRadius: '48px', margin: '0 auto', position: 'relative' }}>
                            <div style={{ position: 'absolute', top: '10px', left: '0', right: '0', textAlign: 'center', zIndex: 10, pointerEvents: 'none' }}>
                                <span className="sc-label" style={{ background: 'rgba(0,0,0,0.5)', padding: '4px 10px', borderRadius: '4px' }}>OPERATIONAL GUIDE</span>
                            </div>
                            <video 
                              src="/videos/gaurdian.mp4" 
                              autoPlay muted loop playsInline 
                              controls={true}
                              style={{ width: '100%', height: 'auto', display: 'block', borderRadius: '38px', background: '#000' }}
                            />
                       </div>
                       <h4 style={{ fontSize: '2.2rem', marginTop: '32px' }}>2. INITIALIZE SHIELD</h4>
                       <p style={{ fontSize: '1.1rem' }}>Go to Settings &rarr; Accessibility &rarr; NoRelapse &rarr; Toggle ON. Use 'Restricted Settings' if prompted.</p>
                  </div>
             </div>
        </div>

        {/* SETUP PHASE 02: ACCESSIBILITY */}
        <div className="section-block reveal" style={{ border: 'none', padding: 0, marginTop: '140px' }}>
             <div className="sec-num">Phase 02</div>
             <h3 className="sec-title">VITAL: REAL-TIME GUARD</h3>
             <p className="sec-body" style={{ maxWidth: '700px', marginBottom: '48px' }}>
                The Guardian Shield requires Accessibility permission to monitor and block restricted URLs across all browsers. <strong>This is the core of NoRelapse.</strong>
             </p>

             <div className="experience-card reveal" style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}>
                  <div style={{ marginBottom: '20px', padding: '16px', background: 'rgba(212,160,23,0.1)', borderLeft: '3px solid var(--gold)', textAlign: 'left' }}>
                      <p style={{ fontFamily: 'var(--fc)', color: 'var(--gold)', margin: 0 }}><strong>PRO TIP:</strong> If access is denied, go to App Settings &rarr; NoRelapse &rarr; Three Dots &rarr; "Allow Restricted Settings".</p>
                  </div>
             </div>
        </div>

        {/* ACTUAL DOWNLOAD BUTTON */}
         {/* VIRUSTOTAL TRUST SECTION */}
         <div className="reveal" style={{marginTop: '100px', textAlign: 'center'}}>
             <div style={{background: 'rgba(255,255,255,0.03)', padding: '40px', borderRadius: '4px', border: '1px solid var(--iron)', display: 'inline-block', maxWidth: '600px'}}>
                <h3 style={{fontSize: '1.8rem', color: 'var(--white)', marginBottom: '10px'}}>SECURITY CERTIFIED</h3>
                <p style={{fontSize: '1.2rem', color: 'var(--ghost)', marginBottom: '20px'}}>
                   <span style={{color: 'var(--rh)', fontWeight: 'bold'}}>🛡️ 0/72 DETECTIONS:</span> No threats detected by any major security engine.
                </p>
                <div style={{fontFamily: 'monospace', fontSize: '0.9rem', color: 'var(--dim)', wordBreak: 'break-all', marginBottom: '20px'}}>
                   SHA256: A800D0E6...CFEA755D8
                </div>
                <a href="https://www.virustotal.com/gui/file/a800d0e677b3902f488e684e955474f70a08b1d5be74c2eac07d212cfea755d8" target="_blank" rel="noopener" className="btn-g" style={{display: 'block', textDecoration: 'none'}}>View Live VirusTotal Analysis</a>
             </div>
         </div>

         <div style={{ textAlign: 'center', marginTop: '120px', borderTop: '1px solid var(--iron)', paddingTop: '100px' }}>
             <p className="cta-ey reveal">All Systems Ready</p>
             <h2 className="cta-hl reveal" style={{ fontSize: '4rem', marginBottom: '40px' }}>COMMENCE DEPLOYMENT</h2>
             <a href="#" onClick={actualDownload} className="btn-cta" style={{ fontSize: '1.4rem', padding: '24px 72px' }}>
                DOWNLOAD NORELAPSE ELITE
             </a>
             <div className="callout reveal" style={{ maxWidth: '600px', margin: '40px auto 0', borderLeftColor: 'var(--rh)' }}>
                <strong>SYSTEM NOTICE:</strong> After clicking download, your browser will warn: <em>"File might be harmful."</em> You must tap <strong>"Download anyway"</strong> — this is standard for all private APK deployments.
             </div>
        </div>
      </section>

      <div className="divider"></div>

      <section id="cta">
        <div className="cta-glow"></div>
        <div className="cta-ey reveal">Final Orders</div>
        <h2 className="cta-hl reveal">THE LINE HOLDS<br />OR IT DOESN'T.<br /><span style={{color: "var(--rh)"}}>DECIDE NOW.</span></h2>
        <p className="cta-sub reveal">You already know what happens if you don't. You've lived that outcome. NoRelapse will not fix your life. It will hold the line long enough for you to fix it yourself.</p>
        <div className="cta-acts reveal">
          <a href="#" onClick={handleDownloadClick} className="btn-cta">Download APK &mdash; Free</a>
          <div className="apk-note">Android 8.0+ &middot; 6.2 MB &middot; VirusTotal Verified</div>
          <div style={{marginTop: '10px', fontSize: '0.85rem', color: 'var(--ghost)'}}>
              <a href="https://www.virustotal.com/gui/file/a800d0e677b3902f488e684e955474f70a08b1d5be74c2eac07d212cfea755d8" target="_blank" rel="noopener" style={{color: 'var(--white)'}}>🛡️ SHA256: A800D0E6... (Zero Detections)</a>
          </div>
        </div>
        <div className="cta-shields reveal">
          <div className="shield"><div className="sh-dot"></div>Zero Data Transmitted</div>
          <div className="shield"><div className="sh-dot"></div>No Account Required</div>
          <div className="shield"><div className="sh-dot"></div>No Play Store</div>
          <div className="shield"><div className="sh-dot"></div>Open to Audit</div>
        </div>
        <p className="cta-fine reveal">Safe APK &middot; Privacy First &middot; Built for Real Warriors</p>
      </section>
    </>
  );
}

