import { motion, AnimatePresence } from 'framer-motion';
import { X, Award, Code, Database, Globe, ZoomIn } from 'lucide-react';
import { useEffect, useState } from 'react';

interface NetbeesModalProps {
  open: boolean;
  onClose: () => void;
}

const bullets = [
  {
    icon: Award,
    color: 'text-yellow-400',
    text: 'Participé en la hackathon organizada por la empresa, colaborando en el diseño y desarrollo de "Nexa", una solución tecnológica compuesta por una pulsera inteligente y una plataforma digital orientada a personas mayores de 65 años con soledad no deseada. El proyecto resultó ganador tras la presentación final ante la empresa.',
  },
  {
    icon: Code,
    color: 'text-cyan-400',
    text: 'Formé parte del desarrollo full stack de un modelo de negocio llamado VIVE+, una plataforma diseñada en React, Next.js, Node.js, TypeScript, Tailwind CSS y PostgreSQL, participando en la implementación de funcionalidades frontend y backend, APIs REST, sistemas de autenticación, chat en tiempo real e integración de Stripe para pagos y suscripciones.',
  },
  {
    icon: Database,
    color: 'text-blue-400',
    text: 'Colaboré en la gestión, optimización y reestructuración de bases de datos mediante PostgreSQL, DBeaver y pgAdmin, así como en el control de versiones y trabajo colaborativo utilizando Git y GitHub mediante ramas propias, commits, push y merges coordinados con el equipo de desarrollo.',
  },
  {
    icon: Globe,
    color: 'text-orange-400',
    text: 'Asistí al AWS Summit Madrid 2026, uno de los eventos tecnológicos más importantes del año. Recorrí la zona de exposición de empresas como AWS, Accenture, NTT DATA, Anthropic, Cloudflare, Palo Alto Networks o Snowflake, y pude conocer de cerca cómo están aplicando cloud computing, IA generativa, ciberseguridad y automatización en casos reales. También tuve la oportunidad de conversar con profesionales del sector, intercambiar experiencias y ampliar mi visión sobre las tendencias que están transformando el ecosistema IT.',
  },
];

const base = import.meta.env.BASE_URL;
const photosNetbees = [
  { src: `${base}images/nexa-pulsera.jpeg`, alt: 'Proyecto NEXA — pulsera inteligente' },
  { src: `${base}images/hackathon-premio.jpeg`, alt: 'Primer puesto Hackathon Hack The Age' },
  { src: `${base}images/hackathon-presentacion.jpeg`, alt: 'Presentación NEXA en Netbees' },
  { src: `${base}images/fotoequipo.jpg`, alt: 'Equipo de prácticas en Netbees' },
];
const photosAWS = [
  { src: `${base}images/foto1AWS.jpg`, alt: 'AWS Summit Madrid 2026' },
  { src: `${base}images/foto2AWS.jpg`, alt: 'AWS Summit Madrid 2026 — stands y exposición' },
  { src: `${base}images/AcreditacionAWS.jpg`, alt: 'Acreditación AWS Summit Madrid 2026' },
];

function PhotoGrid({ photos, cols }: { photos: { src: string; alt: string }[]; cols: string }) {
  const [lightbox, setLightbox] = useState<string | null>(null);

  return (
    <>
      <div className={`grid ${cols} gap-3`}>
        {photos.map((photo, i) => (
          <button
            key={i}
            onClick={() => setLightbox(photo.src)}
            className="group relative rounded-xl overflow-hidden border border-slate-800/60 aspect-[4/3] bg-slate-900 cursor-zoom-in"
          >
            <img
              src={photo.src}
              alt={photo.alt}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 flex items-center justify-center">
              <ZoomIn size={24} className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          </button>
        ))}
      </div>

      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[199999] flex items-center justify-center p-4"
            onClick={() => setLightbox(null)}
          >
            <div className="absolute inset-0 bg-black/95 backdrop-blur-sm" />
            <motion.img
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
              src={lightbox}
              alt=""
              className="relative z-10 max-w-[90vw] max-h-[90vh] object-contain rounded-xl shadow-2xl"
              onClick={e => e.stopPropagation()}
            />
            <button
              onClick={() => setLightbox(null)}
              className="absolute top-4 right-4 z-10 p-2 rounded-lg bg-slate-800/80 text-slate-300 hover:text-white hover:bg-slate-700 transition-all duration-200"
            >
              <X size={20} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export const NetbeesModal = ({ open, onClose }: NetbeesModalProps) => {
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
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" />

          {/* Panel */}
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.96 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="allow-scroll relative z-10 w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-[#0a0f18] border border-slate-700/60 rounded-2xl shadow-[0_30px_80px_rgba(0,0,0,0.8)] custom-scrollbar"
            onClick={e => e.stopPropagation()}
            onWheel={e => e.stopPropagation()}
          >
            {/* Header */}
            <div className="sticky top-0 z-10 flex items-center justify-between px-6 py-4 bg-[#0a0f18]/95 backdrop-blur border-b border-slate-800/60">
              <div>
                <p className="text-xs font-mono text-cyan-400 uppercase tracking-wider mb-0.5">2024 — 2026</p>
                <h2 className="text-lg md:text-xl font-bold text-white">Prácticas en Netbees <span className="text-slate-400 font-normal text-base">(500h)</span></h2>
              </div>
              <button
                onClick={onClose}
                className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-all duration-200"
              >
                <X size={20} />
              </button>
            </div>

            <div className="p-6 space-y-8">
              {/* Fotos Netbees */}
              <PhotoGrid photos={photosNetbees} cols="grid-cols-2 md:grid-cols-4" />

              {/* Descripción */}
              <div className="space-y-5">
                {bullets.map(({ icon: Icon, color, text }, i) => (
                  <div key={i} className="flex gap-4 bg-slate-900/40 border border-slate-800/50 rounded-xl p-4">
                    <div className="mt-0.5 shrink-0">
                      <Icon size={18} className={color} />
                    </div>
                    <p className="text-slate-300 text-sm leading-relaxed">{text}</p>
                  </div>
                ))}
              </div>

              {/* Fotos AWS Summit */}
              <div>
                <p className="text-xs font-mono text-orange-400 uppercase tracking-wider mb-3">AWS Summit Madrid 2026</p>
                <PhotoGrid photos={photosAWS} cols="grid-cols-3" />
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
