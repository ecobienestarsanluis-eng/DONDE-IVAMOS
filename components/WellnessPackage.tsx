
import React, { useState } from 'react';

const WellnessPackage: React.FC = () => {
  const [showModal, setShowModal] = useState(false);
  const phoneNumber = "573239157120";
  const crmEmail = "maurodestinodeveloper@gmail.com";
  const packageName = "MANATURY";

  const handleReservar = () => {
    // 1. Abrir WhatsApp con mensaje personalizado
    const mensaje = `Hola! ✨ Deseo reservar mi experiencia memorable con el Paquete ${packageName}. Por favor, bríndame más información.`;
    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(mensaje)}`, "_blank");

    // 2. Simular envío a CRM/Email (Notificación Ceremonial)
    console.log(`[CRM] Notificación enviada a ${crmEmail} para el paquete ${packageName}`);
    
    // 3. Mostrar Modal de Confirmación
    setShowModal(true);
  };

  return (
    <div className="my-20 max-w-4xl mx-auto px-4">
      <div className="relative group">
        {/* Glow Effect */}
        <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-3xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
        
        <div className="relative glass p-10 md:p-16 rounded-3xl border border-purple-500/30 text-center overflow-hidden">
          {/* Cosmic Background Elements */}
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-purple-500 to-transparent"></div>
          <div className="absolute -top-24 -left-24 w-48 h-48 bg-purple-600/10 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-24 -right-24 w-48 h-48 bg-indigo-600/10 rounded-full blur-3xl"></div>

          <header className="mb-10">
            <span className="inline-block px-4 py-1 rounded-full border border-purple-400/30 text-purple-400 text-xs font-bold tracking-widest uppercase mb-4">
              Portal de Bienestar Ritualizado
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-2 tracking-tighter uppercase">
              PAQUETE <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 to-yellow-500">{packageName}</span>
            </h2>
            <p className="text-xl md:text-2xl font-bold text-indigo-300 tracking-[0.2em] mb-6 uppercase">
              Crea tu experiencia memorable
            </p>
            <p className="text-slate-400 text-lg font-light max-w-2xl mx-auto">
              Diseñado para el alma que busca trascender lo cotidiano y reconectar con la esencia pura de la naturaleza.
            </p>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 text-left">
            <div className="space-y-4">
              <div className="flex items-start gap-4 p-4 rounded-2xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors">
                <span className="text-2xl">🌿</span>
                <div>
                  <h4 className="font-bold text-white">Hidroterapia Ritualizada</h4>
                  <p className="text-sm text-slate-400">Sanación a través del agua en termales sagrados.</p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-4 rounded-2xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors">
                <span className="text-2xl">🧘</span>
                <div>
                  <h4 className="font-bold text-white">Yoga & Meditación</h4>
                  <p className="text-sm text-slate-400">Guiado por maestros de linaje en entornos naturales.</p>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-start gap-4 p-4 rounded-2xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors">
                <span className="text-2xl">🗺️</span>
                <div>
                  <h4 className="font-bold text-white">Mapas de Abundancia</h4>
                  <p className="text-sm text-slate-400">Cartografía interactiva de tus centros de energía.</p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-4 rounded-2xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors">
                <span className="text-2xl">✨</span>
                <div>
                  <h4 className="font-bold text-white">Ceremonias Auténticas</h4>
                  <p className="text-sm text-slate-400">Conexión profunda con la cultura y el espíritu local.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center gap-6">
            <button 
              onClick={handleReservar}
              className="group relative inline-flex items-center justify-center px-12 py-5 font-bold text-white transition-all duration-200 bg-gradient-to-r from-purple-600 to-indigo-600 font-pj rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600 shadow-2xl hover:scale-105 active:scale-95"
            >
              <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-purple-400 to-indigo-400 opacity-0 group-hover:opacity-20 rounded-full blur-xl transition-opacity"></span>
              RESERVAR {packageName} AHORA
            </button>
            <p className="text-slate-500 text-xs font-bold tracking-widest uppercase">
              Trazabilidad activa vía: {crmEmail}
            </p>
          </div>
        </div>
      </div>

      {/* Modal de Confirmación Ceremonial */}
      {showModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-fade-in">
          <div className="glass max-w-md w-full p-8 rounded-3xl border border-indigo-500/30 text-center shadow-2xl transform animate-scale-up">
            <div className="w-20 h-20 bg-indigo-600/20 rounded-full flex items-center justify-center mx-auto mb-6 border border-indigo-500/50">
              <span className="text-4xl">✨</span>
            </div>
            <h3 className="text-2xl font-bold text-white mb-2 uppercase tracking-tighter">Reserva Iniciada</h3>
            <p className="text-slate-300 mb-6 font-light">
              Tu experiencia <strong className="text-indigo-400">{packageName}</strong> está siendo procesada. Hemos abierto tu portal de comunicación y notificado a nuestro equipo elite.
            </p>
            <div className="space-y-3 mb-8 text-left text-sm bg-white/5 p-4 rounded-2xl border border-white/5">
              <p className="flex justify-between"><span className="text-slate-500">WhatsApp:</span> <span className="text-indigo-300 font-mono">+{phoneNumber}</span></p>
              <p className="flex justify-between"><span className="text-slate-500">Notificación:</span> <span className="text-indigo-300">Enviada a CRM</span></p>
            </div>
            <button 
              onClick={() => setShowModal(false)}
              className="w-full bg-white text-slate-950 font-black py-4 rounded-2xl hover:bg-indigo-100 transition-colors uppercase tracking-widest text-sm"
            >
              Continuar Explorando
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default WellnessPackage;
