/**
* GPT-3 and Google Sheets
*
* @param {string} prompt Prompt.
* @param {number} temperature (Optional) Temperature.
* @param {string} model (Optional) GPT-3 Model.
* @return Response returned by GPT-3.
* @customfunction
*/
//secret_key
const SECRET_KEY = "";
//const MAX_TOKENS = 10;
const MODEL_NAME = "text-davinci-003"; // more structured and deterministic: for data
//const MODEL_NAME = "davinci"; // more flexible and creative: for stories, chatbots
const MODEL_TEMP = 0.3;
function GPT(prompt,max_tokens=30) {
  const url = "https://api.openai.com/v1/completions";
  const payload = {
    model: MODEL_NAME,
    prompt: prompt,
    temperature: MODEL_TEMP,
    //max_tokens: MAX_TOKENS,
    max_tokens: max_tokens
  };
  const options = {
    contentType: "application/json",
    headers: { Authorization: "Bearer " + SECRET_KEY },
    payload: JSON.stringify(payload),
  };
  const res = JSON.parse(UrlFetchApp.fetch(url, options).getContentText());
  return res.choices[0].text.trim();
}
