
import React from 'react';
import { ItineraryResponse } from '../types';

interface Props {
  data: ItineraryResponse | null;
}

const ItineraryDisplay: React.FC<Props> = ({ data }) => {
  if (!data) return null;

  const phoneNumber = "+573239157120";

  return (
    <div className="mt-12 max-w-5xl mx-auto space-y-12 pb-24 px-4">
      <div className="glass p-8 md:p-12 rounded-3xl animate-fade-in shadow-inner border-indigo-500/10">
        <div className="prose prose-invert prose-indigo max-w-none">
          {data.content.split('\n').map((line, i) => {
            if (line.trim() === '') return <br key={i} />;
            if (line.startsWith('# ')) return <h1 key={i} className="text-4xl md:text-5xl font-extrabold mb-8 text-white gradient-text">{line.replace('# ', '')}</h1>;
            if (line.startsWith('## ')) return <h2 key={i} className="text-3xl font-bold mt-12 mb-6 text-indigo-300 border-l-4 border-indigo-600 pl-4">{line.replace('## ', '')}</h2>;
            if (line.startsWith('### ')) return <h3 key={i} className="text-2xl font-semibold mt-8 mb-4 text-pink-400">{line.replace('### ', '')}</h3>;
            if (line.startsWith('- ') || line.startsWith('* ')) return <li key={i} className="ml-6 mb-3 text-slate-300 list-disc marker:text-indigo-500">{line.substring(2)}</li>;
            return <p key={i} className="mb-6 text-slate-300 leading-relaxed text-lg font-light">{line}</p>;
          })}
        </div>

        <div className="mt-16 pt-12 border-t border-white/5 text-center">
          <h4 className="text-2xl font-bold text-white mb-6 uppercase tracking-widest">¿Listo para este viaje de ensueño?</h4>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a 
              href={`tel:${phoneNumber}`}
              className="bg-indigo-600 hover:bg-indigo-500 text-white px-10 py-4 rounded-full font-black text-lg shadow-2xl transition-all hover:scale-105 flex items-center gap-3"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
              LLAMAR AHORA
            </a>
            <div className="text-slate-500 text-sm font-bold">O</div>
            <a 
              href={`https://wa.me/${phoneNumber.replace('+', '')}`}
              className="bg-emerald-600 hover:bg-emerald-500 text-white px-10 py-4 rounded-full font-black text-lg shadow-2xl transition-all hover:scale-105 flex items-center gap-3"
            >
              WHATSAPP DIRECTO
            </a>
          </div>
          <p className="mt-6 text-indigo-400 font-bold text-xl">{phoneNumber}</p>
        </div>
      </div>

      {data.sources.length > 0 && (
        <div className="glass p-8 rounded-3xl border-indigo-500/20">
          <h4 className="text-lg font-bold mb-6 flex items-center gap-2 uppercase tracking-widest text-slate-200">
            <svg className="w-6 h-6 text-indigo-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.827a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"></path></svg>
            Inteligencia de Viaje Aplicada (Fuentes Reales)
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {data.sources.map((source, idx) => source.web && (
              <a 
                key={idx} 
                href={source.web.uri} 
                target="_blank" 
                rel="noopener noreferrer"
                className="group bg-slate-900/40 hover:bg-indigo-900/20 p-5 rounded-2xl border border-white/5 transition-all flex flex-col gap-2 hover:border-indigo-500/40"
              >
                <span className="text-xs font-black text-indigo-500 uppercase tracking-tighter mb-1 opacity-70">Fuente {idx + 1}</span>
                <span className="text-sm font-bold text-slate-100 group-hover:text-indigo-300 transition-colors line-clamp-2">{source.web.title}</span>
                <div className="mt-auto pt-2 flex items-center gap-1 text-[10px] text-slate-500 uppercase font-bold tracking-widest overflow-hidden">
                  <span className="truncate">VER SITIO OFICIAL</span>
                  <svg className="w-3 h-3 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                </div>
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ItineraryDisplay;
