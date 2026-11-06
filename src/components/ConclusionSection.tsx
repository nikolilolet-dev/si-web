import React from 'react';
import { CONCLUSION_DATA, ACADEMIC_INFO } from '../data/unitData';
import { UfhecLogo } from './UfhecLogo';
import { ShieldCheck } from 'lucide-react';

export const ConclusionSection: React.FC = () => {
  return (
    <article
      id="conclusion-general"
      className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-xs p-6 sm:p-8 lg:p-10 mb-10 transition-colors scroll-mt-20"
    >
      {/* 1. TEMA DE CIERRE */}
      <div className="pb-6 border-b border-slate-200 dark:border-slate-800 space-y-2">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-amber-600 text-white font-bold text-sm">
              5.5
            </span>
            <span className="text-xs font-semibold text-amber-700 dark:text-amber-400 uppercase tracking-wider">
              Contabilidad Superior · Cierre de Unidad
            </span>
          </div>

          <div className="text-xs font-medium text-slate-700 dark:text-slate-300 bg-amber-50 dark:bg-amber-950/40 px-3 py-1 rounded-md border border-amber-200 dark:border-amber-800">
            Síntesis Final
          </div>
        </div>

        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight font-display">
          {CONCLUSION_DATA.title}
        </h2>
      </div>

      {/* 2. CONCEPTO Y REFLEXIÓN DEL GRUPO 2 */}
      <div className="py-6 space-y-5">
        <div className="p-5 sm:p-7 bg-amber-50/40 dark:bg-slate-800/50 rounded-xl border border-amber-200 dark:border-slate-700/70 space-y-4">
          <div className="flex items-center gap-2 text-amber-800 dark:text-amber-400">
            <ShieldCheck className="w-5 h-5 shrink-0" />
            <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-slate-100 font-display">
              Reflexión y Conclusión del Grupo 2
            </h3>
          </div>

          <p className="text-sm text-slate-800 dark:text-slate-200 leading-relaxed font-medium">
            {CONCLUSION_DATA.humanSummary}
          </p>

          <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed text-justify">
            {CONCLUSION_DATA.humanExplanation}
          </p>

          <div className="pt-3 border-t border-amber-200 dark:border-slate-700 space-y-2">
            <span className="text-xs font-bold text-slate-800 dark:text-slate-200 uppercase tracking-wider block">
              Reflexiones y Conclusiones Clave del Grupo:
            </span>
            <ul className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 space-y-2.5">
              {CONCLUSION_DATA.keyPoints.map((point, pIdx) => (
                <li key={pIdx} className="flex items-start gap-2.5 leading-relaxed">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-600 dark:bg-amber-400 shrink-0 mt-2" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* 3. FIRMAS FORMALES DE LOS EXPOSITORES (GRUPO 2) */}
      <div className="pt-8 border-t border-slate-200 dark:border-slate-800 mt-4">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 p-6 bg-slate-50 dark:bg-slate-800/40 rounded-xl border border-slate-200 dark:border-slate-700">
          <div className="space-y-1.5 text-center sm:text-left flex flex-col items-center sm:items-start">
            {/* Logotipo oficial de la UFHEC nivelado */}
            <div className="mb-1">
              <UfhecLogo size="sm" showText={false} />
            </div>
            <div className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
              {ACADEMIC_INFO.institution} · {ACADEMIC_INFO.group}
            </div>
            <div className="text-base font-bold text-slate-900 dark:text-slate-100">
              Expositores del Trabajo:
            </div>
            <div className="text-sm text-blue-900 dark:text-amber-400 font-semibold">
              Axcel Feliz & Yemarlin Morillo
            </div>
            <div className="text-xs text-slate-500 dark:text-slate-400">
              Asignatura: {ACADEMIC_INFO.subject} · {ACADEMIC_INFO.teacher} · {ACADEMIC_INFO.date}
            </div>
          </div>

          <div className="flex items-center gap-6">
            <div className="text-center">
              <div className="w-32 sm:w-40 border-b border-slate-400 dark:border-slate-600 mb-1.5" />
              <div className="text-xs font-bold text-slate-800 dark:text-slate-200">Axcel Feliz</div>
              <div className="text-[10px] text-slate-500">Expositor Grupo 2</div>
            </div>
            <div className="text-center">
              <div className="w-32 sm:w-40 border-b border-slate-400 dark:border-slate-600 mb-1.5" />
              <div className="text-xs font-bold text-slate-800 dark:text-slate-200">Yemarlin Morillo</div>
              <div className="text-[10px] text-slate-500">Expositora Grupo 2</div>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};
