import { useEffect, useRef, useState } from 'react';
import { skills } from '../../data/portfolio';
import './Skills.css';

export function Skills() {
  const sectionRef = useRef<HTMLElement>(null);
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setAnimated(true); },
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" ref={sectionRef}>
      <div className="container">
        <div className="skills__header">
          <span className="section-label">What I Know</span>
          <h2 className="section-title">Skills & Technologies</h2>
          <p className="section-subtitle">
            A curated set of languages, frameworks, and tools I use to build great products.
          </p>
        </div>

        <div className="skills__grid">
          {skills.map((group) => (
            <div className="skills__card" key={group.category}>
              <div className="skills__card-header">
                <span className="skills__card-icon">{group.icon}</span>
                <h3 className="skills__card-title">{group.category}</h3>
              </div>
              <ul className="skills__list">
                {group.items.map((item) => (
                  <li className="skills__item" key={item.name}>
                    <div className="skills__item-meta">
                      <span className="skills__item-name">{item.name}</span>
                      <span className="skills__item-level">{item.level}%</span>
                    </div>
                    <div className="skills__bar-track">
                      <div
                        className={`skills__bar-fill${animated ? ' animate' : ''}`}
                        style={{ width: `${item.level}%` }}
                        role="progressbar"
                        aria-valuenow={item.level}
                        aria-valuemin={0}
                        aria-valuemax={100}
                        aria-label={item.name}
                      />
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
