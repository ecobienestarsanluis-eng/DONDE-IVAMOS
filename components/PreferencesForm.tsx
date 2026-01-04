
import React from 'react';
import { Region, TravelPreferences } from '../types';

interface Props {
  preferences: TravelPreferences;
  onUpdate: (prefs: TravelPreferences) => void;
  onSubmit: () => void;
  loading: boolean;
}

const PreferencesForm: React.FC<Props> = ({ preferences, onUpdate, onSubmit, loading }) => {
  return (
    <div className="glass p-8 rounded-3xl -mt-16 relative z-20 shadow-2xl max-w-5xl mx-auto border-white/5">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div>
          <label className="block text-sm font-semibold text-slate-400 mb-2 uppercase tracking-tighter">Región Destino</label>
          <select 
            value={preferences.region}
            onChange={(e) => onUpdate({ ...preferences, region: e.target.value as Region })}
            className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 focus:ring-2 focus:ring-indigo-500 outline-none transition-all"
          >
            {Object.values(Region).map(r => <option key={r} value={r}>{r}</option>)}
          </select>
        </div>

        <div>
          <label className="block text-sm font-semibold text-slate-400 mb-2 uppercase tracking-tighter">Estilo de Viaje</label>
          <select 
            value={preferences.style}
            onChange={(e) => onUpdate({ ...preferences, style: e.target.value as any })}
            className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 focus:ring-2 focus:ring-indigo-500 outline-none transition-all"
          >
            <option value="Luxury">Ultra Lujo</option>
            <option value="Adventure">Aventura Extrema</option>
            <option value="Cultural">Cultura Inmersiva</option>
            <option value="Gourmet">Gastronómico</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-semibold text-slate-400 mb-2 uppercase tracking-tighter">Duración (Días)</label>
          <input 
            type="number"
            value={preferences.duration}
            min={1}
            max={90}
            onChange={(e) => onUpdate({ ...preferences, duration: parseInt(e.target.value) })}
            className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 focus:ring-2 focus:ring-indigo-500 outline-none transition-all"
          />
        </div>
      </div>

      <div className="mt-8 flex justify-center">
        <button 
          onClick={onSubmit}
          disabled={loading}
          className="bg-indigo-600 hover:bg-indigo-500 disabled:bg-slate-700 text-white font-bold py-4 px-12 rounded-full transition-all transform hover:scale-105 shadow-xl flex items-center gap-3"
        >
          {loading ? (
            <>
              <div className="animate-spin rounded-full h-5 w-5 border-2 border-white border-t-transparent"></div>
              CREANDO MAGIA...
            </>
          ) : (
            "GENERAR ITINERARIO 1,000,000,000 ESTRELLAS"
          )}
        </button>
      </div>
    </div>
  );
};

export default PreferencesForm;
