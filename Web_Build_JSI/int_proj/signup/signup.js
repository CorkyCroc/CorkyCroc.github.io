localStorage.clear();
let form = document.getElementById("register-form");
form.onsubmit = function signUp(e) {
  e.preventDefault();
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let pass = document.getElementById("pass").value;

  let user = {
    name: name,
    email: email,
    pass: pass,
  };

  localStorage.setItem("user", JSON.stringify(user));
  console.log("asfasdas");
  setTimeout(() => {window.open("../signin/signin.html", "_self")}, 3000)
};

// form.onsubmit = function redirect(e) {
//   window.open("../home/home.html");
// };
