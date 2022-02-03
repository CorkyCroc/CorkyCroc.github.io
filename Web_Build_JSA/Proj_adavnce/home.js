let form_submit = document.getElementById("search_form");

form_submit.onsubmit = function (sub) {
    sub.preventDefault();
  let key = form_submit.city.value;

  getData(key);

  console.log(key);

  form_submit.city.value = "";
};

// let getCity = async function (city) {
//   let Data = await fetch(
//     `https://api.weatherapi.com/v1/forecast.json?key=44ab760595ba41e7a4680133222401&q=Hanoi&days=3&aqi=yes&alerts=yes`
//   );

//   console.log(Data);

//   let data = await Data.json();

// };
