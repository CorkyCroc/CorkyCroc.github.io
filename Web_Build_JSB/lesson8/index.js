let formin = document.getElementById('input')

formin.onsubmit = function(e) {
  e.preventDefault();
  let key = formin.cityName.value
  Getdata(key)
}

async function Getdata(city) {
  let drawdata = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=7674da634845e7c2d8c53ab0a48b8e29`
  );
  let data = await drawdata.json();
  
  }