let firstElement = document.getElementById("first");

// firstElement.innerHTML = "<h1>Hello World</h1>";
// firstElement.innerHTML = "&lt;h1&gt;Hello World&lt;/h1&gt;";

// firstElement.innerText = "<h1>Hello World</h1>";
// firstElement.innerText = "&lt;h1&gt;Hello World&lt;/h1&gt;";

let user = {
  name: "John",
  age: 30,
};

firstElement.innerHTML = `My name is ${user.name} and I am ${user.age} years old.`;

firstElement.onclick = function () {
  firstElement.style.cssText = `
  background-color: #fad;
  color: #333;`;
};
