import React from 'react';
import { UNIT_INTRODUCTION, UNIT_CONCEPT } from '../data/unitData';
import { BookOpen, Lightbulb, Compass, CheckCircle2 } from 'lucide-react';

export const IntroAndConcept: React.FC = () => {
  return (
    <section className="space-y-6 mb-10">
      {/* 1. Breve Introducción a la Exposición (No Interactiva) */}
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 sm:p-8 lg:p-10 shadow-xs space-y-4">
        <div className="flex items-center gap-2.5 text-blue-900 dark:text-amber-400">
          <Compass className="w-5 h-5 shrink-0" />
          <h2 className="text-lg sm:text-xl font-bold tracking-tight font-display text-slate-900 dark:text-white">
            {UNIT_INTRODUCTION.title}
          </h2>
        </div>

        <p className="text-sm sm:text-base text-slate-700 dark:text-slate-300 leading-relaxed text-justify">
          {UNIT_INTRODUCTION.text}
        </p>

        {/* Resumen visual de los 4 temas que se abordarán */}
        <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 text-xs">
          <div className="p-3 bg-slate-50 dark:bg-slate-800/60 rounded-xl border border-slate-200 dark:border-slate-700/80">
            <span className="font-bold text-blue-900 dark:text-amber-400 block mb-1">5.1. Extraordinarias</span>
            Sucesos inusuales e infrecuentes como siniestros y expropiaciones bajo la NIC 1.
          </div>
          <div className="p-3 bg-slate-50 dark:bg-slate-800/60 rounded-xl border border-slate-200 dark:border-slate-700/80">
            <span className="font-bold text-blue-900 dark:text-amber-400 block mb-1">5.2. Ajustes Anteriores</span>
            Corrección de errores del pasado en utilidades acumuladas según la NIC 8.
          </div>
          <div className="p-3 bg-slate-50 dark:bg-slate-800/60 rounded-xl border border-slate-200 dark:border-slate-700/80">
            <span className="font-bold text-blue-900 dark:text-amber-400 block mb-1">5.3. Disposición de Segmento</span>
            Venta o cierre de una división y su presentación separada bajo la NIIF 5.
          </div>
          <div className="p-3 bg-slate-50 dark:bg-slate-800/60 rounded-xl border border-slate-200 dark:border-slate-700/80">
            <span className="font-bold text-blue-900 dark:text-amber-400 block mb-1">5.4. Liquidación de Deuda</span>
            Extinción de pasivos mediante dación en pago y acciones bajo la NIIF 9.
          </div>
        </div>
      </div>

      {/* 2. Breve Concepto de la Unidad V (No Interactivo) */}
      <div className="bg-gradient-to-br from-blue-50/60 via-slate-50 to-amber-50/40 dark:from-slate-900 dark:via-slate-850 dark:to-slate-900 border border-blue-200/80 dark:border-slate-800 rounded-2xl p-6 sm:p-8 lg:p-10 shadow-xs space-y-4">
        <div className="flex items-center gap-2.5 text-amber-700 dark:text-amber-400">
          <Lightbulb className="w-5 h-5 shrink-0" />
          <h2 className="text-lg sm:text-xl font-bold tracking-tight font-display text-slate-900 dark:text-white">
            {UNIT_CONCEPT.title}
          </h2>
        </div>

        <p className="text-sm sm:text-base text-slate-700 dark:text-slate-300 leading-relaxed text-justify">
          {UNIT_CONCEPT.text}
        </p>

        <div className="p-4 bg-white/90 dark:bg-slate-800/80 rounded-xl border border-slate-200 dark:border-slate-700 text-xs sm:text-sm text-slate-600 dark:text-slate-300 flex items-start gap-3">
          <CheckCircle2 className="w-5 h-5 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
          <div>
            <strong className="text-slate-900 dark:text-slate-100 font-bold block mb-0.5">
              Principio de Prudencia y Transparencia Financiera:
            </strong>
            Separar lo rutinario de lo atípico salvaguarda la fe pública contable, garantiza estados financieros fidedignos y permite que tanto los socios como la Dirección General de Impuestos Internos (DGII) conozcan la realidad económica exacta de la entidad.
          </div>
        </div>
      </div>
    </section>
  );
};
