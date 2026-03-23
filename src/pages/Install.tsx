import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { supabase } from '../supabase';

export default function Install() {
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e, i) => {
          if (e.isIntersecting) {
            setTimeout(() => e.target.classList.add('visible'), i * 80);
            obs.unobserve(e.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    document.querySelectorAll('.reveal').forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  const handleDownloadClick = async (e: React.MouseEvent) => {
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
      <div className="page-hero">
        <div className="page-hero-grid"></div>
        <div className="page-glow"></div>
        <div className="page-label">Deployment Manual</div>
        <h1 className="page-h1">INSTALLATION PROTOCOL</h1>
        <p className="page-sub">Establish the Guardian Shield. Direct distribution ensures 100% privacy and full blocking capability.</p>
      </div>

      <div className="page-body">
        
        {/* CRITICAL WARNING BANNER */}
        <div className="section-block reveal" style={{ border: '2px solid var(--rh)', background: 'rgba(224, 32, 32, 0.05)', padding: '40px', borderRadius: '4px', marginBottom: '80px' }}>
             <div style={{ display: 'flex', gap: '20px', alignItems: 'center', marginBottom: '20px' }}>
                <span style={{ fontSize: '2.5rem' }}>⚠️</span>
                <h2 style={{ fontFamily: 'var(--fd)', fontSize: '2.2rem', color: 'var(--white)', letterSpacing: '0.05em', margin: 0 }}>CRITICAL SETUP REQUIRED</h2>
             </div>
             <p style={{ fontFamily: 'var(--fc)', fontSize: '1.2rem', color: 'var(--bone)', lineHeight: 1.6, letterSpacing: '0.02em' }}>
                Please follow the visual instructions below <strong>BEFORE and DURING</strong> installation. Skipping these steps will prevent the Guardian Shield from intercepting triggers and protecting your streak.
             </p>
        </div>

        {/* VISUAL GUIDE 1: PLAY PROTECT */}
        <div className="section-block reveal" id="protect">
          <div className="sec-num">Setup Phase 01</div>
          <h2 className="sec-title">BYPASS GOOGLE RESTRICTIONS</h2>
          <div className="sec-body">
            <p>Google Play Protect marks any non-Store app as "Unknown." To use NoRelapse's advanced URL-blocking, you must allow the installation manually.</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '32px', marginTop: '40px' }}>
             <div className="experience-card">
                <div className="phone-mockup" style={{ maxWidth: '200px', border: '6px solid var(--iron)', borderRadius: '32px' }}>
                   <img src="/images/onboarding_play_protect_menu_1774281835227.png" alt="Play Protect Menu" />
                </div>
                <h4>1. Open Play Protect</h4>
                <p>Open Play Store, tap your profile icon (top-right), and select <strong>Play Protect</strong>.</p>
             </div>
             <div className="experience-card">
                <div className="phone-mockup" style={{ maxWidth: '200px', border: '6px solid var(--iron)', borderRadius: '32px' }}>
                   <img src="/images/onboarding_play_protect_toggle_off_1774281859344.png" alt="Toggle Off" />
                </div>
                <h4>2. Disable Scanning</h4>
                <p>Tap Settings (Gear icon) and turn <strong>OFF</strong> "Scan apps with Play Protect" during install.</p>
             </div>
          </div>
        </div>

        {/* VISUAL GUIDE 2: ACCESSIBILITY */}
        <div className="section-block reveal" id="authorize">
          <div className="sec-num">Setup Phase 02</div>
          <h2 className="sec-title">ACTIVATE REAL-TIME GUARD</h2>
          <div className="sec-body">
            <p>The Guardian Shield needs Permission to see when a restricted URL is about to load. This happens entirely locally on your device.</p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '40px' }}>
             <div className="experience-card" style={{ maxWidth: '400px' }}>
                <div className="phone-mockup" style={{ maxWidth: '200px', margin: '0 auto', border: '6px solid var(--iron)', borderRadius: '32px' }}>
                   <img src="/images/onboarding_accessibility_menu_step_1774281884464.png" alt="Accessibility Guide" />
                </div>
                <h4>Enable Accessibility</h4>
                <p>In your Phone Settings, find <strong>Accessibility</strong> → <strong>Downloaded Apps</strong> → Select <strong>NoRelapse</strong> and toggle it <strong>ON</strong>.</p>
             </div>
          </div>
        </div>

        {/* FINAL DOWNLOAD CTA */}
        <div className="section-block reveal" id="download" style={{ textAlign: 'center', padding: '80px 0' }}>
            <div className="page-label" style={{ justifyContent: 'center' }}>Ready for Deployment</div>
            <h2 className="sec-title" style={{ fontSize: '3.5rem' }}>COMMENCE THE BATTLE</h2>
            <p className="sec-body" style={{ maxWidth: '600px', margin: '0 auto 40px' }}>
                You have reviewed the protocols. The Guardian Shield is ready to be initialized on your device.
            </p>

            <div className="download-block" style={{ border: '1px solid var(--rh)', background: 'var(--steel)', padding: '50px', justifyContent: 'center' }}>
                <div style={{ textAlign: 'center' }}>
                    <div className="db-version" style={{ fontSize: '0.9rem', marginBottom: '10px' }}>Elite Warrior Edition — v1.x</div>
                    <div className="db-name" style={{ fontSize: '2.5rem', marginBottom: '20px' }}>NoRelapse_Elite.apk</div>
                    <a href="#" onClick={handleDownloadClick} className="btn-dl" style={{ fontSize: '1.2rem', padding: '24px 60px', borderRadius: '0' }}>
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M12 3v13M6 11l6 6 6-6"/><path d="M3 20h18"/></svg>
                        DOWNLOAD GUARDIAN SHIELD
                    </a>
                </div>
            </div>

            <div className="callout" style={{ maxWidth: '500px', margin: '40px auto 0' }}>
                <strong>Note:</strong> Android will show a "File might be harmful" warning. Tap <strong>"Download anyway"</strong>. This is standard for direct APKs.
            </div>
        </div>

        {/* SUPPORT */}
        <div className="section-block reveal">
          <div className="sec-num">Need Help?</div>
          <h2 className="sec-title">DIRECT SUPPORT</h2>
          <div className="sec-body">
            <p>If the protocols fail or you encounter manufacturer-specific locks (MIUI, OneUI), contact the developers immediately.</p>
            <p style={{marginTop: "16px"}}><strong>Email:</strong> <a href="mailto:soni.110051@gmail.com" style={{color: "var(--rh)", textDecoration: "none", fontFamily: "var(--fc)"}}>soni.110051@gmail.com</a></p>
          </div>
        </div>

      </div>
    </>
  );
}
