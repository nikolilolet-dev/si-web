import React from 'react';
import { UfhecLogo } from './UfhecLogo';
import { Moon, Sun } from 'lucide-react';

interface HeaderProps {
  isDark: boolean;
  onToggleTheme: () => void;
  activeSection: string;
  onNavigate: (sectionId: string) => void;
}

export const Header: React.FC<HeaderProps> = ({
  isDark,
  onToggleTheme,
  activeSection,
  onNavigate,
}) => {
  return (
    <header className="sticky top-0 z-40 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 min-h-16 py-2 flex flex-wrap items-center justify-between gap-x-8 gap-y-2">
        {/* Zone 1: Brand wordmark */}
        <div 
          onClick={() => onNavigate('portada-academica')}
          className="cursor-pointer flex items-center gap-2.5 whitespace-nowrap shrink-0 group"
        >
          <UfhecLogo size="sm" showText={false} />
          <div className="flex flex-col">
            <span className="font-extrabold text-base tracking-tight text-blue-950 dark:text-blue-100 font-display group-hover:text-blue-700 dark:group-hover:text-amber-400 transition-colors">
              UFHEC · Contabilidad
            </span>
            <span className="text-[10px] font-semibold text-amber-700 dark:text-amber-400 tracking-wider uppercase">
              Unidad V · Grupo 2
            </span>
          </div>
        </div>

        {/* Zone 2: 4-5 single line nav links */}
        <nav className="order-3 w-full lg:order-none lg:w-auto flex items-center gap-5 overflow-x-auto pb-1 text-xs font-semibold text-slate-600 dark:text-slate-300">
          <button
            onClick={() => onNavigate('5-1-partidas-extraordinarias')}
            className={`hover:text-blue-900 dark:hover:text-amber-400 transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
              activeSection === '5-1-partidas-extraordinarias' ? 'text-blue-900 dark:text-amber-400 border-b-2 border-blue-900 dark:border-amber-400 pb-0.5' : ''
            }`}
          >
            5.1 Extraordinarias
          </button>

          <button
            onClick={() => onNavigate('5-2-ajustes-periodos-anteriores')}
            className={`hover:text-blue-900 dark:hover:text-amber-400 transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
              activeSection === '5-2-ajustes-periodos-anteriores' ? 'text-blue-900 dark:text-amber-400 border-b-2 border-blue-900 dark:border-amber-400 pb-0.5' : ''
            }`}
          >
            5.2 Ajustes Anteriores
          </button>

          <button
            onClick={() => onNavigate('5-3-disposicion-segmento-negocio')}
            className={`hover:text-blue-900 dark:hover:text-amber-400 transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
              activeSection === '5-3-disposicion-segmento-negocio' ? 'text-blue-900 dark:text-amber-400 border-b-2 border-blue-900 dark:border-amber-400 pb-0.5' : ''
            }`}
          >
            5.3 Disposición Segmento
          </button>

          <button
            onClick={() => onNavigate('5-4-liquidacion-deuda')}
            className={`hover:text-blue-900 dark:hover:text-amber-400 transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
              activeSection === '5-4-liquidacion-deuda' ? 'text-blue-900 dark:text-amber-400 border-b-2 border-blue-900 dark:border-amber-400 pb-0.5' : ''
            }`}
          >
            5.4 Liquidación Deuda
          </button>

          <button
            onClick={() => onNavigate('conclusion-general')}
            className={`hover:text-amber-600 dark:hover:text-amber-300 transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
              activeSection === 'conclusion-general' ? 'text-amber-600 dark:text-amber-300 border-b-2 border-amber-600 pb-0.5 font-bold' : ''
            }`}
          >
            5.5 Conclusión
          </button>

          <button
            onClick={() => onNavigate('bibliografia-apa7')}
            className={`hover:text-blue-900 dark:hover:text-amber-400 transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
              activeSection === 'bibliografia-apa7' ? 'text-blue-900 dark:text-amber-400 border-b-2 border-blue-900 dark:border-amber-400 pb-0.5 font-bold' : ''
            }`}
          >
            Bibliografía
          </button>
        </nav>

        {/* Zone 3: Clean action zone (Theme switch) */}
        <div className="flex items-center gap-2 shrink-0">
          <button
            onClick={onToggleTheme}
            aria-label="Cambiar modo de color"
            className="p-2 text-slate-500 hover:text-slate-800 dark:text-slate-400 dark:hover:text-slate-100 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer"
          >
            {isDark ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-slate-600" />}
          </button>
        </div>
      </div>
    </header>
  );
};
