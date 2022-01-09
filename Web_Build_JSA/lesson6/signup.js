let signUpform = document.getElementById("signUpForm")

let users = []
let usersFromLocal = JSON.parse(localStorage.getItem("users"))  
if(usersFromLocal){
    users = usersFromLocal
}

signUpform.onsubmit = (e) =>{
    e.preventDefault()

    setTextErr("#emailErr", "")
    setTextErr("#passwordErr", "")
    setTextErr("#confirmPasswordErr", "")

    let email = signUpform.email.value
    let password = signUpform.password.value
    let confirmPassword = signUpform.confirmPassword.value

    let validate = true

    if(!email){
        setTextErr("#emailErr", "Email is required")
        validate = false
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
        let user = {
            email: email,
            password: password
        }
        users.push(user)
        localStorage.setItem("users", JSON.stringify(users))
    }
}

let setTextErr = (query, content) =>{
    document.querySelector(query).innerHTML = content
}
