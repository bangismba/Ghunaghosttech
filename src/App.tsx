import { Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '@contexts/ThemeContext';
import Navbar from '@components/Navbar';
import Hero from '@components/Hero';
import Projects from '@components/Projects';
import About from '@components/About';
import Services from '@components/Services';
import Founder from '@components/Founder';
import Contact from '@components/Contact';
import Footer from '@components/Footer';
import DashboardLayout from '@components/dashboard/DashboardLayout';
import ProjectsManager from '@components/dashboard/ProjectsManager';
import MessagesInbox from '@components/dashboard/MessagesInbox';
import AdminLogin from '@components/dashboard/AdminLogin';

function App() {
  return (
    <ThemeProvider>
      <Routes>
        <Route path="/" element={
          <main className="min-h-screen bg-[var(--bg-primary)]">
            <Navbar />
            <Hero />
            <About />
            <Projects />
            <Services />
            <Founder />
            <Contact />
            <Footer />
          </main>
        } />
        
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route path="/admin" element={<DashboardLayout />}>
          <Route index element={<ProjectsManager />} />
          <Route path="projects" element={<ProjectsManager />} />
          <Route path="messages" element={<MessagesInbox />} />
        </Route>
      </Routes>
    </ThemeProvider>
  );
}

export default App;