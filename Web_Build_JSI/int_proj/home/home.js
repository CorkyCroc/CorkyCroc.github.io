const body = document.querySelector("body");
const navbar = document.querySelector(".navbar");
const menuBtn = document.querySelector(".menu-btn");
const cancelBtn = document.querySelector(".cancel-btn");
const toggle = document.getElementById("hidden");

menuBtn.onclick = () => {
  navbar.classList.add("show");
  menuBtn.classList.add("hide");
  body.classList.add("disabled");
};
cancelBtn.onclick = () => {
  body.classList.remove("disabled");
  navbar.classList.remove("show");
  menuBtn.classList.remove("hide");
};
window.onscroll = () => {
  this.scrollY > 20
    ? navbar.classList.add("sticky")
    : navbar.classList.remove("sticky");
};

toggle.onclick = (e) => {
  e.preventDefault();
  let data = JSON.parse(localStorage.getItem("signal"));
  console.log(data);
  if ((!data)) {
    alert("You need to logged in first");
  } else {
    window.open("../profile/profile.html", "_self");
  }
};
