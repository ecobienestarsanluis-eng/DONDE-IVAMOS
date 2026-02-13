
import React, { useState } from 'react';
import { Region, TravelPreferences, ItineraryResponse } from './types';
import { generateItinerary } from './services/gemini';
import Hero from './components/Hero';
import PreferencesForm from './components/PreferencesForm';
import ItineraryDisplay from './components/ItineraryDisplay';
import WellnessPackage from './components/WellnessPackage';
import Dashboard from './components/Dashboard';

const App: React.FC = () => {
  const [preferences, setPreferences] = useState<TravelPreferences>({
    region: Region.BOTH,
    country: '',
    state: '',
    town: '',
    duration: 15,
    style: 'Luxury',
    enthusiasm: 1000000000
  });

  const [itinerary, setItinerary] = useState<ItineraryResponse | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const phoneNumber = "+573239157120";
  const rawPhoneNumber = "573239157120";
  const crmEmail = "maurodestinodeveloper@gmail.com";
  
  const handleHeaderBooking = () => {
    const msg = "Hola! ✨ Deseo reservar un viaje de lujo con Donde vamos. Por favor, asísteme con mi itinerario.";
    window.open(`https://wa.me/${rawPhoneNumber}?text=${encodeURIComponent(msg)}`, "_blank");
    console.log(`[CRM] Intento de reserva desde header notificado a ${crmEmail}`);
  };

  const handleGenerate = async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await generateItinerary(preferences);
      setItinerary(data);
      
      // Simular registro en CRM
      console.log(`[CRM] Registro de itinerario para: ${preferences.town || preferences.state || preferences.country || preferences.region}`);
      
      setTimeout(() => {
        const element = document.getElementById('itinerary-results');
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
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
          <span className="font-bold tracking-tighter text-lg uppercase">Donde vamos</span>
        </div>
        <nav className="hidden md:flex gap-8 text-sm font-semibold text-slate-400">
          <a href="#" className="hover:text-white transition-colors">ITINERARIOS</a>
          <a href="#" className="hover:text-white transition-colors">DESTINOS</a>
          <a href="#referral-program" className="hover:text-white transition-colors uppercase text-xs tracking-widest text-indigo-400">Partners</a>
          <a href="#dashboard-sec" className="hover:text-white transition-colors uppercase text-xs tracking-widest text-emerald-400">Dashboard</a>
        </nav>
        <div className="flex items-center gap-4">
          <a 
            href={`tel:${phoneNumber}`}
            className="hidden sm:block text-slate-300 hover:text-white text-sm font-medium transition-colors"
          >
            {phoneNumber}
          </a>
          <button 
            onClick={handleHeaderBooking}
            className="bg-white text-slate-900 px-5 py-2 rounded-full text-sm font-bold hover:bg-indigo-100 transition-colors shadow-lg active:scale-95 transform"
          >
            RESERVAR AHORA
          </button>
        </div>
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
                <p className="text-2xl font-bold gradient-text uppercase tracking-widest">Cartografiando tu sueño...</p>
                <p className="text-slate-500 mt-2 italic">Un viaje de 1,000,000,000 de estrellas está naciendo</p>
              </div>
            </div>
          )}

          <div id="itinerary-results">
            <ItineraryDisplay data={itinerary} />
          </div>

          <div id="dashboard-sec">
            <Dashboard />
          </div>

          <WellnessPackage />
        </div>
      </main>

      <footer className="bg-slate-950 border-t border-white/5 py-16 text-center text-slate-500">
        <div id="referral-program" className="max-w-4xl mx-auto mb-12 px-4">
          <div className="glass p-8 rounded-3xl border-indigo-500/30 bg-indigo-500/5">
            <h3 className="text-white text-xl font-bold mb-4 uppercase tracking-widest">Programa de Aliados Elite</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-4 bg-slate-900/50 rounded-2xl border border-white/5">
                <span className="block text-3xl font-extrabold text-indigo-500 mb-1">10%</span>
                <span className="text-sm uppercase tracking-tighter font-semibold text-slate-300">Comisión por Cliente Referido</span>
              </div>
              <div className="p-4 bg-slate-900/50 rounded-2xl border border-white/5">
                <span className="block text-3xl font-extrabold text-pink-500 mb-1">15%</span>
                <span className="text-sm uppercase tracking-tighter font-semibold text-slate-300">Comisión por Cliente Transferido</span>
              </div>
            </div>
            <p className="mt-6 text-xs text-slate-400 max-w-lg mx-auto italic">
              Únete a la red más exclusiva de viajes en América. Calidad y servicio de 1,000,000,000 estrellas garantizado.
            </p>
          </div>
        </div>

        <p className="mb-4 text-sm tracking-widest uppercase">© 2025 DONDE VAMOS - VIAJES POR EL MUNDO ELITE</p>
        <div className="flex justify-center gap-6 opacity-60 text-xs font-bold tracking-widest mb-8">
          <a href="#" className="hover:text-white">INSTAGRAM</a>
          <a href="#" className="hover:text-white">TIKTOK</a>
          <a href={`tel:${phoneNumber}`} className="hover:text-white">CONTACTO</a>
        </div>
        
        <p className="mt-6 text-xs text-slate-600 max-w-xl mx-auto px-4 leading-relaxed">
          Norte América & La Nueva Sur América: Un viaje diseñado para quienes buscan lo extraordinario. 
          Desarrollado con inteligencia artificial de última generación para precisión absoluta. 
          Asistencia inmediata al <span className="text-indigo-400 font-bold">{phoneNumber}</span>.
          <br/>
          <span className="opacity-50 text-[10px]">Fuentes: Búsqueda en tiempo real via Gemini AI. Notificaciones registradas en {crmEmail}.</span>
        </p>
      </footer>
    </div>
  );
};

export default App;
