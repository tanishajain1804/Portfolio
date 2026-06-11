import React, { useState, useEffect } from 'react';
import { useTheme } from './ThemeContext';
import { Sun, Moon, Menu, X, Sparkles } from 'lucide-react';

export const Navbar: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  // Monitor scrolling to add a border/opacity to navbar and detect active section (Scroll Spy)
  useEffect(() => {
    const handleScroll = () => {
      // 1. Navbar scrolled style
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // 2. Active Section detection
      const scrollPosition = window.scrollY + 120; // Offset for header height + padding
      const isAtBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 100;
      
      if (isAtBottom) {
        setActiveSection('services');
        return;
      }
      
      const sections = ['home', 'about', 'projects', 'services'];
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el) {
          if (scrollPosition >= el.offsetTop) {
            setActiveSection(sections[i]);
            break;
          }
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    // Initial call to set active section
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'HOME', href: '#home' },
    { label: 'ABOUT', href: '#about' },
    { label: 'PROJECTS', href: '#projects' },
    { label: 'SERVICES', href: '#services' },
  ];

  return (
    <nav
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        zIndex: 100,
        backgroundColor: isScrolled ? 'var(--nav-bg)' : 'transparent',
        borderBottom: isScrolled ? '1px solid var(--nav-border)' : '1px solid transparent',
        backdropFilter: isScrolled ? 'blur(16px)' : 'none',
        WebkitBackdropFilter: isScrolled ? 'blur(16px)' : 'none',
        transition: 'all 0.3s ease',
        padding: isScrolled ? '16px 0' : '24px 0',
      }}
    >
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        {/* Brand Logo */}
        <a href="#home" style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '24px', fontWeight: 800, fontFamily: 'var(--font-heading)' }}>
          <Sparkles size={20} style={{ color: 'var(--accent)' }} />
          Tanisha<span style={{ color: 'var(--accent)' }}>.</span>
        </a>

        {/* Desktop Navigation Link items */}
        <div
          style={{
            alignItems: 'center',
            gap: '8px',
            backgroundColor: 'rgba(255, 255, 255, 0.03)',
            border: '1px solid var(--border-color)',
            borderRadius: '9999px',
            padding: '4px 6px',
            display: 'none',
          }}
          className="desktop-nav-links"
        >
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              style={{
                fontSize: '13px',
                fontWeight: 600,
                letterSpacing: '0.05em',
                padding: '10px 20px',
                borderRadius: '9999px',
                transition: 'all 0.3s ease',
              }}
              className={`nav-item-link ${activeSection === link.href.substring(1) ? 'active' : ''}`}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Action Controls & Theme Toggle */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }} className="nav-controls">
          <button onClick={toggleTheme} className="theme-btn" aria-label="Toggle Theme">
            {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
          </button>
          
          <a href="#contact" className="btn btn-primary" style={{ padding: '10px 22px', fontSize: '14px', display: 'none' }} id="desktop-hire-btn">
            Hire Me
          </a>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            style={{
              background: 'none',
              border: 'none',
              color: 'var(--text-primary)',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
            className="mobile-menu-trigger"
            aria-label="Toggle Mobile Menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown overlay */}
      {isMobileMenuOpen && (
        <div
          style={{
            position: 'absolute',
            top: '100%',
            left: 0,
            width: '100%',
            backgroundColor: 'var(--bg-secondary)',
            borderBottom: '1px solid var(--border-color)',
            padding: '24px',
            display: 'flex',
            flexDirection: 'column',
            gap: '16px',
            boxShadow: '0 10px 20px rgba(0,0,0,0.1)',
            zIndex: 99,
          }}
        >
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              style={{
                fontSize: '16px',
                fontWeight: 600,
                padding: '8px 0',
                borderBottom: '1px solid rgba(255,255,255,0.05)',
                color: activeSection === link.href.substring(1)
                  ? (theme === 'light' ? 'var(--accent)' : 'var(--accent-light)')
                  : 'var(--text-primary)',
                transition: 'color 0.2s ease',
              }}
            >
              {link.label}
            </a>
          ))}
          <a href="#contact" onClick={() => setIsMobileMenuOpen(false)} className="btn btn-primary" style={{ marginTop: '12px', width: '100%' }}>
            Hire Me
          </a>
        </div>
      )}

      {/* Responsive Styles Injection */}
      <style>{`
        @media (min-width: 768px) {
          .desktop-nav-links {
            display: flex !important;
          }
          #desktop-hire-btn {
            display: inline-flex !important;
          }
          .mobile-menu-trigger {
            display: none !important;
          }
        }
        .nav-item-link {
          color: var(--text-secondary);
        }
        .nav-item-link:hover, .nav-item-link:active, .nav-item-link.active {
          color: var(--bg-primary) !important;
          background-color: var(--text-primary) !important;
          box-shadow: 0 4px 12px var(--accent-glow);
        }
      `}</style>
    </nav>
  );
};
