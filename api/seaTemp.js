import fetch from 'node-fetch';

export default async function handler(req, res) {
  try {
    const response = await fetch("https://sl.seatemperature.net/current/slovenia/izola-izola-isola-slovenia/");
    const html = await response.text();

    const match = html.match(/Temperatura:\s*([0-9]{1,2}(?:\.[0-9])?)\s*°C/);
    const temp = match ? parseFloat(match[1]) : null;

    if (temp === null) {
      return res.status(500).json({ error: "Temperatura ni najdena" });
    }

    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader("Content-Type", "application/json");
    res.status(200).json({
      temp,
      updated: new Date().toISOString()
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Napaka pri branju podatkov" });
  }
}
