import React, { useState } from 'react';
import { Cpu, Layers, HardDrive, Zap } from 'lucide-react';

interface SmartImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  fallbackSrcs?: string[];
  alt: string;
  containerClassName?: string;
  fallbackType?: 'hero' | 'hardware' | 'ipos';
}

export const SmartImage: React.FC<SmartImageProps> = ({
  src,
  fallbackSrcs = [],
  alt,
  className = '',
  containerClassName = '',
  fallbackType = 'hero',
  ...rest
}) => {
  const [currentSrcIndex, setCurrentSrcIndex] = useState(0);
  const [hasError, setHasError] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  const allSrcs = [src, ...fallbackSrcs];
  const currentSrc = allSrcs[currentSrcIndex] || src;

  const handleError = () => {
    if (currentSrcIndex < allSrcs.length - 1) {
      setCurrentSrcIndex((prev) => prev + 1);
    } else {
      setHasError(true);
    }
  };

  return (
    <div className={`relative overflow-hidden ${containerClassName}`}>
      {/* Loading Skeleton */}
      {!isLoaded && !hasError && (
        <div className="absolute inset-0 bg-[#101B32] animate-pulse flex items-center justify-center">
          <div className="flex items-center gap-2 text-xs text-[#36C5F0]/60">
            <Cpu className="w-5 h-5 animate-spin" />
            <span>Memuat visual...</span>
          </div>
        </div>
      )}

      {/* Actual Image */}
      {!hasError ? (
        <img
          src={currentSrc}
          alt={alt}
          className={`${className} ${!isLoaded ? 'opacity-0' : 'opacity-100'} transition-opacity duration-300`}
          onLoad={() => setIsLoaded(true)}
          onError={handleError}
          referrerPolicy="no-referrer"
          {...rest}
        />
      ) : (
        /* High-fidelity Vector Fallback (Zero Broken Images) */
        <div className="w-full h-full min-h-[280px] bg-gradient-to-br from-[#101B32] via-[#0d1627] to-[#152342] p-6 flex flex-col items-center justify-center text-center border border-[#36C5F0]/20 text-white relative">
          <div className="absolute inset-0 opacity-15 pointer-events-none bg-[radial-gradient(#36C5F0_1px,transparent_1px)] [background-size:16px_16px]" />

          {fallbackType === 'hero' && (
            <div className="relative z-10 space-y-4 max-w-sm">
              <div className="w-16 h-16 rounded-2xl bg-[#36C5F0]/15 border border-[#36C5F0]/40 flex items-center justify-center mx-auto text-[#36C5F0] shadow-lg shadow-[#36C5F0]/10">
                <Cpu className="w-8 h-8" />
              </div>
              <div className="space-y-1">
                <span className="text-[11px] font-mono text-[#36C5F0] uppercase tracking-wider block">
                  Arsitektur Sistem Komputer
                </span>
                <h4 className="text-base font-bold text-white">
                  CPU · Motherboard · RAM DDR5 · SSD NVMe
                </h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Ilustrasi komponen arsitektur mikroprosesor dan papan induk komputasi modern.
                </p>
              </div>
            </div>
          )}

          {fallbackType === 'hardware' && (
            <div className="relative z-10 space-y-4 max-w-md">
              <div className="grid grid-cols-3 gap-3">
                <div className="p-3 rounded-lg bg-slate-900/80 border border-slate-700 text-center">
                  <Cpu className="w-6 h-6 text-[#36C5F0] mx-auto mb-1" />
                  <span className="text-[10px] font-bold block">CPU LGA1700</span>
                </div>
                <div className="p-3 rounded-lg bg-slate-900/80 border border-slate-700 text-center">
                  <Zap className="w-6 h-6 text-cyan-400 mx-auto mb-1" />
                  <span className="text-[10px] font-bold block">RAM DDR5</span>
                </div>
                <div className="p-3 rounded-lg bg-slate-900/80 border border-slate-700 text-center">
                  <HardDrive className="w-6 h-6 text-teal-400 mx-auto mb-1" />
                  <span className="text-[10px] font-bold block">SSD NVMe M.2</span>
                </div>
              </div>
              <p className="text-xs text-slate-300">
                Diagram Komponen Fisik Perangkat Keras Komputer
              </p>
            </div>
          )}

          {fallbackType === 'ipos' && (
            <div className="relative z-10 space-y-3">
              <div className="w-12 h-12 rounded-xl bg-cyan-950 border border-cyan-500/30 flex items-center justify-center mx-auto text-[#36C5F0]">
                <Layers className="w-6 h-6" />
              </div>
              <h4 className="text-sm font-bold text-white">
                Siklus IPOS (Input - Process - Output - Storage)
              </h4>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
