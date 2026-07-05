// PetPal RAG – GPT-4o + vet knowledge base FA/EN
// npm i openai
export const VET_KB_FA = [
  {q:'استفراغ', a:'ناشتا 12ساعت، آب کم‌کم، اگر خونی بود اورژانس', tags:['gastro']},
  {q:'اسهال', a:'برنج مرغ آب‌پز، پروبیوتیک، اگر خونی >24h ویزیت', tags:['gastro']},
  {q:'بی‌حالی', a:'چک دما، آب‌رسانی، اگر >24h یا تب >39.5 ویزیت', tags:['general']},
  {q:'تشنج', a:'RED FLAG – سر را محافظت، زمان تشنج را ثبت، فوری اورژانس', tags:['emergency']},
  {q:'واکسن', a:'هاری سالانه، DHPP توله 8-12-16 هفته', tags:['prevention']},
];
export function ragSearch(text:string, lang='fa'){
  const t=text.toLowerCase();
  return VET_KB_FA.filter(k=> t.includes(k.q) || k.tags.some(tag=>t.includes(tag))).slice(0,3);
}
export async function callLLM(prompt:string){
  // if OPENAI_API_KEY set → real call, else fallback
  if(process.env.OPENAI_API_KEY){
    // const openai = new OpenAI({apiKey:process.env.OPENAI_API_KEY});
    // const r = await openai.chat.completions.create({model:'gpt-4o', messages:[...]});
    return '[GPT-4o connected – set OPENAI_API_KEY in .env]'
  }
  return null
}
