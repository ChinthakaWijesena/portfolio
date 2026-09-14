import { useState, useEffect } from 'react';
import { useScrollSpy } from '../../hooks/useScrollSpy';
import './Navbar.css';

const NAV_LINKS = [
  { label: 'About',      href: '#about'      },
  { label: 'Skills',     href: '#skills'     },
  { label: 'Projects',   href: '#projects'   },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact',    href: '#contact'    },
];

const SECTION_IDS = NAV_LINKS.map((l) => l.href.replace('#', ''));

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const activeId = useScrollSpy(SECTION_IDS);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <nav className={`navbar${scrolled ? ' scrolled' : ''}`} role="navigation" aria-label="Main navigation">
        <div className="navbar__inner">
          <a href="#hero" className="navbar__logo" onClick={() => handleLinkClick('#hero')}>
            CW
          </a>

          <div className="navbar__links" role="list">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                role="listitem"
                className={`navbar__link${activeId === link.href.replace('#', '') ? ' active' : ''}`}
                onClick={(e) => { e.preventDefault(); handleLinkClick(link.href); }}
              >
                {link.label}
              </a>
            ))}
          </div>

          <a
            href="#contact"
            className="navbar__cta"
            onClick={(e) => { e.preventDefault(); handleLinkClick('#contact'); }}
          >
            Hire Me
          </a>

          <button
            className={`navbar__burger${menuOpen ? ' open' : ''}`}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((o) => !o)}
          >
            <span /><span /><span />
          </button>
        </div>
      </nav>

      {/* Mobile dropdown */}
      <div className={`navbar__mobile${menuOpen ? ' open' : ''}`} aria-hidden={!menuOpen}>
        {NAV_LINKS.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className={`navbar__link${activeId === link.href.replace('#', '') ? ' active' : ''}`}
            onClick={(e) => { e.preventDefault(); handleLinkClick(link.href); }}
          >
            {link.label}
          </a>
        ))}
        <a
          href="#contact"
          className="navbar__cta"
          onClick={(e) => { e.preventDefault(); handleLinkClick('#contact'); }}
        >
          Hire Me
        </a>
      </div>
    </>
  );
}
