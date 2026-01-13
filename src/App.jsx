import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import topoBg from './imgs/2761366.jpg';

function App() {
  return (
    <div
      className="min-h-screen text-white selection:bg-sky-400 selection:text-black relative overflow-x-hidden"
      style={{
        backgroundImage: `url(${topoBg})`,
        backgroundRepeat: 'repeat',
        backgroundSize: '150px 150px',
        backgroundColor: 'rgba(15, 23, 42, 0.9)', // Dark overlay
      }}
    >
      {/* Animated grid background */}
      <div className="fixed inset-0 grid-pattern opacity-30 pointer-events-none"></div>
      
      {/* Gradient orbs */}
      <div className="fixed top-0 left-1/4 w-96 h-96 bg-sky-500/20 rounded-full blur-3xl animate-pulse pointer-events-none"></div>
      <div className="fixed bottom-0 right-1/4 w-96 h-96 bg-gray-500/20 rounded-full blur-3xl animate-pulse pointer-events-none" style={{ animationDelay: '2s' }}></div>
      
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
 