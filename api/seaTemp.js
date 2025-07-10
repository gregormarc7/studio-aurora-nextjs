import fetch from 'node-fetch';

export default async function handler(req, res) {
  try {
    const response = await fetch("https://www.vreme-info.si/temperatura-morja/izola/");
    const html = await response.text();

    // Regex: Izola, 3 ure nazaj, 26.6 °C
    const match = html.match(/Izola,\s*\d+\s*ure nazaj,\s*([0-9]{1,2}\.?[0-9])\s*°C/);
    const temp = match ? parseFloat(match[1]) : null;

    if (temp === null) {
      console.error("Regex ni ujel temperature na vreme-info.si");
      return res.status(500).json({ error: "Temperatura ni najdena" });
    }

    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Content-Type", "application/json");
    res.status(200).json({ temp, updated: new Date().toISOString() });

  } catch (err) {
    console.error("Napaka pri fetchu:", err);
    res.status(500).json({ error: "Napaka pri fetchu" });
  }
}
