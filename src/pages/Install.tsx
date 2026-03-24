import React, { useEffect } from 'react';
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
        
        {/* VIDEO TUTORIAL: PHASE 01 */}
        <div className="section-block reveal" id="protect">
          <div className="sec-num">Phase 01</div>
          <h2 className="sec-title">BYPASS GOOGLE RESTRICTIONS</h2>
          <div className="sec-body">
            <p>Google Play Protect marks private APKs as "Unknown." Watch the tutorial below to authorize the Guardian Shield correctly.</p>
          </div>

          <div className="phone-mockup" style={{ maxWidth: '340px', border: '10px solid var(--iron)', borderRadius: '48px', margin: '40px auto 0', position: 'relative' }}>
               <video src="/videos/walkthrough.mp4" autoPlay muted loop playsInline controls style={{ width: '100%', borderRadius: '38px', background: '#000' }} />
          </div>
          <div style={{ textAlign: 'center', marginTop: '24px' }}>
              <p style={{ color: 'var(--ghost)' }}>Open Play Store &rarr; Profile &rarr; Play Protect &rarr; Settings &rarr; Toggle <strong>OFF</strong>.</p>
          </div>
        </div>

        {/* VIDEO TUTORIAL: PHASE 02 */}
        <div className="section-block reveal" id="authorize" style={{ marginTop: '100px' }}>
          <div className="sec-num">Phase 02</div>
          <h2 className="sec-title">INITIALIZE GUARDIAN SHIELD</h2>
          <div className="sec-body">
            <p>The shield requires Accessibility permission to intercept triggers. If your device blocks this, follow the 'Restricted Settings' protocol shown.</p>
          </div>

          <div className="phone-mockup" style={{ maxWidth: '340px', border: '10px solid var(--iron)', borderRadius: '48px', margin: '40px auto 0', position: 'relative' }}>
               <video src="/videos/gaurdian.mp4" autoPlay muted loop playsInline controls style={{ width: '100%', borderRadius: '38px', background: '#000' }} />
          </div>
          <div style={{ textAlign: 'center', marginTop: '24px' }}>
              <p style={{ color: 'var(--ghost)' }}>Settings &rarr; Accessibility &rarr; NoRelapse &rarr; Toggle <strong>ON</strong>.</p>
          </div>
        </div>

        {/* TRUST BADGE */}
        <div className="reveal" style={{ textAlign: 'center', marginTop: '100px', padding: '40px', background: 'rgba(255,255,255,0.03)', border: '1px solid var(--iron)' }}>
            <h3 style={{ color: 'var(--rh)', marginBottom: '10px' }}>🛡️ SECURITY CERTIFIED</h3>
            <p style={{ color: 'var(--ghost)' }}>
                This APK is 100% clean. <a href="https://www.virustotal.com/gui/file/a800d0e677b3902f488e684e955474f70a08b1d5be74c2eac07d212cfea755d8" target="_blank" rel="noopener" style={{ color: 'var(--white)' }}>View VirusTotal Scan Result (0/68 Detections)</a>
            </p>
        </div>

        {/* FINAL DOWNLOAD CTA */}
        <div className="section-block reveal" id="download" style={{ textAlign: 'center', padding: '80px 0' }}>
            <h2 className="sec-title" style={{ fontSize: '3rem' }}>COMMENCE DEPLOYMENT</h2>
            <div className="download-block" style={{ border: '1px solid var(--iron)', background: 'var(--steel)', padding: '40px', justifyContent: 'center', marginTop: '40px' }}>
                <a href="#" onClick={handleDownloadClick} className="btn-dl" style={{ fontSize: '1.2rem', padding: '24px 60px' }}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M12 3v13M6 11l6 6 6-6"/><path d="M3 20h18"/></svg>
                    DOWNLOAD APK NOW
                </a>
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
