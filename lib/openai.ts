import OpenAI from 'openai';

if (!process.env.OPENAI_API_KEY) {
  throw new Error('Please add your OpenAI API key to .env.local');
}

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function generateArticle(topic: string, category: string) {
  const completion = await openai.chat.completions.create({
    model: "gpt-4",
    messages: [
      {
        role: "system",
        content: `You are a professional journalist writing for a prestigious newspaper called "The Herald". Write in a formal, objective, and engaging news style. Focus on facts, include relevant quotes, and maintain journalistic integrity.`
      },
      {
        role: "user",
        content: `Write a news article about: ${topic}. Category: ${category}. Include a compelling headline, a detailed article body (at least 500 words), and make it suitable for publication in a major newspaper.`
      }
    ],
    temperature: 0.7,
    max_tokens: 1500,
  });

  return completion.choices[0].message.content;
}

export async function generateHeadline(articleBody: string) {
  const completion = await openai.chat.completions.create({
    model: "gpt-4",
    messages: [
      {
        role: "system",
        content: "You are a news editor creating compelling, accurate headlines for newspaper articles. Headlines should be concise, informative, and follow AP style guidelines."
      },
      {
        role: "user",
        content: `Create a compelling newspaper headline for this article: ${articleBody.substring(0, 500)}...`
      }
    ],
    temperature: 0.7,
    max_tokens: 100,
  });

  return completion.choices[0].message.content;
}

export async function generateExcerpt(articleBody: string) {
  const completion = await openai.chat.completions.create({
    model: "gpt-4",
    messages: [
      {
        role: "system",
        content: "You are a news editor creating article excerpts. Create a concise, engaging 2-3 sentence summary that captures the essence of the article and entices readers."
      },
      {
        role: "user",
        content: `Create an excerpt for this article: ${articleBody.substring(0, 500)}...`
      }
    ],
    temperature: 0.7,
    max_tokens: 150,
  });

  return completion.choices[0].message.content;
}

export async function generateBreakingNews(context: string) {
  const completion = await openai.chat.completions.create({
    model: "gpt-4",
    messages: [
      {
        role: "system",
        content: "You are a news editor creating breaking news alerts. Write concise, urgent, single-sentence breaking news updates that capture the most critical information."
      },
      {
        role: "user",
        content: `Create a breaking news alert about: ${context}`
      }
    ],
    temperature: 0.7,
    max_tokens: 100,
  });

  return completion.choices[0].message.content;
}

export async function summarizeArticle(articleBody: string, length: 'short' | 'medium' | 'long' = 'medium') {
  const lengthGuide = {
    short: '1-2 sentences',
    medium: '3-4 sentences',
    long: '1 paragraph'
  };

  const completion = await openai.chat.completions.create({
    model: "gpt-4",
    messages: [
      {
        role: "system",
        content: `You are a news editor creating article summaries. Create a ${lengthGuide[length]} summary that captures the key facts and main points.`
      },
      {
        role: "user",
        content: `Summarize this article: ${articleBody}`
      }
    ],
    temperature: 0.5,
    max_tokens: length === 'short' ? 100 : length === 'medium' ? 200 : 300,
  });

  return completion.choices[0].message.content;
}

export async function generateOpinionPiece(topic: string, stance: string) {
  const completion = await openai.chat.completions.create({
    model: "gpt-4",
    messages: [
      {
        role: "system",
        content: "You are an opinion columnist for a major newspaper. Write persuasive, well-reasoned opinion pieces that present a clear viewpoint while acknowledging counterarguments."
      },
      {
        role: "user",
        content: `Write an opinion piece about ${topic}. Stance: ${stance}. Include compelling arguments, relevant examples, and a strong conclusion.`
      }
    ],
    temperature: 0.8,
    max_tokens: 1500,
  });

  return completion.choices[0].message.content;
}
