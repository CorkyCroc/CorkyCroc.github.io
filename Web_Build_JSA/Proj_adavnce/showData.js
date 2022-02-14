let form_submit = document.getElementById("search_form");

form_submit.onsubmit = function (sub) {
  sub.preventDefault();
  let key = form_submit.city.value;

  searchCity(key);

  console.log(key);

  form_submit.city.value = "";
};

let searchCity = async function (city) {
  let getData = await fetch(
    `http://api.weatherapi.com/v1/forecast.json?key=44ab760595ba41e7a4680133222401&q=${city}&days=10&aqi=yes&alerts=no`
  );

  let data = await getData.json();

  console.log(data.forecast.forecastday.length);

//   for (let i = 0; i < data.forecast.forecastday.length; i++) {}
};getData();