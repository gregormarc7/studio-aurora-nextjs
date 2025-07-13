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

    const tempZrak = data.main?.temp;
    const veter = data.wind?.speed;
    const ikona = data.weather?.[0]?.icon;
    const ikonaUrl = ikona ? `https://openweathermap.org/img/wn/${ikona}@2x.png` : null;

    return {
      statusCode: 200,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ tempZrak, veter, ikonaUrl }) // 🔥 vključena ikona!
    };
  } catch (e) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Napaka pri branju vremena", debug: e.message })
    };
  }
};
