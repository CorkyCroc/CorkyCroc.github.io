const user = document.getElementById("user");
function info(e) {
  let info = JSON.parse(localStorage.getItem("user"));
  console.log(info);
  let name = info.name;
  let email = info.email;
  let password = info.pass;
  let html = `        <p>Name: ${name}</p>
    <p>Email: ${email}</p>
    <p>Password: ${password}</p>`;

  document.querySelector(".info").innerHTML = html;
}
info();

function fileName(e) {
  const form = document.getElementById("input");
  // const wrapper = document.getElementById("file-upload-wrapper");
  const root = document.querySelector(":root");
  form.addEventListener("change", function () {
    root.style.setProperty(
      "--pseudo-text",
      `"${document.getElementById("input").files[0].name}"`
    );
    // let result = text.replace("Select your PDF file!", `${document.getElementById("input").files[0].name}`);
  });
}
fileName();
