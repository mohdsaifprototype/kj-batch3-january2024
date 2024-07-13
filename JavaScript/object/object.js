let mouse = {
  brandName: "HP",
  color: "black",
  price: 650,
  weight: "300g",
  mouseWheel: "present",
  dpi: "enabled",
  thumbKeys: {
    forward: "inactive",
    backward: "inactive",
  },
  changeDpi: function () {
    this.dpi = "disabled";
    console.log("DPI has been changed");
  }
};

console.log("DPI before:",mouse.dpi)
mouse.changeDpi();
console.log("DPI after:",mouse.dpi)
console.log(mouse.changeDpi);
// console.table(mouse)