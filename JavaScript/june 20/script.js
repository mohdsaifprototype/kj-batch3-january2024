let elem = document.getElementById("elem");
let myElement = document.querySelector("#output");


// myElement.innerHTML += (getComputedStyle(elem).width); // auto
// myElement.innerHTML += (elem.offsetWidth); + "<br />" // auto
myElement.innerHTML += (elem.clientWidth); // auto
