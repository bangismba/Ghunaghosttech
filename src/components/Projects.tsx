import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { db } from '@lib/firebase/config';
import { collection, getDocs, DocumentData, QueryDocumentSnapshot } from 'firebase/firestore';
import { ArrowUpRight, Calendar, Sparkles } from 'lucide-react';

interface Project {
  id: string;
  title: string;
  description: string;
  tech: string[];
  link: string;
  image: string;
  category: string;
  order: number;
  status: string;
  featured: boolean;
}

export default function Projects() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        setLoading(true);
        setError(null);
        
        if (!db) {
          throw new Error('Firebase not initialized');
        }
        
        const projectsRef = collection(db, 'projects');
        const snapshot = await getDocs(projectsRef);
        
        const allProjects = snapshot.docs.map((doc: QueryDocumentSnapshot<DocumentData>) => ({
          id: doc.id,
          ...doc.data()
        })) as Project[];
        
        const published = allProjects.filter(p => p.status === 'published');
        published.sort((a, b) => (a.order || 0) - (b.order || 0));
        
        setProjects(published);
        
      } catch (err: any) {
        console.error('❌ Error fetching projects:', err);
        setError(err.message || 'Failed to load projects');
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  // Loading state
  if (loading) {
    return (
      <section className="relative min-h-[400px] bg-[var(--bg-primary)] flex items-center justify-center">
        <div className="text-center">
          <div className="inline-block w-8 h-8 border-2 border-[#00d4ff] border-t-transparent rounded-full animate-spin" />
          <p className="mt-4 text-[var(--text-muted)] font-mono text-sm animate-pulse">
            Loading projects...
          </p>
        </div>
      </section>
    );
  }

  // Error state
  if (error) {
    return (
      <section className="relative min-h-[400px] bg-[var(--bg-primary)] flex items-center justify-center">
        <div className="text-center max-w-md px-4">
          <p className="text-red-400 font-mono text-sm">{error}</p>
          <button 
            onClick={() => window.location.reload()}
            className="mt-6 px-6 py-2 border border-[var(--border-color)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:border-[var(--text-primary)]/30 rounded-lg transition"
          >
            Try Again
          </button>
        </div>
      </section>
    );
  }

  // No projects
  if (projects.length === 0) {
    return (
      <section className="relative min-h-[400px] bg-[var(--bg-primary)] flex items-center justify-center">
        <div className="text-center">
          <p className="text-[var(--text-muted)] font-mono text-sm">
            No projects published yet. Check back soon.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section 
      id="projects" 
      className="relative bg-[var(--bg-primary)] py-24 overflow-hidden"
    >
      {/* Ambient Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-[#00d4ff]/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-[#7c3aed]/5 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-12">
          <div className="flex items-center gap-4 mb-6">
            <span className="text-[10px] font-mono text-[#00d4ff] tracking-[0.2em] font-medium">
              §05
            </span>
            <span className="h-px flex-1 bg-gradient-to-r from-[#00d4ff]/30 to-transparent" />
            <span className="text-[10px] font-mono text-[var(--text-muted)] tracking-[0.2em]">
              {projects.length} PROJECTS
            </span>
          </div>

          <div className="flex items-end justify-between">
            <div>
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-light tracking-tight text-[var(--text-primary)] leading-[1.1]">
                Selected
                <br />
                <span className="font-medium text-transparent bg-clip-text bg-gradient-to-r from-[#00d4ff] to-[#7c3aed]">
                  Work
                </span>
              </h2>
            </div>
            <p className="text-[var(--text-secondary)] text-sm max-w-xs text-right hidden md:block">
              {projects.length} projects • horizontal scroll
            </p>
          </div>
        </div>

        {/* Horizontal Scrolling Container */}
        <div 
          ref={scrollRef}
          className="overflow-x-auto overflow-y-visible pb-8 scrollbar-hide"
          style={{
            scrollBehavior: 'smooth',
            msOverflowStyle: 'none',
            scrollbarWidth: 'none',
          }}
        >
          <div className="flex gap-6 w-max min-w-full">
            {projects.map((project, index) => {
              const isHovered = hoveredIndex === index;
              
              return (
                <motion.div
                  key={project.id}
                  className="w-[300px] md:w-[340px] lg:w-[380px] flex-shrink-0"
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ 
                    duration: 0.6, 
                    delay: index * 0.08,
                    ease: [0.25, 0.1, 0.25, 1]
                  }}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  <div className={`group relative bg-[var(--bg-secondary)] border border-[var(--border-color)] rounded-2xl overflow-hidden transition-all duration-500 h-full ${
                    isHovered ? 'shadow-2xl shadow-[#00d4ff]/5 border-[#00d4ff]/20' : ''
                  }`}>
                    {/* Image Container */}
                    <div className="relative aspect-[4/3] overflow-hidden bg-[var(--bg-primary)]">
                      {project.image ? (
                        <img
                          src={`/projects/${project.image}`}
                          alt={project.title}
                          className={`w-full h-full object-cover transition-all duration-700 ${
                            isHovered ? 'scale-110' : 'scale-100'
                          }`}
                          onError={(e) => {
                            const target = e.currentTarget;
                            target.style.display = 'none';
                            const parent = target.parentElement;
                            if (parent) {
                              const fallback = document.createElement('div');
                              fallback.className = 'w-full h-full flex items-center justify-center bg-[var(--bg-primary)]';
                              fallback.innerHTML = `
                                <span class="font-mono text-xs text-[var(--text-muted)]">No image</span>
                              `;
                              parent.appendChild(fallback);
                            }
                          }}
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center bg-[var(--bg-primary)]">
                          <span className="font-mono text-xs text-[var(--text-muted)]">No image</span>
                        </div>
                      )}
                      
                      {/* Image Overlay Gradient */}
                      <div className={`absolute inset-0 bg-gradient-to-t from-[var(--bg-secondary)] via-transparent to-transparent transition-opacity duration-500 ${
                        isHovered ? 'opacity-100' : 'opacity-80'
                      }`} />

                      {/* Category Badge */}
                      <div className="absolute top-4 left-4">
                        <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-black/60 backdrop-blur-sm border border-white/10 rounded-full text-[10px] font-mono text-white/80 tracking-wider">
                          <Sparkles className="w-3 h-3 text-[#00d4ff]" />
                          {project.category || 'PROJECT'}
                        </span>
                      </div>

                      {/* Status Badge */}
                      {project.link === "#" && (
                        <div className="absolute top-4 right-4">
                          <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-amber-500/20 backdrop-blur-sm border border-amber-500/30 rounded-full text-[10px] font-mono text-amber-400 tracking-wider">
                            <Calendar className="w-3 h-3" />
                            Coming Soon
                          </span>
                        </div>
                      )}
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <h3 className="text-lg font-medium text-[var(--text-primary)] mb-2 tracking-tight line-clamp-1">
                        {project.title}
                      </h3>
                      
                      <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-4 line-clamp-2">
                        {project.description}
                      </p>

                      {/* Tech Stack */}
                      <div className="flex flex-wrap gap-1.5 mb-5">
                        {project.tech && project.tech.slice(0, 4).map((tech) => (
                          <span 
                            key={tech} 
                            className="px-2 py-1 bg-[var(--bg-primary)] border border-[var(--border-color)] rounded-md text-[9px] font-mono text-[var(--text-muted)] tracking-wider"
                          >
                            {tech}
                          </span>
                        ))}
                        {project.tech && project.tech.length > 4 && (
                          <span className="px-2 py-1 rounded-md text-[9px] font-mono text-[var(--text-muted)]">
                            +{project.tech.length - 4}
                          </span>
                        )}
                      </div>

                      {/* Link */}
                      <div className="flex items-center justify-between pt-4 border-t border-[var(--border-color)]">
                        <span className="text-[10px] font-mono text-[var(--text-muted)] tracking-wider">
                          {project.featured ? '★ Featured' : `#${String(index + 1).padStart(2, '0')}`}
                        </span>
                        {project.link && project.link !== "#" ? (
                          <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`inline-flex items-center gap-2 text-sm font-medium transition-all duration-300 ${
                              isHovered 
                                ? 'text-[#00d4ff] gap-3' 
                                : 'text-[var(--text-secondary)]'
                            }`}
                          >
                            <span>View</span>
                            <ArrowUpRight className={`w-4 h-4 transition-transform duration-300 ${
                              isHovered ? 'translate-x-0.5 -translate-y-0.5' : ''
                            }`} />
                          </a>
                        ) : (
                          <span className="text-sm text-[var(--text-muted)] font-mono">
                            Coming Soon
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Hover Glow Effect */}
                    <div className={`absolute -inset-0.5 bg-gradient-to-r from-[#00d4ff]/0 via-[#00d4ff]/0 to-[#7c3aed]/0 rounded-2xl transition-all duration-700 pointer-events-none ${
                      isHovered ? 'from-[#00d4ff]/10 via-[#00d4ff]/5 to-[#7c3aed]/10' : ''
                    }`} />
                  </div>
                </motion.div>
              );
            })}

            {/* End Card */}
            <div className="w-[200px] md:w-[250px] flex-shrink-0 flex items-center justify-center">
              <div className="w-full aspect-square rounded-full border border-[var(--border-color)] flex items-center justify-center bg-[var(--bg-secondary)]/30 backdrop-blur-sm">
                <div className="text-center">
                  <span className="block text-3xl font-light text-[var(--text-primary)]">∞</span>
                  <span className="text-[10px] font-mono text-[var(--text-muted)] tracking-wider">MORE</span>
                  <span className="text-[8px] font-mono text-[var(--text-muted)] tracking-wider block mt-1">Coming Soon</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Meta */}
        <div className="mt-12 pt-6 border-t border-[var(--border-color)] flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-6 text-xs font-mono text-[var(--text-muted)] tracking-wider">
            <span>ARCHIVE: {projects.length} PROJECTS</span>
            <span className="hidden sm:inline">•</span>
            <span className="hidden sm:inline">STATUS: DEPLOYED</span>
          </div>
          <div className="flex items-center gap-2 text-xs font-mono text-[var(--text-muted)]">
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-500/70 animate-pulse" />
            <span>SYSTEM ONLINE</span>
          </div>
        </div>
      </div>
    </section>
  );
}