// const myObj = {
//   name: "John",
//   age: 30,
//   sayHi() {
//     console.log(this.name);
//   },
//   changeAge: function (age) {
//     this.age = age;
//     console.log("Age is", this.age);
//   },
// };

// console.log("The age of myObj is:",myObj.age);
// myObj.changeAge(15);
// console.log("The age of myObj is:",myObj.age);



let user = {
  firstName: "Ilya",
  sayHi() {
    function arrow(){
      console.log(this.firstName);
    } 
    arrow();
  }
};

user.sayHi(); // Ilya