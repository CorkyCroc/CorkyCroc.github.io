

let signInForm = document.getElementById("signInForm")
signInForm.onsubmit = (e) =>{
   e.preventDefault()
    let email = signInForm.email.value
    let password = signinForm.password.value
    console.log(email, password);
}