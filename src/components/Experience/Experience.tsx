import { experiences } from '../../data/portfolio';
import './Experience.css';

export function Experience() {
  const work = experiences.filter((e) => e.type === 'work');
  const education = experiences.filter((e) => e.type === 'education');

  return (
    <section id="experience">
      <div className="container">
        <span className="section-label">My Journey</span>
        <h2 className="section-title">Experience &amp; Education</h2>
        <p className="section-subtitle">
          My professional timeline — where I've worked and what I've studied.
        </p>

        <div className="experience__layout">
          {/* Work */}
          <div>
            <p className="experience__col-title">💼 Work</p>
            <div className="timeline" role="list">
              {work.map((item) => (
                <div className="timeline__item" key={item.role + item.company} role="listitem">
                  <div className="timeline__dot" aria-hidden="true" />
                  <div className="timeline__card">
                    <p className="timeline__period">{item.period}</p>
                    <h3 className="timeline__role">{item.role}</h3>
                    <p className="timeline__company">{item.company}</p>
                    <p className="timeline__desc">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <p className="experience__col-title">🎓 Education</p>
            <div className="timeline" role="list">
              {education.map((item) => (
                <div className="timeline__item" key={item.role + item.company} role="listitem">
                  <div className="timeline__dot" aria-hidden="true" />
                  <div className="timeline__card">
                    <p className="timeline__period">{item.period}</p>
                    <h3 className="timeline__role">{item.role}</h3>
                    <p className="timeline__company">{item.company}</p>
                    <p className="timeline__desc">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
