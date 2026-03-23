import React, { useEffect } from 'react';
import { supabase } from '../supabase';


export default function Home() {
  useEffect(() => {
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

  const actualDownload = async (e: React.MouseEvent) => {
    e.preventDefault();
    try {
      const { data } = await supabase.from('app_config').select('warrior_settings').eq('id', 'global').single();
      const latestUrl = data?.warrior_settings?.latest_apk_url;
      if (latestUrl) {
         window.location.href = latestUrl;
         return;
      }
    } catch (err) {
      console.error("Install download failed", err);
    }
    window.location.href = 'https://aiicylzukkkhxcimsycb.supabase.co/storage/v1/object/public/app-releases/NoRelapse-release.apk';
  };

  return (
    <>
      <section id="hero" style={{minHeight:'100vh',display:'flex',flexDirection:'column',justifyContent:'center',position:'relative',padding:'130px 60px 90px',overflow:'hidden'}}>
        <div className="hero-grid"></div>
        <div className="hero-glow-r"></div>
        <div className="hero-glow-g"></div>

        <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:'60px',alignItems:'center',position:'relative',zIndex:1}}>
          <div>
            <div className="hero-ey">Android APK &middot; System-Level Defense Protocol</div>
            <h1 className="hero-hl">
              MASTER<br />YOUR<br />
              <span className="acc">DISCIPLINE.</span><br />
              <span className="dim">RECLAIM</span><br />
              YOUR LIFE.
            </h1>
            <p className="hero-sub">
              The only blocker built for men who have failed every other app. No pastel dashboards. No motivational quotes. System-level enforcement. Zero tolerance. Zero data leaks.
            </p>
            <div className="hero-acts">
              <a href="#" onClick={handleDownloadClick} className="btn-p">Download APK &mdash; Free</a>
              <a href="#problem" className="btn-g">Understand the mission</a>
            </div>
            <div className="hero-trust">
              <div className="hero-trust-item"><strong>100%</strong><span>On-Device Processing</span></div>
              <div className="hero-trust-item"><strong>0 bytes</strong><span>Sent to Any Server</span></div>
              <div className="hero-trust-item"><strong>System</strong><span>Level Enforcement</span></div>
              <div className="hero-trust-item"><strong>380K+</strong><span>Active Deployments</span></div>
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
        <div className="s-lbl">The Problem</div>
        <h2 className="s-ttl reveal">YOU DON'T HAVE A WILLPOWER PROBLEM.<br />YOU HAVE AN INFRASTRUCTURE PROBLEM.</h2>
        <div className="prob-grid">
          <div className="prob-copy reveal">
            <p>You've deleted the apps. You've set screen time limits. You've used the colorful blockers with the cartoon mascots. You've made the promises. You've broken them â€” again, and again, and again. None of it worked because <strong>none of it was built to hold.</strong></p>
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
        <div className="s-lbl">The Solution</div>
        <h2 className="s-ttl reveal">ONE SYSTEM. BUILT TO HOLD THE LINE.</h2>
        <p className="sol-text reveal">NoRelapse is not a tracker. It is not a timer. It is not a friendly reminder. It is a <span className="acc">sovereign defense architecture</span> â€” deployed at the system level, operating in silence, leaving <span className="dim">no gap for negotiation.</span></p>
        <div className="pillars">
          <div className="pillar reveal"><div className="pillar-num">I</div><div className="pillar-t">Sovereign Privacy</div><p className="pillar-p">Every decision NoRelapse makes happens on your device. Browsing behavior processed locally, then discarded. No logs. No analytics. No cloud sync. No server that can be breached or sold.</p></div>
          <div className="pillar reveal"><div className="pillar-num">II</div><div className="pillar-t">Military-Grade Enforcement</div><p className="pillar-p">NoRelapse operates at the AccessibilityService layer â€” below the browser, below the app, at the OS nerve center. You cannot outrun it by switching apps. There is no browser it cannot see.</p></div>
          <div className="pillar reveal"><div className="pillar-num">III</div><div className="pillar-t">Unbreakable Lock</div><p className="pillar-p">Settings protected by a time-locked vault configured when your judgment was clear. Disabling NoRelapse requires a delay you set yourself. The urge lasts minutes. The lock holds longer.</p></div>
        </div>
      </section>

      <div className="divider"></div>

      <section id="experience" style={{background:'var(--black)',padding:'100px 60px'}}>
        <div className="s-lbl">The Interface</div>
        <h2 className="s-ttl reveal">ELITE TOOLS FOR VICTORY.</h2>
        <div className="experience-grid">
          <div className="experience-card reveal delay-100">
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

             <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '60px', marginTop: '60px' }}>
                  <div className="experience-card reveal" style={{ textAlign: 'center' }}>
                       <div className="phone-mockup" style={{ maxWidth: '340px', border: '10px solid var(--iron)', borderRadius: '48px', margin: '0 auto' }}>
                            <img src="/images/onboarding_play_protect_menu_1774281835227.png" alt="Google Play Protect Settings" />
                       </div>
                       <h4 style={{ fontSize: '2.2rem', marginTop: '32px' }}>1. ACCESS PLAY PROTECT</h4>
                       <p style={{ fontSize: '1.1rem' }}>Open Google Play Store &rarr; Tap Profile Icon &rarr; Select <strong>Play Protect</strong>.</p>
                  </div>
                  <div className="experience-card reveal" style={{ textAlign: 'center' }}>
                       <div className="phone-mockup" style={{ maxWidth: '340px', border: '10px solid var(--iron)', borderRadius: '48px', margin: '0 auto' }}>
                            <img src="/images/onboarding_play_protect_toggle_off_1774281859344.png" alt="Disable APK Scanning" />
                       </div>
                       <h4 style={{ fontSize: '2.2rem', marginTop: '32px' }}>2. DISABLE SCANNING</h4>
                       <p style={{ fontSize: '1.1rem' }}>Tap Gear Icon (top right) &rarr; Disable <strong>"Scan apps with Play Protect"</strong> during installation.</p>
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

             <div className="experience-card reveal" style={{ textAlign: 'center' }}>
                  <div className="phone-mockup" style={{ maxWidth: '340px', border: '10px solid var(--iron)', borderRadius: '48px', margin: '0 auto' }}>
                       <img src="/images/onboarding_accessibility_menu_step_1774281884464.png" alt="Enable Accessibility Permission" />
                  </div>
                  <h4 style={{ fontSize: '2.2rem', marginTop: '32px' }}>ACTIVATE SHIELD LAYER</h4>
                  <p style={{ fontSize: '1.1rem', maxWidth: '600px', margin: '16px auto 0' }}>Go to <strong>Settings</strong> &rarr; <strong>Accessibility</strong> &rarr; <strong>Downloaded Apps</strong> &rarr; Toggle <strong>NoRelapse</strong> to ON.</p>
             </div>
        </div>

        {/* ACTUAL DOWNLOAD BUTTON */}
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
          <div className="apk-note">Android 8.0+ &middot; 6.2 MB &middot; No account needed</div>
        </div>
        <div className="cta-shields reveal">
          <div className="shield"><div className="sh-dot"></div>Zero Data Transmitted</div>
          <div className="shield"><div className="sh-dot"></div>No Account Required</div>
          <div className="shield"><div className="sh-dot"></div>No Play Store</div>
          <div className="shield"><div className="sh-dot"></div>Open to Audit</div>
        </div>
        <p className="cta-fine reveal">No email. No cloud. No surveillance. Runs entirely on your device from the moment of installation.</p>
      </section>
    </>
  );
}

