// Масиви - використовується для зберігання колекції елементів
// Два масиви ніколи не дорівнюють один одному!!!
const planets = ["Earth", "Mars", "Venus", "Uranus"]; // масив рядків
const numbers = [1, 2, 3, 4, 5]; // масив чисел
const mixed = ["apple", 10, true]; // масив з елементами різних типів

// Доступ до значення елемента масиву
console.log(planets[0]); // 'Earth'
console.log(planets[1]); // 'Mars'
console.log(planets[2]); // 'Venus'

// Перевизначення значення елемента масиву
planets[0] = "Jupiter";
planets[2] = "Neptune";
console.log(planets); // ['Jupiter', 'Mars', 'Neptune', 'Uranus']

// ================================================

// Методи масиву
// Метод join(delimiter) - дозволяє об'єднати елементи масиву в рядок
const words = ["JavaScript", "is", "amazing"];
console.log(words.join("")); // 'JavaScriptisamazing'
console.log(words.join(" ")); // 'JavaScript is amazing'
console.log(words.join("-")); // 'JavaScript-is-amazing'

// ------------------------------------------------

// Метод split(delimiter) - дозволяє перетворити рядок на масив, розбивши його за вказаним роздільником delimiter
const name = "Mango";
const letters = name.split("");
console.log(letters); // ["M", "a", "n", "g", "o"]

const message = "JavaScript essentials";
const words2 = message.split(" ");
console.log(words2); // ["JavaScript", "essentials"]

const slug = "amazing-french-recipes";
const slugParts = slug.split("-");
console.log(slugParts); // ["amazing", "french", "recipes"]

// Example
function calculateEngravingPrice(message, pricePerWord) {
  return message.split(" ").length * pricePerWord;
}

calculateEngravingPrice("JavaScript is in my blood", 10);
console.log(
  "calculateEngravingPrice",
  calculateEngravingPrice("JavaScript is in my blood", 10)
);
calculateEngravingPrice("JavaScript is in my blood", 20);
console.log(
  "calculateEngravingPrice:",
  calculateEngravingPrice("JavaScript is in my blood", 20)
);

// ------------------------------------------------

// Метод slice(begin, end) - повертає новий масив, що містить копію частини вихідного масиву, не змінюючи його
const planets2 = ["Earth", "Mars", "Venus", "Jupiter", "Saturn"];
console.log(planets2.slice(0, 2)); // ['Earth', 'Mars']
console.log(planets2.slice(0, 4)); // ['Earth', 'Mars', 'Venus', 'Jupiter']
console.log(planets2.slice(1, 3)); // ['Mars', 'Venus']

// ------------------------------------------------

// Метод concat() - використовується для об'єднання двох або більше масивів
// concat(arr1, arr2, ..., arrN)
const firstArray = ["Mercury", "Venus"];
const secondArray = ["Mars", "Jupiter"];
const result = firstArray.concat(secondArray);

console.log(result); // ["Mercury", "Venus", "Mars", "Jupiter"];

// ------------------------------------------------

// Метод indexOf() - використовується для визначення індексу першого входження елемента у масиві.
// Він повертає індекс елемента, якщо він знайдений, або -1, якщо елемент не знайдений.
const clients = ["Mango", "Ajax", "Poly", "Kiwi", "Poly"];
console.log(clients.indexOf("Poly")); // 2
console.log(clients.indexOf("Monkong")); // -1

// ------------------------------------------------

// Метод push() використовується для додавання одного або більше елементів у кінець масиву.
// array.push(element1, element2, ..., elementN);
// Example 1
const planets3 = ["Earth", "Mars", "Venus"];

planets3.push("Jupiter");
console.log(planets3); // ['Earth', 'Mars', 'Venus', 'Jupiter']

planets3.push("Saturn", "Neptune");
console.log(planets3); // ['Earth', 'Mars', 'Venus', 'Jupiter', "Saturn", "Neptune"]

// Example 2
const tags = [];

for (let i = 0; i < 3; i += 1) {
  tags.push(`tag-${i}`);
}

console.log(tags); // ["tag-0", "tag-1", "tag-2"]

// Example 3
function createArrayOfNumbers(min, max) {
  const numbers = [];
  for (let i = min; i <= max; i++) {
    numbers.push(i);
  }
  return numbers;
}

console.log("createArrayOfNumbers:", createArrayOfNumbers(1, 3));
console.log("createArrayOfNumbers:", createArrayOfNumbers(14, 17));
console.log("createArrayOfNumbers:", createArrayOfNumbers(29, 34));

// ================================================

// Ітерація по масиву
for (let i = 0; i < planets.length; i += 1) {
  console.log(planets[i]);
}

// Example 1: Функція calculateTotalPrice(order) приймає один параметр order - масив чисел.
// Доповни функцію так, щоб вона повертала загальну суму елементів з масиву order.
function calculateTotalPrice(order) {
  let sum = 0;
  for (let i = 0; i < order.length; i++) {
    sum += order[i];
  }
  return sum;
}

console.log(
  "calculateTotalPrice([12, 85, 37, 4]):",
  calculateTotalPrice([12, 85, 37, 4])
);
console.log(
  "calculateTotalPrice([164, 48, 291]):",
  calculateTotalPrice([164, 48, 291])
);
console.log(
  "calculateTotalPrice([412, 371, 94, 63, 176]):",
  calculateTotalPrice([412, 371, 94, 63, 176])
);

// Example 2: Функція getEvenNumbers(start, end) має два параметри start та end, які є цілими числами.
// Доповни код функції так, щоб вона повертала масив усіх парних чисел від start до end.
// Якщо жодного парного числа немає, то масив має бути пустим. Парним вважається число, яке ділиться на 2 без остачі (10 % 2 === 0). Використовуй цикл for.
function getEvenNumbers(start, end) {
  const arrNum = [];
  for (let i = start; i <= end; i++) {
    if (i % 2 === 0) {
      arrNum.push(i);
    }
  }
  return arrNum;
}

console.log("getEvenNumbers(2, 5):", getEvenNumbers(2, 5));
console.log("getEvenNumbers(3, 11):", getEvenNumbers(3, 11));
console.log("getEvenNumbers(6, 12):", getEvenNumbers(6, 12));
console.log("getEvenNumbers(8, 8):", getEvenNumbers(8, 8));
console.log("getEvenNumbers(7, 7):", getEvenNumbers(7, 7));

// ================================================

// Метод includes() використовується для перевірки наявності певного елемента в масиві. Return boolean
// array.includes(element)

const planets4 = ["Earth", "Mars", "Venus"];

console.log(planets4.includes("Earth")); // true
console.log(planets4.includes("Mars")); // true
console.log(planets4.includes("Venus")); // true
console.log(planets4.includes("Jupiter")); // false

const fruits = ["apple", "banana", "orange"];

if (fruits.includes("banana")) {
  console.log("The array has an element banana");
} else {
  console.log("Array does not contain banana element");
}

// Example. Find common values in two arrays
function getCommonElements(array1, array2) {
  const commonArr = [];
  for (let i = 0; i < array1.length; i++) {
    if (array2.includes(array1[i])) {
      commonArr.push(array1[i]);
    }
  }
  return commonArr;
}

getCommonElements([1, 2, 3], [2, 4]);
console.log(
  "getCommonElements([1, 2, 3], [2, 4]):",
  getCommonElements([1, 2, 3], [2, 4])
);
getCommonElements([1, 2, 3], [2, 1, 17, 19]);
console.log(
  "getCommonElements([1, 2, 3], [2, 1, 17, 19]):",
  getCommonElements([1, 2, 3], [2, 1, 17, 19])
);
getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27]);
console.log(
  "getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27]):",
  getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27])
);
getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40]);
console.log(
  "getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40]):",
  getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40])
);
getCommonElements([1, 2, 3], [10, 20, 30]);
console.log(
  "getCommonElements([1, 2, 3], [10, 20, 30]):",
  getCommonElements([1, 2, 3], [10, 20, 30])
);

// ================================================

// Цикл for...of - зручний спосіб перебору масиву. Тіло циклу буде виконуватися на кожному елементі масиву.
// Це гарна заміна циклу for, якщо не потрібен доступ до лічильника.
// for (const element of array) {
//   // тіло циклу
// }
const planets5 = ["Earth", "Mars", "Venus"];

for (const planet of planets5) {
  console.log(planet);
}

// ================================================

// Функції (частина 2)

// Псевдомасив arguments - відкриває доступ до всіх аргументів функції (спеціальна змінна).
function sum(a, b) {
  console.log(arguments);
  return a + b;
}

sum(2, 5);
// У цьому прикладі при виклику функції sum(2, 5) зберуться всі передані аргументи (числа 2 і 5)
// і запишуться як елементи колекції псевдомасиву arguments.
// Example
function multiply() {
  let total = 1;

  for (const arg of arguments) {
    total *= arg;
  }

  return total;
}

console.log(multiply(1, 2, 3)); //  6
console.log(multiply(1, 2, 3, 4)); //  24
console.log(multiply(1, 2, 3, 4, 5)); //  120

// Якщо під час роботи з arguments потрібно використовувати методи масиву,
// тоді псевдомасив необхідно перетворити на масив, використовуючи метод Array.from(), який створить масив із псевдомасиву.
function foo() {
  // У змінній args буде повноцінний масив з усіх аргументів
  const args = Array.from(arguments);
  return args.join("-");
}

foo(1, 2, 3); // Поверне "1-2-3"
console.log("foo(1, 2, 3):", foo(1, 2, 3));

function createReversedArray() {
  const args = Array.from(arguments);
  return args.toReversed();
}

createReversedArray(12, 85, 37, 4);
console.log(
  "createReversedArray(12, 85, 37, 4):",
  createReversedArray(12, 85, 37, 4)
);
createReversedArray(164, 48, 291);
console.log(
  "createReversedArray(164, 48, 291):",
  createReversedArray(164, 48, 291)
);
createReversedArray(412, 371, 94, 63, 176);
console.log(
  "createReversedArray(412, 371, 94, 63, 176):",
  createReversedArray(412, 371, 94, 63, 176)
);

// ------------------------------------------------

// Параметри за замовчуванням
function greet(username = "Guest") {
  console.log(`Hello, ${username}!`);
}

greet("Jacob"); // "Hello, Jacob!"
greet(); // "Hello, Guest!"

// Example
function count(from, to, step = 1) {
  console.log(`from: ${from}, to: ${to}, step: ${step}`);

  for (let i = from; i <= to; i += step) {
    // ...
  }
}

count(1, 15, 4); // "from: 1, to: 15, step: 4"
count(1, 15); // "from: 1, to: 15, step: 1"
