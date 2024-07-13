let list = ["Mango", "Banana", "Apple", "Potato", "item 5"];

let myList = document.getElementsByClassName("myList");

myList[0].style.backgroundColor = "yellow";

let items = document.getElementsByClassName("items");

for (let i = 0; i < items.length; i++) {
  items[i].innerHTML = list[i];
}
