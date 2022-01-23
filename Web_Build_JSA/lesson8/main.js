let form_input = document.getElementById("form-input");

form_input.onsubmit = function (e) {
  e.preventDefault();
  let key = form_input.city.value;

  getData(key);

  console.log(key);

  form_input.city.value = "";
};

let getData = async (city) => {
  let drawData = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=7674da634845e7c2d8c53ab0a48b8e29`
  );

  let data = await drawData.json();

  let name = data.name;

  let icon = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;

  let temp = Math.round(data.main.temp - 273.15);

  let des = data.weather[0].description;

  let html = `        <img src="${icon}" />
  <p>${name}</p>
  <p>${temp}℃</p>
  <p>${des}</p>`;

  document.querySelector('.info').innerHTML = html;

  error => alert("Can not find the city you desired to know");
  
};
