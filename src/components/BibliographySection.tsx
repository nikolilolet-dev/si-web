import React, { useState } from 'react';
import { BIBLIOGRAPHY_DATA, ReferenceItem } from '../data/unitData';
import { BookOpen, Copy, Check, ExternalLink, BookmarkCheck } from 'lucide-react';

export const BibliographySection: React.FC = () => {
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>('Todas');

  const categories = ['Todas', ...Array.from(new Set(BIBLIOGRAPHY_DATA.map(r => r.category)))];

  const filteredReferences = selectedCategory === 'Todas'
    ? BIBLIOGRAPHY_DATA
    : BIBLIOGRAPHY_DATA.filter(r => r.category === selectedCategory);

  const handleCopyCitation = (ref: ReferenceItem) => {
    navigator.clipboard.writeText(ref.apa7Citation);
    setCopiedId(ref.id);
    setTimeout(() => setCopiedId(null), 2500);
  };

  return (
    <article
      id="bibliografia-apa7"
      className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-xs p-6 sm:p-8 lg:p-10 mb-10 transition-colors scroll-mt-20"
    >
      {/* Cabecera de la Bibliografía */}
      <div className="pb-6 border-b border-slate-200 dark:border-slate-800 space-y-3">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-blue-900 text-white font-bold text-sm">
              <BookOpen className="w-4 h-4" />
            </span>
            <span className="text-xs font-semibold text-blue-900 dark:text-blue-400 uppercase tracking-wider">
              Aparato Crítico y Fundamentación Teórica
            </span>
          </div>

          <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-700 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/40 px-3 py-1 rounded-md border border-emerald-200 dark:border-emerald-800">
            <BookmarkCheck className="w-3.5 h-3.5" />
            <span>Formato APA 7.ª Edición</span>
          </div>
        </div>

        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight font-display">
          Referencias Bibliográficas y Fuentes Oficiales
        </h2>

        <p className="text-sm text-slate-600 dark:text-slate-300 max-w-3xl leading-relaxed">
          Fuentes primarias y normativas internacionales utilizadas en la investigación y desarrollo de la Unidad V:
          Partidas no usuales y de períodos anteriores. Todas las citas han sido estructuradas siguiendo los lineamientos de las Normas APA 7.ª Edición (American Psychological Association).
        </p>
      </div>

      {/* Selector de categorías para navegación ágil */}
      <div className="pt-6 pb-4">
        <div className="flex flex-wrap items-center gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-blue-900 text-white shadow-xs'
                  : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Lista de citas con sangría francesa (Hanging Indent) APA 7 */}
      <div className="space-y-4 pt-2">
        {filteredReferences.map((ref) => {
          const isCopied = copiedId === ref.id;
          return (
            <div
              key={ref.id}
              className="p-4 sm:p-5 bg-slate-50/70 dark:bg-slate-800/50 rounded-xl border border-slate-200/90 dark:border-slate-700/80 hover:border-blue-300 dark:hover:border-blue-700 transition-colors"
            >
              <div className="flex flex-wrap items-center justify-between gap-2 mb-2.5">
                <div className="flex items-center gap-2">
                  <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-blue-100 text-blue-900 dark:bg-blue-950 dark:text-blue-300 border border-blue-200 dark:border-blue-800">
                    {ref.category}
                  </span>
                  <span className="text-xs font-medium text-slate-500 dark:text-slate-400">
                    {ref.standardOrTopic}
                  </span>
                </div>

                <div className="flex items-center gap-1.5">
                  <button
                    onClick={() => handleCopyCitation(ref)}
                    title="Copiar cita APA 7"
                    className="inline-flex items-center gap-1 px-2.5 py-1 text-[11px] font-medium text-slate-700 dark:text-slate-200 bg-white dark:bg-slate-700 hover:bg-slate-100 dark:hover:bg-slate-600 rounded-md border border-slate-200 dark:border-slate-600 transition-colors cursor-pointer"
                  >
                    {isCopied ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                        <span className="text-emerald-700 dark:text-emerald-400 font-semibold">Copiado</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5 text-slate-500" />
                        <span>Copiar APA 7</span>
                      </>
                    )}
                  </button>

                  {ref.url && (
                    <a
                      href={ref.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      title="Visitar portal oficial"
                      className="inline-flex items-center gap-1 px-2 py-1 text-[11px] font-medium text-blue-800 dark:text-blue-300 hover:text-blue-900 bg-blue-50 dark:bg-blue-950/50 hover:bg-blue-100 rounded-md border border-blue-200 dark:border-blue-800 transition-colors"
                    >
                      <ExternalLink className="w-3 h-3" />
                      <span>Oficial</span>
                    </a>
                  )}
                </div>
              </div>

              {/* Sangría francesa característica de APA 7 */}
              <p className="text-sm text-slate-900 dark:text-slate-100 pl-6 -indent-6 leading-relaxed font-serif">
                {ref.apa7Citation}
              </p>

              {/* Breve descripción o aplicación en la unidad */}
              <div className="mt-2 text-xs text-slate-600 dark:text-slate-400 border-t border-slate-200/60 dark:border-slate-700/60 pt-2">
                <span className="font-semibold text-slate-700 dark:text-slate-300">Aplicación en la Unidad:</span> {ref.notes}
              </div>
            </div>
          );
        })}
      </div>
    </article>
  );
};
