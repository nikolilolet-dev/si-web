import React from 'react';

interface UfhecLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showText?: boolean;
}

export const UfhecLogo: React.FC<UfhecLogoProps> = ({
  className = '',
  size = 'md',
  showText = true,
}) => {
  const sizeMap = {
    sm: { imgClass: 'h-8 w-auto max-w-[120px] p-1 rounded-md', textSize: 'text-xs', subSize: 'text-[10px]' },
    md: { imgClass: 'h-11 w-auto max-w-[160px] p-1.5 rounded-lg', textSize: 'text-sm', subSize: 'text-xs' },
    lg: { imgClass: 'h-16 sm:h-20 w-auto max-w-[240px] p-2 rounded-xl', textSize: 'text-base sm:text-lg', subSize: 'text-xs' },
    xl: { imgClass: 'h-20 sm:h-24 w-auto max-w-[280px] p-2 rounded-xl', textSize: 'text-lg sm:text-xl', subSize: 'text-sm' },
  };

  const { imgClass, textSize, subSize } = sizeMap[size];

  return (
    <div className={`inline-flex items-center gap-3 ${className}`}>
      {/* Logotipo Oficial UFHEC recortado y nivelado */}
      <div className="relative shrink-0 flex items-center justify-center">
        <img
          src="/ufhec-logo.png"
          onError={(e) => {
            const target = e.currentTarget;
            if (!target.src.includes('ufhec-logo.jpg')) {
              target.src = '/ufhec-logo.jpg';
            }
          }}
          alt="Logo Oficial Universidad Federico Henríquez y Carvajal (UFHEC)"
          className={`${imgClass} object-contain bg-white border border-slate-200 dark:border-slate-700 shadow-xs select-none transition-transform hover:scale-[1.02]`}
          loading="eager"
        />
      </div>

      {/* Identidad Institucional complementaria */}
      {showText && (
        <div className="flex flex-col text-left">
          <span className={`font-black tracking-tight text-slate-900 dark:text-slate-100 ${textSize} uppercase font-display leading-tight`}>
            Universidad Federico Henríquez y Carvajal
          </span>
          <span className={`font-semibold tracking-wide text-[#7A0019] dark:text-amber-400 ${subSize}`}>
            UFHEC · Las Matas de Farfán / Sede Central
          </span>
        </div>
      )}
    </div>
  );
};
