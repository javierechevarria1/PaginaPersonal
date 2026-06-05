import { useState } from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Award, ChevronRight, Globe } from 'lucide-react';
import { NetbeesModal } from '../../components/UI/NetbeesModal';

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" as const } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
};

export const Experience = () => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <section className="relative h-screen w-full flex flex-col justify-center px-6 pt-16 overflow-hidden bg-[#0a0f18]">
      <motion.div 
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
        className="max-w-4xl mx-auto w-full allow-scroll"
      >
        <motion.div variants={fadeInUp} className="flex items-center gap-4 mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight">Mi Recorrido</h2>
          <div className="h-[1px] flex-1 bg-slate-800"></div>
        </motion.div>

        {/* Contenedor con scroll interno por si la pantalla es muy pequeña */}
        <div className="relative border-l-2 border-slate-800/80 ml-4 md:ml-6 space-y-12 pb-10 max-h-[60vh] overflow-y-auto pr-4 allow-scroll custom-scrollbar">
          
          {/* DAW */}
          <motion.div variants={fadeInUp} className="pl-8 md:pl-12 relative group">
            <div className="absolute w-4 h-4 bg-[#0a0f18] border-2 border-cyan-500 rounded-full -left-[9px] top-1.5 group-hover:bg-cyan-500 group-hover:shadow-[0_0_15px_#22d3ee] transition-all duration-300"></div>
            <div className="bg-slate-900/40 border border-slate-800/60 rounded-xl p-6 md:p-8 hover:border-cyan-500/30 transition-all duration-300 hover:shadow-[0_10px_30px_rgba(0,0,0,0.5)]">
              <span className="text-xs font-mono text-cyan-400 mb-2 block tracking-wider uppercase">2026 — 2028 (En Proceso)</span>
              <h3 className="text-xl md:text-2xl font-bold text-white mb-2">Desarrollo de Aplicaciones Web</h3>
              <p className="text-slate-400 text-sm mb-4 font-medium">Centro de Formación Profesional Decroly</p>
              <p className="text-slate-300 font-light text-base leading-relaxed">Próximo paso formativo para complementar mis habilidades de sistemas con programación y desarrollo de software.</p>
            </div>
          </motion.div>

          {/* Ciberseguridad UNIR */}
          <motion.div variants={fadeInUp} className="pl-8 md:pl-12 relative group">
            <div className="absolute w-4 h-4 bg-[#0a0f18] border-2 border-cyan-500 rounded-full -left-[9px] top-1.5 group-hover:bg-cyan-500 group-hover:shadow-[0_0_15px_#22d3ee] transition-all duration-300"></div>
            <div className="bg-slate-900/40 border border-slate-800/60 rounded-xl p-6 md:p-8 hover:border-cyan-500/30 transition-all duration-300 hover:shadow-[0_10px_30px_rgba(0,0,0,0.5)]">
              <span className="text-xs font-mono text-cyan-400 mb-2 block tracking-wider uppercase">2026 — 2027 (En Proceso)</span>
              <h3 className="text-xl md:text-2xl font-bold text-white mb-2">Especializacion en Hacking e IA aplicados a la ciberseguridad</h3>
              <p className="text-slate-400 text-sm mb-4 font-medium">UNIR (Universidad Internacional de La Rioja)</p>
              <p className="text-slate-300 font-light text-base leading-relaxed">Formación avanzada orientada a la protección de infraestructuras, prevención de vulnerabilidades y seguridad en sistemas en red.</p>
            </div>
          </motion.div>

          {/* Ingeniería de Software UNIR */}
          <motion.div variants={fadeInUp} className="pl-8 md:pl-12 relative group">
            <div className="absolute w-4 h-4 bg-[#0a0f18] border-2 border-cyan-500 rounded-full -left-[9px] top-1.5 group-hover:bg-cyan-500 group-hover:shadow-[0_0_15px_#22d3ee] transition-all duration-300"></div>
            <div className="bg-slate-900/40 border border-slate-800/60 rounded-xl p-6 md:p-8 hover:border-cyan-500/30 transition-all duration-300 hover:shadow-[0_10px_30px_rgba(0,0,0,0.5)]">
              <span className="text-xs font-mono text-cyan-400 mb-2 block tracking-wider uppercase">2026 — 2027 (En Proceso)</span>
              <h3 className="text-xl md:text-2xl font-bold text-white mb-2">Especializacion en Ingenieria de Software</h3>
              <p className="text-slate-400 text-sm mb-4 font-medium">UNIR (Universidad Internacional de La Rioja)</p>
              <p className="text-slate-300 font-light text-base leading-relaxed">Formación orientada al diseño y desarrollo de software de calidad, abarcando arquitecturas modernas, patrones de diseño, metodologías ágiles y ciclos de vida del desarrollo.</p>
            </div>
          </motion.div>

          {/* ASIR */}
          <motion.div variants={fadeInUp} className="pl-8 md:pl-12 relative group">
            <div className="absolute w-4 h-4 bg-[#0a0f18] border-2 border-cyan-500 rounded-full -left-[9px] top-1.5 group-hover:bg-cyan-500 group-hover:shadow-[0_0_15px_#22d3ee] transition-all duration-300"></div>
            <div className="bg-slate-900/40 border border-slate-800/60 rounded-xl p-6 md:p-8 hover:border-cyan-500/30 transition-all duration-300 hover:shadow-[0_10px_30px_rgba(0,0,0,0.5)]">
              <span className="text-xs font-mono text-cyan-400 mb-2 block tracking-wider uppercase">2024 — 2026</span>
              <h3 className="text-xl md:text-2xl font-bold text-white mb-2">Administración de Sistemas (ASIR)</h3>
              <p className="text-slate-400 text-sm mb-5 font-medium">Centro de Formación Profesional Decroly</p>
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-slate-300 text-sm bg-[#05080f] p-3 rounded-lg border border-slate-800/80">
                  <Briefcase size={18} className="text-blue-400" />
                  <span>Prácticas en <strong className="text-white font-medium">Netbees</strong> (500h)</span>
                </div>
                <div className="flex items-center gap-3 text-slate-300 text-sm bg-[#05080f] p-3 rounded-lg border border-slate-800/80">
                  <Award size={18} className="text-yellow-400" />
                  <span>Ganador del Hackathon "Hack The Age" (Netbees)</span>
                </div>
                <div className="flex items-center gap-3 text-slate-300 text-sm bg-[#05080f] p-3 rounded-lg border border-orange-500/20">
                  <Globe size={18} className="text-orange-400" />
                  <span>Asistente al <strong className="text-orange-400 font-medium">AWS Summit Madrid 2026</strong></span>
                </div>
              </div>
              <button
                onClick={() => setModalOpen(true)}
                className="mt-4 flex items-center gap-1.5 text-xs font-mono text-cyan-400 hover:text-cyan-300 transition-colors duration-200 group"
              >
                Ver más <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform duration-200" />
              </button>
            </div>
          </motion.div>

          {/* SMR */}
          <motion.div variants={fadeInUp} className="pl-8 md:pl-12 relative group">
            <div className="absolute w-4 h-4 bg-[#0a0f18] border-2 border-cyan-500 rounded-full -left-[9px] top-1.5 group-hover:bg-cyan-500 group-hover:shadow-[0_0_15px_#22d3ee] transition-all duration-300"></div>
            <div className="bg-slate-900/40 border border-slate-800/60 rounded-xl p-6 md:p-8 hover:border-cyan-500/30 transition-all duration-300 hover:shadow-[0_10px_30px_rgba(0,0,0,0.5)]">
              <span className="text-xs font-mono text-cyan-400 mb-2 block tracking-wider uppercase">2022 — 2024</span>
              <h3 className="text-xl md:text-2xl font-bold text-white mb-2">Sistemas Microinformáticos y Redes</h3>
              <p className="text-slate-400 text-sm mb-5 font-medium">IES Valle de Camargo</p>
              <div className="flex items-center gap-3 text-slate-300 text-sm bg-[#05080f] p-3 rounded-lg border border-slate-800/80">
                <Briefcase size={18} className="text-blue-400" />
                <span>Prácticas en IES José María Pereda (400h)</span>
              </div>
            </div>
          </motion.div>

        </div>
      </motion.div>

      <NetbeesModal open={modalOpen} onClose={() => setModalOpen(false)} />
    </section>
  );
};