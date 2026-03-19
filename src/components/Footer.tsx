import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer>
      <div className="ft-logo">NO<span>RELAPSE</span></div>
      <ul className="ft-links">
        <li><Link to="/privacy">Privacy Policy</Link></li>
        <li><Link to="/terms">Terms of Service</Link></li>
        <li><Link to="/install">Install Guide</Link></li>
        <li><a href="mailto:soni.110051@gmail.com">Contact</a></li>
      </ul>
      <div className="ft-copy">&copy; 2026 NoRelapse Ecosystem. Reclaim Your Sovereignty.</div>
    </footer>
  );
}
