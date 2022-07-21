const user = document.getElementById("user")
function info(e){
    let info = JSON.parse(localStorage.getItem("user"))
    console.log(info);
    let name = info.name;
    let email = info.email;
    let password = info.password;
    let html = `        <p>Name:${name}</p>
    <p>Email:${email}</p>
    <p>Password:${password}</p>`

    document.querySelector(".info").innerHTML = html;
}
info()