
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const getCreativeInsight = async (prompt: string) => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: prompt,
      config: {
        systemInstruction: "You are the creative brain of Moeez, a world-class graphic designer. Answer questions about design, Moeez's portfolio, or give quick design tips in a sophisticated, artistic tone.",
        temperature: 0.8,
      }
    });
    return response.text || "I'm currently sketching some new ideas. Ask me again in a moment!";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "The creative muse is currently occupied. Please try again soon.";
  }
};
