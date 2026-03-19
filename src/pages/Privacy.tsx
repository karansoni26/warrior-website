import { useEffect } from 'react';

export default function Privacy() {
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

  return (
    <>
      <div className="page-hero">
        <div className="page-hero-grid"></div>
        <div className="page-glow"></div>
        <div className="page-label">Legal &amp; Technical Document</div>
        <h1 className="page-h1">PRIVACY ARCHITECTURE</h1>
        <p className="page-sub">Zero-Knowledge. 100% On-Device. No Exceptions.</p>
      </div>

      <div className="page-body">
        {/* 01 */}
        <div className="section-block reveal">
          <div className="sec-num">01</div>
          <h2 className="sec-title">DIGITAL SOVEREIGNTY</h2>
          <div className="sec-body">
            <p>NoRelapse operates as a sovereign vault. We believe recovery data is the most sensitive information a human can generate — more sensitive than financial data, more sensitive than medical records, because it reveals the exact nature of your private struggle.</p>
            <p>Our architecture was designed around one principle: <strong>we cannot lose what we never hold.</strong></p>
          </div>
          <div className="pullquote">"If we don't own your data, we can't lose it. If we can't see your data, we can't judge it."</div>
          <div className="sec-body">
            <p>This is not a privacy policy designed to satisfy a legal minimum. It is a technical commitment backed by architectural choices that make data collection structurally impossible — not merely prohibited by policy.</p>
          </div>
        </div>

        {/* 02 */}
        <div className="section-block reveal">
          <div className="sec-num">02</div>
          <h2 className="sec-title">TECHNICAL IMPLEMENTATION</h2>
          <div className="sec-body">
            <p>NoRelapse requires two Android permissions to operate. Below is the complete breakdown of what each permission allows, what it does not allow, and exactly how NoRelapse uses it.</p>
          </div>

          <table className="permission-table">
            <thead>
              <tr>
                <th>Permission</th>
                <th>Purpose</th>
                <th>Data Collected</th>
                <th>Transmitted</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>AccessibilityService</td>
                <td>Real-time URL inspection against local blocklist</td>
                <td>Current URL string (in memory only)</td>
                <td className="no">NEVER</td>
              </tr>
              <tr>
                <td>Install Packages</td>
                <td>Secure self-update from this domain only</td>
                <td>None</td>
                <td className="no">NEVER</td>
              </tr>
            </tbody>
          </table>

          <div className="spec-grid">
            <div className="spec-card">
              <div className="sc-label">AccessibilityService</div>
              <div className="sc-title">URL Filtering</div>
              <p className="sc-text">NoRelapse reads the active URL from the browser's window. This string is checked against your local blocklist in memory, then immediately discarded. It is never written to storage. Never transmitted. Never logged.</p>
            </div>
            <div className="spec-card">
              <div className="sc-label">AccessibilityService</div>
              <div className="sc-title">Keyword Interception</div>
              <p className="sc-text">Search terms entered in browser address bars are scanned for trigger keywords before the query executes. This detection runs locally. No search history is recorded or stored anywhere on the device or off it.</p>
            </div>
            <div className="spec-card">
              <div className="sc-label">Install Permission</div>
              <div className="sc-title">Secure Self-Update</div>
              <p className="sc-text">Used only to install signed NoRelapse update packages from this domain. No other apps can be installed through this permission. You can verify the package signature against the public key on this page.</p>
            </div>
            <div className="spec-card">
              <div className="sc-label">No Permission Required</div>
              <div className="sc-title">Everything Else</div>
              <p className="sc-text">NoRelapse does not request access to contacts, camera, microphone, location, SMS, calendar, external storage, or any personal data store. If it is not listed above, NoRelapse cannot access it.</p>
            </div>
          </div>

          <div className="verdict-box reveal">
            <div className="vb-icon">&#8594;</div>
            <div>
              <div className="vb-title">100% On-Device Analysis: Zero Cloud Transmission</div>
              <p className="vb-text">Every analysis, every blocklist check, every streak calculation runs inside the Android application sandbox on your device. There are no API calls to external servers. There is no analytics endpoint. There is no crash reporting service. NoRelapse does not even have a backend server to send data to — by architectural choice.</p>
            </div>
          </div>
        </div>

        {/* 03 */}
        <div className="section-block reveal">
          <div className="sec-num">03</div>
          <h2 className="sec-title">UPDATE PROTOCOL</h2>
          <div className="sec-body">
            <p>NoRelapse is distributed as a direct APK — outside the Google Play ecosystem. This means updates do not happen automatically through the Play Store. Instead, NoRelapse uses the Install Packages permission to deliver signed updates directly from this domain.</p>
            <p><strong>How this works:</strong> When an update is available, NoRelapse downloads the signed binary from <code style={{fontFamily: "var(--fc)", color: "var(--bone)"}}>warrior-website-black.vercel.app</code>, verifies the cryptographic signature against the embedded public key, and installs if valid. If the signature does not match, the update is rejected. This ensures no third party can push a modified binary to your device.</p>
            <p>Updates are not mandatory. You can remain on any version indefinitely. No forced upgrades. No sunset dates for older versions without 90 days advance notice.</p>
          </div>
        </div>

        {/* 04 */}
        <div className="section-block reveal">
          <div className="sec-num">04</div>
          <h2 className="sec-title">THE VAULT LOGIC</h2>
          <div className="sec-body">
            <p>Your streak data, blocklist configuration, Vault Lock settings, and Strike Log are stored in the Android application sandbox using device-specific encryption keys generated at install time. These keys never leave the device.</p>
          </div>

          <div className="spec-grid">
            <div className="spec-card">
              <div className="sc-label">Architecture</div>
              <div className="sc-title">Zero-Knowledge Storage</div>
              <p className="sc-text">We maintain zero servers for your personal recovery data. No account. No sync. No backup to our infrastructure. Your streak belongs to your device — and only your device.</p>
            </div>
            <div className="spec-card">
              <div className="sc-label">Uninstall Protocol</div>
              <div className="sc-title">Complete Device Purge</div>
              <p className="sc-text">Uninstalling NoRelapse initiates an immediate, irreversible purge of the application sandbox and all associated data. No residual files. No ghost data in cloud backups controlled by us, because we have none.</p>
            </div>
          </div>

          <div className="sec-body">
            <p>If you factory reset your device, your NoRelapse data is lost. We cannot recover it. We have no copy. This is the intended behavior. <strong>Sovereignty means your data dies with your device, not with a company breach.</strong></p>
          </div>
        </div>

        {/* 05 */}
        <div className="section-block reveal">
          <div className="sec-num">05</div>
          <h2 className="sec-title">CONTACT &amp; QUESTIONS</h2>
          <div className="sec-body">
            <p>If you have a specific technical question about our privacy implementation that is not answered here, contact us directly. We respond within 48 hours.</p>
            <p style={{marginTop: "16px"}}><strong>Support:</strong> <a href="mailto:soni.110051@gmail.com" style={{color: "var(--rh)", textDecoration: "none", fontFamily: "var(--fc)"}}>soni.110051@gmail.com</a></p>
            <p style={{marginTop: "8px", fontSize: ".85rem", color: "var(--smoke)"}}>Last updated: March 2026 &nbsp;·&nbsp; Sovereign Vault Protocol v1.1</p>
          </div>
        </div>
      </div>
    </>
  );
}
