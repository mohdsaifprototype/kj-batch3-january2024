// let user = {
//   name: "John Smith",
//   age: 35,
// };

// console.log(user);
// let toStringigy = JSON.stringify(user);
// console.log(toStringigy);

// let obj = JSON.parse(toStringigy);
// console.log(obj)


let user = {
  name: "John Smith",
  age: 35
};

let user2 = JSON.parse(JSON.stringify(user));
// console.log(user2)