let form_submit = document.getElementById("search_form");

form_submit.onsubmit = function (sub) {
  sub.preventDefault();
  let key = form_submit.city.value;

  getCity(key);

  console.log(key);

  form_submit.city.value = "";
};

let getCity = async (city) => {
  let drawData = await fetch(
    `https://api.weatherapi.com/v1/forecast.json?key=44ab760595ba41e7a4680133222401&q=${city}&days=3&aqi=yes&alerts=yes`
  );

  let data = await drawData.json();

  let html = `<div class="stat_wrapper">
  <h1>${data.location.name}</h1>
  <div class="weatherinfo">
    <div class="today">
      <h3>Today</h3>
      <img
        src="${data.current.condition.icon}"></
        alt=""
      />
      <h4>${data.current.temp_c + "℃"}</h4>
      <h5>${data.current.condition.text}</h5>
      <div class="sub">
        <div class="realfeel">
          <span
            ><i
              class="fas fa-temperature-low"
              style="user-select: auto"
            ></i
            >Realfeel: ${data.current.feelslike_c + "℃"}</span
          >
        </div>
        <div class="rain">
        <i class="far fa-umbrella" style="user-select: auto"></i
            >Rain chance: ${
              data.forecast.forecastday[0].day.daily_chance_of_rain + "%"
            }</span
          >
        </div>
        <div class="wind">
          <span
            ><i class="far fa-wind" style="user-select: auto"></i>Wind
            speed: ${
              data.current.wind_dir + data.current.wind_kph + "km/h"
            }</span
          >
        </div>
        <div class="humidity">
            <i class="far fa-humidity" style="user-select: auto"></i
            >Humidity: ${data.current.humidity + "%"}</span
          >
        </div>
      </div>
    </div>
    <div class="forecast1">
      <h3>${data.forecast.forecastday[1].date}</h3>
      <img
      src="${data.forecast.forecastday[1].day.condition.icon}"
      alt=""
    />
      <h4>${data.forecast.forecastday[1].day.avgtemp_c + "℃"}</h4>
      <h5>${data.forecast.forecastday[1].day.condition.text}</h5>
      <div class="sub">
        <div class="maxtemp">
          <span
            ><i
              class="far fa-thermometer-three-quarters"
              style="user-select: auto"
            ></i
            >Max:${data.forecast.forecastday[1].day.maxtemp_c + "℃"}</span
          >
        </div>
        <div class="mintemp">
          <span
            ><i
              class="far fa-thermometer-quarter"
              style="user-select: auto"
            ></i
            >Min:${data.forecast.forecastday[1].day.mintemp_c + "℃"}℃</span
          >
        </div>
        <div class="rain">
          <span
            ><i class="far fa-umbrella" style="user-select: auto"></i
            >Rain chance: ${
              data.forecast.forecastday[1].day.daily_chance_of_rain + "%"
            }</span
          >
        </div>
      </div>
    </div>
    <div class="forecast2">
      <h3>${data.forecast.forecastday[2].date}</h3>
      <img
        src="${data.forecast.forecastday[2].day.condition.icon}"
        alt=""
      />
      <h4>${data.forecast.forecastday[2].day.avgtemp_c + "℃"}</h4>
      <h5>${data.forecast.forecastday[2].day.condition.text}</h5>
      <div class="sub">
        <div class="maxtemp">
          <span
            ><i
              class="far fa-thermometer-three-quarters"
              style="user-select: auto"
            ></i
            >Max:${data.forecast.forecastday[2].day.maxtemp_c + "℃"}</span
          >
        </div>
        <div class="mintemp">
          <span
            ><i
              class="far fa-thermometer-quarter"
              style="user-select: auto"
            ></i
            >Min:${data.forecast.forecastday[2].day.mintemp_c + "℃"}</span
          >
        </div>
        <div class="rain">
          <span
            ><i class="far fa-umbrella" style="user-select: auto"></i
            >Rain chance: ${
              data.forecast.forecastday[2].day.daily_chance_of_rain + "%"
            }</span
          >
        </div>
      </div>
    </div>
  </div>
</div>
</div>`;

  document.querySelector(".info_search").innerHTML = html;
};
