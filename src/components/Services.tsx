import { motion, useMotionValue, animate, useDragControls } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import {
  Code,
  Palette,
  ShieldCheck,
  Rocket,
  Smartphone,
  X,
  ArrowUpRight,
} from 'lucide-react';

const services = [
  {
    title: "Web & Mobile App Development",
    description:
      "We build fast, scalable web platforms and mobile applications that combine modern architecture with intuitive user experiences.",
    fullDescription:
      "Our web and mobile development team creates high-performance applications using cutting-edge technologies. We focus on scalability, security, and user experience, delivering solutions that work seamlessly across all devices. From responsive web apps to native mobile applications, we ensure your digital presence is robust and future-proof. We leverage modern frameworks like React, Next.js, and React Native to build applications that are fast, reliable, and maintainable.",
    icon: Smartphone,
    tech: ["REACT", "NEXT.JS", "NATIVE", "NODE"],
    category: "DEVELOPMENT",
    gradient: "from-blue-500/20 to-cyan-500/20",
    iconGradient: "from-blue-400 to-cyan-400",
    color: "#00d4ff",
  },
  {
    title: "UI / UX Design",
    description:
      "We craft visually refined and user-centered interfaces that transform complex ideas into simple, elegant digital experiences.",
    fullDescription:
      "Our design process is rooted in understanding user behavior and business goals. We create intuitive interfaces that not only look beautiful but also drive engagement and conversions. From research and wireframing to prototyping and final design, we ensure every pixel serves a purpose. We use tools like Figma and Adobe XD to create designs that are both aesthetically pleasing and functionally superior.",
    icon: Palette,
    tech: ["FIGMA", "ADOBE XD", "PROTOTYPING"],
    category: "DESIGN",
    gradient: "from-pink-500/20 to-rose-500/20",
    iconGradient: "from-pink-400 to-rose-400",
    color: "#ec4899",
  },
  {
    title: "Cybersecurity",
    description:
      "From vulnerability assessments to secure authentication systems, we help protect businesses against modern cyber threats.",
    fullDescription:
      "We provide comprehensive cybersecurity solutions to protect your digital assets from evolving threats. Our services include vulnerability assessments, penetration testing, security audits, and implementation of robust authentication systems. We help you build a security-first culture, ensuring your data and systems remain protected against unauthorized access and cyber attacks.",
    icon: ShieldCheck,
    tech: ["PEN TESTING", "AUTH", "MONITORING"],
    category: "SECURITY",
    gradient: "from-emerald-500/20 to-teal-500/20",
    iconGradient: "from-emerald-400 to-teal-400",
    color: "#10b981",
  },
  {
    title: "Startup Acceleration",
    description:
      "We help startups turn ideas into real products by building MVPs, refining product strategy, and preparing them for market growth.",
    fullDescription:
      "We partner with startups to accelerate their journey from idea to market. Our startup acceleration services include MVP development, product strategy, market validation, and scaling support. We help you build a product that resonates with your target audience, iterate quickly based on feedback, and prepare for sustainable growth. We've helped numerous startups secure funding and achieve product-market fit.",
    icon: Rocket,
    tech: ["MVP", "STRATEGY", "SCALING"],
    category: "CONSULTING",
    gradient: "from-purple-500/20 to-indigo-500/20",
    iconGradient: "from-purple-400 to-indigo-400",
    color: "#8b5cf6",
  },
  {
    title: "Custom Web Platforms",
    description:
      "We develop advanced web solutions, dashboards, and digital platforms designed to automate processes and scale business operations.",
    fullDescription:
      "We build custom web platforms tailored to your specific business needs. From complex dashboards to enterprise-grade web applications, we create solutions that automate workflows, centralize data, and scale with your business. Our platforms are built with modern architectures, ensuring high performance, reliability, and security. We help you leverage technology to streamline operations and drive growth.",
    icon: Code,
    tech: ["DASHBOARDS", "APIs", "AUTOMATION"],
    category: "PLATFORMS",
    gradient: "from-orange-500/20 to-amber-500/20",
    iconGradient: "from-orange-400 to-amber-400",
    color: "#f59e0b",
  },
];

// Duplicate services for infinite loop
const loopedServices = [...services, ...services, ...services];

export default function Services() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [selectedService, setSelectedService] = useState<typeof services[0] | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const x = useMotionValue(0);
  const controls = useDragControls();

  // Auto-scroll animation
  useEffect(() => {
    if (isDragging || isHovered) return;

    const totalWidth = containerRef.current?.scrollWidth || 0;
    const scrollDistance = totalWidth / 3;

    const animation = animate(x, -scrollDistance, {
      duration: 40,
      ease: "linear",
      repeat: Infinity,
      repeatType: "loop",
    });

    return () => animation.stop();
  }, [x, isDragging, isHovered]);

  const handleDragEnd = () => {
    setIsDragging(false);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleReadMore = (service: typeof services[0]) => {
    setSelectedService(service);
    setIsModalOpen(true);
    // Prevent body scroll when modal is open
    document.body.style.overflow = 'hidden';
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedService(null);
    document.body.style.overflow = 'unset';
  };

  return (
    <section id="services" className="relative overflow-hidden bg-[var(--bg-primary)] text-[var(--text-primary)]">
      
      {/* Modal Overlay */}
      {isModalOpen && selectedService && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in"
          onClick={handleCloseModal}
        >
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="relative max-w-2xl w-full bg-[var(--bg-secondary)] border border-[var(--border-color)] rounded-2xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="relative p-6 pb-4 border-b border-[var(--border-color)]">
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-center gap-4">
                  <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${selectedService.iconGradient} bg-opacity-10 border border-white/10`}>
                    {(() => {
                      const Icon = selectedService.icon;
                      return <Icon className="w-6 h-6 text-white" />;
                    })()}
                  </div>
                  <div>
                    <h3 className="text-xl font-medium text-[var(--text-primary)] tracking-tight">
                      {selectedService.title}
                    </h3>
                    <span className="text-xs font-mono text-[var(--text-muted)] tracking-wider uppercase">
                      {selectedService.category}
                    </span>
                  </div>
                </div>
                <button
                  onClick={handleCloseModal}
                  className="p-2 rounded-lg hover:bg-white/5 text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Modal Body */}
            <div className="p-6 max-h-[60vh] overflow-y-auto">
              <p className="text-[var(--text-secondary)] leading-relaxed mb-6">
                {selectedService.fullDescription}
              </p>

              {/* Tech Stack in Modal */}
              <div className="mb-4">
                <span className="text-xs font-mono text-[var(--text-muted)] tracking-wider uppercase block mb-2">
                  Technologies & Methods
                </span>
                <div className="flex flex-wrap gap-2">
                  {selectedService.tech.map((tech) => (
                    <span 
                      key={tech} 
                      className="px-3 py-1.5 bg-[var(--bg-primary)] border border-[var(--border-color)] rounded-full text-[10px] font-mono text-[var(--text-muted)] tracking-wider"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <div className="pt-4 border-t border-[var(--border-color)] flex items-center justify-between">
                <span className="text-xs font-mono text-[var(--text-muted)] tracking-wider">
                  Ready to get started?
                </span>
                <button 
                  onClick={handleCloseModal}
                  className="inline-flex items-center gap-2 px-4 py-2 bg-[#00d4ff] text-black rounded-lg text-sm font-medium hover:bg-[#00d4ff]/90 transition-colors"
                >
                  Close
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}

      {/* Ambient Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-[#00d4ff]/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-[#7c3aed]/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#00d4ff]/3 rounded-full blur-3xl" />
      </div>

      {/* Section Header */}
      <div className="border-y border-[var(--border-color)]">
        <div className="mx-auto flex max-w-[1600px] items-center justify-between px-5 py-5 md:px-8">
          <div className="flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--text-secondary)]">
            <span>§06</span>
            <span className="h-px w-8 bg-[var(--border-color)]" />
            <span>OUR SERVICES</span>
          </div>
          <span className="hidden font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--text-muted)] sm:block">
            {services.length.toString().padStart(2, "0")} SERVICES / EXPERTISE
          </span>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative mx-auto max-w-[1600px] px-5 py-16 md:px-8 md:py-20">
        
        {/* Intro Grid - Compact */}
        <div className="grid lg:grid-cols-12 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-4"
          >
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--text-muted)]">
              CAPABILITIES
            </span>
            <h2 className="mt-6 text-4xl font-medium leading-[0.92] tracking-[-0.05em] sm:text-5xl md:text-6xl text-[var(--text-primary)]">
              WHAT WE
              <br />
              <span className="text-[var(--text-secondary)]">DELIVER.</span>
              <br />
              EVERY DAY.
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.65, delay: 0.1 }}
            className="mt-8 lg:col-span-7 lg:col-start-6 lg:mt-0"
          >
            <p className="max-w-2xl text-lg leading-relaxed text-[var(--text-secondary)] sm:text-xl">
              From code to strategy, we design and build technology solutions that move businesses forward.
            </p>
          </motion.div>
        </div>

        {/* Infinite Scrolling Carousel - Compact Cards */}
        <div 
          className="relative overflow-hidden"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {/* Gradient Fades on Edges */}
          <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-[var(--bg-primary)] to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-[var(--bg-primary)] to-transparent z-10 pointer-events-none" />

          <motion.div
            ref={containerRef}
            className="flex gap-5 py-4 cursor-grab active:cursor-grabbing"
            style={{ x }}
            drag="x"
            dragControls={controls}
            dragConstraints={{ left: -5000, right: 0 }}
            dragElastic={0.1}
            onDragStart={() => setIsDragging(true)}
            onDragEnd={handleDragEnd}
            whileTap={{ cursor: "grabbing" }}
          >
            {loopedServices.map((service, index) => {
              const Icon = service.icon;
              const isDuplicate = index >= services.length * 2;
              
              return (
                <motion.div
                  key={`${service.title}-${index}`}
                  className={`w-[280px] md:w-[320px] lg:w-[360px] flex-shrink-0 ${
                    isDuplicate ? 'opacity-60' : ''
                  }`}
                  whileHover={{ 
                    y: -8, 
                    scale: 1.02,
                    transition: { duration: 0.25, ease: "easeOut" }
                  }}
                >
                  <div className={`relative group bg-[var(--bg-secondary)] border border-[var(--border-color)] rounded-xl overflow-hidden transition-all duration-400 hover:shadow-xl hover:shadow-[#00d4ff]/5 hover:border-[#00d4ff]/20 ${
                    isDuplicate ? 'border-dashed opacity-60' : ''
                  }`}>
                    
                    {/* Gradient Background */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                    
                    {/* Content - Compact Layout */}
                    <div className="relative p-5">
                      {/* Icon and Number - Side by side */}
                      <div className="flex items-center justify-between mb-3">
                        <div className={`inline-flex p-2.5 rounded-xl bg-gradient-to-br ${service.iconGradient} bg-opacity-10 border border-white/10 group-hover:scale-105 transition-all duration-400`}>
                          <Icon className="w-5 h-5 text-white" />
                        </div>
                        <span className="font-mono text-[10px] text-[var(--text-muted)] tracking-wider">
                          {String((index % services.length) + 1).padStart(2, "0")}
                        </span>
                      </div>

                      {/* Title - Compact */}
                      <h3 className="text-base font-medium text-[var(--text-primary)] tracking-tight mb-1.5 line-clamp-1">
                        {service.title}
                      </h3>
                      
                      {/* Description - Compact */}
                      <p className="text-xs text-[var(--text-secondary)] leading-relaxed mb-3 line-clamp-2">
                        {service.description}
                      </p>

                      {/* Tech Stack - Compact */}
                      <div className="flex flex-wrap gap-1.5 mb-3">
                        {service.tech.slice(0, 3).map((tech) => (
                          <span 
                            key={tech} 
                            className="px-2 py-0.5 bg-[var(--bg-primary)] border border-[var(--border-color)] rounded text-[8px] font-mono text-[var(--text-muted)] tracking-wider group-hover:border-[#00d4ff]/20 transition-colors duration-300"
                          >
                            {tech}
                          </span>
                        ))}
                        {service.tech.length > 3 && (
                          <span className="px-2 py-0.5 rounded text-[8px] font-mono text-[var(--text-muted)]">
                            +{service.tech.length - 3}
                          </span>
                        )}
                      </div>

                      {/* Read More Button */}
                      <button
                        onClick={() => handleReadMore(service)}
                        className="flex items-center gap-1.5 text-xs font-medium text-[#00d4ff] hover:gap-2.5 transition-all duration-300 group/btn"
                      >
                        <span>Read More</span>
                        <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                      </button>

                      {/* Category */}
                      <div className="flex items-center justify-between pt-2.5 mt-2.5 border-t border-[var(--border-color)]">
                        <span className="text-[8px] font-mono text-[var(--text-muted)] tracking-wider uppercase">
                          {service.category}
                        </span>
                      </div>
                    </div>

                    {/* Hover Glow Effect */}
                    <div className={`absolute -inset-0.5 bg-gradient-to-r from-[#00d4ff]/0 via-[#00d4ff]/0 to-[#7c3aed]/0 rounded-xl transition-all duration-500 pointer-events-none group-hover:from-[#00d4ff]/10 group-hover:via-[#00d4ff]/5 group-hover:to-[#7c3aed]/10`} />
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>

      {/* Footer */}
      <div className="border-t border-[var(--border-color)]">
        <div className="mx-auto flex max-w-[1600px] flex-col justify-between gap-4 px-5 py-5 md:flex-row md:items-center md:px-8">
          <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-[var(--text-muted)]">
            FULL SERVICE ARCHIVE
          </div>
          <div className="flex items-center gap-6">
            <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-[var(--text-muted)]">
              {services.length} CORE CAPABILITIES
            </span>
            <span className="h-3 w-px bg-[var(--border-color)]" />
            <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-[var(--text-muted)]">
              READY
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}