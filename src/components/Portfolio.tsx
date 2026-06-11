import React, { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';

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
}

export const Portfolio: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>('all');

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
    },
    {
      title: 'Arquitecto Consultation',
      category: 'Full Stack (React + OpenAI)',
      filterTag: 'full-stack',
      image: projectWatch,
    },
    {
      title: 'E-Commerce Website',
      category: 'Full Stack Development',
      filterTag: 'full-stack',
      image: projectFashion,
    },
    {
      title: 'Personal Portfolio Web App',
      category: 'Software Development',
      filterTag: 'software-dev',
      image: projectMarketing,
    },
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
            <div key={idx} className="glass-card project-card">
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
                  <a href="#" className="project-arrow" aria-label={`View ${project.title} project`}>
                    <ArrowUpRight size={20} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
