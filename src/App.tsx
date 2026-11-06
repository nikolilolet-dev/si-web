import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { UniversityCover } from './components/UniversityCover';
import { IntroAndConcept } from './components/IntroAndConcept';
import { InteractiveIndex } from './components/InteractiveIndex';
import { TopicSection } from './components/TopicSection';
import { ConclusionSection } from './components/ConclusionSection';
import { BibliographySection } from './components/BibliographySection';
import { UfhecLogo } from './components/UfhecLogo';
import { UNIT_TOPICS, CONCLUSION_DATA, ACADEMIC_INFO } from './data/unitData';
import { 
  Presentation, 
  FileText, 
  Search, 
  ArrowLeft, 
  ArrowRight, 
  Sparkles
} from 'lucide-react';

export default function App() {
  const [isDark, setIsDark] = useState<boolean>(false);
  const [activeSection, setActiveSection] = useState<string>('portada-academica');
  const [viewMode, setViewMode] = useState<'document' | 'slide'>('document');
  const [currentSlideIndex, setCurrentSlideIndex] = useState<number>(0);
  const [searchQuery, setSearchQuery] = useState<string>('');

  // Sincronizar tema oscuro en el elemento html
  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  const toggleTheme = () => {
    setIsDark(prev => !prev);
  };

  const handleNavigate = (sectionId: string) => {
    setActiveSection(sectionId);

    if (viewMode === 'slide') {
      if (sectionId === 'portada-academica') {
        setCurrentSlideIndex(0);
      } else if (sectionId === 'intro-y-concepto') {
        setCurrentSlideIndex(1);
      } else if (sectionId === CONCLUSION_DATA.id) {
        setCurrentSlideIndex(UNIT_TOPICS.length + 2);
      } else if (sectionId === 'bibliografia-apa7') {
        setCurrentSlideIndex(UNIT_TOPICS.length + 3);
      } else {
        const foundIdx = UNIT_TOPICS.findIndex(t => t.id === sectionId);
        if (foundIdx !== -1) {
          setCurrentSlideIndex(foundIdx + 2);
        }
      }
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };

  // Diapositivas para el modo presentación en vivo
  type SlideItem = 
    | { type: 'cover'; id: string; title: string; data?: undefined }
    | { type: 'intro'; id: string; title: string; data?: undefined }
    | { type: 'topic'; id: string; title: string; data: typeof UNIT_TOPICS[0] }
    | { type: 'conclusion'; id: string; title: string; data?: undefined }
    | { type: 'bibliography'; id: string; title: string; data?: undefined };

  const slides: SlideItem[] = [
    { type: 'cover', id: 'portada-academica', title: 'Portada Universitaria UFHEC' },
    { type: 'intro', id: 'intro-y-concepto', title: 'Introducción y Concepto de la Unidad' },
    ...UNIT_TOPICS.map(t => ({ type: 'topic' as const, id: t.id, title: `${t.number} ${t.title}`, data: t })),
    { type: 'conclusion', id: CONCLUSION_DATA.id, title: '5.5 Conclusión General' },
    { type: 'bibliography', id: 'bibliografia-apa7', title: 'Bibliografía APA 7' }
  ];

  const handleNextSlide = () => {
    if (currentSlideIndex < slides.length - 1) {
      const nextIdx = currentSlideIndex + 1;
      setCurrentSlideIndex(nextIdx);
      setActiveSection(slides[nextIdx].id);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handlePrevSlide = () => {
    if (currentSlideIndex > 0) {
      const prevIdx = currentSlideIndex - 1;
      setCurrentSlideIndex(prevIdx);
      setActiveSection(slides[prevIdx].id);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  // Filtrar temas si se busca un término
  const filteredTopics = searchQuery.trim() === ''
    ? UNIT_TOPICS
    : UNIT_TOPICS.filter(t => 
        t.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        t.humanConcept.toLowerCase().includes(searchQuery.toLowerCase()) ||
        t.humanExplanation.toLowerCase().includes(searchQuery.toLowerCase()) ||
        t.standard.toLowerCase().includes(searchQuery.toLowerCase())
      );

  return (
    <div className="min-h-screen bg-slate-100/70 dark:bg-slate-950 text-slate-900 dark:text-slate-100 transition-colors">
      {/* Barra de navegación superior limpia */}
      <Header
        isDark={isDark}
        onToggleTheme={toggleTheme}
        activeSection={activeSection}
        onNavigate={handleNavigate}
      />

      {/* Contenedor principal */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        {/* Selector de visualización y buscador rápido */}
        <div className="mb-8 p-3 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl shadow-xs flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-1 p-1 bg-slate-100 dark:bg-slate-800 rounded-lg">
            <button
              onClick={() => setViewMode('document')}
              className={`inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-md transition-colors cursor-pointer ${
                viewMode === 'document'
                  ? 'bg-white dark:bg-slate-700 text-blue-950 dark:text-white shadow-xs'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200'
              }`}
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Modo Lectura Completa</span>
            </button>

            <button
              onClick={() => {
                setViewMode('slide');
                setCurrentSlideIndex(0);
              }}
              className={`inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-md transition-colors cursor-pointer ${
                viewMode === 'slide'
                  ? 'bg-white dark:bg-slate-700 text-blue-950 dark:text-white shadow-xs'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200'
              }`}
            >
              <Presentation className="w-3.5 h-3.5" />
              <span>Modo Exposición (Tema por Tema)</span>
            </button>
          </div>

          <div className="relative flex-1 max-w-xs">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Buscar en la exposición..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-3 py-1.5 text-xs bg-slate-50 dark:bg-slate-850 border border-slate-200 dark:border-slate-750 rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-900 dark:focus:ring-amber-400"
            />
          </div>
        </div>

        {/* Barra de control para el Modo Exposición por Diapositivas */}
        {viewMode === 'slide' && (
          <div className="mb-6 p-4 bg-blue-900 text-white rounded-xl shadow-md flex items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <span className="text-xs font-mono bg-blue-950/80 px-2.5 py-1 rounded border border-blue-700">
                Sección {currentSlideIndex + 1} de {slides.length}
              </span>
              <span className="text-xs font-bold text-amber-300">
                {slides[currentSlideIndex].title}
              </span>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={handlePrevSlide}
                disabled={currentSlideIndex === 0}
                className="p-1.5 bg-blue-800 hover:bg-blue-700 disabled:opacity-40 disabled:cursor-not-allowed rounded-lg transition-colors cursor-pointer"
                title="Sección anterior"
              >
                <ArrowLeft className="w-4 h-4" />
              </button>
              <button
                onClick={handleNextSlide}
                disabled={currentSlideIndex === slides.length - 1}
                className="p-1.5 bg-blue-800 hover:bg-blue-700 disabled:opacity-40 disabled:cursor-not-allowed rounded-lg transition-colors cursor-pointer"
                title="Siguiente sección"
              >
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}

        {/* MODO 1: VISTA CONTINUA (Lectura y visualización completa) */}
        {viewMode === 'document' ? (
          <div>
            {/* Portada Académica Universitaria */}
            <UniversityCover
              onStartExploration={() => handleNavigate('intro-y-concepto')}
            />

            {/* Breve Introducción y Concepto General (No interactivos, al inicio) */}
            <div id="intro-y-concepto" className="scroll-mt-20">
              <IntroAndConcept />
            </div>

            {/* Índice Interactivo (Tocar e ir a cada tema) */}
            <InteractiveIndex
              activeSection={activeSection}
              onNavigate={handleNavigate}
            />

            {/* Secciones Temáticas 5.1 a 5.4 */}
            <div className="space-y-6">
              {filteredTopics.map((topic) => (
                <TopicSection
                  key={topic.id}
                  topic={topic}
                  isActive={activeSection === topic.id}
                />
              ))}

              {/* 5.5 Conclusión General (Al final, tocable y con el mismo formato) */}
              <ConclusionSection />

              {/* Fuentes y Referencias Oficiales APA 7 */}
              <BibliographySection />
            </div>
          </div>
        ) : (
          /* MODO 2: PRESENTACIÓN SECCIÓN POR SECCIÓN */
          <div>
            {(() => {
              const currentSlide = slides[currentSlideIndex];
              if (currentSlide.type === 'cover') {
                return (
                  <UniversityCover
                    onStartExploration={handleNextSlide}
                  />
                );
              }
              if (currentSlide.type === 'intro') {
                return (
                  <div className="space-y-6">
                    <IntroAndConcept />
                    <div className="flex justify-end">
                      <button
                        onClick={handleNextSlide}
                        className="px-5 py-2 text-xs font-bold text-white bg-blue-900 rounded-lg shadow-sm hover:bg-blue-800 cursor-pointer"
                      >
                        Pasar al Tema 5.1 →
                      </button>
                    </div>
                  </div>
                );
              }
              if (currentSlide.type === 'topic') {
                return (
                  <TopicSection
                    topic={currentSlide.data}
                    isActive={true}
                  />
                );
              }
              if (currentSlide.type === 'conclusion') {
                return <ConclusionSection />;
              }
              return <BibliographySection />;
            })()}
          </div>
        )}
      </main>

      {/* Pie de página institucional */}
      <footer className="mt-16 border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 py-10 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6 text-xs text-slate-500 dark:text-slate-400">
          <div className="flex items-center gap-3">
            <UfhecLogo size="sm" showText={false} />
            <div>
              <div className="font-bold text-slate-800 dark:text-slate-200 uppercase tracking-tight">
                {ACADEMIC_INFO.institution}
              </div>
              <div>{ACADEMIC_INFO.campus}</div>
            </div>
          </div>

          <div className="text-center md:text-right space-y-1">
            <div className="font-semibold text-blue-900 dark:text-amber-400">
              {ACADEMIC_INFO.subject} · {ACADEMIC_INFO.teacher}
            </div>
            <div>
              {ACADEMIC_INFO.group}: {ACADEMIC_INFO.members.map(m => m.name).join(' & ')}
            </div>
            <div className="text-[11px] text-slate-400">
              Fecha: {ACADEMIC_INFO.date}
            </div>
          </div>
        </div>
      </footer>

    </div>
  );
}
