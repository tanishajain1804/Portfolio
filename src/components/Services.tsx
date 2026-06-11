import React from 'react';
import { Code, Cpu, BarChart3, Layers, Database, Shield } from 'lucide-react';

export const Services: React.FC = () => {
  const serviceList = [
    {
      icon: <Code size={24} />,
      title: 'Full Stack Development',
      desc: 'Building responsive, end-to-end web applications using React.js, Node.js, and MongoDB.',
    },
    {
      icon: <Cpu size={24} />,
      title: 'AI & Machine Learning',
      desc: 'Designing and deploying intelligent models and smart systems (like Smart Irrigation).',
    },
    {
      icon: <BarChart3 size={24} />,
      title: 'Data Analytics',
      desc: 'Analyzing data trends and presenting insights using Streamlit, Python, and Jupyter Notebooks.',
    },
    {
      icon: <Layers size={24} />,
      title: 'Software Engineering',
      desc: 'Applying algorithms, data structures, and OOP principles to build robust software.',
    },
    {
      icon: <Database size={24} />,
      title: 'Database Management',
      desc: 'Designing and optimizing SQL/NoSQL databases for efficient data storage and retrieval.',
    },
    {
      icon: <Shield size={24} />,
      title: 'Cybersecurity',
      desc: 'Applying essential security principles to protect web apps and systems from vulnerabilities.',
    },
  ];

  return (
    <section
      id="services"
      style={{
        padding: '100px 0',
        position: 'relative',
        zIndex: 1,
      }}
    >
      <div className="container">
        {/* Background Glow */}
        <div className="spotlight spotlight-3" style={{ bottom: '20%' }}></div>

        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <h4 style={{ color: 'var(--accent-light)', textTransform: 'uppercase', letterSpacing: '0.15em', fontSize: '14px', marginBottom: '12px' }}>
            Services
          </h4>
          <h2 style={{ fontSize: '38px', fontWeight: 800 }}>
            My Specialties
          </h2>
        </div>

        {/* Services Grid */}
        <div className="services-grid">
          {serviceList.map((service, idx) => (
            <div key={idx} className="glass-card service-card">
              <div className="service-icon-box">
                {service.icon}
              </div>
              <h3 className="service-card-title">
                {service.title}
              </h3>
              <p className="service-card-desc">
                {service.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
