class Menu {
  handleEvent(event) {
    // mousedown -> onMousedown
    let method = 'on' + event.type[0].toUpperCase() + event.type.slice(1);
    // console.log("Event type:", event.type);
    // console.log("Event type[0]:", event.type[0]);
    // console.log("Event type[0].toUpperCase:", event.type[0].toUpperCase());
    // console.log("Event.type.slice(1):", event.type.slice(1));
    // console.log("Method name:", method);
    this[method](event);
    // console.log("this[method](event)", this[method](event))
  }

  onMousedown() {
    elem.innerHTML = "Mouse button pressed";
  }

  onMouseup() {
    elem.innerHTML += "...and released.";
  }
}

let menu = new Menu();
elem.addEventListener('mousedown', menu);
elem.addEventListener('mouseup', menu);