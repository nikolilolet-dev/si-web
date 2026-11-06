import React from 'react';
import { UNIT_TOPICS, CONCLUSION_DATA } from '../data/unitData';
import { BookOpen, ChevronRight } from 'lucide-react';

interface InteractiveIndexProps {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
}

export const InteractiveIndex: React.FC<InteractiveIndexProps> = ({
  activeSection,
  onNavigate,
}) => {
  return (
    <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 sm:p-8 mb-10 shadow-xs transition-colors">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-5 border-b border-slate-200 dark:border-slate-800">
        <div>
          <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white font-display flex items-center gap-2">
            <BookOpen className="w-5 h-5 text-blue-900 dark:text-amber-400" />
            Índice de Secciones de la Exposición
          </h3>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
            Toca cualquiera de las secciones para ir directamente a su desarrollo teórico, ejercicios y preguntas.
          </p>
        </div>
        <span className="text-xs font-semibold text-blue-900 dark:text-blue-300 bg-blue-50 dark:bg-blue-950/50 px-3 py-1 rounded-full border border-blue-200 dark:border-blue-900 self-start sm:self-center">
          6 Secciones Preparadas
        </span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-3 pt-5">
        {UNIT_TOPICS.map((topic) => {
          const isActive = activeSection === topic.id;
          return (
            <button
              key={topic.id}
              onClick={() => onNavigate(topic.id)}
              className={`p-4 rounded-xl border text-left flex flex-col justify-between transition-all group cursor-pointer ${
                isActive
                  ? 'border-blue-800 dark:border-amber-400 bg-blue-50/70 dark:bg-slate-800 shadow-xs ring-1 ring-blue-800 dark:ring-amber-400'
                  : 'border-slate-200 dark:border-slate-800 bg-slate-50/70 dark:bg-slate-850 hover:border-slate-300 dark:hover:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800'
              }`}
            >
              <div>
                <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400 mb-2">
                  <span className="font-bold text-blue-900 dark:text-amber-400 font-mono">
                    {topic.number}
                  </span>
                  <span className="text-[10px] font-semibold text-slate-400">
                    {topic.quiz.length} Preguntas
                  </span>
                </div>
                <h4 className="text-xs sm:text-sm font-bold text-slate-900 dark:text-slate-100 group-hover:text-blue-900 dark:group-hover:text-amber-300 transition-colors line-clamp-2">
                  {topic.title}
                </h4>
                <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-1 line-clamp-2">
                  {topic.standard}
                </p>
              </div>

              <div className="mt-4 pt-2 border-t border-slate-200/80 dark:border-slate-750 flex items-center justify-between text-[11px] font-semibold text-blue-900 dark:text-amber-400">
                <span>Tocar e ir</span>
                <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </button>
          );
        })}

        {/* Tarjeta de la Conclusión */}
        <button
          onClick={() => onNavigate(CONCLUSION_DATA.id)}
          className={`p-4 rounded-xl border text-left flex flex-col justify-between transition-all group cursor-pointer ${
            activeSection === CONCLUSION_DATA.id
              ? 'border-amber-600 dark:border-amber-400 bg-amber-50/80 dark:bg-slate-800 shadow-xs ring-1 ring-amber-600 dark:ring-amber-400'
              : 'border-amber-200 dark:border-amber-900/60 bg-amber-50/40 dark:bg-amber-950/20 hover:border-amber-300 hover:bg-amber-50/70'
          }`}
        >
          <div>
            <div className="flex items-center justify-between text-xs text-amber-700 dark:text-amber-400 mb-2">
              <span className="font-bold font-mono">5.5</span>
              <span className="text-[10px] font-semibold uppercase tracking-wider">Cierre</span>
            </div>
            <h4 className="text-xs sm:text-sm font-bold text-slate-900 dark:text-slate-100 group-hover:text-amber-700 dark:group-hover:text-amber-300 transition-colors line-clamp-2">
              {CONCLUSION_DATA.title}
            </h4>
            <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-1 line-clamp-2">
              Síntesis integral y firmas del grupo
            </p>
          </div>

          <div className="mt-4 pt-2 border-t border-amber-200 dark:border-amber-900/40 flex items-center justify-between text-[11px] font-semibold text-amber-800 dark:text-amber-400">
            <span>Tocar e ir</span>
            <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </div>
        </button>

        {/* Tarjeta de la Bibliografía APA 7 */}
        <button
          onClick={() => onNavigate('bibliografia-apa7')}
          className={`p-4 rounded-xl border text-left flex flex-col justify-between transition-all group cursor-pointer ${
            activeSection === 'bibliografia-apa7'
              ? 'border-blue-700 dark:border-blue-400 bg-blue-50/80 dark:bg-slate-800 shadow-xs ring-1 ring-blue-700 dark:ring-blue-400'
              : 'border-blue-200 dark:border-blue-900/60 bg-blue-50/30 dark:bg-blue-950/20 hover:border-blue-300 hover:bg-blue-50/60'
          }`}
        >
          <div>
            <div className="flex items-center justify-between text-xs text-blue-900 dark:text-blue-400 mb-2">
              <span className="font-bold font-mono">APA 7</span>
              <span className="text-[10px] font-semibold uppercase tracking-wider">Fuentes</span>
            </div>
            <h4 className="text-xs sm:text-sm font-bold text-slate-900 dark:text-slate-100 group-hover:text-blue-900 dark:group-hover:text-blue-300 transition-colors line-clamp-2">
              Bibliografía Oficial
            </h4>
            <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-1 line-clamp-2">
              NIIF, NIC, APB 30 y Código Tributario
            </p>
          </div>

          <div className="mt-4 pt-2 border-t border-blue-200 dark:border-blue-900/40 flex items-center justify-between text-[11px] font-semibold text-blue-900 dark:text-blue-400">
            <span>Tocar e ir</span>
            <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </div>
        </button>
      </div>
    </div>
  );
};
