// if (condition) {
//    код, який виконується, якщо умова (condition) істинна
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

// ================================================

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

// ================================================

// Тернарний оператор
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

// ================================================

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

// ================================================

// Логічні оператори
// Перетворення типів: логічне

console.log(Boolean(true)); // true
console.log(Boolean(false)); // false

console.log(Boolean(NaN)); // false
console.log(Boolean(null)); // false
console.log(Boolean(undefined)); // false
console.log(Boolean(0)); // false
console.log(Boolean(3.14)); // true
console.log(Boolean(-10)); // true

console.log(Boolean("")); // false
console.log(Boolean("hello")); // true
console.log(Boolean("false")); // true

// False examples
// 1. 0
// 2. ""
// 3. Nan
// 4. null
// 5. underfined
// 6. false

// ================================================

// Логічне «І» -> &&
// Зупиняється на першому операнді, який буде приведений до false або повертає останнє true (якщо нема false)

// All is true
console.log("hello" && 5); // 5
console.log(5 && "hello"); // "hello"

console.log("mango" && "poly"); // "poly"
console.log("poly" && "mango"); // "mango"

console.log(3 && true); // true
console.log(true && 3); // 3

// One option is false
console.log("hello" && 0); // 0
console.log(0 && "hello"); // 0

console.log(3 && false); // false
console.log(false && 3); // false

console.log(0 && ""); // 0
console.log("" && 0); // ""

//example
const screenWidth = 700;
const sm = 320;
const md = 768;
const lg = 1200;

if (screenWidth <= sm) {
  console.log("Mobile screen");
} else if (screenWidth > sm && screenWidth <= md) {
  console.log("Tablet screen");
} else if (screenWidth > md && screenWidth <= lg) {
  console.log("Desktop screen");
} else {
  console.log("Godzilla screen");
}

// ================================================

function isNumberInRange(start, end, number) {
  if (number >= start && number <= end) {
    return true;
  } else {
    return false;
  }
}
// or
// function isNumberInRange(start, end, number) {
//   return number >= start && number <= end;
// }

console.log(isNumberInRange(10, 20, 15)); // true
console.log(isNumberInRange(10, 20, 5)); // false
console.log(isNumberInRange(10, 20, 25)); // false
console.log(isNumberInRange(10, 20, 10)); // true
console.log(isNumberInRange(10, 20, 20)); // true

// ================================================

// Логічне «АБО» -> ||
// Зупиняється на першому операнді, який буде приведений до true (якщо це перший операнд, то другій навіть не оцінюється), пропускає false (якщо перший операнд) і шукає далі true
// Якщо всі операнди false, то повертає значення останнього

// One option is false
console.log(true || false); // true
console.log(false || true); // true
console.log(5 || false); // 5
console.log(false || 5); // 5
console.log("hello" || 0); // "hello"
console.log(0 || "hello"); // "hello"

// All true
console.log(5 || 3); // 5
console.log(3 || 5); // 3
console.log("mango" || "poly"); // "mango"
console.log("poly" || "mango"); // "poly"

// All false
console.log(0 || false); // false
console.log(false || 0); // 0
console.log(null || ""); // ""
console.log("" || null); // null

// Example
const screenWidth2 = 700;
const sm2 = 320;
const md2 = 768;
const lg2 = 1200;

if (screenWidth2 <= sm2 || screenWidth2 > md2) {
  console.log("Mobile or Desktop screen");
}
// у консолі буде пусто, оскільки жодна з умов не перетворилась на true

// ================================================

// Логічне «НІ» (унарний оператор) -> !
// Приводить значення дл boolen і заперечую (інвертує) його: true —> false, а false —> true

console.log(!true); // false
console.log(!false); // true
console.log(!3); // !3 -> !true -> false
console.log(!"Mango"); // !"Mango" -> !true -> false
console.log(!0); // !0 -> !false -> true
console.log(!""); // !"" -> !false -> true
console.log(!null); // !null -> !false -> true

// Example 1 (is user blocked?)
const isBlocked = false;
const canChat = !isBlocked; // !false -> true

if (canChat) {
  console.log("Can type in chat!");
} else {
  console.log("Blocked from typing in chat!");
}

// Example 2 (is user blocked and online?)
const isOnline = true;
const isBlocked2 = false;
const canChat2 = isOnline && !isBlocked2; // true && !false -> true && true -> true

if (canChat2) {
  console.log("Can type in chat!");
} else {
  console.log("Blocked from typing in chat!");
}

// ================================================

// Методи рядків - дії, які можна виконати із сутністю
// Example: objectName.method()

const message = "JavaScript is awesome";
console.log(message.toUpperCase()); // "JAVASCRIPT IS AWESOME"

// ================================================

// Метод slice() - створення копії частини або всього рядка без зміни оригінального рядка
// str.slice(startIndex, endIndex);

const fullName = "Jacob Mercer";
console.log(fullName.slice(0, 4)); // 'Jaco'
console.log(fullName.slice(3, 9)); // 'ob Mer'
console.log(fullName.slice(0, fullName.length)); // 'Jacob Mercer'

// Збереження в змінні
const fullName2 = "Jacob Mercer";
const firstName = fullName2.slice(0, 5);
const lastName = fullName2.slice(6);

console.log(fullName2); // "Jacob Mercer"
console.log(firstName); // "Jacob"
console.log(lastName); // "Mercer"

// ================================================

// Методи toLowerCase() і toUpperCase() - не змінюють вихідний рядок, а повертають новий рядок у відповідному регістрі

const message2 = "Welcome to Bahamas!";
console.log(message.toLowerCase()); // "welcome to bahamas!"
console.log(message); // "Welcome to Bahamas!"

console.log(message.toUpperCase()); // "WELCOME TO BAHAMAS!"
console.log(message); // "Welcome to Bahamas!"

// «Нормалізація» завдяки цим методам
const brandName = "samsung";
const userInput = "saMsUng";
const lowercaseInput = userInput.toLowerCase();

console.log(brandName); // 'samsung'
console.log(userInput); // 'saMsUng'
console.log(userInput === brandName); // false
console.log(lowercaseInput); // 'samsung'
console.log(lowercaseInput === brandName); // true

// ================================================

// Метод includes() - перевіряє наявність підрядка у рядку. Регістр має значення! Return boolen.
// str.includes(substring);

const username = "Jacob Mercer";

console.log(username.includes("Jacob")); // true
console.log(username.includes("John")); // false
console.log(username.includes("Mercer")); // true
console.log(username.includes("Doe")); // false

console.log(username.includes("Jacob")); // true
console.log(username.includes("jacob")); // false
console.log(username.includes("Mercer")); // true
console.log(username.includes("mercer")); // false

// Example
const message4 = "Please buy our stuff!";
const hasSpam = message4.includes("buy");

if (hasSpam) {
  console.log("Warning: This message contains forbidden words.");
} else {
  console.log("You can safely open this message.");
}

// ================================================

// Методи startsWith() і endsWith() призначені для перевірки початку й закінчення рядка відповідно. Регістр має значення! Return boolen.
// str.startsWith(substr);
// str.endsWith(substr);

const str = "Hello, world!";

console.log(str.startsWith("Hello")); // true
console.log(str.startsWith("hello")); // false (метод чутливий до регістру)

console.log(str.endsWith("world!")); // true
console.log(str.endsWith("World!")); // false (метод чутливий до регістру)

// Якщо в ці методи не передати аргумент, то він повертає false.

// ================================================

// Метод indexOf() використовується для пошуку першого входження підрядка в рядок.
// Return індекс першого входження (індекс першого символу) підрядка, якщо він знайдений або -1, якщо підрядок не виявлено.
// str.indexOf(substr);

const index = message2.indexOf("to");
console.log(index); // 8

const index2 = message2.indexOf("hello");
console.log(index); // -1

// Example
function getFileName(file) {
  const extIndex = file.indexOf(".");
  if (extIndex >= 0) {
    return file.slice(0, extIndex);
  } else {
    return file;
  }
}

console.log("getFileName:", getFileName("index.js")); // index
console.log("getFileName:", getFileName("index.css")); // index
console.log("getFileName:", getFileName("styles.css")); // styles
console.log("getFileName:", getFileName("app")); // app
console.log("getFileName:", getFileName("app.js")); // app

// ================================================

// Метод trim() використовується для видалення початкових і кінцевих пробілів із рядка
// str.trim();

const input = " JavaScript is awesome!    ";
const trimmedInput = input.trim();
console.log(trimmedInput); // "JavaScript is awesome!"
console.log(input); // " JavaScript is awesome!    "

// ================================================

// Цикли

// Цикл while - виконує блок коду в тілі циклу, поки умова для виходу оцінюється як true
// while (condition) {
//   statement // код, тіло циклу
// }

let count = 0;

while (count < 10) {
  console.log(`Count: ${count}`);
  count += 1;
}

let clientCounter = 18;
const maxClients = 25;

while (clientCounter <= maxClients) {
  console.log(clientCounter);
  clientCounter += 1;
}

// Задача: функція приймає ціле число number та повертає суму всіх цілих чисел від одиниці до цього числа.
// debugger;
function calculateTotal(number) {
  let num = 0;
  let i = 1;
  while (i <= number) {
    num += i;
    i++;
  }
  return num;
}

console.log(calculateTotal(3));
console.log(calculateTotal(5));
console.log(calculateTotal(10));

// ================================================

// Цикл do…while - код у тілі циклу виконується принаймні один раз, навіть якщо умова не виконується з самого початку
// do {
//   statement; // код, який буде виконуватися
// } while (condition);

let count2 = 0;

do {
  console.log(`Count: ${count2}`);
  count2 += 1;
} while (count2 < 5);

// ================================================

// Цикл for - має змінну-лічильник
// for (initialization; condition; afterthought) {
//   statement // Тіло циклу
// }
//
// initialization - змінна-лічильник з початковим значенням
// afterthought - вираз, який виконується в кінці кожної ітерації циклу, перед перевіркою умови

for (let i = 0; i <= 20; i += 5) {
  console.log(i);
}

//Example 1
function calculateTotal2(number) {
  let total = 0;
  for (let i = 1; i <= number; i++) {
    total += i;
  }
  return total;
}

console.log(calculateTotal2(3));
console.log(calculateTotal2(5));
console.log(calculateTotal2(10));

// Example 2
function calculateEvenTotal(number) {
  let totalEven = 0;
  for (let i = 0; i <= number; i++) {
    if (i % 2 === 0) {
      totalEven += i;
    }
  }
  return totalEven;
}

console.log(calculateEvenTotal(3));
console.log(calculateEvenTotal(5));
console.log(calculateEvenTotal(10));

//Example 3
const start = 17;
const end = 35;
let number;

for (let i = start; i <= end; i++) {
  if (i % 5 === 0) {
    number = i;
    break;
  }
}

console.log(number);

// ================================================

// Префіксний інкремент/декремент - спочатку збільшує/зменшує значення змінної, а потім використовує нове значення у виразі
// Постфіксний інкремент/декремент - спочатку використовує поточне значення змінної у виразі, а потім виконує збільшення/зменшення значення

// ================================================

// Оператор break - використовується в циклі для переривання його виконання

for (let i = 0; i < 10; i += 1) {
  console.log(i);

  if (i === 5) {
    console.log("Met the number 5, interrupt the execution of the cycle");
    break;
  }
}

console.log("Log after cycle");
