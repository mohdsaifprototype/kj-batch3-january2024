// let user = {
//   name: "John",
//   age: 30,
//   "likes birds": true  // multiword property name must be quoted
// };

// let key = "likes birds";

// console.log(user["likes birds"]);

/* Task: 3 */
// let salaries = {
//   John: 100,
//   Ann: 160,
//   Pete: 130,
//   Alex: 180,
//   Abhishek: 150,
//   Jay: 200
// };
// let sum = 0;

// for (let key in salaries) {
//   sum += salaries[key];
// }
// console.log(sum);


/* Task: 4 */
// // before the call
// let menu = {
//   width: 200,
//   height: 300,
//   title: "My menu"
// };

// console.log("Befor the call:")
// console.log(menu);

// multiplyNumeric(menu);

// function multiplyNumeric(anyObject) {
//   for (let key in anyObject) {
//     if (typeof anyObject[key] == "number") {
//       anyObject[key] *= 2;
//     }
//   }
// }

// console.log("After the call:")
// console.log(menu)


// const user = {
//   name: "John"
// };

// user.name = "Pete"; // (*)

// console.log(user.name); // Pete


let user = {
  name: "John",
  age: 30
};

user.sayHi = function() {
  console.log("Hello!");
};

// user.sayHi(); // Hello!
console.log(user.sayHi);

// console.table(user);