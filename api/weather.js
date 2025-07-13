const fetch = (...args) => import('node-fetch').then(({ default: fetch }) => fetch(...args));

exports.handler = async function(event, context) {
  const apiKey = process.env.OPENWEATHERMAP_API_KEY;

  if (!apiKey) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "API ključ ni nastavljen v okolju Netlify." })
    };
  }

  try {
   const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=45.5389&lon=13.6606&appid=${apiKey}&units=metric&lang=sl`);
const data = await response.json();

console.log("❄️ API VRAČA:", JSON.stringify(data, null, 2)); // 👈 TO MORAŠ VIDETI V LOGU
    
    const tempZrak = data.main.temp;
    const veter = data.wind.speed;

    // DODANO: vremenska ikona
    const iconCode = data.weather[0].icon;
    const ikonaUrl = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;

    return {
      statusCode: 200,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ tempZrak, veter, ikonaUrl }) // <-- ZDAJ VRAČA TUDI IKONO
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Napaka pri branju vremena", debug: error.message })
    };
  }
};
