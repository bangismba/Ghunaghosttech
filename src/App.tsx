import { Routes, Route } from 'react-router-dom';
import Navbar from '@components/Navbar';
import Hero from '@components/Hero';
import Projects from '@components/Projects';
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
    <Routes>
      {/* Public Routes */}
      <Route path="/" element={
        <main>
          <Navbar />
          <Hero />
          <Projects />
          <Services />
          <Founder />
          <Contact />
          <Footer />
        </main>
      } />
      
      {/* Admin Routes */}
      <Route path="/admin" element={<DashboardLayout />}>
        <Route index element={<ProjectsManager />} />
        <Route path="projects" element={<ProjectsManager />} />
        <Route path="messages" element={<MessagesInbox />} />
      </Route>
      
      <Route path="/admin/login" element={<AdminLogin />} />
    </Routes>
  );
}

export default App;