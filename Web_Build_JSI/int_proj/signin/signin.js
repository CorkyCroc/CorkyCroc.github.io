let form = document.getElementById("login-form");
form.onsubmit = function signIn(e) {
  e.preventDefault();

  let name = document.getElementById("your_name").value;
  let passw = document.getElementById("your_pass").value;

  let data = JSON.parse(localStorage.getItem("user"));
  console.log(data);
  //   if (name != data.name || passw != data.pass) {
  //     alert("Wrong username/password");
  //   } else if ( passw != data.pass && name != data.name) {
  //     alert("Wrong username/password");
  //   } else {
  //     alert("You have logged in");
  //     let valid = 1;
  //   }

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
    } else {
      alert("Wrong password");
    }
  } else {
    alert("Name is not exist");
  }
};

let users = localStorage.getItem("user");
let usersList = [];
if (users) {
  usersList = JSON.parse(localStorage.getItem("user"));
}

// form.onsubmit = function (e) {
//   e.preventDefault();

//   let name = form.your_name.value;
//   let password = form.your_pass.value;

//   for (let i = 0; i < usersList.length; i++) {
//     if (usersList[i].name == name) {
//       if (usersList[i].pass == password) {
//         alert("success")
//         setTimeout(function(){ window.open("../home/home.html", "_self"); }, 2000);

//       } else {
//         alert("wrong password")
//       }
//       break;
//     } else {
//         alert("email is not exist")
//     }
//   }
// };
