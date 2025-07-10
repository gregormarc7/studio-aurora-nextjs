import fetch from 'node-fetch';

export default async function handler(req, res) {
  try {
    const response = await fetch("https://sl.seatemperature.net/current/slovenia/izola-izola-isola-slovenia/");
    const html = await response.text();

    // 🔍 Debug – preverimo majhni del vsebine
    console.log(html.slice(0, 500));

    // Regex: iščemo številke pred °C
    const match = html.match(/([0-9]{1,2}(?:,[0-9])?)\s*°C/);
    let temp = null;
    if (match) {
      temp = parseFloat(match[1].replace(',', '.'));
    }

    if (temp === null) {
      console.error("Regex ni najdel temperature");
      return res.status(500).json({ error: "Temperatura ni najdena" });
    }

    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader("Content-Type", "application/json");
    res.status(200).json({ temp, updated: new Date().toISOString() });

  } catch (err) {
    console.error("Napaka v handlerju:", err);
    res.status(500).json({ error: "Napaka pri branju podatkov" });
  }
}
