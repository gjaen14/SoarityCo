import React, { useEffect, useState } from 'react';

interface LoadingScreenProps {
  onComplete: () => void;
}

export const LoadingScreen: React.FC<LoadingScreenProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(onComplete, 500); // Wait a bit after 100%
          return 100;
        }
        return prev + Math.random() * 5 + 1; // Random increment
      });
    }, 50);
    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-[60] bg-black flex flex-col items-center justify-center">
      <div className="relative w-64 h-1 bg-white/10 rounded-full overflow-hidden mb-4">
        <div 
          className="absolute top-0 left-0 h-full bg-brand-blue shadow-[0_0_15px_#3b82f6]"
          style={{ width: `${Math.min(100, progress)}%`, transition: 'width 0.1s ease-out' }}
        />
      </div>
      <div className="font-display font-bold text-4xl tracking-widest text-white mix-blend-difference">
        {Math.round(progress)}%
      </div>
      <p className="mt-2 text-white/40 text-xs uppercase tracking-[0.3em]">Initializing System</p>
    </div>
  );
};