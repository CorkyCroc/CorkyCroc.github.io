let form_submit = document.getElementById("search_form");

let key = localStorage.getItem('key');

form_submit.onsubmit = function (sub) {
  sub.preventDefault();
  let key = form_submit.city.value;

  getData(key);

  console.log(key);

  form_submit.city.value = "";
};

const ctx = document.getElementById("myChart").getContext("2d");

let getData = async (city) => {
  let drawData = await fetch(
    `https://api.weatherapi.com/v1/forecast.json?key=44ab760595ba41e7a4680133222401&q=${city}&days=10&aqi=yes&alerts=no`
  );

  let data = await drawData.json();
  let forecast = data.forecast.forecastday;

  let date = forecast.map((e) => {
    return e.date;
  });

  let avgtemp = forecast.map((e) => {
    return Math.round(e.day.avgtemp_c);
  });

  let totalPrecip = forecast.map((e) => {
    return e.day.totalprecip_mm;
  });

  let avghumid = forecast.map((e) => {
    return e.day.avghumidity;
  });

  let uv = forecast.map((e) => {
    return e.day.uv;
  });

  let vis = forecast.map((e) => {
    return e.day.avgvis_km;
  });

  console.log(vis);

  const mixedChart = new Chart(ctx, {
    type: "bar",
    data: {
      datasets: [
        {
          label: "Total precipitation (mm)",
          data: totalPrecip,
          borderColor: "rgba(9, 132, 227,1.0)",
          backgroundColor: "rgba(9, 132, 227,0.5)",
          order: 3,
          borderWidth: 2,
        },
        {
          label: "Average humidity (%)",
          data: avghumid,
          borderColor: "rgba(52, 73, 94,1.0)",
          backgroundColor: "rgba(52, 73, 94,0.5)",
          order: 4,
          borderWidth: 2,
        },
        {
          label: "Average temperature (℃)",
          data: avgtemp,
          type: "line",
          borderColor: "rgba(230, 126, 34,1.0)",
          backgroundColor: "rgba(230, 126, 34,0.5)",
          order: 1,
          borderWidth: 2,
          tension: 0.1,
        },
        {
          label: "UV index",
          data: uv,
          type: "line",
          borderColor: "rgba(192, 57, 43,1.0)",
          backgroundColor: "rgba(192, 57, 43,0.5)",
          order: 2,
          borderWidth: 2,
          tension: 0.1,
        },
        {
          label: "Vision (km)",
          data: vis,
          type: "line",
          borderColor: "rgba(129, 236, 236,1.0)",
          backgroundColor: "rgba(129, 236, 236,0.5)",
          order: 2,
          borderWidth: 2,
          tension: 0.1,
        },
      ],
      labels: date,
    },
    options: {
      color: "#fff",
      plugins: {
        legend: {
          labels: {
            // This more specific font property overrides the global property
            font: {
              size: 13,
            },
          },
        },
      },
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    },
  });

  let html = `        <p id='cityName'>${data.location.name}</p>`

  document.querySelector('.cityTitle').innerHTML = html;

  document.querySelector('#graphInput').value = city;
};

getData(key);

