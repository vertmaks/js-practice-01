// Метод call()
// // foo.call(thisArg, arg1, arg2, ...)
// thisArg — об'єкт, який ми хочемо встановити як контекст (значення this) для функції
// arg1, arg2, ... — необов'язкові аргументи, які будуть передані функції
// Return: Результат вызова функции

// Example
function greet(str) {
  console.log(`${str}, ${this.username}, your room is ${this.room}!`);
}

const mango = {
  username: "Mango",
  room: 27,
};

const poly = {
  username: "Poly",
  room: 191,
};

greet.call(mango, "Welcome"); // "Welcome, Mango, your room is 27!"
greet.call(poly, "Aloha"); // "Aloha, Poly, your room is 191!"

// ------------------------------------------------

// Метод apply() - є аналогом методу call. Cинтаксис передачі аргументів вимагає масиву, навіть якщо аргументи функції — це окремі значення
// foo.apply(thisArg, [arg1, arg2, ...])
// Return: Результат вызова функции

// Same function greet {}, like in method call()

greet.apply(mango, ["Welcome"]); // "Welcome, Mango, your room is 27!"
greet.apply(poly, ["Aloha"]); // "Aloha, Poly, your room is 191!"

// ------------------------------------------------

// Метод bind() - cоздает новую функцию з встановленим контекстом, но не вызывает
// const boundFoo = foo.bind(thisArg, arg1, arg2, ...)
// Return: Новая функция

// Example 1
const customer = {
  username: "Jacob",
  sayHello() {
    console.log(`Hello, ${this.username}!`);
  },
};

customer.sayHello(); // "Hello, Jacob!"

const greet2 = customer.sayHello.bind(customer);

greet2(); // "Hello, Jacob!"

// Example 2
const customer2 = {
  firstName: "Jacob",
  lastName: "Mercer",
  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  },
};

function makeMessage(callback) {
  const username = callback();
  console.log(`Processing an application from ${username}`);
}

makeMessage(customer2.getFullName.bind(customer2)); // "Processing an application from Jacob Mercer"

// ================================================

// Прототипи

// Прототип об'єкта
// [[Prototype]]

// ------------------------------------------------

// Метод Object.create(obj) - створює і повертає новий об'єкт, зв'язуючи його з об'єктом obj

const animal = {
  legs: 4,
};

const dog = Object.create(animal);
dog.name = "Mango";

console.log(dog); // { name: "Mango", [[Prototype]]: animal }

console.log(dog.name); // "Mango"
console.log(dog.legs); // 4

// ------------------------------------------------

// Перевірка прототипу - method isPrototypeOf()
// objA.isPrototypeOf(objB)
// Return: boolean
