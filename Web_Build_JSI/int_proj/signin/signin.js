let form = document.getElementById("login-form");
form.onsubmit = function signIn(e) {
  e.preventDefault();

  let name = document.getElementById("your_name").value;
  let passw = document.getElementById("your_pass").value;

  let data = JSON.parse(localStorage.getItem("user"));
  console.log(data);

  if (data.name == name) {
    if (data.pass == passw) {
      alert("Success");
      let signal = {
        status: "loggedin",
      };
      localStorage.setItem("signal", JSON.stringify(signal));
      setTimeout(() => {
        window.open("../home/home.html", "_self");
      }, 1000);

      name.your_name.value = "";
      passw.your_pass.value = "";
    } else {
      alert("Wrong password");
      name.your_name.value = "";
      passw.your_pass.value = "";
    }
  } else {
    alert("Name is not exist");
    name.your_name.value = "";
    passw.your_pass.value = "";
  }
};

let users = localStorage.getItem("user");
let usersList = [];
if (users) {
  usersList = JSON.parse(localStorage.getItem("user"));
}
