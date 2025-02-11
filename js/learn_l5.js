// Колбек-функції
// Example 1
function greet(name) {
  console.log(`Welcome ${name}!`);
}

function notify(name) {
  console.log(`Dear ${name}, your room will be ready in 30 minutes`);
}

function registerGuest(name, callback) {
  console.log(`Registering ${name}!`);
  callback(name);
}

registerGuest("Mango", greet); // "Registering Mango!" // "Welcome Mango!"
registerGuest("Mango", notify); // "Registering Mango!" // "Dear Mango, your room will be ready in 30 minutes"

// Example 2
function deliverPizza(pizzaName) {
  return `Delivering ${pizzaName} pizza.`;
}

function makePizza(pizzaName) {
  return `Pizza ${pizzaName} is being prepared, please wait...`;
}

function makeMessage(pizzaName, callback) {
  return callback(pizzaName);
}

// ------------------------------------------------

// Інлайн-колбеки

// Передаємо інлайн-функцію greet у якості колбека
registerGuest("Mango", function greet(name) {
  console.log(`Welcome ${name}!`);
});

// Передаємо інлайн-функцію notify у якості колбека
registerGuest("Poly", function notify(name) {
  console.log(`Dear ${name}, your room will be ready in 30 minutes`);
});

// ------------------------------------------------

// Метод forEach(callback) - використовується для заміни for і for...of в роботі з колекцією
// array.forEach(function callback(element, index, array) {
//   // Тіло колбек-функції
// });

// Поелементно перебирає масив array
// Викликає колбек-функцію для кожного елемента масиву
// Повертає undefined, навіть якщо явно задати вираз після return

// Hе всі параметри обов’язково оголошувати, але дуже важлива їх послідовність(!)

// Example 1
const numbers = [5, 10, 15, 20, 25];

// Класичний for
for (let i = 0; i < numbers.length; i += 1) {
  console.log(`Index ${i}, value ${numbers[i]}`);
}

// Перебираючий метод forEach
numbers.forEach(function (number, index) {
  console.log(`Index ${index}, value ${number}`);
});

// Єдиний випадок, коли варто використовувати цикли for або for...of для перебирання масиву, — це задачі з перериванням виконання циклу. Перервати виконання методу forEach не можна, він завжди перебирає масив до кінця

// Example 2
function calculateTotalPrice(orderedItems) {
  let totalPrice = 0;

  orderedItems.forEach(function (element) {
    totalPrice += element;
  });

  return totalPrice;
}

// Example 3
function filterArray(numbers, value) {
  const newArr = [];
  numbers.forEach(function (element) {
    if (element > value) {
      newArr.push(element);
    }
  });
  return newArr;
}

// =================================================

// Стрілочні функції
// const arrowAdd = (a, b, c) => {
//   return a + b + c;
// };
// const add = a => {
//   return a + 5;
// };

// Якщо параметри відсутні, то обов'язково повинні бути порожні круглі дужки
// const greet = () => {
//   console.log("Hello!");
// };

// ------------------------------------------------

// Неявне повернення

//Запис із фігурними дужками
// Якщо є фігурні дужки і функція повинна повертати якесь значення, необхідно явно поставити return
// const add = (a, b, c) => {
//   console.log(a, b, c);
//   return a + b + c;
// };

// Запис без фігурних дужок
// Якщо фігурні дужки відсутні, то повертається результат виразу, який стоїть після =>
// const add = (a, b, c) => a + b + c;
const arrowAdd = (a, b, c) => a + b + c;

// !!!Hемає локальної змінної arguments!!!
// Use ...args
const add = (...args) => {
  console.log(args);
};

add(1, 2, 3); // [1, 2, 3]

// =================================================

// Метод map()
// array.map((element, index, array) => {
//   // Тіло колбек-функції
// });

// Example
const planets = ["Earth", "Mars", "Venus", "Jupiter"];

const planetsInUpperCase = planets.map((planet) => planet.toUpperCase());
console.log(planetsInUpperCase); // ["EARTH", "MARS", "VENUS", "JUPITER"]

const planetsInLowerCase = planets.map((planet) => planet.toLowerCase());
console.log(planetsInLowerCase); // ["earth", "mars", "venus", "jupiter"]

// Оригінальний масив не змінився
console.log(planets); // ["Earth", "Mars", "Venus", "Jupiter"]

// ------------------------------------------------

// Метод flatMap()
// array.flatMap((element, index, array) => {
//   // Тіло колбек-функції
// });

// Example
const students = [
  { name: "Mango", courses: ["mathematics", "physics"] },
  { name: "Poly", courses: ["science", "mathematics"] },
  { name: "Kiwi", courses: ["physics", "biology"] },
];

const mappedCourses = students.map((student) => student.courses);
console.log(mappedCourses); // [["mathematics", "physics"], ["science", "mathematics"], ["physics", "biology"]]

const flattenedCourses = students.flatMap((student) => student.courses);
console.log(flattenedCourses); // ["mathematics", "physics", "science", "mathematics", "physics", "biology"];

// ------------------------------------------------

// Метод filter() - використовується для фільтрації масиву
// array.filter((element, index, array) => {
//   // Тіло колбек-функції
// });

// Example
const values = [51, -3, 27, 21, -68, 42, -37];

const positiveValues = values.filter((value) => value >= 0);
console.log(positiveValues); // [51, 27, 21, 42]
// до positiveValues потрапили всі елементи масиву values, які задовольнили умову колбека, тобто були >= 0

const negativeValues = values.filter((value) => value < 0);
console.log(negativeValues); // [-3, -68, -37]
// до negativeValues потрапили всі елементи масиву values, які задовольнили умову колбека, тобто були < 0

const bigValues = values.filter((value) => value > 1000);
console.log(bigValues); // []
// до bigValues потрапили всі елементи масиву values, які задовольнили умову колбека, тобто були > 1000

console.log(values); // [51, -3, 27, 21, -68, 42, -37]
// Оригінальний масив values не змінився

// ------------------------------------------------

// Метод filter() на масиві об'єктів

// Example
const LOW_SCORE = 50;
const HIGH_SCORE = 80;
const students2 = [
  { name: "Mango", score: 83 },
  { name: "Poly", score: 59 },
  { name: "Ajax", score: 37 },
  { name: "Kiwi", score: 94 },
  { name: "Houston", score: 64 },
];

const best = students2.filter((student) => student.score >= HIGH_SCORE);
console.log(best); // Масив об'єктів з іменами Mango і Kiwi

const worst = students2.filter((student) => student.score < LOW_SCORE);
console.log(worst); // Масив з одним об'єктом Ajax

const average = students2.filter(
  (student) => student.score >= LOW_SCORE && student.score < HIGH_SCORE
);
console.log(average); // Масив об'єктів з іменами Poly і Houston

// ------------------------------------------------

// Метод find() - дозволяє знайти і повернути перший відповідний елемент, що задовольняє умову
// array.find((element, index, array) => {
//   // Тіло колбек-функції
// });

// Example
const colorPickerOptions = [
  { label: "red", color: "#F44336" },
  { label: "green", color: "#4CAF50" },
  { label: "blue", color: "#2196F3" },
  { label: "pink", color: "#E91E63" },
  { label: "indigo", color: "#3F51B5" },
];

colorPickerOptions.find((option) => option.label === "blue"); // { label: "blue", color: "#2196F3" }
colorPickerOptions.find((option) => option.label === "pink"); // { label: "pink", color: "#E91E63" }
colorPickerOptions.find((option) => option.label === "white"); // undefined

// ------------------------------------------------

// Метод every() - перевіряє, чи задовольняють усі елементи умову колбек-функції
// array.every((element, index, array) => {
//   // Тіло колбек-функції
// });

//Examples
// Усі елементи більші або дорівнюють нулю? - так
[1, 2, 3, 4, 5].every((value) => value >= 0); // true

// Усі елементи більші або дорівнюють нулю? - ні
[1, 2, 3, -10, 4, 5].every((value) => value >= 0); // false

// ------------------------------------------------

// Метод some() - перевіряє, чи задовольняє хоча б один елемент умову колбек-функції
// array.some((element, index, array) => {
//   // Тіло колбек-функції
// });

// Examples
// Чи є хоча б один елемент, що більший або дорівнює нулю? - так
[1, 2, 3, 4, 5].some((value) => value >= 0); // true

// Чи є хоча б один елемент, що більший або дорівнює нулю? - так
[-7, -20, 3, -10, -14].some((value) => value >= 0); // true

// Чи є хоча б один елемент, що менший від нуля? - ні
[1, 2, 3, 4, 5].some((value) => value < 0); // false

// Чи є хоча б один елемент, що менший від нуля? - так
[1, 2, 3, -10, 4, 5].some((value) => value < 0); // true

// ------------------------------------------------

// Метод reduce() - використовується для послідовної обробки кожного елемента масиву із збереженням проміжного результату
// array.reduce((previousValue, element, index, array) => {
//   // Тіло колбек-функції
// }, initialValue);

// Метод reduce() очікує 2 параметри:

// 1-й параметр (обов’язковий) — колбек-функція, яка "опрацьовує" кожен елемент масиву;
// 2-й параметр (не обов’язковий) — initialValue початкове значення акумулятора.

// Example 1
const total = [2, 7, 3].reduce((previousValue, number) => {
  return previousValue + number;
}, 0);

console.log(total); // 12

// Example 2
const players = {
  mango: 1270,
  poly: 468,
  ajax: 710,
  kiwi: 244,
};
const playtimes = Object.values(players); // [1270, 468, 710, 244]

const totalPlayTime = playtimes.reduce((value, time) => {
  return value + time;
}, 0);

const averagePlayTime = totalPlayTime / playtimes.length;

// ------------------------------------------------

// Метод reduce() і масив об'єктів

// Example 1
const students3 = [
  { name: "Mango", score: 83 },
  { name: "Poly", score: 59 },
  { name: "Ajax", score: 37 },
  { name: "Kiwi", score: 94 },
  { name: "Houston", score: 64 },
];

// Назва акумулятора може бути довільною, це просто параметр функції
const totalScore = students3.reduce((total, student) => {
  return total + student.score;
}, 0);

const averageScore = totalScore / students3.length;

// Example 2
const players2 = [
  { name: "Mango", playtime: 1270, gamesPlayed: 4 },
  { name: "Poly", playtime: 469, gamesPlayed: 2 },
  { name: "Ajax", playtime: 690, gamesPlayed: 3 },
  { name: "Kiwi", playtime: 241, gamesPlayed: 1 },
];

const totalAveragePlaytimePerGame = players2.reduce((averageTime, player) => {
  return averageTime + player.playtime / player.gamesPlayed;
}, 0);

// ------------------------------------------------

// Метод toSorted() - сортує елементи масиву

// Масив чисел
// Example 1
const scores = [61, 19, 74, 35, 92, 56];
const ascendingScores = scores.toSorted();

console.log(scores); // [61, 19, 74, 35, 92, 56]
console.log(ascendingScores); // [19, 35, 56, 61, 74, 92]

// Example 2
const scores2 = [27, 2, 41, 4, 7, 3, 75];

console.log(scores2.toSorted()); // [2, 27, 3, 4, 41, 7, 75]

// Масив рядків - сортується за алфавітом
// Example 1
const students4 = ["Jacob", "Artemis", "Solomon", "Adrian", "Kai", "Ganymede"];

console.log(students4.toSorted()); // [ "Adrian", "Artemis", "Ganymede", "Jacob", "Kai", "Solomon" ]

// Example 2
const letters = ["b", "B", "a", "A", "c", "C"];

console.log(letters.toSorted()); // ["A", "B", "C", "a", "b", "c"]

// Свій порядок сортування ЧИСЕЛ
// array.toSorted((a, b) => {
//   // Callback function body
// });

// Сортування за зростанням - якщо виклик compareFunction(a, b) повертає будь-яке негативне значення, тобто a менше b, сортування поставить a перед b
const scores3 = [61, 19, 74, 35, 92, 56];
const ascendingScores3 = scores3.toSorted((a, b) => a - b);
console.log(ascendingScores3); // [19, 35, 56, 61, 74, 92]

// Сортування за спаданням - якщо виклик compareFunction(a, b) повертає будь-яке позитивне значення, тобто b більше a, сортування поставить b перед a
const scores4 = [61, 19, 74, 35, 92, 56];
const descendingScores4 = scores4.toSorted((a, b) => b - a);
console.log(descendingScores4); // [92, 74, 61, 56, 35, 19]

// Свій порядок сортування РЯДКІВ
// firstString.localeCompare(secondString);
"a".localeCompare("b"); // -1 - firstString повинен бути перед secondString
"b".localeCompare("a"); // 1  - firstString повинен бути після secondString
"a".localeCompare("a"); // 0  - якщо рядки однакові, повертається нуль і їх послідовність по відношенню один до одного не змінюється
"b".localeCompare("b"); // 0  - якщо рядки однакові, повертається нуль і їх послідовність по відношенню один до одного не змінюється

const students5 = ["Jacob", "Artemis", "Solomon", "Adrian", "Kai", "Ganymede"];

const inAlphabetOrder = students5.toSorted((a, b) => a.localeCompare(b));
console.log(inAlphabetOrder); // [ "Adrian", "Artemis", "Ganymede", "Jacob", "Kai", "Solomon" ]

const inReversedOrder = students5.toSorted((a, b) => b.localeCompare(a));
console.log(inReversedOrder); // [ "Solomon", "Kai", "Jacob", "Ganymede", "Artemis", "Adrian" ]

// Сортування об'єктів
const students6 = [
  { name: "Mango", score: 83 },
  { name: "Poly", score: 59 },
  { name: "Ajax", score: 37 },
  { name: "Kiwi", score: 94 },
];

const inAscendingScoreOrder = students6.toSorted(
  (firstStudent, secondStudent) => firstStudent.score - secondStudent.score
);

const inDescendingScoreOrder = students6.toSorted(
  (firstStudent, secondStudent) => secondStudent.score - firstStudent.score
);

const inAlphabeticalOrder = students6.toSorted((firstStudent, secondStudent) =>
  firstStudent.name.localeCompare(secondStudent.name)
);
