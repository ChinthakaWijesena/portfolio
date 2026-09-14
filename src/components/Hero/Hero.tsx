import { useState, useEffect } from 'react';
import profileImg from '../../assets/profile.jpg';
import { personal } from '../../data/portfolio';
import './Hero.css';

const TITLES = [
  'Full Stack Software Engineer',
  'React & TypeScript Specialist',
  'Backend API Developer',
  'Cloud & DevOps Enthusiast',
];

const TECH_STACK = ['React', 'TypeScript', 'Node.js', 'Python', 'AWS', 'Docker', 'PostgreSQL', 'Next.js'];

export function Hero() {
  const [titleIndex, setTitleIndex] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const target = TITLES[titleIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (!deleting && displayed.length < target.length) {
      timeout = setTimeout(() => setDisplayed(target.slice(0, displayed.length + 1)), 60);
    } else if (!deleting && displayed.length === target.length) {
      timeout = setTimeout(() => setDeleting(true), 2400);
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 30);
    } else if (deleting && displayed.length === 0) {
      setDeleting(false);
      setTitleIndex((i) => (i + 1) % TITLES.length);
    }

    return () => clearTimeout(timeout);
  }, [displayed, deleting, titleIndex]);

  return (
    <section id="hero" className="hero">
      <div className="hero__bg" aria-hidden="true" />
      <div className="hero__grid" aria-hidden="true" />

      <div className="hero__inner">
        {/* Text content */}
        <div className="hero__text">
          <div className="hero__badge">
            <span className="hero__badge-dot" />
            Available for opportunities
          </div>

          <h1 className="hero__name">
            Hi, I'm <span>{personal.name.split(' ')[0]}</span>
            <br />{personal.name.split(' ').slice(1).join(' ')}
          </h1>

          <p className="hero__title">
            {displayed}
            <span className="cursor" aria-hidden="true" />
          </p>

          <p className="hero__tagline">{personal.tagline}</p>

          <div className="hero__actions">
            <a href="#projects" className="btn btn-primary"
              onClick={(e) => { e.preventDefault(); document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' }); }}>
              View Projects →
            </a>
            <a href={personal.resumeUrl} className="btn btn-outline" download>
              Download CV ↓
            </a>
          </div>

          <div className="hero__tech" aria-label="Tech stack">
            {TECH_STACK.map((t) => (
              <span key={t} className="hero__tech-item">{t}</span>
            ))}
          </div>
        </div>

        {/* Avatar */}
        <div className="hero__image" aria-hidden="true">
          <div className="hero__avatar-wrap">
            <div className="hero__avatar-ring" />
            <div className="hero__avatar-dashed" />
            <div className="hero__orb hero__orb--1" />
            <div className="hero__orb hero__orb--2" />
            <img
              src={profileImg}
              alt={`${personal.name} profile`}
              className="hero__avatar-img"
            />
          </div>
        </div>
      </div>

      {/* Scroll hint */}
      <div className="hero__scroll" aria-hidden="true">
        <span>Scroll</span>
        <div className="hero__scroll-line" />
      </div>
    </section>
  );
}
