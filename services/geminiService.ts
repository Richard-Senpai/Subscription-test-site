import { GoogleGenAI } from "@google/genai";

// Initialize Gemini API
const apiKey = process.env.API_KEY || '';
const ai = new GoogleGenAI({ apiKey });

export const askCourseAssistant = async (question: string): Promise<string> => {
  if (!apiKey) {
    return "Demo Mode: API Key not configured. The AI assistant helps students find the right modules and answers technical questions.";
  }

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: question,
      config: {
        systemInstruction: "You are a helpful, enthusiastic AI assistant for 'Nexus Learning', a premium online educational course for advanced web development and AI integration. Your goal is to encourage users to subscribe by highlighting the course value: 100+ hours of content, weekly live calls, and a private community. Keep answers short, punchy, and sales-oriented but helpful.",
        thinkingConfig: { thinkingBudget: 0 } // Speed over deep reasoning for a landing page chat
      },
    });

    return response.text || "I'm having trouble connecting to the Nexus at the moment. Please try again.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I'm currently undergoing maintenance. Please check out our curriculum section!";
  }
};