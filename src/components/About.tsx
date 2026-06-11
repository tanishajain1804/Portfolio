import React from 'react';
import { Download, CheckCircle, Award, Briefcase } from 'lucide-react';
import avatarImg from '../assets/designer_avatar.jpg';

export const About: React.FC = () => {
  const stats = [
    {
      icon: <Briefcase size={20} />,
      num: '04+',
      label: 'Projects Completed',
    },
    {
      icon: <Award size={20} />,
      num: '04+',
      label: 'Certifications Earned',
    },
    {
      icon: <CheckCircle size={20} />,
      num: '02',
      label: 'Tech Internships Done',
    },
  ];

  return (
    <section
      id="about"
      style={{
        padding: '100px 0',
        position: 'relative',
        zIndex: 1,
      }}
    >
      <div className="container">
        {/* About Grid */}
        <div className="about-grid">
          {/* Left: Round profile picture area */}
          <div className="about-image-area">
            <div className="circle-avatar-wrapper">
              <div className="circle-avatar-ring"></div>
              <div className="circle-avatar-inner">
                <img
                  src={avatarImg}
                  alt="Tanisha Profile Avatar"
                  className="circle-avatar-img"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80';
                  }}
                />
              </div>
            </div>
          </div>

          {/* Right: Bio descriptions */}
          <div className="about-content">
            <h4 style={{ color: 'var(--accent-light)', textTransform: 'uppercase', letterSpacing: '0.1em', fontSize: '14px', marginBottom: '12px' }}>
              About Me
            </h4>
            <h2 className="about-title">
              I'm a Computer Science Engineer, Based in India.
            </h2>
            <p className="about-desc">
              I'm a Computer Science Engineering graduate who enjoys solving problems and building things with code. I have a deep understanding of software systems, algorithms, and system design.
            </p>
            <p className="about-desc">
              I'm comfortable working with Java, Python, and C++, and I love taking on challenges that help me learn and grow. My goal is to apply technical skills to create data-driven, sustainable, and highly efficient digital solutions.
            </p>

            <a href="/tanisha_cv.pdf" download="Tanisha_CV.pdf" className="btn btn-primary" style={{ marginTop: '16px' }}>
              <Download size={16} />
              Download CV
            </a>
          </div>
        </div>

        {/* Stats Grid at the bottom */}
        <div className="stats-grid">
          {stats.map((stat, i) => (
            <div key={i} className="stat-card">
              <div className="stat-icon-wrapper">{stat.icon}</div>
              <div className="stat-num">{stat.num}</div>
              <div className="stat-label">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Detailed Timeline Sections: Internships, Education & Certifications */}
        <div className="timeline-section-wrapper" style={{ marginTop: '80px' }}>
          <div className="timeline-grid">
            {/* Column 1: Experience & Education */}
            <div className="timeline-column">
              <h3 className="timeline-column-title" style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '24px', marginBottom: '24px', color: 'var(--text-primary)' }}>
                <Briefcase size={22} style={{ color: 'var(--accent-light)' }} />
                Education & Experience
              </h3>
              
              <div className="timeline-items">
                {/* Intern 1 */}
                <div className="timeline-card glass-card" style={{ padding: '24px', marginBottom: '20px', borderRadius: '16px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '8px' }}>
                    <h4 style={{ fontSize: '18px', fontWeight: 700 }}>Technical Intern (Full Stack)</h4>
                    <span style={{ fontSize: '12px', fontWeight: 600, color: 'var(--accent-light)', backgroundColor: 'var(--pill-bg)', padding: '4px 10px', borderRadius: '999px' }}>Jul '25 — Aug '25</span>
                  </div>
                  <div style={{ fontSize: '14px', fontWeight: 600, color: 'var(--text-secondary)', marginBottom: '12px' }}>Gyaan Satra</div>
                  <ul style={{ paddingLeft: '18px', fontSize: '14px', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                    <li>Built responsive web applications using HTML, CSS, JavaScript, and React.js.</li>
                    <li>Developed RESTful APIs using Node.js integrated with MongoDB.</li>
                  </ul>
                </div>

                {/* Intern 2 */}
                <div className="timeline-card glass-card" style={{ padding: '24px', marginBottom: '20px', borderRadius: '16px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '8px' }}>
                    <h4 style={{ fontSize: '18px', fontWeight: 700 }}>Project Intern (AI & Data)</h4>
                    <span style={{ fontSize: '12px', fontWeight: 600, color: 'var(--accent-light)', backgroundColor: 'var(--pill-bg)', padding: '4px 10px', borderRadius: '999px' }}>Jul '25 — Aug '25</span>
                  </div>
                  <div style={{ fontSize: '14px', fontWeight: 600, color: 'var(--text-secondary)', marginBottom: '12px' }}>Edunet Foundation</div>
                  <ul style={{ paddingLeft: '18px', fontSize: '14px', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                    <li>Designed, developed, and deployed a Smart Irrigation System using machine learning.</li>
                    <li>Built interactive web apps with Streamlit and managed version control with Git & GitHub.</li>
                  </ul>
                </div>

                {/* Education 1 */}
                <div className="timeline-card glass-card" style={{ padding: '24px', borderRadius: '16px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '8px' }}>
                    <h4 style={{ fontSize: '18px', fontWeight: 700 }}>Bachelor of Engineering</h4>
                    <span style={{ fontSize: '12px', fontWeight: 600, color: 'var(--accent-light)', backgroundColor: 'var(--pill-bg)', padding: '4px 10px', borderRadius: '999px' }}>2022 — 2026</span>
                  </div>
                  <div style={{ fontSize: '14px', fontWeight: 600, color: 'var(--text-secondary)', marginBottom: '12px' }}>Dronacharya Group of Institutions</div>
                  <p style={{ fontSize: '14px', color: 'var(--text-secondary)' }}>
                    Major in Computer Science Engineering. Graduating with solid grounds in system design, databases, OOPs, data structures, and algorithms.
                  </p>
                </div>
              </div>
            </div>

            {/* Column 2: Certifications & Schooling */}
            <div className="timeline-column">
              <h3 className="timeline-column-title" style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '24px', marginBottom: '24px', color: 'var(--text-primary)' }}>
                <Award size={22} style={{ color: 'var(--accent-light)' }} />
                Certifications & Schooling
              </h3>

              <div className="timeline-items">
                {/* Certifications Card */}
                <div className="timeline-card glass-card" style={{ padding: '24px', marginBottom: '20px', borderRadius: '16px' }}>
                  <h4 style={{ fontSize: '18px', fontWeight: 700, marginBottom: '16px' }}>Professional Certifications</h4>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                      <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: 'var(--accent)' }}></div>
                      <div>
                        <div style={{ fontWeight: 600, fontSize: '15px' }}>Data Structures & Algorithms</div>
                        <div style={{ fontSize: '12px', color: 'var(--text-secondary)' }}>Simplilearn</div>
                      </div>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                      <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: 'var(--accent)' }}></div>
                      <div>
                        <div style={{ fontWeight: 600, fontSize: '15px' }}>C Programming Training</div>
                        <div style={{ fontSize: '12px', color: 'var(--text-secondary)' }}>IIT Bombay</div>
                      </div>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                      <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: 'var(--accent)' }}></div>
                      <div>
                        <div style={{ fontWeight: 600, fontSize: '15px' }}>Data Analytics Certification</div>
                        <div style={{ fontSize: '12px', color: 'var(--text-secondary)' }}>Simplilearn</div>
                      </div>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                      <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: 'var(--accent)' }}></div>
                      <div>
                        <div style={{ fontWeight: 600, fontSize: '15px' }}>Cybersecurity Essentials</div>
                        <div style={{ fontSize: '12px', color: 'var(--text-secondary)' }}>Cisco Networking Academy</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Secondary Schooling */}
                <div className="timeline-card glass-card" style={{ padding: '24px', marginBottom: '20px', borderRadius: '16px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '8px' }}>
                    <h4 style={{ fontSize: '18px', fontWeight: 700 }}>Intermediate Schooling</h4>
                    <span style={{ fontSize: '12px', fontWeight: 600, color: 'var(--accent-light)', backgroundColor: 'var(--pill-bg)', padding: '4px 10px', borderRadius: '999px' }}>2020 — 2022</span>
                  </div>
                  <div style={{ fontSize: '14px', fontWeight: 600, color: 'var(--text-secondary)', marginBottom: '8px' }}>St. A.B. R Public School (CBSE)</div>
                </div>

                {/* High Schooling */}
                <div className="timeline-card glass-card" style={{ padding: '24px', borderRadius: '16px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '8px' }}>
                    <h4 style={{ fontSize: '18px', fontWeight: 700 }}>High Schooling</h4>
                    <span style={{ fontSize: '12px', fontWeight: 600, color: 'var(--accent-light)', backgroundColor: 'var(--pill-bg)', padding: '4px 10px', borderRadius: '999px' }}>2018 — 2020</span>
                  </div>
                  <div style={{ fontSize: '14px', fontWeight: 600, color: 'var(--text-secondary)', marginBottom: '8px' }}>St. A.B. R Public School (CBSE)</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* About Section specific styles */}
      <style>{`
        .about-grid {
          display: grid;
          grid-template-columns: 0.9fr 1.1fr;
          gap: 80px;
          align-items: center;
          margin-bottom: 60px;
        }

        .about-image-area {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .about-content {
          text-align: left;
        }

        .about-title {
          font-size: 40px;
          font-weight: 800;
          line-height: 1.2;
          margin-bottom: 20px;
          color: var(--text-primary);
        }

        .about-desc {
          font-size: 16px;
          color: var(--text-secondary);
          margin-bottom: 20px;
          line-height: 1.7;
        }

        /* Stat Icon styles */
        .stat-icon-wrapper {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 44px;
          height: 44px;
          background-color: var(--pill-bg);
          color: var(--accent-light);
          border-radius: 50%;
          margin-bottom: 16px;
        }

        [data-theme='light'] .stat-icon-wrapper {
          color: var(--accent);
        }

        /* Timeline styles */
        .timeline-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 40px;
        }

        .timeline-card {
          border: 1px solid var(--border-color);
          transition: transform var(--transition-speed) ease, border-color var(--transition-speed) ease, box-shadow var(--transition-speed) ease;
        }

        .timeline-card:hover {
          transform: translateY(-4px);
          border-color: var(--accent-light);
          box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1), 0 0 15px var(--accent-glow);
        }

        /* Responsive About Section */
        @media (max-width: 992px) {
          .about-grid {
            grid-template-columns: 1fr;
            gap: 50px;
            text-align: center;
          }
          .about-content {
            display: flex;
            flex-direction: column;
            align-items: center;
            text-align: center;
          }
          .about-title {
            font-size: 32px;
          }
          .circle-avatar-wrapper {
            width: 280px;
            height: 280px;
          }
          .timeline-grid {
            grid-template-columns: 1fr;
            gap: 40px;
          }
        }
      `}</style>
    </section>
  );
};
