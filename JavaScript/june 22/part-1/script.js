let myForm = document.querySelector("form");

myForm.addEventListener("mouseover", (event) => {
  console.log(event);
  myForm.style.outline = "2px solid green";
  // event.target.style.border = "2px solid red";
})