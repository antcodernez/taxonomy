const OpenAI = require("openai");

const {config} = require("../config/config");

const openai = new OpenAI({
    apiKey: config.aiApiKey,
  });

async function requestAI (prompt) {
  const completion = await openai.chat.completions.create({
    messages: [{ role: "user", content: prompt}],
    model: "gpt-3.5-turbo",
  });
  const outputAI = completion.choices[0];
  return outputAI
}

module.exports = { requestAI };