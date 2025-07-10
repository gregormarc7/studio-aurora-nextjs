import fetch from 'node-fetch';

export default async function handler(req, res) {
  const API_KEY = "0c9ff55e2bc630eb45e778c68a57d390";
  const LAT = 45.538;
  const LON = 13.66;

  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${LAT}&lon=${LON}&units=metric&lang=sl&appid=${API_KEY}`
    );
    const data = await response.json();

    if (!data || !data.main || !data.wind || !data.weather) {
      return res.status(500).json({ error: "Podatki niso popolni" });
    }

    res.status(200).json({
      tempZrak: data.main.temp,
      veter: data.wind.speed,
      icon: data.weather[0].icon
    });
  } catch (err) {
    res.status(500).json({ error: "Napaka pri pridobivanju" });
  }
}
