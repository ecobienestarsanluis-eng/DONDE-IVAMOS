
import React, { useState } from "react";

interface Registro {
  usuario: string;
  consulta: string;
  fecha: string;
}

interface Atractivo {
  nombre: string;
  actividad: string;
  rating: number;
  direccion: string;
  descripcion: string;
  foto_url: string;
}

const Dashboard: React.FC = () => {
  const [filters, setFilters] = useState({ fecha: "", actividad: "", rating: "" });
  const [showConfirm, setShowConfirm] = useState(false);
  const [selectedAct, setSelectedAct] = useState("");

  const [data] = useState({
    registros: [
      { usuario: "vip_traveler@luxury.com", consulta: "Exploración CDMX", fecha: new Date().toISOString() },
      { usuario: "explorer_77@gmail.com", consulta: "Reserva Kioto", fecha: new Date(Date.now() - 86400000).toISOString() },
      { usuario: "mauro@destinodeveloper.com", consulta: "Trazabilidad Medellín", fecha: new Date(Date.now() - 172800000).toISOString() },
    ] as Registro[],
    atractivos: [
      {
        nombre: "Templos de Kioto",
        actividad: "Zen & Historia",
        rating: 5,
        direccion: "Kioto, Japón",
        descripcion: "Inmersión espiritual en los jardines más antiguos del mundo.",
        foto_url: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&q=80&w=800"
      },
      {
        nombre: "Costa Brava Elite",
        actividad: "Yate & Relax",
        rating: 4.9,
        direccion: "Girona, España",
        descripcion: "Navegación por calas cristalinas con servicio gourmet a bordo.",
        foto_url: "https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&q=80&w=800"
      },
      {
        nombre: "Canyon del Río Claro",
        actividad: "Eco-Aventura",
        rating: 4.8,
        direccion: "San Luis, Colombia",
        descripcion: "Un paraíso de mármol y biodiversidad única en el corazón de Antioquia.",
        foto_url: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&q=80&w=800"
      }
    ] as Atractivo[]
  });

  const handleExport = (type: 'Excel' | 'PDF') => {
    alert(`Generando Artefacto Ceremonial: Reporte en ${type}. Notificado a maurodestinodeveloper@gmail.com`);
  };

  const handleReservar = async (place: Atractivo) => {
    const phoneNumber = "573239157120";
    const message = `*SOLICITUD DE RESERVA GLOBAL* 📍\n\n` +
                    `Hola Mauricio! He seleccionado este destino del Dashboard:\n\n` +
                    `*Lugar:* ${place.nombre}\n` +
                    `*Actividad:* ${place.actividad}\n` +
                    `*Ubicación:* ${place.direccion}\n\n` +
                    `Asísteme con el proceso ceremonial para este itinerario.`;
    
    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, "_blank");

    setSelectedAct(place.nombre);
    setShowConfirm(true);
  };

  return (
    <div className="my-40 p-12 md:p-20 glass rounded-[5rem] border border-white/5 shadow-3xl animate-fade-in relative overflow-hidden">
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-indigo-600/5 rounded-full blur-3xl"></div>
      
      <div className="text-center mb-20">
        <span className="text-[10px] font-black text-indigo-500 uppercase tracking-[0.5em] mb-4 block">Módulo de Control Elite</span>
        <h2 className="text-5xl font-black text-white uppercase tracking-tighter leading-none">Dashboard de Gestión</h2>
        <div className="w-32 h-1 bg-gradient-to-r from-transparent via-indigo-600 to-transparent mx-auto mt-6"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
        <input 
          type="date" 
          className="bg-slate-900/60 border border-white/5 rounded-2xl p-5 text-slate-300 focus:ring-2 focus:ring-indigo-500 outline-none"
          value={filters.fecha}
          onChange={e => setFilters({ ...filters, fecha: e.target.value })}
        />
        <input 
          type="text" 
          placeholder="Filtrar Actividad"
          className="bg-slate-900/60 border border-white/5 rounded-2xl p-5 text-slate-300 focus:ring-2 focus:ring-indigo-500 outline-none placeholder:text-slate-700"
          value={filters.actividad}
          onChange={e => setFilters({ ...filters, actividad: e.target.value })}
        />
        <input 
          type="number" 
          placeholder="Rating Mínimo"
          className="bg-slate-900/60 border border-white/5 rounded-2xl p-5 text-slate-300 focus:ring-2 focus:ring-indigo-500 outline-none"
          value={filters.rating}
          onChange={e => setFilters({ ...filters, rating: e.target.value })}
        />
        <button className="bg-indigo-600 hover:bg-indigo-500 text-white font-black py-5 rounded-2xl transition-all uppercase text-[10px] tracking-widest shadow-2xl active:scale-95">
          Actualizar Vista
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
        <section className="lg:col-span-1">
          <h3 className="text-xl font-bold text-white mb-10 flex items-center gap-4 uppercase tracking-tighter">
            <span className="w-2 h-8 bg-indigo-600 rounded-full"></span>
            Trazabilidad CRM
          </h3>
          <div className="space-y-4">
            {data.registros.map((reg, i) => (
              <div key={i} className="bg-white/5 border border-white/5 p-6 rounded-3xl hover:bg-white/10 transition-all group">
                <p className="text-white font-black text-sm group-hover:text-indigo-400 transition-colors truncate">{reg.usuario}</p>
                <p className="text-slate-400 text-xs mt-2 font-medium">{reg.consulta}</p>
                <p className="text-slate-600 text-[9px] mt-4 font-mono tracking-widest">{new Date(reg.fecha).toLocaleString()}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="lg:col-span-2">
          <h3 className="text-xl font-bold text-white mb-10 flex items-center gap-4 uppercase tracking-tighter">
             <span className="w-2 h-8 bg-pink-600 rounded-full"></span>
             Destinos en Radar Global
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {data.atractivos.map((place, i) => (
              <div key={i} className="group bg-slate-900/60 border border-white/5 rounded-[2.5rem] p-8 hover:border-indigo-500/40 transition-all shadow-2xl relative">
                <div className="relative h-56 mb-8 rounded-3xl overflow-hidden shadow-inner">
                  <img src={place.foto_url} alt={place.nombre} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" />
                  <div className="absolute top-4 right-4 bg-slate-950/90 backdrop-blur-xl px-4 py-2 rounded-2xl text-yellow-400 text-sm font-black shadow-lg">
                    ★ {place.rating}
                  </div>
                </div>
                <h4 className="font-black text-white text-2xl mb-2 tracking-tighter uppercase">{place.nombre}</h4>
                <p className="text-indigo-400 text-[10px] font-black uppercase tracking-[0.3em] mb-4">{place.actividad}</p>
                <p className="text-slate-400 text-sm leading-relaxed mb-10 font-light opacity-80">{place.descripcion}</p>
                
                <button 
                  onClick={() => handleReservar(place)}
                  className="w-full bg-white text-slate-950 hover:bg-indigo-50 py-5 rounded-2xl text-[10px] font-black uppercase tracking-[0.3em] transition-all shadow-xl active:scale-95"
                >
                  RESERVAR EN WHATSAPP →
                </button>
              </div>
            ))}
          </div>
        </section>
      </div>

      {showConfirm && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center p-8 bg-slate-950/98 backdrop-blur-3xl animate-fade-in">
          <div className="glass max-w-sm w-full p-14 rounded-[4rem] border border-emerald-500/20 text-center shadow-4xl transform animate-scale-up">
            <div className="text-8xl mb-10">✨</div>
            <h3 className="text-3xl font-black text-white mb-6 uppercase tracking-tighter">Portal Activado</h3>
            <p className="text-slate-400 mb-12 text-sm font-light leading-relaxed">
              La solicitud para <strong className="text-white">{selectedAct}</strong> ha sido canalizada a través de WhatsApp. Mauricio recibirá los detalles en tiempo real.
            </p>
            <button 
              onClick={() => setShowConfirm(false)}
              className="w-full bg-emerald-600 text-white font-black py-6 rounded-2xl transition-all shadow-2xl uppercase tracking-widest text-[10px]"
            >
              CERRAR PORTAL
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
