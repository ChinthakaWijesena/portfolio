import profileImg from '../../assets/profile.jpg';
import { personal } from '../../data/portfolio';
import './About.css';

export function About() {
  return (
    <section id="about">
      <div className="container">
        <div className="about__inner">
          {/* Image */}
          <div className="about__image-col">
            <div className="about__image-frame">
              <div className="about__img-border" aria-hidden="true" />
              <img src={profileImg} alt={personal.name} />
            </div>
            <div className="about__stat-badge">
              <span className="about__stat-badge-icon">💻</span>
              <div className="about__stat-badge-text">
                <strong>3+</strong>
                <span>Years Coding</span>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="about__content">
            <span className="section-label">About Me</span>
            <h2 className="section-title">Crafting Software<br />with Purpose</h2>

            <p className="about__bio">
              I'm <strong>{personal.name}</strong> — a passionate{' '}
              <strong>Full Stack Software Engineer</strong> based in{' '}
              <strong>{personal.location}</strong>. I love turning complex problems
              into clean, scalable solutions. My approach combines engineering rigour
              with a designer's eye for detail, ensuring every product I build is
              both robust and delightful to use.
            </p>

            <div className="about__stats">
              {personal.stats.map((stat) => (
                <div className="about__stat" key={stat.label}>
                  <span className="about__stat-value">{stat.value}</span>
                  <span className="about__stat-label">{stat.label}</span>
                </div>
              ))}
            </div>

            <div className="about__meta">
              <span className="about__meta-chip">
                <span className="icon">📍</span> {personal.location}
              </span>
              <span className="about__meta-chip">
                <span className="icon">✉️</span> {personal.email}
              </span>
              <span className="about__meta-chip">
                <span className="icon">🟢</span> Open to work
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
