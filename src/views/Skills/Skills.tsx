import { motion } from 'framer-motion';
import { Server, Code, Network, Terminal, Database, Shield, GitBranch, Cpu, Package } from 'lucide-react';

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

const SkillTag = ({ name, icon: Icon }: { name: string, icon: any }) => (
  <div className="flex items-center gap-3 bg-[#0a0f18] border border-slate-800/80 px-4 py-2.5 rounded-xl group hover:border-cyan-500/50 transition-all duration-300 hover:shadow-[0_5px_15px_rgba(34,211,238,0.1)] hover:-translate-y-1">
    <div className="p-1.5 bg-[#05080f] rounded-lg group-hover:bg-cyan-500/10 transition-colors duration-300">
      {Icon && <Icon size={16} className="text-slate-400 group-hover:text-cyan-400 transition-colors duration-300" />}
    </div>
    <span className="font-medium text-sm text-slate-300 group-hover:text-white transition-colors duration-300 tracking-wide">{name}</span>
  </div>
);

export const Skills = () => {
  return (
    <section className="relative h-screen w-full flex flex-col justify-center px-6 pt-20 pb-4 overflow-hidden bg-[#0d131f]">
      {/* Ambient light */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-2xl h-64 bg-cyan-900/10 blur-[120px] -z-10 rounded-full"></div>
      
      <motion.div 
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
        className="max-w-5xl mx-auto w-full"
      >
        <motion.div variants={fadeInUp} className="flex items-center gap-4 mb-5">
          <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight">Habilidades</h2>
          <div className="h-[1px] flex-1 bg-slate-800"></div>
        </motion.div>

        <div className="max-h-[70vh] overflow-y-auto pr-2 allow-scroll custom-scrollbar">
          <div className="grid md:grid-cols-2 gap-5 md:gap-8">
            <motion.div variants={fadeInUp}>
              <h3 className="text-lg font-bold text-white mb-4 flex min-h-14 items-center gap-3 pb-3 border-b border-slate-800/80">
                <Server className="shrink-0 text-cyan-400" size={20}/> Sistemas y Redes
              </h3>
              <div className="flex flex-col gap-3">
                <SkillTag name="Administración Windows/Linux" icon={Terminal} />
                <SkillTag name="Redes TCP/IP & Routing" icon={Network} />
                <SkillTag name="Virtualización & Entornos" icon={Server} />
                <SkillTag name="Seguridad en Sistemas" icon={Shield} />
                <SkillTag name="Wireshark" icon={Network} />
                <SkillTag name="Bases de Datos & SQL" icon={Database} />
                <SkillTag name="Scripting & Automatización" icon={Terminal} />
                <SkillTag name="Hardware & Mantenimiento" icon={Cpu} />
              </div>
            </motion.div>
            
            <motion.div variants={fadeInUp}>
              <h3 className="text-lg font-bold text-white mb-4 flex min-h-14 items-center gap-3 pb-3 border-b border-slate-800/80">
                <Code className="shrink-0 text-blue-400" size={20}/> Desarrollo Web
              </h3>
              <div className="flex flex-col gap-3">
                <SkillTag name="HTML5 + CSS3 + Tailwind" icon={Code} />
                <SkillTag name="React.js + Next.js + Vite" icon={Code} />
                <SkillTag name="Node.js & TypeScript" icon={Code} />
                <SkillTag name="Python & Java" icon={Terminal} />
                <SkillTag name="VS Code, IntelliJ IDEA & Trae" icon={Terminal} />
                <SkillTag name="DBeaver" icon={Database} />
                <SkillTag name="Git & Control de Versiones" icon={GitBranch} />
                <SkillTag name="Sourcetree" icon={GitBranch} />
              </div>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <h3 className="text-lg font-bold text-white mb-4 flex min-h-14 items-center gap-3 pb-3 border-b border-slate-800/80">
                <Shield className="shrink-0 text-rose-400" size={20}/> Hacking e IA aplicados a la ciberseguridad
              </h3>
              <div className="flex flex-col gap-3">
                <SkillTag name="Google Colab & Jupyter Notebooks" icon={Cpu} />
                <SkillTag name="Metasploit, Nmap & FOCA" icon={Shield} />
                <SkillTag name="Burp Suite" icon={Network} />
                <SkillTag name="Splunk & Elastic (SIEM)" icon={Database} />
              </div>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <h3 className="text-lg font-bold text-white mb-4 flex min-h-14 items-center gap-3 pb-3 border-b border-slate-800/80">
                <GitBranch className="shrink-0 text-purple-400" size={20}/> Ingeniería de Software
              </h3>
              <div className="flex flex-col gap-3">
                <SkillTag name="GitHub & GitLab" icon={GitBranch} />
                <SkillTag name="Docker" icon={Package} />
                <SkillTag name="AWS & Azure" icon={Server} />
                <SkillTag name="Jira & Trello" icon={Code} />
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};