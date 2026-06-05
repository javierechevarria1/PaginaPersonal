import { motion, AnimatePresence } from 'framer-motion';
import { X, Wrench, Wifi, HardDrive, Tv, ClipboardList } from 'lucide-react';
import { useEffect } from 'react';

interface SMRModalProps {
  open: boolean;
  onClose: () => void;
}

const bullets = [
  {
    icon: Wrench,
    color: 'text-blue-400',
    text: 'Realicé mantenimiento preventivo y correctivo de equipos informáticos: formateo e instalación de Windows 10, cambio de pasta térmica, ampliación de RAM, reparación de tarjetas gráficas, sustitución de fuentes de alimentación y desmontaje de equipos para piezas.',
  },
  {
    icon: Wifi,
    color: 'text-cyan-400',
    text: 'Resolví incidencias de conectividad WiFi en aulas, sala de profesores y biblioteca; configuré impresoras en red para distintos departamentos e instalé un switch en el aula de Informática 1.',
  },
  {
    icon: HardDrive,
    color: 'text-purple-400',
    text: 'Gestioné la clonación masiva de discos duros con Acronis para el aula Informática 1, e instalé Shadow Defender en portátiles TTL para proteger la configuración de los equipos frente a cambios no deseados.',
  },
  {
    icon: Tv,
    color: 'text-green-400',
    text: 'Coordiné el apartado técnico de eventos del centro: monté y configuré el equipo de sonido, proyección y micrófonos para la graduación de Bachillerato y el concierto de fin de curso, incluyendo el control de iluminación con equipo DMX.',
  },
  {
    icon: ClipboardList,
    color: 'text-yellow-400',
    text: 'Realicé el cotejo e inventario de 58 portátiles Acer para una auditoría de fondos europeos, y elaboré un Excel con el mapeo completo de las 78 aulas del centro con su materia y equipamiento asociado.',
  },
];

export const SMRModal = ({ open, onClose }: SMRModalProps) => {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
    if (open) window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="fixed inset-0 z-[99999] flex items-center justify-center p-4 md:p-8"
          onClick={onClose}
        >
          <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" />

          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.96 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="allow-scroll relative z-10 w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-[#0a0f18] border border-slate-700/60 rounded-2xl shadow-[0_30px_80px_rgba(0,0,0,0.8)] custom-scrollbar"
            onClick={e => e.stopPropagation()}
            onWheel={e => e.stopPropagation()}
          >
            <div className="sticky top-0 z-10 flex items-center justify-between px-6 py-4 bg-[#0a0f18]/95 backdrop-blur border-b border-slate-800/60">
              <div>
                <p className="text-xs font-mono text-cyan-400 uppercase tracking-wider mb-0.5">2022 — 2024</p>
                <h2 className="text-lg md:text-xl font-bold text-white">Sistemas Microinformáticos y Redes <span className="text-slate-400 font-normal text-sm">(SMR)</span></h2>
                <p className="text-slate-400 text-sm mt-0.5">Prácticas en IES José María Pereda <span className="text-slate-500">(400h)</span></p>
              </div>
              <button
                onClick={onClose}
                className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-all duration-200"
              >
                <X size={20} />
              </button>
            </div>

            <div className="p-6 space-y-5">
              {bullets.map(({ icon: Icon, color, text }, i) => (
                <div key={i} className="flex gap-4 bg-slate-900/40 border border-slate-800/50 rounded-xl p-4">
                  <div className="mt-0.5 shrink-0">
                    <Icon size={18} className={color} />
                  </div>
                  <p className="text-slate-300 text-sm leading-relaxed">{text}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
