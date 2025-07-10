const fetch = require('node-fetch');

exports.handler = async function(event, context) {
  const API_KEY = "0c9ff55e2bc630eb45e778c68a57d390";
  const LAT = 45.538;
  const LON = 13.66;

  try {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${LAT}&lon=${LON}&units=metric&lang=sl&appid=${API_KEY}`);
    const data = await response.json();

    return {
      statusCode: 200,
      headers: { "Access-Control-Allow-Origin": "*" },
      body: JSON.stringify({
        tempZrak: data.main.temp,
        veter: data.wind.speed,
        icon: data.weather[0].icon
      })
    };
  } catch (err) {
    return { statusCode: 500, body: JSON.stringify({ error: "Napaka pri pridobivanju" }) };
  }
};
