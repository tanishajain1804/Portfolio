import { ThemeProvider } from './components/ThemeContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Services } from './components/Services';
import { Portfolio } from './components/Portfolio';
import { Footer } from './components/Footer';

function App() {
  return (
    <ThemeProvider>
      <div className="app-layout" style={{ position: 'relative', minHeight: '100vh' }}>
        {/* Global layout background spotlights */}
        <div className="spotlight-wrapper">
          <div className="spotlight spotlight-1"></div>
          <div className="spotlight spotlight-2"></div>
          <div className="spotlight spotlight-3"></div>
        </div>

        {/* Section Assembly */}
        <Navbar />
        <main>
          <Hero />
          <About />
          <Services />
          <Portfolio />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
