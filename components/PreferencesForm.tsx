
import React from 'react';
import { Region, TravelPreferences } from '../types';

interface Props {
  preferences: TravelPreferences;
  onUpdate: (prefs: TravelPreferences) => void;
  onSubmit: () => void;
  loading: boolean;
}

const PreferencesForm: React.FC<Props> = ({ preferences, onUpdate, onSubmit, loading }) => {
  // Estructura Universal Masiva (Ejemplos representativos para cada región)
  const universalData: any = {
    [Region.SOUTH_AMERICA]: {
      "Colombia": {
        "Antioquia": ["San Luis", "Guatapé", "Medellín", "Jardín", "Río Claro", "Cocorná", "Santa Fe de Antioquia"],
        "Cundinamarca": ["Bogotá", "Zipaquirá", "Chía", "Guatavita"],
        "Bolívar": ["Cartagena", "Islas del Rosario", "Mompox"],
        "Eje Cafetero": ["Salento", "Manizales", "Pereira", "Armenia"],
        "Magdalena": ["Santa Marta", "Tayrona", "Minca"]
      },
      "Argentina": {
        "Buenos Aires": ["CABA", "Tigre", "San Isidro"],
        "Patagonia": ["Bariloche", "El Calafate", "Ushuaia"],
        "Mendoza": ["Valle de Uco", "Luján de Cuyo"]
      },
      "Brasil": {
        "Rio de Janeiro": ["Angra dos Reis", "Paraty", "Copacabana"],
        "Bahia": ["Salvador", "Trancoso"]
      }
    },
    [Region.NORTH_AMERICA]: {
      "México": {
        "Quintana Roo": ["Tulum", "Bacalar", "Holbox", "Puerto Morelos"],
        "Jalisco": ["Puerto Vallarta", "Tequila"],
        "Baja California": ["Los Cabos", "Todos Santos"]
      },
      "USA": {
        "California": ["Beverly Hills", "Napa", "Santa Barbara", "Big Sur"],
        "Hawaii": ["Maui", "Honolulu", "Kauai"],
        "Colorado": ["Aspen", "Vail"]
      },
      "Canada": {
        "Alberta": ["Banff", "Jasper"],
        "Quebec": ["Mont-Tremblant", "Quebec City"]
      }
    },
    [Region.EUROPE]: {
      "España": {
        "Islas Baleares": ["Ibiza", "Mallorca", "Formentera"],
        "Andalucía": ["Marbella", "Sevilla", "Sotogrande"]
      },
      "Francia": {
        "Costa Azul": ["Saint-Tropez", "Mónaco", "Antibes"],
        "Alpes Franceses": ["Courchevel", "Chamonix"]
      },
      "Italia": {
        "Costa Amalfitana": ["Positano", "Amalfi", "Ravello"],
        "Cerdeña": ["Porto Cervo", "Cagliari"]
      }
    },
    [Region.ASIA]: {
      "Japón": {
        "Kansai": ["Kioto", "Nara", "Koya-san"],
        "Hokkaido": ["Niseko", "Sapporo"]
      },
      "Maldivas": {
        "Atolones": ["Malé", "Baa Atoll", "Ari Atoll"]
      },
      "Emiratos Árabes": {
        "Dubai": ["Palm Jumeirah", "Downtown"],
        "Abu Dhabi": ["Saadiyat Island"]
      }
    }
  };

  const countries = universalData[preferences.region] || {};
  const states = countries[preferences.country] || {};
  const towns = states[preferences.state] || [];

  const handleGlobalAction = () => {
    const rawPhoneNumber = "573239157120";
    const location = [preferences.town, preferences.state, preferences.country, preferences.region].filter(Boolean).join(', ');
    
    // El comando de exploración envía automático a WhatsApp
    const message = `*SOLICITUD DE EXPLORACIÓN GLOBAL* 🌍\n\n` +
                    `Hola Mauricio! He activado el comando de exploración para un viaje de:\n` +
                    `💎 *Estilo:* ${preferences.style}\n` +
                    `📍 *Destino:* ${location}\n` +
                    `📅 *Duración:* ${preferences.duration} días\n\n` +
                    `Por favor, registra esta exploración en el CRM y asísteme con la logística élite.`;
    
    window.open(`https://wa.me/${rawPhoneNumber}?text=${encodeURIComponent(message)}`, "_blank");
    
    // Ejecutar lógica de generación IA
    onSubmit();
  };

  return (
    <div className="glass p-12 md:p-20 rounded-[5rem] -mt-32 relative z-20 shadow-[0_50px_150px_rgba(0,0,0,0.6)] max-w-7xl mx-auto border-white/5 backdrop-blur-3xl">
      <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-indigo-600 via-pink-600 to-indigo-600 opacity-30"></div>
      
      <div className="text-center mb-16">
        <span className="text-[11px] font-black text-indigo-400 uppercase tracking-[0.7em] mb-4 block">Cartografía de Lujo Universal</span>
        <h2 className="text-5xl md:text-6xl font-black text-white uppercase tracking-tighter leading-tight">Explorador Global</h2>
        <p className="mt-6 text-slate-500 text-lg font-light italic max-w-2xl mx-auto leading-relaxed">
          Accede a todos los rincones del planeta con un solo clic. Tu itinerario se sincroniza instantáneamente con nuestra red de asistencia élite.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
        {/* Selector de Región */}
        <div className="group space-y-3">
          <label className="flex items-center gap-2 text-[10px] font-black text-slate-500 uppercase tracking-widest ml-2 group-hover:text-indigo-400 transition-colors">
            <span className="w-6 h-6 flex items-center justify-center bg-indigo-600/20 rounded-full text-[9px]">1</span> 
            Región
          </label>
          <select 
            value={preferences.region}
            onChange={(e) => onUpdate({ ...preferences, region: e.target.value as Region, country: '', state: '', town: '' })}
            className="w-full bg-slate-900/80 border border-white/10 rounded-3xl px-6 py-5 text-white focus:ring-4 focus:ring-indigo-500/20 outline-none transition-all appearance-none cursor-pointer hover:bg-slate-800 hover:border-indigo-500/50"
          >
            {Object.values(Region).map(r => <option key={r} value={r} className="bg-slate-950">{r}</option>)}
          </select>
        </div>

        {/* Selector de País */}
        <div className="group space-y-3">
          <label className="flex items-center gap-2 text-[10px] font-black text-slate-500 uppercase tracking-widest ml-2 group-hover:text-indigo-400 transition-colors">
            <span className="w-6 h-6 flex items-center justify-center bg-indigo-600/20 rounded-full text-[9px]">2</span> 
            País
          </label>
          <select 
            value={preferences.country}
            onChange={(e) => onUpdate({ ...preferences, country: e.target.value, state: '', town: '' })}
            className="w-full bg-slate-900/80 border border-white/10 rounded-3xl px-6 py-5 text-white focus:ring-4 focus:ring-indigo-500/20 outline-none transition-all appearance-none cursor-pointer hover:bg-slate-800 hover:border-indigo-500/50 disabled:opacity-20"
          >
            <option value="" className="bg-slate-950">Seleccionar...</option>
            {Object.keys(countries).map(c => <option key={c} value={c} className="bg-slate-950">{c}</option>)}
          </select>
        </div>

        {/* Selector de Estado */}
        <div className="group space-y-3">
          <label className="flex items-center gap-2 text-[10px] font-black text-slate-500 uppercase tracking-widest ml-2 group-hover:text-indigo-400 transition-colors">
            <span className="w-6 h-6 flex items-center justify-center bg-indigo-600/20 rounded-full text-[9px]">3</span> 
            Estado / Depto
          </label>
          <select 
            value={preferences.state}
            disabled={!preferences.country}
            onChange={(e) => onUpdate({ ...preferences, state: e.target.value, town: '' })}
            className="w-full bg-slate-900/80 border border-white/10 rounded-3xl px-6 py-5 text-white focus:ring-4 focus:ring-indigo-500/20 outline-none transition-all appearance-none cursor-pointer hover:bg-slate-800 hover:border-indigo-500/50 disabled:opacity-20"
          >
            <option value="" className="bg-slate-950">Seleccionar...</option>
            {Object.keys(states).map(s => <option key={s} value={s} className="bg-slate-950">{s}</option>)}
          </select>
        </div>

        {/* Selector de Pueblo */}
        <div className="group space-y-3">
          <label className="flex items-center gap-2 text-[10px] font-black text-slate-500 uppercase tracking-widest ml-2 group-hover:text-indigo-400 transition-colors">
            <span className="w-6 h-6 flex items-center justify-center bg-indigo-600/20 rounded-full text-[9px]">4</span> 
            Pueblo / Ciudad
          </label>
          <select 
            value={preferences.town}
            disabled={!preferences.state}
            onChange={(e) => onUpdate({ ...preferences, town: e.target.value })}
            className="w-full bg-slate-900/80 border border-white/10 rounded-3xl px-6 py-5 text-white focus:ring-4 focus:ring-indigo-500/20 outline-none transition-all appearance-none cursor-pointer hover:bg-slate-800 hover:border-indigo-500/50 disabled:opacity-20"
          >
            <option value="" className="bg-slate-950">Seleccionar...</option>
            {towns.map((t: string) => <option key={t} value={t} className="bg-slate-950">{t}</option>)}
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pt-12 border-t border-white/10">
        <div className="space-y-4">
          <label className="block text-[11px] font-black text-slate-500 uppercase tracking-[0.5em] ml-2">Estilo Ritualizado</label>
          <div className="grid grid-cols-2 gap-4">
            {['Luxury', 'Adventure', 'Cultural', 'Gourmet'].map((s) => (
              <button
                key={s}
                onClick={() => onUpdate({ ...preferences, style: s as any })}
                className={`py-5 rounded-3xl text-[10px] font-black uppercase tracking-[0.3em] transition-all border ${
                  preferences.style === s 
                  ? 'bg-indigo-600 border-indigo-400 text-white shadow-[0_15px_40px_rgba(79,70,229,0.4)]' 
                  : 'bg-white/5 border-white/5 text-slate-500 hover:bg-white/10'
                }`}
              >
                {s === 'Luxury' ? '💎 Diamante' : s === 'Adventure' ? '🏹 Épico' : s === 'Cultural' ? '🏛️ Ancestral' : '🍷 Galardón'}
              </button>
            ))}
          </div>
        </div>

        <div className="space-y-4">
          <label className="block text-[11px] font-black text-slate-500 uppercase tracking-[0.5em] ml-2">Temporalidad: {preferences.duration} Lunas</label>
          <div className="bg-slate-900/60 p-10 rounded-[2.5rem] border border-white/5 shadow-inner">
            <input 
              type="range"
              min="1"
              max="60"
              value={preferences.duration}
              onChange={(e) => onUpdate({ ...preferences, duration: parseInt(e.target.value) })}
              className="w-full h-3 bg-slate-800 rounded-full appearance-none cursor-pointer accent-indigo-500"
            />
            <div className="flex justify-between mt-6 text-[10px] font-black text-slate-600 uppercase tracking-widest">
              <span>Nómada (1)</span>
              <span>Residente (60)</span>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-20 flex flex-col items-center gap-8">
        <button 
          onClick={handleGlobalAction}
          disabled={loading}
          className="group relative inline-flex items-center justify-center bg-white text-slate-950 font-black py-8 px-28 rounded-full transition-all transform hover:scale-105 active:scale-95 shadow-[0_0_80px_rgba(255,255,255,0.2)] overflow-hidden"
        >
          {loading ? (
            <div className="flex items-center gap-6">
              <div className="animate-spin rounded-full h-8 w-8 border-4 border-slate-950 border-t-transparent"></div>
              <span className="uppercase tracking-[0.5em] text-sm">Sincronizando...</span>
            </div>
          ) : (
            <span className="flex items-center gap-6 text-sm uppercase tracking-[0.6em]">
              EXPLORAR ITINERARIO ✨ →
            </span>
          )}
        </button>
        <div className="flex items-center gap-8 opacity-40">
           <span className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.4em]">WhatsApp Activo</span>
           <span className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.4em]">CRM Sincronizado</span>
           <span className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.4em]">1,000,000,000 Estrellas</span>
        </div>
      </div>
    </div>
  );
};

export default PreferencesForm;
