import fetch from 'node-fetch';

export default async function handler(req, res) {
  try {
    const response = await fetch("https://sl.seatemperature.net/current/slovenia/izola-izola-isola-slovenia/");
    const html = await response.text();

    // DEBUG LOG
    // console.log(html); // za preverjanje (odkomentiraj za test)

    // Posodobljen regex – preveri class temperature
    const match = html.match(/class="temperature">([0-9]{1,2}(?:\.[0-9])?)°C/);
    const temp = match ? parseFloat(match[1]) : null;

    if (!temp) {
      return res.status(500).json({ error: "Temperatura ni najdena" });
    }

    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader("Content-Type", "application/json");
    res.status(200).json({
      temp,
      updated: new Date().toISOString()
    });
  } catch (err) {
    console.error("Napaka v handlerju:", err);
    res.status(500).json({ error: "Napaka pri branju podatkov" });
  }
}
