import { useEffect } from 'react';

export default function Terms() {
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
        <div className="page-label">Legally Binding Agreement</div>
        <h1 className="page-h1">TERMS OF SERVICE AND LIABILITY RELEASE</h1>
        <p className="page-sub">Read carefully. Deploying NoRelapse constitutes full acceptance of the Guardian Shield architecture and its consequences.</p>
        <div className="page-updated">Document Updated: March 2026</div>
      </div>

      <div className="page-body">

        {/* 01 */}
        <div className="section-block reveal">
          <div className="sec-num">01</div>
          <h2 className="sec-title">NATURE OF THE CONTRACT</h2>
          <div className="sec-body">
            <p><strong>1.1 Active Enforcement.</strong> NoRelapse is not passive software. By installing it, you are granting an autonomous software agent (the Guardian Shield) the right to override your immediate decisions, interrupt your device usage, and force you to adhere to limits you configured in the past.</p>
            <p><strong>1.2 The Intentional Constraint.</strong> You understand and accept that features like the "Vault Lock" are specifically designed to restrict your autonomy for a defined period. This is the core utility of the service. You cannot claim the software is "broken" or "malicious" when it performs the exact restriction you instructed it to perform.</p>
          </div>
          <div className="info-box">
            <div className="ib-title">Operational Warning</div>
            <p className="ib-text">Once Vault Lock is engaged, customer support cannot and will not disable it for you. There is no backdoor. Do not request an emergency unlock. You must wait for the timer to expire.</p>
          </div>
        </div>

        {/* 02 */}
        <div className="section-block reveal">
          <div className="sec-num">02</div>
          <h2 className="sec-title">LICENSE TO USE</h2>
          <div className="sec-body">
            <p><strong>2.1 Sovereign Local License.</strong> Your license to use NoRelapse operates entirely on your physical device. The software is provided "as is," without cloud synchronization, user accounts, or active server oversight. You are responsible for maintaining the physical security of the device where it is installed.</p>
            <p><strong>2.2 Permitted Use.</strong> You may use NoRelapse solely for personal self-regulation and device management. You may not:</p>
            <ul className="term-list">
              <li><div className="tl-dot"></div>Reverse-engineer the blocking engine or accessibility intercept layer.</li>
              <li><div className="tl-dot"></div>Install NoRelapse on a device belonging to another adult without their explicit, informed consent.</li>
              <li><div className="tl-dot"></div>Redistribute modified versions of the APK under this name.</li>
            </ul>
          </div>
        </div>

        {/* 03 */}
        <div className="section-block reveal">
          <div className="sec-num">03</div>
          <h2 className="sec-title">ACCESSIBILITY AND PRIVACY COMPACT</h2>
          <div className="sec-body">
            <p><strong>3.1 AccessibilityService Deployment.</strong> To intercept URLs and enforce limits, NoRelapse utilizes the Android AccessibilityService API. By granting this permission, you acknowledge that the app can read text on your screen (specifically, URLs and search terms).</p>
            <p><strong>3.2 The Zero-Transmission Guarantee.</strong> In exchange for this deep system access, we bind ourselves to the Zero-Transmission Guarantee: The software is mathematically and architecturally incapable of transmitting your browsing data, blocklist, or strike history to any external server.</p>
          </div>
          <div className="info-box">
            <div className="ib-title">Our Technical Obligation</div>
            <p className="ib-text">No API calls for telemetry. No crash reporting frameworks that collect screen contents. No third-party analytics trackers. Your data lives and dies in the local SQLite database on your device.</p>
          </div>
        </div>

        {/* 04 */}
        <div className="section-block reveal">
          <div className="sec-num">04</div>
          <h2 className="sec-title">OPERATOR TIER BINDING</h2>
          <div className="sec-body">
            <p><strong>4.1 Subscription Mechanics.</strong> If you choose to deploy the Operator (Premium) tier, it unlocks features like Blackout Mode and Extended Vault Lock. Payments, if processed outwardly, are handled via our designated payment processors (e.g., Razorpay) for transaction security.</p>
            <p><strong>4.2 Local Entitlement.</strong> Because NoRelapse has no user accounts, premium entitlement is verified locally or via secure, anonymous API token that carries no personal identifying information.</p>
            <p><strong>4.3 Uninstalling Does Not Cancel.</strong> Deleting the NoRelapse application from your device does not automatically cancel any active recurring subscriptions. You must cancel through the original payment portal.</p>
          </div>
        </div>

        {/* 05 */}
        <div className="section-block reveal">
          <div className="sec-num">05</div>
          <h2 className="sec-title">LIMITATION OF LIABILITY</h2>
          <div className="sec-body">
            <p><strong>5.1 Extreme Restriction Risks.</strong> Features like Blackout Mode can significantly restrict device access. In an emergency, standard Android dialers (911/112) remain accessible at the OS layer, but other apps will be blocked. You deploy these features strictly at your own risk.</p>
            <p><strong>5.2 Disclaimer of Damages.</strong> To the maximum extent permitted by applicable law, the creator of NoRelapse, its affiliates, and developers shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from:</p>
            <ul className="term-list">
              <li><div className="tl-dot"></div>Your inability to access specific applications or websites during an active restriction period.</li>
              <li><div className="tl-dot"></div>Loss of productivity, business, or communication due to Blackout Mode.</li>
              <li><div className="tl-dot"></div>Any perceived failure of the software to prevent a behavioral relapse.</li>
            </ul>
          </div>
          <div className="pullquote">"The app is the infrastructure. You are the operator. We provide the wall; you choose whether to walk around it. We accept no liability for your behavioral outcomes."</div>
        </div>

        {/* 06 */}
        <div className="section-block reveal">
          <div className="sec-num">06</div>
          <h2 className="sec-title">FINAL NOTICES</h2>
          <div className="sec-body">
            <p><strong>6.1 Modifications.</strong> We reserve the right to modify these terms. Continued use of the updated APK implies acceptance.</p>
            <p><strong>6.2 Jurisdiction.</strong> This agreement shall be governed by the laws applicable to the developer's registered jurisdiction, without regard to conflict of law principles.</p>
            <p style={{marginTop: "24px"}}><strong>Developer Contact:</strong> <a href="mailto:soni.110051@gmail.com" style={{color: "var(--rh)", textDecoration: "none", fontFamily: "var(--fc)", letterSpacing: ".05em"}}>soni.110051@gmail.com</a></p>
          </div>
        </div>

      </div>
    </>
  );
}
