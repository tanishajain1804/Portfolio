import React from 'react';
import { ArrowRight, Download, Sparkles } from 'lucide-react';
// We'll import the generated asset image
import avatarImg from '../assets/designer_avatar.jpg';

export const Hero: React.FC = () => {
  return (
    <section
      id="home"
      style={{
        paddingTop: '160px',
        paddingBottom: '20px',
        position: 'relative',
        zIndex: 1,
        overflow: 'hidden',
      }}
    >
      <div className="container">
        {/* Background glow spotlights */}
        <div className="spotlight spotlight-1"></div>
        <div className="spotlight spotlight-2"></div>

        {/* Hero Main Grid */}
        <div className="hero-grid">
          {/* Left Hero Content */}
          <div className="hero-content">
            <div className="badge">
              <span className="badge-dot"></span>
              Available For Opportunities
            </div>
            
            <h1 className="hero-title">
              Hey, I'm <span className="gradient-text">Jason</span>,
              <br />
              <span className="hero-role">UI/UX Designer</span>
              <br />
              Based in <span className="gradient-text">USA.</span>
            </h1>

            <p className="hero-desc">
              Building professional, user-friendly designs that support functionality and boost user engagement. Specializing in high-fidelity prototypes, design systems, and responsive frontends.
            </p>

            <div className="hero-buttons">
              <a href="#contact" className="btn btn-primary">
                Let's Talk
                <ArrowRight size={16} />
              </a>
              <a href="#portfolio" className="btn btn-secondary">
                My Works
              </a>
            </div>
          </div>

          {/* Right Hero Image (Hexagon with animated circles) */}
          <div className="hero-image-area">
            {/* Spinning decorative ring around the hexagon */}
            <div className="spinning-ring"></div>
            
            {/* Hexagon Wrapper */}
            <div className="hexagon-wrapper">
              <div className="hexagon-border">
                <div className="hexagon-inner">
                  <img
                    src={avatarImg}
                    alt="Jason Portrait"
                    className="hexagon-img"
                    onError={(e) => {
                      // Fallback in case image is missing before we generate it
                      (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80';
                    }}
                  />
                </div>
              </div>
            </div>

            {/* Circular spinning Download CV overlay badge */}
            <a href="/jason_cv.pdf" download="Jason_CV.pdf" className="cv-download-badge">
              <div className="cv-badge-inner">
                <Download size={22} className="cv-icon" />
                <svg viewBox="0 0 100 100" className="cv-text-svg">
                  <path
                    id="circlePath"
                    d="M 50, 50 m -35, 0 a 35,35 0 1,1 70,0 a 35,35 0 1,1 -70,0"
                    fill="none"
                  />
                  <text className="cv-text">
                    <textPath href="#circlePath">
                      DOWNLOAD CV • DOWNLOAD CV • 
                    </textPath>
                  </text>
                </svg>
              </div>
            </a>
          </div>
        </div>
      </div>

      {/* Infinite Scrolling Ticker (Marquee) */}
      <div className="marquee-container">
        <div className="marquee-track">
          {/* Group 1 */}
          <div className="marquee-content">
            <div className="marquee-item">
              <Sparkles size={20} className="marquee-star" />
              <span>UI/UX Design</span>
            </div>
            <div className="marquee-item">
              <Sparkles size={20} className="marquee-star" />
              <span>Web Design</span>
            </div>
            <div className="marquee-item">
              <Sparkles size={20} className="marquee-star" />
              <span>App Design</span>
            </div>
            <div className="marquee-item">
              <Sparkles size={20} className="marquee-star" />
              <span>Web Development</span>
            </div>
            <div className="marquee-item">
              <Sparkles size={20} className="marquee-star" />
              <span>Brand Strategy</span>
            </div>
          </div>
          {/* Group 2 (Duplicate for infinite seamless scrolling) */}
          <div className="marquee-content" aria-hidden="true">
            <div className="marquee-item">
              <Sparkles size={20} className="marquee-star" />
              <span>UI/UX Design</span>
            </div>
            <div className="marquee-item">
              <Sparkles size={20} className="marquee-star" />
              <span>Web Design</span>
            </div>
            <div className="marquee-item">
              <Sparkles size={20} className="marquee-star" />
              <span>App Design</span>
            </div>
            <div className="marquee-item">
              <Sparkles size={20} className="marquee-star" />
              <span>Web Development</span>
            </div>
            <div className="marquee-item">
              <Sparkles size={20} className="marquee-star" />
              <span>Brand Strategy</span>
            </div>
          </div>
        </div>
      </div>

      {/* Hero-specific styles */}
      <style>{`
        .hero-grid {
          display: grid;
          grid-template-columns: 1.2fr 0.8fr;
          gap: 60px;
          align-items: center;
        }

        .hero-content {
          text-align: left;
        }

        .hero-title {
          font-size: 64px;
          font-weight: 900;
          line-height: 1.1;
          margin-bottom: 24px;
          letter-spacing: -0.03em;
        }

        .gradient-text {
          background: linear-gradient(135deg, #a78bfa 0%, #c084fc 50%, #818cf8 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        [data-theme='light'] .gradient-text {
          background: linear-gradient(135deg, #6d28d9 0%, #a855f7 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .hero-role {
          background: linear-gradient(135deg, #c084fc 0%, #e879f9 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        [data-theme='light'] .hero-role {
          background: linear-gradient(135deg, #4c1d95 0%, #db2777 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .hero-desc {
          font-size: 18px;
          color: var(--text-secondary);
          margin-bottom: 40px;
          max-width: 540px;
        }

        .hero-buttons {
          display: flex;
          gap: 16px;
        }

        /* Hero Image Layout */
        .hero-image-area {
          position: relative;
          display: flex;
          justify-content: center;
          align-items: center;
          height: 400px;
        }

        .spinning-ring {
          position: absolute;
          width: 380px;
          height: 380px;
          border-radius: 50%;
          border: 1px dashed var(--accent);
          opacity: 0.15;
          animation: spin-clockwise 40s linear infinite;
        }

        @keyframes spin-clockwise {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        /* CV Download Overlay Badge */
        .cv-download-badge {
          position: absolute;
          bottom: 20px;
          left: 10px;
          width: 110px;
          height: 110px;
          border-radius: 50%;
          background: rgba(10, 5, 22, 0.8);
          border: 1px solid var(--border-color);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          box-shadow: 0 10px 25px rgba(0,0,0,0.3);
          z-index: 5;
        }

        [data-theme='light'] .cv-download-badge {
          background: rgba(255, 255, 255, 0.85);
          box-shadow: 0 10px 25px rgba(109, 40, 217, 0.1);
        }

        .cv-download-badge:hover {
          transform: scale(1.08) translateY(-4px);
          border-color: var(--accent);
          box-shadow: 0 15px 30px var(--accent-glow);
        }

        .cv-badge-inner {
          position: relative;
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .cv-icon {
          color: var(--accent-light);
          position: absolute;
          animation: pulse-icon 2s infinite ease-in-out;
        }

        [data-theme='light'] .cv-icon {
          color: var(--accent);
        }

        .cv-text-svg {
          width: 100%;
          height: 100%;
          animation: spin-clockwise 15s linear infinite;
        }

        .cv-text {
          font-family: var(--font-heading);
          font-weight: 700;
          font-size: 10px;
          fill: var(--text-primary);
          letter-spacing: 0.14em;
        }

        @keyframes pulse-icon {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-4px); }
        }

        /* Responsive Hero Design */
        @media (max-width: 992px) {
          .hero-grid {
            grid-template-columns: 1fr;
            gap: 60px;
            text-align: center;
          }
          .hero-content {
            display: flex;
            flex-direction: column;
            align-items: center;
            text-align: center;
          }
          .hero-title {
            font-size: 48px;
          }
          .hero-desc {
            margin-bottom: 32px;
          }
          .hero-image-area {
            order: -1;
            height: 380px;
          }
        }
      `}</style>
    </section>
  );
};
