import fetch from 'node-fetch';

export default async function handler(req, res) {
  const API_KEY = "TVOJ_API_KLJUČ"; // 🔁 zamenjaj z OpenWeatherMap ključem
  const LAT = 45.538;
  const LON = 13.66;

  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${LAT}&lon=${LON}&units=metric&lang=sl&appid=${API_KEY}`
    );

    if (!response.ok) throw new Error("Napaka API");

    const data = await response.json();

    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Content-Type", "application/json");

    res.status(200).json({
      tempZrak: data.main.temp,
      veter: data.wind.speed,
      icon: data.weather[0].icon,
      updated: new Date(data.dt * 1000).toISOString()
    });
  } catch (err) {
    console.error("Napaka:", err);
    res.status(500).json({ error: "Napaka pri pridobivanju vremena" });
  }
}
