
import React from 'react';

const Hero: React.FC = () => {
  return (
    <div className="relative h-[60vh] flex items-center justify-center overflow-hidden rounded-b-3xl">
      <div 
        className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 hover:scale-105"
        style={{ backgroundImage: `url('https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=2070')` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-900/60 to-slate-900"></div>
      </div>
      
      <div className="relative z-10 text-center px-4 max-w-4xl">
        <h1 className="text-5xl md:text-7xl font-extrabold mb-6">
          <span className="gradient-text uppercase">Donde vamos</span>
        </h1>
        <p className="text-xl md:text-2xl text-slate-300 font-light tracking-widest uppercase">
          Norte América & La Nueva Sur América
        </p>
        <div className="mt-8 flex justify-center gap-2">
          {Array.from({ length: 5 }).map((_, i) => (
            <span key={i} className="text-yellow-400 text-2xl">★</span>
          ))}
          <span className="text-slate-400 text-sm self-center ml-2">1,000,000,000,000+ ESTRELLAS</span>
        </div>
      </div>
    </div>
  );
};

export default Hero;
