let global_render = "";
let vietnam_render = "";

const numb = (number) => {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

async function getData(country) {
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




var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}
