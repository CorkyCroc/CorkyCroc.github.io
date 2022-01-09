let formSignIn = document.getElementById("formSignIn");

let setTextErr = (query, content) => {
  document.querySelector(query).innerHTML = content;
};

let users = [];
let userslist = JSON.parse(localStorage.getItem("users")) ;
if (userslist) {
  users = userslist;
}

formSignIn.onsubmit = (e) => {
  e.preventDefault();
  let email = formSignIn.email.value;
  let password = formSignIn.password.value;

  let valid = true;

  if (!email) {
    setTextErr("#emailErr", "Email is required");
    valid = false;
  }
  if (!password) {
    setTextErr("#passwordErr", "Password is required");
    valid = false;
  }

    if (valid) {
      let success = false;
      for (let i = 0; i < users.length; i++) {
        if (users[i].email == email && users[i].password == password) {
          open("home.html", "_self");
          success = true;
          break;
        }
      }
      if (success == false) {
        alert("Sign in failed");
      }
    }

};
