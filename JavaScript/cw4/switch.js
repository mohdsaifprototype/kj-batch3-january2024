// Illustration for if statements

/*
1 = Sunday
2 = Monday
3 = Tuesday
4 = Wednesday
5 = Thursday
6 = Friday
7 = Saturday
*/

let num;

num = prompt("Enter a number", 1);

// if (num == 1) {
//   console.log("Sunday");
// }
// if (num == 2) {
//   console.log("Monday");
// }
// if (num == 3) {
//   console.log("Tuesday");
// }
// if (num == 4) {
//   console.log("Wednesday");
// }
// if (num == 5) {
//   console.log("Thursday");
// }
// if (num == 6) {
//   console.log("Friday");
// }
// if (num == 7) {
//   console.log("Saturday");
// } else {
//   console.log("Invalid input!");
// }

// if (num == 1) {
//   console.log("Sunday");
// } else if (num == 2) {
//   console.log("Monday");
// } else if (num == 3) {
//   console.log("Tuesday");
// } else if (num == 4) {
//   console.log("Wednesday");
// } else if (num == 5) {
//   console.log("Thursday");
// } else if (num == 2) {
//   console.log("Friday");
// } else if (num == 7) {
//   console.log("Saturday");
// } else {
//   console.log("Invalid input!");
// }

switch (+num) {
  case 1:
    console.log("Sunday");
    break;
  case 2:
    console.log("Monday");
    break;
  case 3:
    console.log("Tuesday");
    break;
  case 4:
    console.log("Wednesday");
    break;
  case 5:
    console.log("Thursday");
    break;
  case 6:
    console.log("Friday");
    break;
  case 7:
    console.log("Saturday");
    break;
  default:
    console.log("Invalid input!");
    break;
}
