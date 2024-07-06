import OpenAI from "openai";
import { OPENAI_API_KEY } from "./utilities/CONSTANTS";

export const openai = new OpenAI({
  apiKey: OPENAI_API_KEY,
  dangerouslyAllowBrowser: true,
});
