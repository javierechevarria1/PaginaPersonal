import { motion } from 'framer-motion';
import { Clock, MessageSquare, ShieldCheck, Users, Package, ExternalLink, Trophy, Cpu, Heart } from 'lucide-react';

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" as const } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
};

const projects = [
  {
    id: 'viveplus',
    badge: { label: 'En curso', icon: Clock, style: 'bg-amber-500/10 border-amber-500/30 text-amber-400' },
    title: 'VIVEPLUS',
    subtitle: 'Plataforma web de cuidado y acompañamiento para personas mayores',
    description: (
      <>
        VIVEPLUS es una plataforma web orientada a personas mayores de 55 años que conecta usuarios,
        cuidadores (médicos/profesionales) y organizaciones. Incluye{' '}
        <span className="text-cyan-400">chat en tiempo real</span>, gestión de productos y servicios,
        recursos de salud, cercanía entre usuarios y un{' '}
        <span className="text-cyan-400">sistema de autenticación propio</span>.
      </>
    ),
    features: [
      { icon: Users,         color: 'text-cyan-400',   label: 'Usuarios, cuidadores y organizaciones' },
      { icon: MessageSquare, color: 'text-blue-400',   label: 'Chat en tiempo real' },
      { icon: Package,       color: 'text-purple-400', label: 'Productos y servicios' },
      { icon: ShieldCheck,   color: 'text-green-400',  label: 'Autenticación propia' },
    ],
    stack: ['React', 'Next.js', 'Node.js', 'TypeScript', 'Tailwind CSS', 'PostgreSQL', 'Socket.io', 'Stripe'],
    link: null,
  },
  {
    id: 'nexa',
    badge: { label: '1º Hackathon', icon: Trophy, style: 'bg-yellow-500/10 border-yellow-500/30 text-yellow-400' },
    title: 'NEXA',
    subtitle: 'Solución tecnológica para combatir la soledad en mayores de 65 años',
    description: (
      <>
        NEXA es una solución tecnológica compuesta por una{' '}
        <span className="text-cyan-400">pulsera inteligente</span> y una plataforma digital orientada
        a personas mayores de 65 años con soledad no deseada. Desarrollado durante la hackathon
        organizada por <span className="text-cyan-400">Netbees</span>, resultó{' '}
        <span className="text-yellow-400">ganador del primer puesto</span>.
      </>
    ),
    features: [
      { icon: Cpu,           color: 'text-cyan-400',   label: 'Pulsera inteligente IoT' },
      { icon: Heart,         color: 'text-pink-400',   label: 'Monitorización salud' },
      { icon: Users,         color: 'text-blue-400',   label: 'Red de acompañamiento' },
      { icon: Trophy,        color: 'text-yellow-400', label: '1er puesto Hack The Age' },
    ],
    stack: ['React', 'Node.js', 'TypeScript', 'Tailwind CSS', 'IoT'],
    link: 'https://javierechevarria1.github.io/PaginaNexa/',
  },
];

export const Projects = () => {
  return (
    <section className="relative h-screen w-full flex flex-col justify-center px-6 pt-20 pb-6 overflow-hidden bg-[#0a0f18]">
      <div className="absolute top-1/3 left-10 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-[120px] -z-10" />

      <motion.div
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
        className="max-w-4xl mx-auto w-full"
      >
        <motion.div variants={fadeInUp} className="flex items-center gap-4 mb-6">
          <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight">Proyectos</h2>
          <div className="h-[1px] flex-1 bg-slate-800" />
        </motion.div>

        <div className="space-y-4 max-h-[70vh] overflow-y-auto pr-2 allow-scroll custom-scrollbar">
          {projects.map(({ id, badge, title, subtitle, description, features, stack, link }) => (
            <motion.div
              key={id}
              variants={fadeInUp}
              className="bg-slate-900/40 border border-slate-800/60 rounded-2xl p-5 md:p-6 hover:border-cyan-500/20 transition-all duration-300 hover:shadow-[0_10px_40px_rgba(0,0,0,0.5)]"
            >
              <div className="flex items-start justify-between gap-4 mb-4">
                <div>
                  <div className="flex items-center gap-2 mb-1.5">
                    <span className={`flex items-center gap-1.5 px-2.5 py-1 rounded-full border text-xs font-mono uppercase tracking-wider ${badge.style}`}>
                      <badge.icon size={11} /> {badge.label}
                    </span>
                  </div>
                  <h3 className="text-xl md:text-2xl font-black text-white tracking-tight">{title}</h3>
                  <p className="text-slate-400 text-sm mt-0.5">{subtitle}</p>
                </div>
                {link ? (
                  <a
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="shrink-0 flex items-center gap-2 px-3 py-2 rounded-lg border border-cyan-500/40 text-cyan-400 text-xs font-mono hover:bg-cyan-500/10 hover:border-cyan-400 transition-all duration-200"
                  >
                    <ExternalLink size={13} /> Ver proyecto
                  </a>
                ) : (
                  <button
                    disabled
                    className="shrink-0 flex items-center gap-2 px-3 py-2 rounded-lg border border-slate-700 text-slate-500 text-xs font-mono opacity-50 cursor-not-allowed"
                  >
                    <ExternalLink size={13} /> Ver proyecto
                  </button>
                )}
              </div>

              <p className="text-slate-300 text-sm leading-relaxed mb-4">{description}</p>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mb-4">
                {features.map(({ icon: Icon, color, label }) => (
                  <div key={label} className="flex items-center gap-2 bg-[#05080f] border border-slate-800/80 rounded-lg px-2.5 py-2">
                    <Icon size={13} className={color} />
                    <span className="text-slate-400 text-xs leading-tight">{label}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-1.5">
                {stack.map(tech => (
                  <span key={tech} className="px-2.5 py-1 bg-[#05080f] border border-slate-800/80 rounded-lg text-slate-400 font-mono text-xs hover:border-cyan-500/40 hover:text-cyan-400 transition-all duration-200">
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}

          <motion.div variants={fadeInUp} className="py-2">
            <p className="font-mono text-xs text-slate-600 text-center">
              &gt; <span className="text-cyan-500/50">ls ./proyectos</span>
              <span className="text-slate-600"> — más proyectos próximamente</span>
            </p>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};
