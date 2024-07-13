let marks = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

// for (let i = 0; i < marks.length; i++) {
//   console.log(marks[i]);
// }


// using for in
// for (let i in marks) {
//   console.log(marks[i]);
// }

// using for of
// for (let i of marks) {
//   console.log(i);
// }

// using for each
marks.forEach((i) => {
  console.log(i*2);
})