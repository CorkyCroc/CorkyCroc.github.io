let formin = document.getElementById('input')
formin.onsubmit = async function Getdata(city) {
  let drawdata = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=7674da634845e7c2d8c53ab0a48b8e29`
  );
  let data = await drawdata.json();

  let key = formin.cityName.value
  let domWeather = document.querySelector(".container");
  let html = `<div class="card">
  <img src="http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="">
  <hr>
  <h1>${Math.floor(data.main.temp-273.15)}°C</h1>
  <p>${data.weather[0].description}</p>  
</div>`;

    domWeather.innerHTML = html;
  }
Getdata(`${key}`);
