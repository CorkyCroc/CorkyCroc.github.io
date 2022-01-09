let signInForm = document.getElementById("signInForm")

let usersFromLocal = JSON.parse(localStorage.getItem("users"))

let users= []

signUpform.onsubmit = (e) =>{
    e.preventDefault()
     setTextErr("#emailErr", " ")
     setTextErr("#passwordErr", " ")
     setTextErr("#confirmPasswordErr", " ")
     let email = signUpform.email.value
     let password = signUpform.password.value
     let confirmPassword = signUpform.confirmPassword.value

     let validate = true

    if(!email){
         setTextErr("#emailErr", "Email is required")
         let validate = false
    }
     if(!password){
         setTextErr("#passwordErr", "Password is required")
         validate = false
     }
     if(!confirmPassword){
         setTextErr("#confirmPasswordErr", "Confirm Password is required")
         validate = false
     }
     if(password.length <6){
         setTextErr("#passwordErr", "Password must be at least 6 characters")
         validate = false
     }else{
         if(confirmPassword != password){
             setTextErr("#confirmPasswordErr", "Password does not match")
             validate = false
         }
        }
        if(validate){
            let users = [{
                email: email,
                password: password
            }]
            users.push(user)
            localStorage.setItem("users", JSON.stringify)
     }
    }

 let setTextErr = (query, content) =>{
    document.querySelector(query).innerHTML = content
 }