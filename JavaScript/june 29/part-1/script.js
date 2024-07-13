let currentColor = document.querySelector("#color");

currentColor.addEventListener("input", () => {
  console.log(currentColor.value);
  document.body.style.backgroundColor = currentColor.value;
});
// currentColor.addEventListener("change", () => {
//   console.log(event);
//   console.log(currentColor.value);
//   document.body.style.backgroundColor = currentColor.value;
// });
