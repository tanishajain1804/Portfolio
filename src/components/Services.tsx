import React from 'react';
import { Layers, Smartphone, Monitor, Code, Lightbulb, Search } from 'lucide-react';

export const Services: React.FC = () => {
  const serviceList = [
    {
      icon: <Layers size={24} />,
      title: 'UI/UX Design',
      desc: 'Creating clean, intuitive UI/UX designs that improve usability and enhance user engagement.',
    },
    {
      icon: <Smartphone size={24} />,
      title: 'Mobile App Design',
      desc: 'Designing seamless, user-friendly mobile apps that deliver engaging and intuitive experiences.',
    },
    {
      icon: <Monitor size={24} />,
      title: 'Website Design',
      desc: 'Creating clean, responsive websites that offer intuitive navigation and enhance user experience.',
    },
    {
      icon: <Code size={24} />,
      title: 'Web Development',
      desc: 'Building fast, reliable websites with clean code that deliver smooth, user-friendly experiences.',
    },
    {
      icon: <Lightbulb size={24} />,
      title: 'Brand Strategy',
      desc: 'Developing clear brand strategies that connect with audiences and drive lasting business growth.',
    },
    {
      icon: <Search size={24} />,
      title: 'SEO & Marketing',
      desc: 'Optimizing online presence to boost visibility, attract customers, and grow your business effectively.',
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
