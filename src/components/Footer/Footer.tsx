import { personal } from '../../data/portfolio';
import './Footer.css';

const NAV_LINKS = [
  { label: 'About',      href: '#about'      },
  { label: 'Skills',     href: '#skills'     },
  { label: 'Projects',   href: '#projects'   },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact',    href: '#contact'    },
];

export function Footer() {
  const year = new Date().getFullYear();

  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="footer" role="contentinfo">
      <div className="container">
        <div className="footer__inner">
          <a href="#hero" className="footer__logo" onClick={(e) => { e.preventDefault(); scrollTo('#hero'); }}>
            CW
          </a>

          <p className="footer__tagline">
            Building beautiful, scalable software — one commit at a time.
          </p>

          <nav className="footer__links" aria-label="Footer navigation">
            {NAV_LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="footer__link"
                onClick={(e) => { e.preventDefault(); scrollTo(l.href); }}
              >
                {l.label}
              </a>
            ))}
          </nav>

          <div className="footer__divider" aria-hidden="true" />

          <div className="footer__bottom">
            <span>© {year} {personal.name}. Made with</span>
            <span className="footer__heart" aria-label="love">♥</span>
            <span>in {personal.location}</span>
          </div>

          <a
            href="#hero"
            className="footer__top-btn"
            aria-label="Back to top"
            onClick={(e) => { e.preventDefault(); scrollTo('#hero'); }}
          >
            ↑
          </a>
        </div>
      </div>
    </footer>
  );
}
