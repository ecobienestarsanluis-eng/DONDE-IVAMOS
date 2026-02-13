
import React from 'react';
import { ItineraryResponse } from '../types';

interface Props {
  data: ItineraryResponse | null;
}

const ItineraryDisplay: React.FC<Props> = ({ data }) => {
  if (!data) return null;

  const phoneNumber = "+573239157120";
  const rawPhoneNumber = "573239157120";

  const handleFullReservation = () => {
    // Extraer fuentes para el mensaje ceremonial
    const sourcesText = data.sources
      .filter(s => s.web)
      .map((s, i) => `${i + 1}. ${s.web!.title}\n   🔗 ${s.web!.uri}`)
      .join('\n\n');

    const messageHeader = `*DONDE VAMOS - SOLICITUD DE RESERVA ELITE* ✨\n\n`;
    const messageBody = `Hola Mauricio! Deseo iniciar los trámites para mi próximo viaje.\n\n*ITINERARIO GENERADO:*\n${data.content.substring(0, 400)}...\n\n`;
    const messageSources = sourcesText ? `*FUENTES OFICIALES (REFERENCIA):*\n${sourcesText}\n\n` : '';
    const messageFooter = `Por favor, asísteme con la logística y disponibilidad. ¡Gracias!`;

    const fullMessage = messageHeader + messageBody + messageSources + messageFooter;
    
    window.open(`https://wa.me/${rawPhoneNumber}?text=${encodeURIComponent(fullMessage)}`, "_blank");
    
    // Notificación en CRM/Consola
    console.log(`[CRM] Reserva total enviada a WhatsApp con trazabilidad completa de fuentes.`);
  };

  return (
    <div className="mt-20 max-w-5xl mx-auto space-y-12 pb-32 px-4">
      <div className="glass p-10 md:p-16 rounded-[4rem] animate-fade-in shadow-2xl border-white/10 relative overflow-hidden">
        {/* Decoración Ritual */}
        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-indigo-600 via-pink-600 to-indigo-600 opacity-50"></div>
        
        <div className="prose prose-invert prose-indigo max-w-none">
          {data.content.split('\n').map((line, i) => {
            if (line.trim() === '') return <br key={i} />;
            if (line.startsWith('# ')) return <h1 key={i} className="text-4xl md:text-6xl font-black mb-10 text-white tracking-tighter uppercase leading-none">{line.replace('# ', '')}</h1>;
            if (line.startsWith('## ')) return <h2 key={i} className="text-2xl md:text-3xl font-bold mt-16 mb-6 text-indigo-400 border-l-8 border-indigo-600 pl-6 uppercase tracking-widest">{line.replace('## ', '')}</h2>;
            if (line.startsWith('### ')) return <h3 key={i} className="text-xl font-bold mt-10 mb-4 text-pink-500 uppercase">{line.replace('### ', '')}</h3>;
            if (line.startsWith('- ') || line.startsWith('* ')) return <li key={i} className="ml-8 mb-4 text-slate-300 list-none flex items-start gap-4">
              <span className="text-indigo-500 mt-1">✦</span>
              <span className="flex-1 leading-relaxed">{line.substring(2)}</span>
            </li>;
            return <p key={i} className="mb-8 text-slate-300 leading-relaxed text-xl font-light">{line}</p>;
          })}
        </div>

        <div className="mt-24 pt-16 border-t border-white/10 text-center relative">
          <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-slate-900 px-6 py-2 rounded-full border border-white/10 text-[10px] font-black text-indigo-400 uppercase tracking-[0.4em]">
            Portal de Acción
          </div>

          <h4 className="text-3xl font-black text-white mb-8 uppercase tracking-tighter">¿Transformamos este sueño en realidad?</h4>
          
          <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
            <button 
              onClick={handleFullReservation}
              className="w-full md:w-auto bg-emerald-600 hover:bg-emerald-500 text-white px-12 py-6 rounded-2xl font-black text-xl shadow-[0_20px_40px_rgba(16,185,129,0.3)] transition-all hover:scale-105 active:scale-95 flex items-center justify-center gap-4 uppercase tracking-widest"
            >
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.246 2.248 3.484 5.232 3.484 8.412-.003 6.557-5.338 11.892-11.893 11.892-1.997-.001-3.951-.5-5.688-1.448l-6.309 1.656zm6.224-3.82l.446.265c1.404.835 3.028 1.277 4.686 1.278 4.897 0 8.882-3.987 8.884-8.887 0-2.373-.924-4.604-2.601-6.282s-3.91-2.601-6.282-2.601c-4.898 0-8.885 3.987-8.886 8.888 0 1.74.459 3.44 1.325 4.931l.29.5-.997 3.644 3.735-.98zm11.366-6.425c-.26-.13-.538-.195-1.538-.695-.13-.065-.226-.098-.323.048-.1.147-.387.487-.474.583-.087.097-.174.11-.433.02-.26-.13-1.097-.404-2.09-1.287-.773-.69-1.295-1.543-1.446-1.803-.151-.26-.016-.4.113-.53.117-.117.26-.303.39-.455.129-.152.172-.26.26-.433.087-.173.043-.324-.022-.454-.065-.13-.538-1.295-.737-1.772-.194-.467-.393-.404-.538-.411-.14-.007-.3-.008-.46-.008s-.42.06-.64.3c-.22.24-.84.82-.84 2s.86 2.32.98 2.48c.12.16 1.7 2.6 4.12 3.64.57.25 1.02.4 1.36.51.58.18 1.1.15 1.51.09.46-.07 1.42-.58 1.62-1.14.2-.56.2-1.04.14-1.14-.06-.1-.22-.16-.48-.29z"/></svg>
              INICIAR RESERVA POR WHATSAPP
            </button>
            <a 
              href={`tel:${phoneNumber}`}
              className="w-full md:w-auto bg-slate-800 hover:bg-slate-700 text-white px-10 py-6 rounded-2xl font-black text-lg shadow-xl transition-all border border-white/10 flex items-center justify-center gap-4 uppercase"
            >
              📞 ASISTENCIA TELEFÓNICA
            </a>
          </div>
          <p className="mt-8 text-indigo-400 font-black text-2xl tracking-widest">{phoneNumber}</p>
          <div className="mt-4 flex justify-center gap-2 opacity-30">
            {Array.from({ length: 5 }).map((_, i) => <span key={i} className="text-yellow-400">★</span>)}
          </div>
          <p className="text-[9px] text-slate-500 mt-4 uppercase tracking-[0.4em] font-bold">Reserva Automática: Todos los enlaces y detalles se sincronizan con Mauricio</p>
        </div>
      </div>
    </div>
  );
};

export default ItineraryDisplay;
