import OpenAI from 'openai';
import { OPENAI_KEY } from './constants';

const openai = new OpenAI({
  apiKey: OPENAI_KEY, // defaults to process.env["OPENAI_API_KEY"]
  dangerouslyAllowBrowser: true //our key is prblic now and anyone can misuse it
});

export default openai;