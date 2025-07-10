import fetch from 'node-fetch';

export default async function handler(req, res) {
  try {
    const response = await fetch("https://www.vreme-info.si/temperatura-morja/izola/");
    const html = await response.text();

    // 🔍 Debug izpis prvih 500 znakov
    const preview = html.slice(0, 500);

    // Poskusi regex (za zdaj še ne zanesljiv)
    const match = html.match(/Izola,\s*\d+\s*ure nazaj,\s*([0-9]{1,2}(?:\.[0-9])?)\s*°C/);
    const temp = match ? parseFloat(match[1]) : null;

    if (temp === null) {
      console.error("❌ Regex ni ujel temperature");
      return res.status(200).json({ error: "Temperatura ni najdena", debug: preview });
    }

    // ✅ Vrnemo temperaturo + debug HTML
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Content-Type", "application/json");
    res.status(200).json({
      temp,
      updated: new Date().toISOString(),
      debug: preview
    });

  } catch (err) {
    console.error("⚠️ Napaka pri fetchu:", err);
    res.status(500).json({ error: "Napaka pri fetchu" });
  }
}
