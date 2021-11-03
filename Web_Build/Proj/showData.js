const numb = (number) => {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

async function getData() {
  let drawdata = await fetch(`https://static.pipezero.com/covid/data.json`);
  let data = await drawdata.json();
  return data;

  // console.log(data);
  // renderFullData(data.locations);
}

window.onload = async function () {
  let data = await getData();
  renderFullData(data.locations);
};

let formSearch = document.querySelector("#search_form");
formSearch.onsubmit = async function (e) {
  e.preventDefault();

  let city = formSearch.city.value.trim();

  let allData = await getData();

  let data = allData.locations;

  let result = data.filter((i) => {
    return i.name.toLowerCase().includes(city.toLowerCase());
  });
  renderFullData(result);
};

let renderFullData = (data) => {
  let dom = document.querySelector(".show_data_container");
  dom.innerHTML = "";

  for (let i = 0; i < data.length; i++) {
    let html = `<div class="card">
      <h2>${data[i].name}</h2>
      <p>Total Cases: ${numb(data[i].cases)}</p>
      <p><i class="fas fa-ambulance"></i>Cases Today: ${data[i].casesToday}</p>
      <p><i class="fas fa-skull"></i>Death: ${data[i].death}</p>
      <p><i class="fad fa-procedures"></i>Treating: ${data[i].treating}</p>
      <p><i class="fad fa-syringe"></i>Recovered: ${data[i].recovered}</p>
    </div>`;
    dom.innerHTML += html;
  }
};
