let signInForm = document.getElementById("signInForm")
signInForm.onsubmit = (e) =>{
   e.preventDefault()
    let email = signInForm.email.value
    let password = signInForm.password.value
    console.log(email, password);
}