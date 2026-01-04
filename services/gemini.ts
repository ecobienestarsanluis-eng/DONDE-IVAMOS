
import { GoogleGenAI, GenerateContentResponse } from "@google/genai";
import { ItineraryResponse, TravelPreferences } from "../types";

export const generateItinerary = async (prefs: TravelPreferences): Promise<ItineraryResponse> => {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  
  const prompt = `
    Retoma y sigue creando el itinerario completo de viaje más épico de la historia para ${prefs.region}.
    
    Contexto del Usuario: El usuario está extremadamente entusiasmado (¡1000000000000 estrellas!).
    Marca: "DONDE IVAMOS - VIAJES POR EL MUNDO".
    
    Detalles del viaje:
    - Región: ${prefs.region}
    - Duración estimada: ${prefs.duration} días
    - Estilo de viaje: ${prefs.style}
    
    Requisitos del contenido:
    1. Incluye destinos icónicos y joyas ocultas de Norte América y la Nueva Sudamérica.
    2. Divide el itinerario por zonas geográficas (e.g., Costa Este, Los Andes, El Caribe, Patagonia, etc.).
    3. Para cada parada, sugiere:
       - Un hotel de ultralujo o experiencia única.
       - Un plato típico imperdible.
       - Una actividad de aventura o cultura profunda.
    4. Usa un tono de voz profesional pero vibrante, lleno de energía y lujo.
    5. Utiliza Markdown para estructurar la respuesta con encabezados elegantes.
    6. Asegúrate de incluir datos actualizados de eventos o aperturas recientes usando búsqueda en Google.
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

    const content = response.text || "Lo sentimos, no pudimos generar el itinerario en este momento.";
    const sources = response.candidates?.[0]?.groundingMetadata?.groundingChunks || [];

    return {
      content,
      sources: sources as any[]
    };
  } catch (error) {
    console.error("Gemini API Error:", error);
    throw new Error("Error conectando con los servicios de viaje.");
  }
};
