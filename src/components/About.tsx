import React from 'react';
import { Download, CheckCircle, Award, Briefcase } from 'lucide-react';
import avatarImg from '../assets/designer_avatar.jpg';

export const About: React.FC = () => {
  const stats = [
    {
      icon: <Award size={20} />,
      num: '06+',
      label: 'Years of Experience',
    },
    {
      icon: <Briefcase size={20} />,
      num: '150+',
      label: 'Projects Completed',
    },
    {
      icon: <CheckCircle size={20} />,
      num: '100%',
      label: 'Clients Satisfaction',
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
                  alt="Jason Profile Avatar"
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
              I'm a Professional UI/UX Designer, Based in the USA.
            </h2>
            <p className="about-desc">
              I'm a UI/UX Designer passionate about creating user-friendly, intuitive digital experiences. I combine user research, design principles, and creativity to build clean, accessible interfaces that improve engagement and satisfaction.
            </p>
            <p className="about-desc">
              My aim is to deliver effective solutions that align user needs with business goals across web and mobile platforms. I bridge the gap between aesthetics and function, ensuring that design supports the underlying technology.
            </p>

            <a href="/jason_cv.pdf" download="Jason_CV.pdf" className="btn btn-primary" style={{ marginTop: '16px' }}>
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
        }
      `}</style>
    </section>
  );
};
