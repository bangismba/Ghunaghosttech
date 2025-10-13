// src/App.tsx
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Members from './components/Members';
import Services from './components/Services';
import Footer from './components/Footer';
import './index.css';

function App() {
  return (
    <>
        <Navbar />
        <Hero />
        <About />
        <Services />
        <Projects />
        <Members />
        <Contact />
        <Footer />
    </>
  );
}

export default App;
