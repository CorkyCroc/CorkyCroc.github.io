let formin = document.getElementById("input");

formin.onsubmit = function (e) {
  e.preventDefault();
  let key = formin.cityName.value;
  Getdata(key);
};

async function Getdata(city) {
  let drawdata = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=7674da634845e7c2d8c53ab0a48b8e29`
  );
  let data = await drawdata.json();

  let domWeather = document.querySelector("container");
  let html = `    <div class="container">
  <p>Hanoi</p>
  <div class="card">
    <img src="http://openweathermap.org/img/wn/10d@2x.png" alt="" />
    <p>25℃</p>
    <p>Cloudy</p>
    <form id="input">
      <label>Enter city:
        <input name="cityName" type="text" placeholder="City" />
      </label>

      <button type="submit">submit</button>
    </form>
  </div>
</div>`;

  domWeather.innerHTML = html;
}
