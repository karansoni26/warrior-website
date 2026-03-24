import { Link, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import React from 'react';

export default function Navbar() {
  const { pathname } = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu on route change
  useEffect(() => { setMenuOpen(false); }, [pathname]);

  const handleDownloadClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setMenuOpen(false);
    
    if (pathname === '/') {
      const section = document.getElementById('install');
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
        return;
      }
    }
    window.location.href = '/#install';
  };

  return (
    <>
      <nav style={{ borderBottomColor: scrolled ? 'rgba(58,58,74,.4)' : 'rgba(58,58,74,.2)' }}>
        <div className="nav-left">
          <Link to="/" className="nav-logo">NO<span>RELAPSE</span></Link>
          <ul className="nav-links">
            <li><Link to="/" className={pathname === '/' ? 'active' : ''}>Home</Link></li>
            <li><Link to="/install" className={pathname === '/install' ? 'active' : ''}>Setup Guide</Link></li>
            <li><Link to="/blog" className={pathname.startsWith('/blog') ? 'active' : ''}>Handbook</Link></li>
            <li><Link to="/privacy" className={pathname === '/privacy' ? 'active' : ''}>Privacy</Link></li>
            <li><a href="mailto:soni.110051@gmail.com">Support</a></li>
          </ul>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <a href="#" onClick={handleDownloadClick} className="nav-cta">Get APK</a>
          <button
            className="nav-hamburger"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span className={menuOpen ? 'hb-line open' : 'hb-line'}></span>
            <span className={menuOpen ? 'hb-line open' : 'hb-line'}></span>
            <span className={menuOpen ? 'hb-line open' : 'hb-line'}></span>
          </button>
        </div>
      </nav>

      {/* Mobile dropdown menu */}
      <div className={menuOpen ? 'mobile-menu open' : 'mobile-menu'}>
        <Link to="/" className={pathname === '/' ? 'active' : ''} onClick={() => setMenuOpen(false)}>Home</Link>
        <Link to="/install" className={pathname === '/install' ? 'active' : ''} onClick={() => setMenuOpen(false)}>Setup Guide</Link>
        <Link to="/blog" className={pathname.startsWith('/blog') ? 'active' : ''} onClick={() => setMenuOpen(false)}>Handbook</Link>
        <Link to="/privacy" className={pathname === '/privacy' ? 'active' : ''} onClick={() => setMenuOpen(false)}>Privacy</Link>
        <a href="mailto:soni.110051@gmail.com" onClick={() => setMenuOpen(false)}>Support</a>
        <a href="#" onClick={handleDownloadClick} className="mobile-menu-cta">Download APK</a>
      </div>
    </>
  );
}
