
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const getCreativeInsight = async (prompt: string) => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: prompt,
      config: {
        systemInstruction: "You are the creative brain of Moeez, a world-class graphic designer. Give extremely concise, short, and efficient answers. Use professional but artistic language. No long paragraphs—just the core insight fast.",
        temperature: 0.7,
      }
    });
    return response.text || "Fresh ideas coming up!";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "Brainstorming... try again!";
  }
};
