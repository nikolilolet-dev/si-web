import React, { useState } from 'react';
import { TopicData } from '../data/unitData';
import { 
  HelpCircle, 
  FileSpreadsheet, 
  CheckCircle2, 
  XCircle, 
  Info,
  Layers,
  Calculator,
  Briefcase,
  ChevronRight,
  BookOpen
} from 'lucide-react';

interface TopicSectionProps {
  topic: TopicData;
  isActive?: boolean;
}

export const TopicSection: React.FC<TopicSectionProps> = ({ topic }) => {
  const [selectedAnswers, setSelectedAnswers] = useState<Record<string, number>>({});

  const handleSelectOption = (questionId: string, optionIndex: number) => {
    setSelectedAnswers(prev => ({
      ...prev,
      [questionId]: optionIndex
    }));
  };

  const calculateDebits = topic.journalEntry.lines.reduce((acc, curr) => acc + (curr.debit || 0), 0);
  const calculateCredits = topic.journalEntry.lines.reduce((acc, curr) => acc + (curr.credit || 0), 0);

  return (
    <article
      id={topic.id}
      className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-xs p-6 sm:p-8 lg:p-10 mb-10 transition-colors scroll-mt-20"
    >
      {/* 1. TEMA PRINCIPAL */}
      <div className="pb-6 border-b border-slate-200 dark:border-slate-800 space-y-2">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-blue-900 text-white font-bold text-sm">
              {topic.number}
            </span>
            <span className="text-xs font-semibold text-blue-900 dark:text-blue-300 uppercase tracking-wider">
              Contabilidad Superior · Tema {topic.number}
            </span>
          </div>

          <div className="text-xs font-medium text-slate-700 dark:text-slate-300 bg-slate-100 dark:bg-slate-800 px-3 py-1 rounded-md border border-slate-200 dark:border-slate-700">
            Norma: <span className="font-semibold text-blue-900 dark:text-amber-300">{topic.standard}</span>
          </div>
        </div>

        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight font-display text-balance">
          {topic.number}. {topic.title}
        </h2>
      </div>

      {/* 2. CONCEPTO Y EXPLICACIÓN (Clara, Humana y Entendible) */}
      <div className="py-6 space-y-5">
        <div className="p-5 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700/70 space-y-3">
          <div className="flex items-center gap-2 text-blue-900 dark:text-amber-400">
            <BookOpen className="w-5 h-5 shrink-0" />
            <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-slate-100 font-display">
              {topic.conceptTitle}
            </h3>
          </div>

          <p className="text-sm text-slate-800 dark:text-slate-200 leading-relaxed font-medium">
            {topic.humanConcept}
          </p>

          <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed text-justify">
            {topic.humanExplanation}
          </p>

          {/* Puntos clave */}
          <div className="pt-2 border-t border-slate-200 dark:border-slate-700 space-y-1.5">
            <span className="text-xs font-bold text-slate-800 dark:text-slate-200 uppercase tracking-wider block">
              Puntos clave a recordar:
            </span>
            <ul className="text-xs text-slate-600 dark:text-slate-300 space-y-1">
              {topic.keyPoints.map((point, pIdx) => (
                <li key={pIdx} className="flex items-start gap-2">
                  <span className="text-blue-900 dark:text-amber-400 font-bold">•</span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* 3. EJEMPLO PRINCIPAL (Ejercicio Explicado Paso a Paso) */}
      <section className="py-6 border-t border-slate-200 dark:border-slate-800 space-y-4">
        <div className="flex items-center gap-2">
          <Calculator className="w-5 h-5 text-amber-600 dark:text-amber-400" />
          <h3 className="text-lg font-bold text-slate-900 dark:text-white font-display">
            {topic.stepByStepExercise.title}
          </h3>
        </div>

        <div className="p-5 sm:p-6 bg-amber-50/50 dark:bg-slate-850 rounded-xl border border-amber-200 dark:border-slate-700 space-y-4">
          <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
            <strong className="text-slate-900 dark:text-slate-100">Planteamiento del Caso: </strong>
            {topic.stepByStepExercise.scenario}
          </p>

          {/* Datos Iniciales */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
            {topic.stepByStepExercise.initialData.map((d, dIdx) => (
              <div key={dIdx} className="p-2.5 bg-white dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700 flex justify-between items-center">
                <span className="text-slate-600 dark:text-slate-400">{d.label}:</span>
                <span className="font-bold text-slate-900 dark:text-slate-100 font-mono">{d.value}</span>
              </div>
            ))}
          </div>

          {/* Pasos de resolución */}
          <div className="space-y-3 pt-2">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-800 dark:text-slate-200">
              Desarrollo de la Solución:
            </span>
            <div className="space-y-2.5">
              {topic.stepByStepExercise.steps.map((st) => (
                <div key={st.stepNumber} className="p-3.5 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-800 space-y-1 text-xs sm:text-sm">
                  <div className="font-bold text-blue-900 dark:text-amber-400 flex items-center gap-2">
                    <span className="w-5 h-5 rounded-full bg-blue-100 dark:bg-blue-900 text-blue-900 dark:text-blue-300 text-xs flex items-center justify-center shrink-0">
                      {st.stepNumber}
                    </span>
                    <span>{st.stepTitle}</span>
                  </div>
                  <p className="text-slate-600 dark:text-slate-300 pl-7 leading-relaxed">
                    {st.explanation}
                  </p>
                  {st.calculation && (
                    <div className="ml-7 mt-1 p-2 bg-slate-50 dark:bg-slate-800 rounded font-mono text-xs font-semibold text-blue-950 dark:text-amber-300 border border-slate-200 dark:border-slate-700">
                      {st.calculation}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Resultado Final */}
          <div className="p-3 bg-emerald-50 dark:bg-emerald-950/40 rounded-lg border border-emerald-200 dark:border-emerald-800 text-xs sm:text-sm text-emerald-900 dark:text-emerald-200 font-semibold">
            ✓ Resultado Final: {topic.stepByStepExercise.finalResult}
          </div>
        </div>
      </section>

      {/* 4. EJEMPLO 2: CASO PRÁCTICO */}
      <section className="py-6 border-t border-slate-200 dark:border-slate-800 space-y-4">
        <div className="flex items-center gap-2">
          <Briefcase className="w-5 h-5 text-blue-900 dark:text-blue-400" />
          <h3 className="text-lg font-bold text-slate-900 dark:text-white font-display">
            {topic.practicalCase.title}
          </h3>
        </div>

        <div className="p-5 sm:p-6 bg-slate-50 dark:bg-slate-800/40 rounded-xl border border-slate-200 dark:border-slate-700 space-y-3">
          <div className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
            Empresa de Ejemplo: {topic.practicalCase.companyContext}
          </div>

          <div className="space-y-1">
            <span className="text-xs font-bold text-slate-900 dark:text-slate-100 block">¿Qué ocurrió en el negocio?</span>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              {topic.practicalCase.whatHappened}
            </p>
          </div>

          <div className="p-3.5 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700/80 text-xs sm:text-sm">
            <span className="font-bold text-blue-900 dark:text-amber-400 block mb-1">Decisión del Contador e Impacto Financiero:</span>
            <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
              {topic.practicalCase.decisionAndImpact}
            </p>
          </div>
        </div>
      </section>

      {/* 5. EJEMPLO 3: ASIENTO CONTABLE */}
      <section className="py-6 border-t border-slate-200 dark:border-slate-800 space-y-4">
        <div className="flex items-center gap-2">
          <FileSpreadsheet className="w-5 h-5 text-indigo-700 dark:text-indigo-400" />
          <h3 className="text-lg font-bold text-slate-900 dark:text-white font-display">
            {topic.journalEntry.title}
          </h3>
        </div>

        <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300">
          {topic.journalEntry.description}
        </p>

        {/* Tabla de Diario */}
        <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-700">
          <table className="w-full text-left text-xs sm:text-sm border-collapse">
            <thead>
              <tr className="bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 font-bold border-b border-slate-200 dark:border-slate-700">
                <th className="py-2.5 px-3 sm:px-4 w-24">Código</th>
                <th className="py-2.5 px-3 sm:px-4">Cuenta / Detalle</th>
                <th className="py-2.5 px-3 sm:px-4 text-right w-32 sm:w-36">Débito (RD$)</th>
                <th className="py-2.5 px-3 sm:px-4 text-right w-32 sm:w-36">Crédito (RD$)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 dark:divide-slate-800">
              {topic.journalEntry.lines.map((line, idx) => (
                <tr 
                  key={idx}
                  className={`hover:bg-slate-50 dark:hover:bg-slate-800/40 transition-colors ${
                    line.credit ? 'text-slate-700 dark:text-slate-300' : 'font-semibold text-slate-900 dark:text-slate-100'
                  }`}
                >
                  <td className="py-2.5 px-3 sm:px-4 font-mono text-xs text-slate-500 dark:text-slate-400">
                    {line.code}
                  </td>
                  <td className="py-2.5 px-3 sm:px-4">
                    <div className={`${line.credit ? 'pl-4 sm:pl-6' : ''}`}>
                      <span>{line.account}</span>
                      {line.note && (
                        <span className="block text-[11px] text-slate-500 dark:text-slate-400 font-normal italic">
                          ({line.note})
                        </span>
                      )}
                    </div>
                  </td>
                  <td className="py-2.5 px-3 sm:px-4 text-right font-mono font-medium tabular-nums">
                    {line.debit ? line.debit.toLocaleString('es-DO', { minimumFractionDigits: 2 }) : '-'}
                  </td>
                  <td className="py-2.5 px-3 sm:px-4 text-right font-mono font-medium tabular-nums">
                    {line.credit ? line.credit.toLocaleString('es-DO', { minimumFractionDigits: 2 }) : '-'}
                  </td>
                </tr>
              ))}
            </tbody>
            <tfoot>
              <tr className="bg-slate-50 dark:bg-slate-800/80 font-bold border-t-2 border-slate-300 dark:border-slate-600 text-slate-900 dark:text-slate-100">
                <td colSpan={2} className="py-2.5 px-3 sm:px-4 text-right uppercase tracking-wider text-xs">
                  Sumas Iguales:
                </td>
                <td className="py-2.5 px-3 sm:px-4 text-right font-mono tabular-nums text-blue-900 dark:text-amber-400">
                  RD$ {calculateDebits.toLocaleString('es-DO', { minimumFractionDigits: 2 })}
                </td>
                <td className="py-2.5 px-3 sm:px-4 text-right font-mono tabular-nums text-blue-900 dark:text-amber-400">
                  RD$ {calculateCredits.toLocaleString('es-DO', { minimumFractionDigits: 2 })}
                </td>
              </tr>
            </tfoot>
          </table>
        </div>

        {/* Explicación de las cuentas */}
        <div className="p-3.5 bg-blue-50/70 dark:bg-slate-800/60 rounded-lg border border-blue-200 dark:border-slate-700 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
          <strong className="text-blue-950 dark:text-blue-300 block mb-1">¿Por qué se debita y acredita cada cuenta?</strong>
          <p className="leading-relaxed">
            {topic.journalEntry.rationale}
          </p>
        </div>
      </section>

      {/* 6. PREGUNTAS DE COMPROBACIÓN (Intactas) */}
      <section className="py-6 border-t border-slate-200 dark:border-slate-800 space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <HelpCircle className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
            <h3 className="text-lg font-bold text-slate-900 dark:text-white font-display">
              Preguntas de Comprobación y Evaluación
            </h3>
          </div>
          <span className="text-xs text-slate-500 dark:text-slate-400">
            {topic.quiz.length} Preguntas
          </span>
        </div>

        <div className="space-y-4">
          {topic.quiz.map((q, qIndex) => {
            const hasSelected = selectedAnswers[q.id] !== undefined;
            const selectedIdx = selectedAnswers[q.id];
            const isCorrect = selectedIdx === q.correctIndex;

            return (
              <div 
                key={q.id}
                className="p-4 sm:p-5 bg-slate-50 dark:bg-slate-800/40 rounded-xl border border-slate-200 dark:border-slate-700 space-y-3"
              >
                <div className="flex items-start gap-2.5">
                  <span className="w-5 h-5 rounded-full bg-slate-200 dark:bg-slate-700 text-slate-800 dark:text-slate-200 text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                    {qIndex + 1}
                  </span>
                  <h4 className="text-sm font-semibold text-slate-900 dark:text-slate-100 leading-snug">
                    {q.question}
                  </h4>
                </div>

                {/* Opciones */}
                <div className="space-y-2 pl-7">
                  {q.options.map((opt, optIdx) => {
                    const isThisSelected = selectedIdx === optIdx;
                    const isThisCorrect = optIdx === q.correctIndex;

                    let btnStyle = "border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-850 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300";
                    
                    if (hasSelected) {
                      if (isThisSelected) {
                        btnStyle = isCorrect
                          ? "border-emerald-500 bg-emerald-50 dark:bg-emerald-950/40 text-emerald-900 dark:text-emerald-200 font-semibold"
                          : "border-rose-500 bg-rose-50 dark:bg-rose-950/40 text-rose-900 dark:text-rose-200 font-semibold";
                      } else if (isThisCorrect) {
                        btnStyle = "border-emerald-500/80 bg-emerald-50/50 dark:bg-emerald-950/20 text-emerald-800 dark:text-emerald-300";
                      }
                    }

                    return (
                      <button
                        key={optIdx}
                        onClick={() => handleSelectOption(q.id, optIdx)}
                        className={`w-full text-left p-3 rounded-lg border text-xs sm:text-sm transition-all flex items-start gap-2.5 cursor-pointer ${btnStyle}`}
                      >
                        <span className="w-4 h-4 rounded-full border border-slate-300 dark:border-slate-600 flex items-center justify-center shrink-0 mt-0.5 text-[10px] font-mono">
                          {String.fromCharCode(65 + optIdx)}
                        </span>
                        <span className="flex-1 leading-relaxed">{opt}</span>
                        {hasSelected && isThisSelected && (
                          isCorrect ? (
                            <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                          ) : (
                            <XCircle className="w-4 h-4 text-rose-600 dark:text-rose-400 shrink-0 mt-0.5" />
                          )
                        )}
                      </button>
                    );
                  })}
                </div>

                {/* Explicación y Retroalimentación */}
                {hasSelected && (
                  <div className={`mt-3 p-3 rounded-lg text-xs leading-relaxed pl-7 ${
                    isCorrect 
                      ? 'bg-emerald-50 dark:bg-emerald-950/30 text-emerald-900 dark:text-emerald-200 border border-emerald-200 dark:border-emerald-800' 
                      : 'bg-amber-50 dark:bg-amber-950/30 text-amber-900 dark:text-amber-200 border border-amber-200 dark:border-amber-800'
                  }`}>
                    <span className="font-bold block mb-1">
                      {isCorrect ? '✓ Respuesta Correcta:' : '⚠ Explicación Técnica:'}
                    </span>
                    {q.explanation}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>
    </article>
  );
};
