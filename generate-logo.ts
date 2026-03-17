import { GoogleGenAI } from "@google/genai";
import fs from "fs";

async function main() {
  const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
  const response = await ai.models.generateContent({
    model: 'gemini-2.5-flash-image',
    contents: {
      parts: [
        {
          text: 'A minimal, modern, and professional personal brand logo for "Emerson.AI". Clean typography, tech-focused, elegant, centered, dark blue and electric teal colors, white background.',
        },
      ],
    },
  });
  
  for (const part of response.candidates[0].content.parts) {
    if (part.inlineData) {
      const base64EncodeString = part.inlineData.data;
      fs.writeFileSync('public/profile.jpg', Buffer.from(base64EncodeString, 'base64'));
      console.log('Image saved to public/profile.jpg');
      break;
    }
  }
}

main().catch(console.error);
