import React, { useState } from 'react';
import { ArrowUpRight, X, Github } from 'lucide-react';

// Import project mockup assets
import projectFashion from '../assets/project_fashion.jpg';
import projectMarketing from '../assets/project_marketing.jpg';
import projectWatch from '../assets/project_watch.jpg';
import projectSneaker from '../assets/project_sneaker.jpg';

interface Project {
  title: string;
  category: string;
  filterTag: 'full-stack' | 'ai-analytics' | 'software-dev';
  image: string;
  description: string;
  about: string;
  features: string[];
  technologies: string[];
  githubUrl?: string;
  demoUrl?: string;
}

export const Portfolio: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filters = [
    { label: 'All', value: 'all' },
    { label: 'Full Stack', value: 'full-stack' },
    { label: 'AI & Analytics', value: 'ai-analytics' },
    { label: 'Software Dev', value: 'software-dev' },
  ];

  const projects: Project[] = [
    {
      title: 'Virtual Try-On System',
      category: 'AI & Computer Vision',
      filterTag: 'ai-analytics',
      image: projectSneaker,
      description: 'Augmented Reality try-on platform using computer vision and deep learning.',
      about: 'The Virtual Try-On system is an interactive platform that allows users to visualize how different products—such as clothing, accessories, or makeup—would look on them in real-time or through uploaded images. It leverages advanced computer vision, deep learning models, and augmented reality (AR) overlay algorithms to map products seamlessly onto user images or video feeds.',
      features: [
        'Real-time augmented reality (AR) product overlay',
        'Advanced body posture and facial landmark mapping',
        'Supports clothing, accessories, and makeup visualization',
        'Real-time camera feed integration & static image uploads'
      ],
      technologies: ['Python', 'OpenCV', 'Mediapipe', 'Streamlit', 'Deep Learning', 'Git & GitHub'],
      githubUrl: 'https://github.com/tanishajain1804',
      demoUrl: '#'
    },
    {
      title: 'Arquitecto Consultation',
      category: 'Full Stack Web App',
      filterTag: 'full-stack',
      image: projectWatch,
      description: 'Web application connecting users with architects, designers, and painters.',
      about: 'Arquitecto is a comprehensive web portal designed to connect clients directly with professional architects, interior designers, and painters for online consultations. The application features user profile creation, consult bookings, interactive admin dashboards, and an AI-powered chatbot to assist users with design recommendations.',
      features: [
        '3D Photo/Video sharing capability for space visualization',
        'AI-powered consultation chatbot integrated with OpenAI',
        'Dynamic booking calendar and admin dashboards',
        'Image galleries utilizing the Unsplash API'
      ],
      technologies: ['React.js', 'Plain CSS', 'OpenAI API', 'Unsplash API', 'Local Storage', 'Node.js'],
      githubUrl: 'https://github.com/tanishajain1804',
      demoUrl: '#'
    },
    {
      title: 'E-Commerce Website',
      category: 'Full Stack Development',
      filterTag: 'full-stack',
      image: projectFashion,
      description: 'Catalog browsing and shopping cart application built with React.',
      about: 'A fully featured, responsive E-Commerce application. It enables users to browse catalog products, view product specifications, manage their shopping carts dynamically (adding, updating quantities, removing items), and simulates a check-out experience in a clean, modern user interface.',
      features: [
        'Dynamic product catalog with filtering options',
        'Real-time shopping cart calculations and quantities',
        'Persistent cart state using web storage',
        'Fully responsive mobile-first UI design'
      ],
      technologies: ['React.js', 'HTML5', 'Vanilla CSS', 'JavaScript', 'Local Storage'],
      githubUrl: 'https://github.com/tanishajain1804',
      demoUrl: '#'
    },
    {
      title: 'Personal Portfolio Web App',
      category: 'Software Development',
      filterTag: 'software-dev',
      image: projectMarketing,
      description: 'Premium developer portfolio built with React and scroll-spy highlights.',
      about: 'A state-of-the-art personal developer portfolio designed to showcase projects, skills, education, and contact details. Features dynamic spotlights, HSL customized light/dark modes, scrolling specialist marquees, and a fully connected contact form to deliver messages directly to your inbox.',
      features: [
        'Smooth active scroll-spy navigation highlights',
        'Glassmorphic theme toggles (Dark/Light mode)',
        'Serverless Web3Forms contact form integration',
        'Hexagonal clip-path avatar zoom effects'
      ],
      technologies: ['React.js', 'TypeScript', 'Plain CSS', 'Web3Forms', 'Vite', 'Lucide Icons'],
      githubUrl: 'https://github.com/tanishajain1804',
      demoUrl: '#'
    }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(proj => proj.filterTag === activeFilter);

  return (
    <section
      id="projects"
      style={{
        padding: '100px 0',
        position: 'relative',
        zIndex: 1,
      }}
    >
      <div className="container">
        {/* Spotlights */}
        <div className="spotlight spotlight-2" style={{ top: '20%' }}></div>

        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <h4 style={{ color: 'var(--accent-light)', textTransform: 'uppercase', letterSpacing: '0.15em', fontSize: '14px', marginBottom: '12px' }}>
            Projects
          </h4>
          <h2 style={{ fontSize: '38px', fontWeight: 800, maxWidth: '600px', margin: '0 auto' }}>
            Projects that reflect my expertise and vision
          </h2>
        </div>

        {/* Filter Buttons list */}
        <div className="filter-wrapper">
          {filters.map((filter) => (
            <button
              key={filter.value}
              onClick={() => setActiveFilter(filter.value)}
              className={`filter-btn ${activeFilter === filter.value ? 'active' : ''}`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* Projects Card Grid */}
        <div className="project-grid">
          {filteredProjects.map((project, idx) => (
            <div
              key={idx}
              className="glass-card project-card"
              onClick={() => setSelectedProject(project)}
              style={{ cursor: 'pointer' }}
            >
              <div className="project-img-container">
                <img
                  src={project.image}
                  alt={project.title}
                  className="project-img"
                  onError={(e) => {
                    // Fallback to beautiful Unsplash mockups if local assets are missing
                    const fallbacks: Record<string, string> = {
                      'Virtual Try-On System': 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=800&q=80',
                      'Arquitecto Consultation': 'https://images.unsplash.com/photo-1544256718-3bcf237f3974?auto=format&fit=crop&w=800&q=80',
                      'E-Commerce Website': 'https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=800&q=80',
                      'Personal Portfolio Web App': 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
                    };
                    (e.target as HTMLImageElement).src = fallbacks[project.title] || 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=800&q=80';
                  }}
                />
              </div>
              <div className="project-info">
                <span className="project-category">{project.category}</span>
                <div className="project-title-row">
                  <h3 className="project-title">{project.title}</h3>
                  <button
                    className="project-arrow"
                    style={{ background: 'none', border: 'none', cursor: 'pointer' }}
                    aria-label={`View ${project.title} details`}
                  >
                    <ArrowUpRight size={20} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Project Detail Modal Overlay */}
      {selectedProject && (
        <div className="modal-overlay" onClick={() => setSelectedProject(null)}>
          <div className="modal-card glass-card" onClick={(e) => e.stopPropagation()}>
            {/* Close Button */}
            <button className="modal-close" onClick={() => setSelectedProject(null)} aria-label="Close modal">
              <X size={20} />
            </button>

            {/* Modal Scrollable Content Wrapper */}
            <div className="modal-scroll-area">
              <span className="modal-project-category">{selectedProject.category}</span>
              <h3 className="modal-project-title">{selectedProject.title}</h3>
              
              {/* Image Showcase */}
              <div className="modal-img-container">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="modal-img"
                  onError={(e) => {
                    const fallbacks: Record<string, string> = {
                      'Virtual Try-On System': 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=800&q=80',
                      'Arquitecto Consultation': 'https://images.unsplash.com/photo-1544256718-3bcf237f3974?auto=format&fit=crop&w=800&q=80',
                      'E-Commerce Website': 'https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=800&q=80',
                      'Personal Portfolio Web App': 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
                    };
                    (e.target as HTMLImageElement).src = fallbacks[selectedProject.title] || 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=800&q=80';
                  }}
                />
              </div>

              {/* Project Description */}
              <div className="modal-section">
                <h4 className="modal-section-title">About the Project</h4>
                <p className="modal-text">{selectedProject.about}</p>
              </div>

              {/* Key Features */}
              <div className="modal-section">
                <h4 className="modal-section-title">Key Features</h4>
                <ul className="modal-features-list">
                  {selectedProject.features.map((feat, idx) => (
                    <li key={idx} className="modal-feature-item">
                      <span className="bullet-dot"></span>
                      {feat}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Technologies Used */}
              <div className="modal-section">
                <h4 className="modal-section-title">Technologies Used</h4>
                <div className="modal-tech-pills">
                  {selectedProject.technologies.map((tech, idx) => (
                    <span key={idx} className="tech-pill">{tech}</span>
                  ))}
                </div>
              </div>

              {/* External Buttons */}
              <div className="modal-buttons">
                {selectedProject.githubUrl && (
                  <a href={selectedProject.githubUrl} target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
                    <Github size={16} />
                    GitHub Repo
                  </a>
                )}
                {selectedProject.demoUrl && selectedProject.demoUrl !== '#' && (
                  <a href={selectedProject.demoUrl} className="btn btn-primary">
                    Live Demo
                    <ArrowUpRight size={16} />
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* component-specific styles */}
      <style>{`
        /* Modal Styles */
        .modal-overlay {
          position: fixed;
          inset: 0;
          background: rgba(10, 5, 22, 0.7);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          z-index: 1000;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 20px;
          animation: fadeIn 0.3s ease;
        }

        [data-theme='light'] .modal-overlay {
          background: rgba(246, 244, 250, 0.6);
        }

        .modal-card {
          width: 100%;
          max-width: 680px;
          max-height: 90vh;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          position: relative;
          padding: 24px;
          animation: scaleUp 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
          border: 1px solid var(--card-border);
          background: var(--card-bg);
          border-radius: 24px;
        }

        .modal-close {
          position: absolute;
          top: 20px;
          right: 20px;
          width: 36px;
          height: 36px;
          border-radius: 50%;
          border: 1px solid var(--border-color);
          background: var(--bg-primary);
          color: var(--text-primary);
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.2s ease;
          z-index: 10;
        }

        .modal-close:hover {
          background-color: var(--accent);
          border-color: var(--accent);
          color: #ffffff;
          transform: rotate(90deg);
        }

        .modal-scroll-area {
          overflow-y: auto;
          padding-right: 8px;
          text-align: left;
        }

        /* Customize scrollbar in modal */
        .modal-scroll-area::-webkit-scrollbar {
          width: 6px;
        }
        .modal-scroll-area::-webkit-scrollbar-track {
          background: transparent;
        }
        .modal-scroll-area::-webkit-scrollbar-thumb {
          background: var(--border-color);
          border-radius: 3px;
        }

        .modal-project-category {
          font-size: 12px;
          text-transform: uppercase;
          letter-spacing: 0.15em;
          font-weight: 700;
          color: var(--accent-light);
          margin-bottom: 8px;
          display: inline-block;
        }

        [data-theme='light'] .modal-project-category {
          color: var(--accent);
        }

        .modal-project-title {
          font-size: 28px;
          font-weight: 800;
          color: var(--text-primary);
          margin-bottom: 20px;
          line-height: 1.2;
        }

        .modal-img-container {
          width: 100%;
          aspect-ratio: 1.8;
          border-radius: 16px;
          overflow: hidden;
          margin-bottom: 24px;
          border: 1px solid var(--border-color);
          background: var(--bg-secondary);
        }

        .modal-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .modal-section {
          margin-bottom: 24px;
        }

        .modal-section-title {
          font-size: 16px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          color: var(--text-primary);
          margin-bottom: 12px;
        }

        .modal-text {
          font-size: 15px;
          color: var(--text-secondary);
          line-height: 1.7;
        }

        .modal-features-list {
          list-style: none;
          padding: 0;
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .modal-feature-item {
          display: flex;
          align-items: flex-start;
          gap: 12px;
          font-size: 14px;
          color: var(--text-secondary);
          line-height: 1.5;
        }

        .bullet-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background-color: var(--accent-light);
          margin-top: 7px;
          flex-shrink: 0;
        }

        [data-theme='light'] .bullet-dot {
          background-color: var(--accent);
        }

        .modal-tech-pills {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        }

        .tech-pill {
          font-size: 13px;
          font-weight: 600;
          padding: 6px 14px;
          background: var(--pill-bg);
          color: var(--pill-text);
          border: 1px solid rgba(139, 92, 246, 0.15);
          border-radius: 999px;
        }

        .modal-buttons {
          display: flex;
          gap: 12px;
          margin-top: 10px;
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes scaleUp {
          from { transform: scale(0.95); opacity: 0; }
          to { transform: scale(1); opacity: 1; }
        }

        @media (max-width: 576px) {
          .modal-card {
            padding: 16px;
            max-height: 95vh;
          }
          .modal-project-title {
            font-size: 22px;
            padding-right: 32px;
          }
          .modal-buttons {
            flex-direction: column;
            width: 100%;
          }
          .modal-buttons .btn {
            width: 100%;
          }
        }
      `}</style>
    </section>
  );
};
