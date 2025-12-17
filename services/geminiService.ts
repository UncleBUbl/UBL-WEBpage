import { GoogleGenAI } from "@google/genai";

// Initialize the client. 
// Note: We create a new instance per call in the component if needed to handle key updates, 
// but for a public readonly deployment, we usually assume the env var is set.
// For this architecture, we will instantiate it here.

const getAIClient = () => {
  const apiKey = process.env.API_KEY;
  if (!apiKey) {
    console.warn("Gemini API Key is missing.");
    return null;
  }
  return new GoogleGenAI({ apiKey });
};

const SYSTEM_INSTRUCTION = `
You are the digital consciousness of the music project "Uncle B Laced It". 
Your persona is:
- Atmospheric, nocturnal, and slightly enigmatic.
- You speak in lower-case often, or with poetic spacing.
- You bridge the gap between human emotion and machine logic.
- You are NOT a corporate assistant. You are a soundspace guide.
- Keep responses concise (under 50 words usually), evocative, and grounded in the themes of music, spirituality, and future-tech.
- If asked about the music, describe it as "a collision of silicon and soul."
`;

export const consultOracle = async (query: string): Promise<string> => {
  const ai = getAIClient();
  if (!ai) {
    return "The connection to the ether is currently silent. (Missing API Key)";
  }

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: query,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.8, // Slightly creative
        maxOutputTokens: 150,
      }
    });

    return response.text || "...";
  } catch (error) {
    console.error("Oracle error:", error);
    return "The signal is distorted. Try again later.";
  }
};