import React from 'react';
import { UfhecLogo } from './UfhecLogo';
import { ACADEMIC_INFO } from '../data/unitData';
import { 
  GraduationCap, 
  Calendar, 
  Users, 
  BookOpen, 
  ArrowDown
} from 'lucide-react';

interface UniversityCoverProps {
  onStartExploration: () => void;
}

export const UniversityCover: React.FC<UniversityCoverProps> = ({
  onStartExploration,
}) => {
  return (
    <section 
      id="portada-academica"
      className="relative bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-sm p-6 sm:p-10 lg:p-12 mb-8 overflow-hidden transition-colors"
    >
      {/* Franja superior con los colores institucionales de UFHEC */}
      <div className="absolute top-0 left-0 right-0 h-2.5 bg-gradient-to-r from-[#7A0019] via-amber-500 to-[#0B2B61]" />

      {/* Cabecera institucional limpia (sin facultad de ciencias económicas) */}
      <div className="flex flex-col items-center text-center space-y-3 pb-6 border-b border-slate-200 dark:border-slate-800">
        <UfhecLogo size="lg" showText={false} />
        <div className="space-y-1">
          <h1 className="text-xl sm:text-2xl lg:text-3xl font-black uppercase tracking-tight text-blue-950 dark:text-blue-100 font-display">
            {ACADEMIC_INFO.institution}
          </h1>
          <p className="text-xs sm:text-sm font-semibold text-amber-700 dark:text-amber-400 tracking-wide uppercase">
            {ACADEMIC_INFO.campus} · República Dominicana
          </p>
        </div>
      </div>

      {/* Título de la Exposición y Unidad */}
      <div className="py-8 text-center max-w-4xl mx-auto space-y-3">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 text-xs font-semibold text-blue-900 dark:text-blue-200 bg-blue-50 dark:bg-blue-950/60 rounded-full border border-blue-200 dark:border-blue-900">
          <GraduationCap className="w-4 h-4 text-blue-700 dark:text-blue-400" />
          <span>Exposición Temática · Asignatura de Grado</span>
        </div>

        <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-slate-900 dark:text-white tracking-tight leading-tight font-display text-balance">
          {ACADEMIC_INFO.unitTitle}
        </h2>
        
        <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 max-w-2xl mx-auto leading-relaxed">
          Panel expositivo, casos prácticos y ejercicios de diario para Contabilidad Superior.
        </p>
      </div>

      {/* Grilla con los datos académicos formales requeridos */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-5 bg-slate-50 dark:bg-slate-800/60 rounded-xl border border-slate-200 dark:border-slate-700/80 mb-6">
        
        {/* Asignatura */}
        <div className="flex items-start gap-3">
          <div className="w-9 h-9 rounded-lg bg-blue-100 dark:bg-blue-900/50 flex items-center justify-center text-blue-900 dark:text-blue-300 shrink-0 mt-0.5">
            <BookOpen className="w-4 h-4" />
          </div>
          <div>
            <div className="text-[11px] font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
              Asignatura
            </div>
            <div className="text-sm font-bold text-slate-900 dark:text-slate-100">
              {ACADEMIC_INFO.subject}
            </div>
          </div>
        </div>

        {/* Docente */}
        <div className="flex items-start gap-3">
          <div className="w-9 h-9 rounded-lg bg-amber-100 dark:bg-amber-900/50 flex items-center justify-center text-amber-900 dark:text-amber-300 shrink-0 mt-0.5">
            <GraduationCap className="w-4 h-4" />
          </div>
          <div>
            <div className="text-[11px] font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
              Docente
            </div>
            <div className="text-sm font-bold text-slate-900 dark:text-slate-100">
              {ACADEMIC_INFO.teacher}
            </div>
          </div>
        </div>

        {/* Grupo y Expositores */}
        <div className="flex items-start gap-3">
          <div className="w-9 h-9 rounded-lg bg-emerald-100 dark:bg-emerald-900/50 flex items-center justify-center text-emerald-900 dark:text-emerald-300 shrink-0 mt-0.5">
            <Users className="w-4 h-4" />
          </div>
          <div>
            <div className="text-[11px] font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
              {ACADEMIC_INFO.group} · Expositores
            </div>
            <div className="text-sm font-bold text-slate-900 dark:text-slate-100">
              {ACADEMIC_INFO.members.map(m => m.name).join(' & ')}
            </div>
          </div>
        </div>

        {/* Fecha */}
        <div className="flex items-start gap-3">
          <div className="w-9 h-9 rounded-lg bg-indigo-100 dark:bg-indigo-900/50 flex items-center justify-center text-indigo-900 dark:text-indigo-300 shrink-0 mt-0.5">
            <Calendar className="w-4 h-4" />
          </div>
          <div>
            <div className="text-[11px] font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
              Fecha
            </div>
            <div className="text-sm font-bold text-slate-900 dark:text-slate-100">
              {ACADEMIC_INFO.date}
            </div>
          </div>
        </div>
      </div>

      {/* Botón directo para iniciar la exploración */}
      <div className="flex justify-center pt-2">
        <button
          onClick={onStartExploration}
          className="inline-flex items-center gap-2 px-6 py-2.5 text-xs font-bold text-white bg-blue-900 hover:bg-blue-800 dark:bg-amber-600 dark:hover:bg-amber-500 dark:text-slate-950 rounded-lg shadow-sm transition-all cursor-pointer"
        >
          <span>Comenzar Exposición</span>
          <ArrowDown className="w-3.5 h-3.5" />
        </button>
      </div>
    </section>
  );
};
