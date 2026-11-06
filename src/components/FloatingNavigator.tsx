import React from 'react';
import { GraduationCap } from 'lucide-react';
import { UNIT_TOPICS, CONCLUSION_DATA } from '../data/unitData';

interface FloatingNavigatorProps {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
}

export const FloatingNavigator: React.FC<FloatingNavigatorProps> = ({
  activeSection,
  onNavigate,
}) => {
  return (
    <aside 
      aria-label="Navegación Rápida de Exposición"
      className="fixed bottom-5 left-1/2 -translate-x-1/2 z-30 flex items-center gap-1.5 p-1.5 bg-slate-900/90 dark:bg-slate-800/90 text-white rounded-full shadow-lg border border-slate-700/60 backdrop-blur-md transition-all text-xs"
    >
      <button
        onClick={() => onNavigate('portada-academica')}
        title="Ir al inicio / Portada"
        className="px-3 py-1.5 rounded-full hover:bg-slate-700/70 text-slate-300 hover:text-white transition-colors cursor-pointer flex items-center gap-1.5"
      >
        <GraduationCap className="w-3.5 h-3.5" />
        <span className="font-medium">Inicio</span>
      </button>

      <span className="text-slate-600 dark:text-slate-500">|</span>

      {UNIT_TOPICS.map((topic) => {
        const isSelected = activeSection === topic.id;
        return (
          <button
            key={topic.id}
            onClick={() => onNavigate(topic.id)}
            title={`${topic.number} ${topic.title}`}
            className={`px-2.5 py-1.5 rounded-full font-mono font-semibold transition-all cursor-pointer ${
              isSelected 
                ? 'bg-blue-600 text-white shadow-xs' 
                : 'text-slate-300 hover:text-white hover:bg-slate-700/70'
            }`}
          >
            {topic.number}
          </button>
        );
      })}

      <button
        onClick={() => onNavigate(CONCLUSION_DATA.id)}
        title="5.5 Conclusión General"
        className={`px-3 py-1.5 rounded-full font-medium transition-all cursor-pointer ${
          activeSection === CONCLUSION_DATA.id
            ? 'bg-amber-600 text-white shadow-xs font-semibold'
            : 'text-amber-300 hover:text-amber-200 hover:bg-slate-700/70'
        }`}
      >
        5.5 Conclusión
      </button>

      <button
        onClick={() => onNavigate('bibliografia-apa7')}
        title="Fuentes y Bibliografía APA 7"
        className={`px-3 py-1.5 rounded-full font-medium transition-all cursor-pointer ${
          activeSection === 'bibliografia-apa7'
            ? 'bg-blue-600 text-white shadow-xs font-semibold'
            : 'text-slate-300 hover:text-white hover:bg-slate-700/70'
        }`}
      >
        Bibliografía
      </button>
    </aside>
  );
};
