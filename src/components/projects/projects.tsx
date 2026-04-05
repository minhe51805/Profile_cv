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
        className="bg-[var(--color-card)] border border-[var(--color-border)] rounded-3xl max-w-lg w-full max-h-[90vh] overflow-y-auto shadow-2xl transform transition-all scale-100"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Image */}
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
          {/* Close Button */}
          <button onClick={onClose} className="absolute top-4 left-4 w-8 h-8 bg-black/50 text-white rounded-full flex items-center justify-center hover:bg-[var(--color-warm)] hover:text-[var(--color-bg)] transition-colors backdrop-blur-sm">
            ✕
          </button>
        </div>

        {/* Modal Content */}
        <div className="p-6 md:p-8">
          <div className="flex items-start justify-between mb-4">
            <div>
              <h3 className="font-display font-bold text-2xl md:text-3xl text-[var(--color-text)]">{project.name}</h3>
              <span className="text-xs text-[var(--color-text-muted)] mt-2 inline-block bg-[var(--color-cream)] px-2 py-0.5 rounded-full">{project.language}</span>
            </div>
          </div>

          <p className="text-sm md:text-base text-[var(--color-text-muted)] leading-relaxed mb-6">{project.description}</p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-8">
            {project.tags.map((t, ti) => (
              <span key={ti} className="px-3 py-1 text-xs text-[var(--color-text-muted)] border border-[var(--color-border)] rounded-full">
                {t}
              </span>
            ))}
          </div>

          {/* Action Buttons */}
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
        style={{ transformStyle: "preserve-3d", transitionDelay: "0ms" }}
      >
        {/* CARD BACK */}
        <div
          className="absolute inset-0 rounded-2xl border border-[var(--color-border)] overflow-hidden bg-[var(--color-card)] hover:border-[var(--color-warm)] transition-colors shadow-sm"
          style={{ backfaceVisibility: "hidden" }}
        >
          {/* Pattern Background */}
          <div className="absolute inset-0 opacity-5"
            style={{
              backgroundImage: `
                radial-gradient(circle at 20% 30%, var(--color-warm) 1px, transparent 1px),
                radial-gradient(circle at 80% 70%, var(--color-warm) 1px, transparent 1px),
                radial-gradient(circle at 50% 50%, var(--color-warm) 0.5px, transparent 0.5px)
              `,
              backgroundSize: '24px 24px, 32px 32px, 16px 16px'
            }}
          />

          {/* Center Design */}
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            {/* Pokeball-like icon */}
            <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full border-4 border-[var(--color-border)] relative overflow-hidden mb-3 group-hover:border-[var(--color-warm)] transition-colors">
              <div className="absolute top-0 left-0 right-0 h-1/2 bg-[var(--color-warm)]/20" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-[var(--color-card)] border-4 border-[var(--color-border)]" />
            </div>
            <span className="mono text-[10px] text-[var(--color-text-muted)] font-medium tracking-wider">PROJECT #{index + 1}</span>
          </div>
        </div>

        {/* CARD FRONT */}
        <div
          className="absolute inset-0 rounded-2xl border border-[var(--color-border)] overflow-hidden bg-[var(--color-card)] hover:border-[var(--color-warm)] transition-colors shadow-md"
          style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
        >
          {/* Image */}
          <div className="relative h-1/2 bg-[#1a1a1a] overflow-hidden">
            <img src={project.imageUrl} alt={project.name} className="w-full h-full object-cover" />
            {project.stars > 0 && (
              <div className="absolute top-2 right-2 inline-flex items-center gap-1 px-2 py-0.5 bg-[var(--color-warm)] text-[var(--color-bg)] rounded-full text-[9px] font-bold shadow-sm">
                ★ {project.stars}
              </div>
            )}
          </div>

          {/* Info */}
          <div className="p-3 sm:p-4 flex flex-col items-center justify-center text-center">
            <h4 className="font-display font-bold text-sm sm:text-base text-[var(--color-text)] mb-1 truncate w-full">{project.name}</h4>
            <span className="text-[9px] text-[var(--color-text-muted)] bg-[var(--color-cream)] px-2 py-0.5 rounded-full mb-2">{project.language}</span>
            <span className="text-[9px] text-[var(--color-text-muted)] opacity-0 group-hover:opacity-100 transition-opacity">Tap for details</span>
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
      }, 400);
    }
  };

  return (
    <section id="projects" className="relative py-20 bg-[var(--color-bg)] overflow-hidden">
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
        <div className={`flex items-center justify-center transition-all duration-500 ${isOpened ? 'h-0 opacity-0 overflow-hidden mb-0' : 'min-h-[50vh] sm:min-h-[60vh] mb-12'}`}>
          <div 
            className={`relative cursor-pointer group transition-all duration-500 ${isExploding ? 'scale-150 opacity-0 rotate-12' : 'scale-100 opacity-100 hover:scale-105'}`}
            onClick={handlePackClick}
            style={{ transformStyle: 'preserve-3d' }}
          >
            {/* Glow Effect Behind Pack */}
            <div className="absolute -inset-10 bg-[var(--color-warm)]/20 blur-3xl rounded-full group-hover:bg-[var(--color-warm)]/30 transition-colors" />

            {/* Pack Container */}
            <div className="relative w-64 h-96 sm:w-72 sm:h-[420px] rounded-2xl border-2 border-[var(--color-border)] bg-[#1a1a1a] overflow-hidden shadow-2xl">
              {/* Holo Foil Gradient */}
              <div className="absolute inset-0 opacity-30 bg-gradient-to-br from-white/10 via-transparent to-black/50 pointer-events-none" />
              
              {/* Pack Design Elements */}
              <div className="absolute top-0 left-0 w-full h-2 bg-[var(--color-warm)]" />
              <div className="absolute bottom-0 left-0 w-full h-2 bg-[var(--color-warm)]" />
              
              {/* Center Content */}
              <div className="absolute inset-0 flex flex-col items-center justify-center p-6">
                <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full border-4 border-[var(--color-warm)] flex items-center justify-center mb-6 bg-[var(--color-bg)] shadow-[0_0_20px_rgba(196,149,106,0.4)]">
                   <span className="font-display font-black text-3xl sm:text-4xl text-[var(--color-warm)]">P</span>
                </div>
                <h3 className="font-display font-bold text-xl sm:text-2xl text-white tracking-widest mb-2">PROJECTS</h3>
                <p className="text-[10px] sm:text-xs text-[var(--color-text-muted)] tracking-widest uppercase">Booster Pack</p>
                <div className="mt-8 w-full h-[1px] bg-gradient-to-r from-transparent via-[var(--color-warm)] to-transparent opacity-50" />
                <p className="mt-4 text-[10px] text-[var(--color-warm)] animate-pulse font-bold">TAP TO OPEN</p>
              </div>

              {/* Decorative Corners */}
              <div className="absolute top-3 left-3 w-4 h-4 border-t-2 border-l-2 border-[var(--color-warm)] opacity-50" />
              <div className="absolute top-3 right-3 w-4 h-4 border-t-2 border-r-2 border-[var(--color-warm)] opacity-50" />
              <div className="absolute bottom-3 left-3 w-4 h-4 border-b-2 border-l-2 border-[var(--color-warm)] opacity-50" />
              <div className="absolute bottom-3 right-3 w-4 h-4 border-b-2 border-r-2 border-[var(--color-warm)] opacity-50" />
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
                className={`transition-all duration-700 ease-out transform ${isOpened ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20 scale-90'}`}
                style={{ transitionDelay: `${i * 150 + 200}ms` }}
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
                 className="text-xs text-[var(--color-text-muted)] hover:text-[var(--color-warm)] underline underline-offset-4 transition-colors"
               >
                 Close Pack
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
