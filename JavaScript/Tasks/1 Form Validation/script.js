const userName = "admin";
const password = "Administrator";
// Administrator

let loginBtn = document.querySelector("input[type='button']");
let continueBtn = document.querySelector("a");

let login = () => {
  let user = document.querySelector("#usersname").value;
  let pass = document.querySelector("#password").value;
  if (user == userName && pass == password) {
    continueBtn.style.display = "block";
  } else {
    alert("Login Failed");
  }
};
