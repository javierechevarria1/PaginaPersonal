import { motion } from 'framer-motion';
import { Code, ChevronDown } from 'lucide-react';
import { LinkedinIcon, GithubIcon } from '../../components/UI/Icons';

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" as const } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

export const Home = ({ onNavigateToProjects }: { onNavigateToProjects: () => void }) => {
  return (
    <section className="relative h-screen w-full flex flex-col justify-center px-6 pt-16 bg-[#0a0f18]">
      {/* Background effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-cyan-900/20 via-[#0a0f18] to-[#0a0f18] -z-10"></div>
      <div className="absolute top-1/4 right-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-[100px] -z-10"></div>
      <div className="absolute bottom-1/4 left-10 w-96 h-96 bg-blue-600/10 rounded-full blur-[100px] -z-10"></div>

      <motion.div 
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
        className="max-w-6xl mx-auto w-full relative z-10"
      >
        <div className="max-w-4xl">
          <motion.div variants={fadeInUp} className="mb-6 flex items-center gap-4 font-mono text-cyan-400 text-sm">
            <span>&gt; Hello, World. I am</span>
          </motion.div>
          <motion.h1 variants={fadeInUp} className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tight leading-[1.1] mb-6 text-white">
            Javier Echevarria
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
              Systems Administrator | Full-Stack Developer | Software Engineering | Cybersecurity & DevSecOps
            </span>
          </motion.h1>
          <motion.h2 variants={fadeInUp} className="text-lg md:text-xl font-light text-slate-400 max-w-2xl mb-10 leading-relaxed">
            Perfil orientado a <strong className="text-cyan-400 font-normal">sistemas, desarrollo web, ciberseguridad y DevSecOps</strong>.
          </motion.h2>
          <motion.div variants={fadeInUp} className="flex flex-wrap gap-4">
            <button onClick={onNavigateToProjects} className="px-6 py-3 bg-cyan-500/10 text-cyan-400 border border-cyan-500/50 font-mono text-sm hover:bg-cyan-500 hover:text-slate-900 transition-all shadow-[0_0_15px_rgba(34,211,238,0.15)] hover:shadow-[0_0_25px_rgba(34,211,238,0.4)] flex items-center gap-2 cursor-pointer">
              <Code size={16} />
              Ver_Trayectoria()
            </button>
            <a href="https://github.com/javierechevarria1" target="_blank" rel="noreferrer" className="px-6 py-3 bg-slate-800/50 text-slate-300 border border-slate-700 font-mono text-sm hover:bg-slate-800 hover:text-white transition-all flex items-center gap-2">
              <GithubIcon size={16} />
              GitHub
            </a>
            <a href="https://www.linkedin.com/in/javier-echevarr%C3%ADa-traspuesto-ab3755258" target="_blank" rel="noreferrer" className="px-6 py-3 bg-[#0a66c2]/10 text-[#0a66c2] border border-[#0a66c2]/50 font-mono text-sm hover:bg-[#0a66c2] hover:text-white transition-all shadow-[0_0_15px_rgba(10,102,194,0.15)] hover:shadow-[0_0_25px_rgba(10,102,194,0.4)] flex items-center gap-2">
              <LinkedinIcon size={16} />
              LinkedIn
            </a>
          </motion.div>
        </div>
      </motion.div>
      
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-cyan-400/50 pointer-events-none"
      >
        <ChevronDown size={32} />
      </motion.div>
    </section>
  );
};