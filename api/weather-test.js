const fetch = (...args) => import('node-fetch').then(({ default: fetch }) => fetch(...args));

async function testOpenWeather() {
  const apiKey = 'f1523e5dd14a424e82a2a56619d4e2ee';

  const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=45.5389&lon=13.6606&appid=${apiKey}&units=metric&lang=sl`);
  const data = await res.json();
  console.log("➡️ OPENWEATHER API JSON:\n", JSON.stringify(data, null, 2));
}

testOpenWeather();
