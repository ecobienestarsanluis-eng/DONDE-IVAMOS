
import React from 'react';
import { ItineraryResponse } from '../types';

interface Props {
  data: ItineraryResponse | null;
}

const ItineraryDisplay: React.FC<Props> = ({ data }) => {
  if (!data) return null;

  return (
    <div className="mt-12 max-w-5xl mx-auto space-y-12 pb-24 px-4">
      <div className="glass p-8 md:p-12 rounded-3xl animate-fade-in shadow-inner">
        <div className="prose prose-invert prose-indigo max-w-none">
          {/* Simple markdown-like rendering for standard formatting */}
          {data.content.split('\n').map((line, i) => {
            if (line.startsWith('# ')) return <h1 key={i} className="text-4xl font-bold mb-6 text-white">{line.replace('# ', '')}</h1>;
            if (line.startsWith('## ')) return <h2 key={i} className="text-3xl font-semibold mt-8 mb-4 text-indigo-300">{line.replace('## ', '')}</h2>;
            if (line.startsWith('### ')) return <h3 key={i} className="text-2xl font-medium mt-6 mb-3 text-pink-400">{line.replace('### ', '')}</h3>;
            if (line.startsWith('- ') || line.startsWith('* ')) return <li key={i} className="ml-4 mb-2 text-slate-300">{line.substring(2)}</li>;
            return <p key={i} className="mb-4 text-slate-400 leading-relaxed text-lg">{line}</p>;
          })}
        </div>
      </div>

      {data.sources.length > 0 && (
        <div className="glass p-8 rounded-3xl border-indigo-500/20">
          <h4 className="text-lg font-bold mb-4 flex items-center gap-2">
            <svg className="w-5 h-5 text-indigo-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.827a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"></path></svg>
            Fuentes y Enlaces en Tiempo Real
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {data.sources.map((source, idx) => source.web && (
              <a 
                key={idx} 
                href={source.web.uri} 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-slate-800/50 hover:bg-slate-800 p-4 rounded-xl border border-slate-700 transition-colors flex flex-col gap-1"
              >
                <span className="text-sm font-medium text-indigo-400 truncate">{source.web.title}</span>
                <span className="text-xs text-slate-500 truncate">{source.web.uri}</span>
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ItineraryDisplay;
