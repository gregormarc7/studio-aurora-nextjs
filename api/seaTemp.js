import fetch from 'node-fetch';

export default async function handler(req, res) {
  try {
    // Koordinate Izole
    const lat = 45.538;
    const lon = 13.639;

    // Brezplačni SST API (Copernicus)
    const resp = await fetch(
      `https://marine.copernicus.eu/rest-api/?sensor=global_sea_surface_temperature&lat=${lat}&lon=${lon}&time=latest`
    );
    if (!resp.ok) throw new Error(resp.statusText);

    const data = await resp.json();
    const temp = data.temperature?.value ?? null;

    if (temp === null) {
      throw new Error("Ni temperature v JSONu");
    }

    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Content-Type", "application/json");
    res.status(200).json({ temp, updated: data.timestamp });

  } catch (err) {
    console.error("Napaka pri Copernicus fetchu:", err);
    res.status(500).json({ error: "Napaka pri pridobivanju SST" });
  }
}
