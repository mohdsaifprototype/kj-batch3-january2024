let student = {
  name: 'John',
  age: 30,
  isAdmin: false,
  courses: ['html', 'css', 'js'],
  spouse: null
};

// console.log("Student:", student);

let json = JSON.stringify(student);
// console.log("JSON:", json);

let obj = JSON.parse(json);
console.log("Object:", obj);