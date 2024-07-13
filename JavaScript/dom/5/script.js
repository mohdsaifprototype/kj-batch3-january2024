let myDom = document.querySelector(".container").firstElementChild;

let mybtn = document.querySelector("#btn");

let myNum = 100;

function changeImage() {
  // console.log("clicked");
  // myDom.setAttribute("src", "https://via.placeholder.com/300x200")
  myDom.setAttribute("src", `https://picsum.photos/id/${++myNum}/300/200`)
}

// setAttribute
// getAttribute
// hasAttribute


