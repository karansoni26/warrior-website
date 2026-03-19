import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

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

  const handleDownloadClick = (e: React.MouseEvent) => {
    e.preventDefault();
    window.location.href = 'https://aiicylzukkkhxcimsycb.supabase.co/storage/v1/object/public/app-releases/warrior-release-v1773860079307.apk';
  };

  return (
    <>
      <div className="page-hero">
        <div className="page-hero-grid"></div>
        <div className="page-glow"></div>
        <div className="page-label">Deployment Manual</div>
        <h1 className="page-h1">INSTALLATION PROTOCOL</h1>
        <p className="page-sub">Direct distribution preserves the Guardian Shield's full capability. Three steps. Under five minutes.</p>
      </div>

      <div className="step-tracker">
        <a href="#download" className="st-step active"><span className="st-n">01</span><span className="st-label">Download</span></a>
        <a href="#authorize" className="st-step"><span className="st-n">02</span><span className="st-label">Authorize</span></a>
        <a href="#protect" className="st-step"><span className="st-n">03</span><span className="st-label">Protect</span></a>
      </div>

      <div className="page-body">

        {/* WHY APK */}
        <div className="section-block reveal">
          <div className="sec-num">Why Direct APK?</div>
          <h2 className="sec-title">NO PLAY STORE. BY DESIGN.</h2>
          <div className="sec-body">
            <p>Google Play restricts applications that use deep AccessibilityService permissions — the exact layer that makes NoRelapse effective. Distribution through Play Store would require gutting the Guardian Shield to satisfy marketplace policies.</p>
            <p>Distributing directly means <strong>NoRelapse operates at full capability</strong>. Your install is not associated with your Google account. Google does not know this app is on your device. The install is not tracked, logged, or reportable by any third party.</p>
            <p>This is an architectural choice made in your interest, not ours.</p>
          </div>
          <div className="callout"><strong>Security note:</strong> Only download the NoRelapse APK from this domain. Verify the SHA-256 checksum listed on the download card against the file you receive before installing.</div>
        </div>

        {/* STEP 01 */}
        <div className="section-block reveal" id="download">
          <div className="sec-num">Step 01</div>
          <h2 className="sec-title">SECURE DOWNLOAD</h2>

          <div className="download-block">
            <div className="db-info">
              <div className="db-version">Latest Release — v1.1</div>
              <div className="db-name">NoRelapse_v1.1.apk</div>
              <div className="db-meta">Android 6.0+ &nbsp;·&nbsp; ~6.2 MB &nbsp;·&nbsp; Signed &amp; Verified</div>
            </div>
            <a href="#" onClick={handleDownloadClick} className="btn-dl">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M12 3v13M6 11l6 6 6-6"/><path d="M3 20h18"/></svg>
              Download APK
            </a>
          </div>

          <div className="sec-body">
            <p>Your browser will display a security warning when downloading the APK. This is a <strong>standard Android browser notice for all direct APK files</strong> — it does not indicate the file is harmful. It indicates the file did not come through the Play Store.</p>
          </div>

          <div className="warning-mock">
            <div className="wm-icon">⚠️</div>
            <div>
              <div className="wm-title">System Warning</div>
              <p className="wm-body">"File might be harmful. Do you want to download NoRelapse_v1.1.apk anyway?"</p>
              <div className="wm-actions">
                <div className="wm-btn">Cancel</div>
                <div className="wm-btn primary">Download anyway</div>
              </div>
            </div>
          </div>

          <div className="callout"><strong>Correct action:</strong> Tap "Download anyway." This warning fires for every APK distributed outside Play Store — including major apps like Telegram, Signal Beta, and browser updates from manufacturers. It is not specific to NoRelapse.</div>
        </div>

        {/* STEP 02 */}
        <div className="section-block reveal" id="authorize">
          <div className="sec-num">Step 02</div>
          <h2 className="sec-title">SYSTEM AUTHORIZATION</h2>
          <div className="sec-body">
            <p>Android requires one-time authorization to install apps from outside the Play Store. This is a security gate that ensures <strong>you remain the authority</strong> over what installs on your device.</p>
          </div>

          <div className="steps-visual">
            <div className="sv-row">
              <div className="sv-num">1</div>
              <div className="sv-content">
                <div className="sv-title">Open the downloaded APK file</div>
                <p className="sv-text">Find NoRelapse_v1.1.apk in your Downloads folder (or in the browser's download notification) and tap it.</p>
              </div>
            </div>
            <div className="sv-row">
              <div className="sv-num">2</div>
              <div className="sv-content">
                <div className="sv-title">Enable "Install unknown apps" for your browser</div>
                <p className="sv-text">Android will prompt: "Allow from this source?" Toggle it on for the browser you used to download. This one-time permission allows the install. You can revoke it after.</p>
              </div>
            </div>
            <div className="sv-row">
              <div className="sv-num">3</div>
              <div className="sv-content">
                <div className="sv-title">Confirm the install</div>
                <p className="sv-text">Tap "Install" on the Android install screen. The Guardian Shield will be live within seconds.</p>
              </div>
            </div>
            <div className="sv-row">
              <div className="sv-num">4</div>
              <div className="sv-content">
                <div className="sv-title">Revoke "Install unknown apps" permission</div>
                <p className="sv-text">Settings → Apps → [Your Browser] → Install unknown apps → Disable. NoRelapse handles its own updates — you don't need this permission enabled permanently.</p>
              </div>
            </div>
          </div>
        </div>

        {/* STEP 03 */}
        <div className="section-block reveal" id="protect">
          <div className="sec-num">Step 03 — Common Issue</div>
          <h2 className="sec-title">PLAY PROTECT OVERRIDE</h2>
          <div className="sec-body">
            <p>Google Play Protect may flag NoRelapse during install due to its AccessibilityService permissions. Play Protect's algorithm flags any non-Play-Store app requesting this permission level — regardless of intent or safety.</p>
            <p><strong>NoRelapse is flagged because it is powerful — not because it is unsafe.</strong></p>
          </div>

          <div className="warning-mock">
            <div className="wm-icon">🚫</div>
            <div>
              <div className="wm-title">Blocked by Play Protect</div>
              <p className="wm-body">"This app can collect data that could be used to track you."</p>
              <div className="wm-actions">
                <div className="wm-btn">More details</div>
                <div className="wm-btn primary">Install anyway</div>
              </div>
            </div>
          </div>

          <div className="callout"><strong>Correct action:</strong> Tap "More details" then "Install anyway." This warning appears because AccessibilityService <em>can</em> be misused by malicious apps. NoRelapse uses it solely for URL interception — all on-device. Zero data leaves your phone. You can verify this claim against our <Link to="/privacy" style={{color: "var(--rh)", textDecoration: "none"}}>Privacy Architecture page</Link>.</div>

          <div className="sec-body" style={{marginTop: "22px"}}>
            <p>After install is complete, NoRelapse will prompt you to <strong>grant AccessibilityService permission</strong>. This is the core of the Guardian Shield. Without it, URL-level blocking cannot function. Follow the on-screen instructions — NoRelapse guides you through the exact path in Android Settings.</p>
          </div>
        </div>

        {/* SUPPORT */}
        <div className="section-block reveal">
          <div className="sec-num">Need Help?</div>
          <h2 className="sec-title">INSTALLATION SUPPORT</h2>
          <div className="sec-body">
            <p>If you encounter any issue not covered by this guide — device-specific behavior, manufacturer security restrictions (MIUI, One UI, ColorOS), or unexpected errors — contact support directly.</p>
            <p style={{marginTop: "16px"}}><strong>Email:</strong> <a href="mailto:soni.110051@gmail.com" style={{color: "var(--rh)", textDecoration: "none", fontFamily: "var(--fc)"}}>soni.110051@gmail.com</a></p>
            <p style={{marginTop: "8px", color: "var(--smoke)"}}>Response within 24–48 hours. Include your Android version and device manufacturer for faster resolution.</p>
          </div>
        </div>

      </div>
    </>
  );
}
