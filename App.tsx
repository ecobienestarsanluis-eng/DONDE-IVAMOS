
import React, { useState } from 'react';
import { Region, TravelPreferences, ItineraryResponse } from './types';
import { generateItinerary } from './services/gemini';
import Hero from './components/Hero';
import PreferencesForm from './components/PreferencesForm';
import ItineraryDisplay from './components/ItineraryDisplay';

const App: React.FC = () => {
  const [preferences, setPreferences] = useState<TravelPreferences>({
    region: Region.BOTH,
    duration: 15,
    style: 'Luxury',
    enthusiasm: 1000000000
  });

  const [itinerary, setItinerary] = useState<ItineraryResponse | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleGenerate = async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await generateItinerary(preferences);
      setItinerary(data);
      // Smooth scroll to results
      setTimeout(() => {
        window.scrollTo({ top: window.innerHeight * 0.5, behavior: 'smooth' });
      }, 100);
    } catch (err: any) {
      setError(err.message || "Ocurrió un error inesperado.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen">
      <header className="fixed top-0 left-0 right-0 z-50 glass border-b border-white/5 px-6 py-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center font-bold text-white shadow-lg">D</div>
          <span className="font-bold tracking-tighter text-lg">DONDE IVAMOS</span>
        </div>
        <nav className="hidden md:flex gap-8 text-sm font-semibold text-slate-400">
          <a href="#" className="hover:text-white transition-colors">ITINERARIOS</a>
          <a href="#" className="hover:text-white transition-colors">DESTINOS</a>
          <a href="#" className="hover:text-white transition-colors">MEMBRESÍA</a>
        </nav>
        <button className="bg-white text-slate-900 px-5 py-2 rounded-full text-sm font-bold hover:bg-slate-200 transition-colors">
          RESERVAR AHORA
        </button>
      </header>

      <main className="pt-16">
        <Hero />
        
        <div className="container mx-auto px-4">
          <PreferencesForm 
            preferences={preferences}
            onUpdate={setPreferences}
            onSubmit={handleGenerate}
            loading={loading}
          />

          {error && (
            <div className="mt-8 max-w-2xl mx-auto bg-red-900/30 border border-red-500/50 p-6 rounded-2xl text-center text-red-200">
              <p className="font-bold mb-2">¡Ups! Algo salió mal</p>
              <p className="text-sm opacity-80">{error}</p>
              <button 
                onClick={handleGenerate} 
                className="mt-4 text-xs underline uppercase tracking-widest font-bold hover:text-white"
              >
                Reintentar
              </button>
            </div>
          )}

          {loading && !itinerary && (
            <div className="mt-20 flex flex-col items-center justify-center space-y-8 animate-pulse">
              <div className="w-24 h-24 border-4 border-indigo-600 border-t-transparent rounded-full animate-spin"></div>
              <div className="text-center">
                <p className="text-2xl font-bold gradient-text">CARTOGRAFIANDO TU SUEÑO...</p>
                <p className="text-slate-500 mt-2 italic">Explorando desde el Gran Cañón hasta Machu Picchu</p>
              </div>
            </div>
          )}

          <ItineraryDisplay data={itinerary} />
        </div>
      </main>

      <footer className="bg-slate-950 border-t border-white/5 py-12 text-center text-slate-500 text-sm">
        <p className="mb-4">© 2025 DONDE IVAMOS - VIAJES POR EL MUNDO ELITE</p>
        <div className="flex justify-center gap-6 opacity-60">
          <span>INSTAGRAM</span>
          <span>TIKTOK</span>
          <span>LUXURY TRAVEL ASSOC.</span>
        </div>
        <p className="mt-6 text-xs text-slate-600 max-w-xl mx-auto px-4">
          Norte América & La Nueva Sur América: Un viaje diseñado para quienes buscan lo extraordinario. 
          Desarrollado con inteligencia artificial de última generación para precisión de 1,000,000,000 estrellas.
        </p>
      </footer>
    </div>
  );
};

export default App;
