import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { getProjects } from '@lib/firebase/projects';
import { Project } from '@types';

export default function Projects() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const data = await getProjects('published');
        setProjects(data);
      } catch (error) {
        console.error('Error fetching projects:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchProjects();
  }, []);

  if (loading) {
    return (
      <section id="projects" className="relative overflow-hidden bg-[#080808] text-white py-20">
        <div className="max-w-[1600px] mx-auto px-5 text-center text-zinc-500 font-mono text-sm animate-pulse">
          Loading projects...
        </div>
      </section>
    );
  }

  return (
    <section id="projects" className="relative overflow-hidden bg-[#080808] text-white">
      <div className="border-y border-white/10">
        <div className="mx-auto flex max-w-[1600px] items-center justify-between px-5 py-5 md:px-8">
          <div className="flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.2em] text-zinc-500">
            <span>§05</span>
            <span className="h-px w-8 bg-white/20" />
            <span>SELECTED WORK</span>
          </div>
          <span className="hidden font-mono text-[10px] uppercase tracking-[0.2em] text-zinc-600 sm:block">
            {projects.length.toString().padStart(2, "0")} PROJECTS / ARCHIVE
          </span>
        </div>
      </div>

      <div className="mx-auto max-w-[1600px] px-5 py-20 md:px-8 md:py-28">
        <div className="grid lg:grid-cols-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-4"
          >
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-zinc-600">
              PROJECT ARCHIVE
            </span>
            <h2 className="mt-8 text-5xl font-medium leading-[0.92] tracking-[-0.05em] sm:text-6xl md:text-7xl">
              BUILT.
              <br />
              <span className="text-zinc-500">TESTED.</span>
              <br />
              DEPLOYED.
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.65, delay: 0.1 }}
            className="mt-10 lg:col-span-7 lg:col-start-6 lg:mt-0"
          >
            <p className="max-w-2xl text-xl leading-relaxed text-zinc-300 sm:text-2xl">
              A selection of digital platforms, websites and systems built to solve real problems.
            </p>
            <p className="mt-6 max-w-xl text-sm leading-7 text-zinc-500 sm:text-base">
              Each project represents a different challenge, industry and technical approach — 
              from e-commerce and payment systems to blockchain platforms and organizational websites.
            </p>
          </motion.div>
        </div>
      </div>

      <div className="mx-auto max-w-[1600px] px-5 pb-20 md:px-8 md:pb-28">
        <div className="border border-white/10">
          {projects.map((project, index) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.55, delay: index * 0.06 }}
              className="group border-b border-white/10 last:border-b-0"
            >
              <div className="grid lg:grid-cols-12">
                <div className="flex min-h-[70px] items-center border-b border-white/10 px-5 lg:col-span-1 lg:border-r lg:border-b-0 md:px-6">
                  <span className="font-mono text-[10px] text-zinc-600">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                <div className="relative min-h-[260px] overflow-hidden border-b border-white/10 lg:col-span-4 lg:border-r lg:border-b-0 md:min-h-[320px]">
                  {project.image ? (
                    <img
                      src={project.image}
                      alt={project.title}
                      className="h-full w-full object-cover grayscale transition duration-700 ease-out group-hover:scale-[1.03] group-hover:grayscale-0"
                    />
                  ) : (
                    <div className="h-full w-full bg-zinc-900 flex items-center justify-center">
                      <span className="font-mono text-xs text-zinc-600">No image</span>
                    </div>
                  )}
                  <div className="absolute inset-0 bg-black/20 transition group-hover:bg-transparent" />
                  <div className="absolute left-5 top-5 border border-white/20 bg-black/70 px-3 py-2 font-mono text-[9px] uppercase tracking-[0.15em] text-zinc-300 backdrop-blur-sm">
                    {project.category}
                  </div>
                  {project.link === "#" && (
                    <div className="absolute bottom-5 right-5 border border-white/20 bg-black/70 px-3 py-2 font-mono text-[9px] uppercase tracking-[0.15em] text-zinc-300 backdrop-blur-sm">
                      COMING SOON
                    </div>
                  )}
                </div>

                <div className="flex flex-col justify-between p-6 lg:col-span-7 md:p-10">
                  <div>
                    <div className="flex items-start justify-between gap-6">
                      <div>
                        <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-zinc-600">
                          PROJECT / {String(index + 1).padStart(2, "0")}
                        </span>
                        <h3 className="mt-5 text-2xl font-medium tracking-[-0.03em] text-white sm:text-3xl md:text-4xl">
                          {project.title}
                        </h3>
                      </div>
                      <span className="hidden font-mono text-xs text-zinc-700 sm:block">↗</span>
                    </div>
                    <p className="mt-6 max-w-2xl text-sm leading-7 text-zinc-500 sm:text-base">
                      {project.description}
                    </p>
                  </div>

                  <div className="mt-12 border-t border-white/10 pt-5">
                    <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
                      <div>
                        <span className="font-mono text-[9px] uppercase tracking-[0.18em] text-zinc-600">
                          TECHNOLOGY STACK
                        </span>
                        <div className="mt-3 flex flex-wrap gap-x-4 gap-y-2">
                          {project.tech.map((tech) => (
                            <span key={tech} className="font-mono text-[10px] uppercase tracking-wider text-zinc-400">
                              [{tech}]
                            </span>
                          ))}
                        </div>
                      </div>
                      {project.link !== "#" ? (
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group/link flex items-center justify-between border border-white/15 px-5 py-3 font-mono text-[10px] uppercase tracking-wider text-zinc-300 transition hover:border-white hover:bg-white hover:text-black"
                        >
                          VIEW PROJECT
                          <span className="ml-8 transition-transform group-hover/link:translate-x-1">→</span>
                        </a>
                      ) : (
                        <div className="flex items-center border border-white/10 px-5 py-3 font-mono text-[10px] uppercase tracking-wider text-zinc-500">
                          <span>COMING SOON</span>
                          <span className="ml-8 text-zinc-700">—</span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
          {projects.length === 0 && (
            <div className="p-12 text-center text-zinc-500 font-mono text-sm">
              No projects published yet. Check back soon.
            </div>
          )}
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-[1600px] flex-col justify-between gap-4 px-5 py-6 md:flex-row md:items-center md:px-8">
          <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-zinc-600">
            END OF SELECTED ARCHIVE
          </div>
          <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-zinc-600">
            {projects.length} PROJECTS / DEPLOYED
          </div>
        </div>
      </div>
    </section>
  );
}