
import { GoogleGenAI, GenerateContentResponse } from "@google/genai";
import { ItineraryResponse, TravelPreferences } from "../types";

export const generateItinerary = async (prefs: TravelPreferences): Promise<ItineraryResponse> => {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  
  const locationContext = [
    prefs.town && `Pueblo/Ciudad: ${prefs.town}`,
    prefs.state && `Estado/Departamento: ${prefs.state}`,
    prefs.country && `País: ${prefs.country}`,
    `Región: ${prefs.region}`
  ].filter(Boolean).join(', ');

  const prompt = `
    Eres el experto mundial en viajes de ultra-lujo de "DONDE VAMOS - VIAJES POR EL MUNDO".
    Tu misión es crear el itinerario completo más épico de la historia para un destino GLOBAL.
    
    UBICACIÓN OBJETIVO: ${locationContext}
    
    CONTEXTO DEL SERVICIO:
    - Experiencia de 1,000,000,000 estrellas.
    - Duración: ${prefs.duration} días.
    - Estilo: ${prefs.style} (Lujo, Aventura, Cultura o Gourmet).
    
    ESTRUCTURA OBLIGATORIA DEL RESULTADO:
    1. INTRODUCCIÓN: Un texto poético y vibrante sobre por qué este rincón del mundo es único.
    2. LOGÍSTICA DE ÉLITE: Cómo llegar y moverse con estilo.
    3. ITINERARIO DÍA A DÍA: 
       - 🏨 HOSPEDAJE: El hotel, villa o resort más icónico y exclusivo del lugar.
       - 🍽️ RITUAL GASTRONÓMICO: Restaurantes con estrellas o experiencias culinarias secretas.
       - ⛰️ ACTIVIDAD MEMORABLE: Experiencias que el dinero apenas puede comprar.
    4. "EL SECRETO MEJOR GUARDADO": Un lugar o actividad en ${prefs.state || prefs.country} que casi nadie conoce.
    
    TONO: Ceremonial, sofisticado, experto y emocionante.
    FORMATO: Markdown elegante con emojis y encabezados claros.
    BÚSQUEDA: Utiliza herramientas de búsqueda para confirmar que los sitios existen y están abiertos en 2025.
  `;

  try {
    const response: GenerateContentResponse = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: prompt,
      config: {
        tools: [{ googleSearch: {} }],
        temperature: 0.9,
      },
    });

    const content = response.text || "Lo sentimos, el mapa estelar no pudo cargarse. Intenta de nuevo.";
    const sources = response.candidates?.[0]?.groundingMetadata?.groundingChunks || [];

    return {
      content,
      sources: sources as any[]
    };
  } catch (error) {
    console.error("Gemini API Error:", error);
    throw new Error("La red global de inteligencia está saturada. Reintenta en unos segundos.");
  }
};
