"use client";

import ScrollReveal from "@/components/scroll-reveal";
import { useState, useEffect } from "react";

interface Project {
  name: string;
  description: string;
  tags: string[];
  githubUrl: string;
  demoUrl: string;
  imageUrl: string;
  stars: number;
  language: string;
}

interface PortfolioData {
  projects: Project[];
  [key: string]: unknown;
}

// Modal Component
function ProjectModal({ project, onClose }: { project: Project; onClose: () => void }) {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = ""; };
  }, []);

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-md" onClick={onClose}>
      <div
        className="bg-[var(--color-card)] border border-[var(--color-border)] rounded-3xl max-w-lg w-full max-h-[90vh] overflow-y-auto shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative aspect-video bg-[#1a1a1a] rounded-t-3xl overflow-hidden group">
          <img src={project.imageUrl} alt={project.name} className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-500" />
          <div className="absolute inset-0 opacity-20"
            style={{
              backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
              backgroundSize: '30px 30px'
            }}
          />
          {project.stars > 0 && (
            <div className="absolute top-4 right-4 inline-flex items-center gap-1 px-3 py-1 bg-[var(--color-warm)] text-[var(--color-bg)] rounded-full text-sm font-semibold shadow-lg">
              ★ {project.stars}
            </div>
          )}
          <button onClick={onClose} className="absolute top-4 left-4 w-8 h-8 bg-black/50 text-white rounded-full flex items-center justify-center hover:bg-[var(--color-warm)] hover:text-[var(--color-bg)] transition-colors backdrop-blur-sm">
            ✕
          </button>
        </div>

        <div className="p-6 md:p-8">
          <div className="flex items-start justify-between mb-4">
            <div>
              <h3 className="font-display font-bold text-2xl md:text-3xl text-[var(--color-text)]">{project.name}</h3>
              <span className="text-xs text-[var(--color-text-muted)] mt-2 inline-block bg-[var(--color-cream)] px-2 py-0.5 rounded-full">{project.language}</span>
            </div>
          </div>

          <p className="text-sm md:text-base text-[var(--color-text-muted)] leading-relaxed mb-6">{project.description}</p>

          <div className="flex flex-wrap gap-2 mb-8">
            {project.tags.map((t, ti) => (
              <span key={ti} className="px-3 py-1 text-xs text-[var(--color-text-muted)] border border-[var(--color-border)] rounded-full">
                {t}
              </span>
            ))}
          </div>

          <div className="flex gap-3">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 text-center py-3 text-sm font-medium text-[var(--color-text)] border border-[var(--color-border)] rounded-full hover:border-[var(--color-text)] hover:bg-[var(--color-cream)] transition-all"
            >
              Code ↗
            </a>
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 text-center py-3 text-sm font-medium bg-[var(--color-warm)] text-[var(--color-bg)] rounded-full hover:opacity-90 hover:shadow-lg transition-all"
            >
              Demo ↗
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

// Card Component
function Card({ project, index, onOpenModal }: { project: Project; index: number; onOpenModal: () => void }) {
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      className="perspective-1000 group cursor-pointer w-full"
      style={{ perspective: "1000px" }}
      onClick={() => {
        if (flipped) {
          onOpenModal();
        } else {
          setFlipped(true);
        }
      }}
    >
      <div
        className={`relative w-full aspect-[3/4] transition-transform duration-500 ${flipped ? "[transform:rotateY(180deg)]" : ""}`}
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* CARD BACK */}
        <div
          className="absolute inset-0 rounded-2xl border border-[var(--color-border)] overflow-hidden bg-[var(--color-card)] hover:border-[var(--color-warm)] transition-colors shadow-lg"
          style={{ backfaceVisibility: "hidden" }}
        >
          <div className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: `
                radial-gradient(circle at 20% 30%, var(--color-warm) 1.5px, transparent 1.5px),
                radial-gradient(circle at 80% 70%, var(--color-warm) 1.5px, transparent 1.5px),
                radial-gradient(circle at 50% 50%, var(--color-warm) 1px, transparent 1px)
              `,
              backgroundSize: '20px 20px, 28px 28px, 14px 14px'
            }}
          />

          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full border-4 border-[var(--color-warm)] relative overflow-hidden mb-3 group-hover:shadow-[0_0_20px_rgba(196,149,106,0.5)] transition-shadow">
              <div className="absolute top-0 left-0 right-0 h-1/2 bg-[var(--color-warm)]/30" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-[var(--color-card)] border-4 border-[var(--color-warm)]" />
            </div>
            <span className="mono text-[10px] text-[var(--color-warm)] font-bold tracking-wider">PROJECT #{index + 1}</span>
          </div>
        </div>

        {/* CARD FRONT */}
        <div
          className="absolute inset-0 rounded-2xl border border-[var(--color-warm)] overflow-hidden bg-[var(--color-card)] shadow-xl"
          style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
        >
          <div className="relative h-1/2 bg-[#1a1a1a] overflow-hidden">
            <img src={project.imageUrl} alt={project.name} className="w-full h-full object-cover" />
            {project.stars > 0 && (
              <div className="absolute top-2 right-2 inline-flex items-center gap-1 px-2 py-0.5 bg-[var(--color-warm)] text-[var(--color-bg)] rounded-full text-[9px] font-bold shadow-md">
                ★ {project.stars}
              </div>
            )}
          </div>

          <div className="p-3 sm:p-4 flex flex-col items-center justify-center text-center">
            <h4 className="font-display font-bold text-sm sm:text-base text-[var(--color-text)] mb-1 truncate w-full">{project.name}</h4>
            <span className="text-[9px] text-[var(--color-text-muted)] bg-[var(--color-cream)] px-2 py-0.5 rounded-full mb-2">{project.language}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Projects({ data }: { data: PortfolioData }) {
  const [isOpened, setIsOpened] = useState(false);
  const [isExploding, setIsExploding] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const handlePackClick = () => {
    if (!isOpened) {
      setIsExploding(true);
      setTimeout(() => {
        setIsOpened(true);
      }, 600);
    }
  };

  return (
    <section id="projects" className="relative py-20 bg-[var(--color-bg)] overflow-hidden min-h-screen">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 relative z-10 w-full">
        
        {/* Section Header - Always Visible */}
        <ScrollReveal>
          <div className="text-center mb-8">
            <div className="flex items-center justify-center gap-4 mb-3">
              <div className="w-6 sm:w-8 h-[1px] bg-[var(--color-text-muted)]" />
              <span className="text-[9px] sm:text-[10px] uppercase tracking-[0.2em] text-[var(--color-text-muted)]">Selected Work</span>
              <div className="w-6 sm:w-8 h-[1px] bg-[var(--color-text-muted)]" />
            </div>
            <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl text-[var(--color-text)] mb-4 sm:mb-6 leading-[0.9]">
              Recent
              <span className="block text-[var(--color-warm)]">Projects</span>
            </h2>
          </div>
        </ScrollReveal>

        {/* THE PACK (Before Open) */}
        <div className={`flex items-center justify-center transition-all duration-600 ${isOpened ? 'h-0 opacity-0 overflow-hidden mb-0 scale-50' : 'min-h-[50vh] sm:min-h-[60vh] mb-12'}`}>
          <div 
            className={`relative cursor-pointer group transition-all duration-600 ${isExploding ? 'scale-[3] opacity-0 rotate-[720deg] blur-xl' : 'scale-100 opacity-100 hover:scale-105 hover:rotate-2'}`}
            onClick={handlePackClick}
            style={{ transformStyle: 'preserve-3d' }}
          >
            {/* Massive Glow Effect Behind Pack */}
            <div className="absolute -inset-20 bg-[var(--color-warm)]/20 blur-[100px] rounded-full group-hover:bg-[var(--color-warm)]/40 transition-all duration-500 animate-pulse" />
            
            {/* Particles */}
            <div className="absolute -inset-32 pointer-events-none">
              {Array.from({ length: 12 }).map((_, i) => (
                <div
                  key={i}
                  className="absolute w-1 h-1 bg-[var(--color-warm)] rounded-full opacity-0 group-hover:opacity-60 transition-opacity duration-300"
                  style={{
                    left: `${50 + Math.cos(i * 30 * Math.PI / 180) * 40}%`,
                    top: `${50 + Math.sin(i * 30 * Math.PI / 180) * 40}%`,
                    animation: `ping 1.5s cubic-bezier(0, 0, 0.2, 1) infinite ${i * 0.1}s`
                  }}
                />
              ))}
            </div>

            {/* Pack Container */}
            <div className="relative w-64 h-96 sm:w-72 sm:h-[420px] rounded-2xl border-2 border-[var(--color-warm)] bg-[#1a1a1a] overflow-hidden shadow-[0_0_60px_rgba(196,149,106,0.4)] group-hover:shadow-[0_0_100px_rgba(196,149,106,0.6)] transition-all duration-500">
              {/* Holo Foil Gradient - Stronger */}
              <div className="absolute inset-0 opacity-40 bg-gradient-to-br from-white/20 via-[var(--color-warm)]/10 to-black/60 pointer-events-none group-hover:opacity-60 transition-opacity" />
              
              {/* Animated Border Glow */}
              <div className="absolute inset-0 border-2 border-[var(--color-warm)] rounded-2xl opacity-50 animate-pulse" />
              
              {/* Pack Design Elements */}
              <div className="absolute top-0 left-0 w-full h-3 bg-gradient-to-r from-[var(--color-warm)] via-[#e8d5b8] to-[var(--color-warm)]" />
              <div className="absolute bottom-0 left-0 w-full h-3 bg-gradient-to-r from-[var(--color-warm)] via-[#e8d5b8] to-[var(--color-warm)]" />
              
              {/* Center Content */}
              <div className="absolute inset-0 flex flex-col items-center justify-center p-6">
                <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full border-4 border-[var(--color-warm)] flex items-center justify-center mb-6 bg-[var(--color-bg)] shadow-[0_0_30px_rgba(196,149,106,0.6)] group-hover:shadow-[0_0_50px_rgba(196,149,106,0.8)] transition-all group-hover:scale-110">
                   <span className="font-display font-black text-3xl sm:text-4xl text-[var(--color-warm)] animate-pulse">P</span>
                </div>
                <h3 className="font-display font-bold text-xl sm:text-2xl text-white tracking-[0.3em] mb-2 group-hover:tracking-[0.5em] transition-all">PROJECTS</h3>
                <p className="text-[10px] sm:text-xs text-[var(--color-warm)] tracking-[0.2em] uppercase font-bold">Booster Pack</p>
                <div className="mt-8 w-full h-[2px] bg-gradient-to-r from-transparent via-[var(--color-warm)] to-transparent shadow-[0_0_10px_rgba(196,149,106,0.8)]" />
                <p className="mt-4 text-[10px] text-[var(--color-warm)] animate-bounce font-bold tracking-widest">TAP TO OPEN</p>
              </div>

              {/* Decorative Corners - Glow */}
              <div className="absolute top-3 left-3 w-5 h-5 border-t-2 border-l-2 border-[var(--color-warm)] opacity-70 shadow-[0_0_10px_rgba(196,149,106,0.5)]" />
              <div className="absolute top-3 right-3 w-5 h-5 border-t-2 border-r-2 border-[var(--color-warm)] opacity-70 shadow-[0_0_10px_rgba(196,149,106,0.5)]" />
              <div className="absolute bottom-3 left-3 w-5 h-5 border-b-2 border-l-2 border-[var(--color-warm)] opacity-70 shadow-[0_0_10px_rgba(196,149,106,0.5)]" />
              <div className="absolute bottom-3 right-3 w-5 h-5 border-b-2 border-r-2 border-[var(--color-warm)] opacity-70 shadow-[0_0_10px_rgba(196,149,106,0.5)]" />
            </div>
          </div>
        </div>

        {/* THE CARDS (After Open) */}
        <div className={`transition-all duration-700 ${isOpened ? 'opacity-100' : 'opacity-0 pointer-events-none h-0 overflow-hidden'}`}>
          {/* Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4 sm:gap-6 py-12">
            {data.projects.map((project, i) => (
              <div 
                key={project.name}
                className={`transition-all duration-700 ease-out transform ${isOpened ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-32 scale-50 rotate-12'}`}
                style={{ transitionDelay: `${i * 120 + 300}ms` }}
              >
                <Card 
                  project={project} 
                  index={i} 
                  onOpenModal={() => setSelectedProject(project)} 
                />
              </div>
            ))}
          </div>
          
          {/* Reset Button */}
          {isOpened && (
            <div className="text-center mt-12 transition-all duration-700 delay-[2000ms]">
               <button 
                 onClick={() => { setIsOpened(false); setIsExploding(false); }}
                 className="text-xs text-[var(--color-text-muted)] hover:text-[var(--color-warm)] underline underline-offset-4 transition-colors tracking-widest uppercase"
               >
                 ← Back to Pack
               </button>
            </div>
          )}
        </div>

      </div>

      {/* Modal */}
      {selectedProject && (
        <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
      )}
    </section>
  );
}
