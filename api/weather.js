const fetch = (...args) => import('node-fetch').then(({ default: fetch }) => fetch(...args));

exports.handler = async function(event, context) {
  const apiKey = process.env.OPENWEATHERMAP_API_KEY;
  if (!apiKey) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "API ključ ni nastavljen." })
    };
  }

  try {
    const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=45.5389&lon=13.6606&appid=${apiKey}&units=metric&lang=sl`);
    const data = await res.json();

    console.log("🌦️ OPENWEATHER RAW:", JSON.stringify(data, null, 2)); // Bos videl icon polje

    const tempZrak = data.main?.temp;
    const veter = data.wind?.speed;
    const iconCode = data.weather?.[0]?.icon;
    const ikonaUrl = iconCode ? `https://openweathermap.org/img/wn/${iconCode}@2x.png` : null;

    return {
      statusCode: 200,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ tempZrak, veter, ikonaUrl }) // ključni del
    };
  } catch (e) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Napaka pri branju vremena", debug: e.message })
    };
  }
};
