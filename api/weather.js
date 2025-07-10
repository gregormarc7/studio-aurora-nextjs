import fetch from 'node-fetch';

export default async function handler(req, res) {
  const API_KEY = "0c9ff55e2bc630eb45e778c68a57d390"; // ← zamenjaj s svojim!
  const LAT = 45.538; // Izola
  const LON = 13.66;

  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${LAT}&lon=${LON}&units=metric&lang=sl&appid=${API_KEY}`
    );
    if (!response.ok) throw new Error("Napaka pri poizvedbi API");

    const data = await response.json();

    const weather = {
      tempZrak: data.main.temp,
      veter: data.wind.speed,
      opis: data.weather[0].description,
      updated: new Date(data.dt * 1000).toISOString()
    };

    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Content-Type", "application/json");
    res.status(200).json(weather);
  } catch (err) {
    console.error("Napaka:", err);
    res.status(500).json({ error: "Napaka pri pridobivanju vremena" });
  }
}
