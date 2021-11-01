let global_render = "";
let vietnam_render = "";

const numb = (number) => {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

async function getData() {
  let drawdata = await fetch(`https://static.pipezero.com/covid/data.json`);
  let data = await drawdata.json();
  console.log(data);

  let death = document.querySelector("#death");
  let treatment = document.querySelector("#Treatment");
  let cases = document.querySelector("#Cases");
  let recovered = document.querySelector("#Recovered");

  global_render = () => {
    death.innerHTML = numb(data.total.world.death);
    treatment.innerHTML = numb(data.total.world.treating);
    cases.innerHTML = numb(data.total.world.cases);
    recovered.innerHTML = numb(data.total.world.recovered);
  };

  vietnam_render = () => {
    death.innerHTML = numb(data.total.internal.death);
    treatment.innerHTML = numb(data.total.internal.treating);
    cases.innerHTML = numb(data.total.internal.cases);
    recovered.innerHTML = numb(data.total.internal.recovered);
  };
  vietnam_render();
}
getData();

let global_preview = () => {
  let icon_preview = document.querySelector("#icon_global");
  let drop_select = document.querySelector("#drop_select");

  icon_preview.src = "https://img.icons8.com/color/50/000000/globe.png";
  drop_select.innerHTML = "Global";

  global_render();
};

let vietnam_preview = () => {
  let icon_preview = document.querySelector("#icon_global");
  let drop_select = document.querySelector("#drop_select");

  icon_preview.src =
    "https://img.icons8.com/color/48/000000/vietnam-circular.png";
  drop_select.innerHTML = "Vietnam";

  vietnam_render();
};

async function getNews() {
  let data = await axios.post("https://corona-api.kompa.ai/graphql", {
    operationName: "topTrueNews",
    variables: {},
    query:
      "query topTrueNews {\n  topTrueNews {\n    id\n    type\n    title\n    content\n    url\n    siteName\n    publishedDate\n    author\n    picture\n    __typename\n  }\n}\n",
  });
  let dataNew = data.data.data;

  let dataMixed = mixData(dataNew.topTrueNews);
  console.log(dataMixed);
  renderNews(dataMixed);
}
getNews();

function mixData(data){
  let result = []
  for( let i = 0; i < 5; i++){
    let randomIndex = getRandomInt(0,data.length)
    result.push(data[randomIndex])
  }

  return result
}

var scroll = new SmoothScroll('a[href*="#"]'); //scroll smooth hơn
