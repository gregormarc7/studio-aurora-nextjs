// netlify/functions/weather.js

const fetch = (...args) => import('node-fetch').then(({ default: fetch }) => fetch(...args));

exports.handler = async function(event, context) {
  try {
    const response = await fetch("https://api.openweathermap.org/data/2.5/weather?lat=45.5389&lon=13.6606&appid=0c9ff55e2bc630eb45e778c68a57d390&units=metric&lang=sl");
    const data = await response.json();

    // Izluščimo podatke
    const tempZrak = data.main?.temp;
    const veter = data.wind?.speed;
    const iconCode = data.weather?.[0]?.icon;
    const ikonaUrl = iconCode ? `https://openweathermap.org/img/wn/${iconCode}@2x.png` : null;

    // Vrni rezultat kot JSON
    return {
      statusCode: 200,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ tempZrak, veter, ikonaUrl })
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Napaka pri branju vremena", debug: error.message })
    };
  }
};
