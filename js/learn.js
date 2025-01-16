// if (condition) {
//   // код, який виконується, якщо умова (condition) істинна
// }

let price1 = 0;
const subscription1 = "pro";

if (subscription1 === "pro") {
  price1 = 100;
}

console.log("price:", price1);

let price2 = 0;
const subscription2 = "free";

if (subscription2 === "pro") {
  price2 = 100;
}

console.log("price2:", price2);

// if (condition) {
//   // код, який виконується, якщо умова істинна
// } else {
//   // код, який виконується, якщо умова хибна
// }

const grade1 = 85;

if (grade1 >= 70) {
  console.log("Satisfactorily");
} else {
  console.log("Unsatisfactorily");
}

const grade2 = 40;

if (grade2 >= 70) {
  console.log("Satisfactorily");
} else {
  console.log("Unsatisfactorily");
}

// example

function checkStorage(available, ordered) {
  if (ordered > available) {
    return "Not enough goods in stock!";
  } else {
    return "Order is processed, our manager will contact you";
  }
}

checkStorage(100, 50);
console.log("checkStorage(100, 50):", checkStorage(100, 50));
checkStorage(100, 130);
console.log("checkStorage(100, 130):", checkStorage(100, 130));
checkStorage(200, 150);
console.log("checkStorage(200, 150):", checkStorage(200, 150));

// if (condition_1) {
//   // код, який виконується, якщо умова (condition_1) істинна
// } else if (condition_2) {
//   // код, який виконується, якщо умова (condition_2) істинна
// } else if (condition_3) {
//   // код, який виконується, якщо умова (condition_3) істинна
// } else {
//   // код, який виконується, якщо всі умови хибні
// }

// Турнарний оператор
// <condition> ? <expression if condition is true> : <expression if condition is false>

const age = 16;
const type = age >= 18 ? "adult" : "child";
console.log(type);

function checkPassword(password) {
  const correctPassword = "jqueryismyjam";
  return password === correctPassword
    ? "Access granted"
    : "Access denied, wrong password!";
}

// switch (expression) {
//   case value1:
//     // код, що виконується, якщо вираз (expression) дорівнює value1
//     break;
//   case value2:
//     // код, що виконується, якщо вираз (expression) дорівнює value2
//     break;
//   // ...
//   default:
//   // код, що виконується, якщо вираз (expression) не відповідає жодному значенню
// }

const fruit = "apple";

switch (fruit) {
  case "apple":
    console.log("Apple selected");
    break;
  case "banana":
    console.log("Banana selected");
    break;
  case "orange":
    console.log("Orange selected");
    break;
  default:
    console.log("The fruit is unknown");
}
