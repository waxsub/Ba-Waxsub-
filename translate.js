export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  if (req.method === 'OPTIONS') return res.status(200).end();
  const { text } = req.body;
  const url = `https://translate.googleapis.com/translate_a/single?client=gtx&sl=fr&tl=wo&dt=t&q=${encodeURIComponent(text)}`;
  const response = await fetch(url);
  const data = await response.json();
  const wolof = data[0].map(item => item[0]).join('');
  res.status(200).json({ wolof });
}
