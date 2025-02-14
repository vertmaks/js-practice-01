//* Метод call()
//? foo.call(thisArg, arg1, arg2, ...)

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

//* Метод apply() - є аналогом методу call. Cинтаксис передачі аргументів вимагає масиву, навіть якщо аргументи функції — це окремі значення
//? foo.apply(thisArg, [arg1, arg2, ...])
// Return: Результат вызова функции

// Same function greet {}, like in method call()

greet.apply(mango, ["Welcome"]); // "Welcome, Mango, your room is 27!"
greet.apply(poly, ["Aloha"]); // "Aloha, Poly, your room is 191!"

// ------------------------------------------------

//* Метод bind() - cоздает новую функцию з встановленим контекстом, но не вызывает
//? const boundFoo = foo.bind(thisArg, arg1, arg2, ...)
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

//* Прототипи

// Прототип об'єкта
// [[Prototype]]

// ------------------------------------------------

//* Метод Object.create(obj) - створює і повертає новий об'єкт, зв'язуючи його з об'єктом obj

const animal = {
  legs: 4,
};

const dog = Object.create(animal);
dog.name = "Mango";

console.log(dog); // { name: "Mango", [[Prototype]]: animal }

console.log(dog.name); // "Mango"
console.log(dog.legs); // 4

// ------------------------------------------------

//* Перевірка прототипу - method isPrototypeOf()
//? objA.isPrototypeOf(objB)
// Return: boolean

console.log(dog); // { name: "Mango", [[Prototype]]: animal }

console.log(animal.isPrototypeOf(dog)); // true
console.log(dog.isPrototypeOf(animal)); // false
console.log(customer.isPrototypeOf(dog)); // false

// ------------------------------------------------

//* Перевірка власної і невласної властивості - method hasOwnProperty()
//? obj.hasOwnProperty(key)
// Return: boolean

console.log(dog.hasOwnProperty("name")); // true
console.log(dog.hasOwnProperty("legs")); // false

// ================================================

//* Класи
// Оголошення
//? class User {
//?   Тіло класу
//? }

// Створення з класу екземпляру
//? new User();

class User {
  // Тіло класу
}

const mango2 = new User();
console.log(mango2); // {}

const poly2 = new User();
console.log(poly2); // {}

// ------------------------------------------------

//* method constructor() - використовується для ініціалізації екземпляра класу

//? class User {
//?    Синтаксис оголошення методу класу
//?   constructor() {
//?      ...
//?   }
//? }

//! Виклик класу з оператором new призводить до створення нового об'єкта й автоматичного виклику методу constructor
class User3 {
  constructor(name, email) {
    // Ініціалізація властивостей екземпляра
    this.name = name;
    this.email = email;
  }
}

const mango3 = new User3("Mango", "mango@mail.com");
console.log(mango3); // { name: 'Mango', email: 'mango@mail.com' }

const poly3 = new User3("Poly", "poly@mail.com");
console.log(poly3); // { name: 'Poly', email: 'poly@mail.com' }

// ------------------------------------------------

//* Об'єкт параметрів

class User4 {
  constructor(params) {
    this.name = params.name;
    this.email = params.email;
  }
}

const mango4 = new User4({
  name: "Mango",
  email: "mango@mail.com",
});

console.log(mango4);
// { name: "Mango", email: "mango@mail.com" }

// ================================================

//* Методи класу
//! На відміну від синтаксису методів об'єкта (вони розділяються комою), методи класу не розділені ЖОДНИМИ спеціальними символами

class User5 {
  constructor(params) {
    this.name = params.name;
    this.email = params.email;
  }

  getEmail() {
    return this.email;
  }

  changeEmail(newEmail) {
    this.email = newEmail;
  }
}

// Для доступу до властивостей у методах використовується ключове слово this, оскільки методи будуть викликані в контексті об'єкта-екземпляра

const mango5 = new User5({
  name: "Mango",
  email: "mango@mail.com",
});

console.log(mango5.getEmail()); // "mango@mail.com"

mango5.changeEmail("new@mail.com");

console.log(mango5.getEmail()); // "new@mail.com"

// ================================================

//* Приватні властивості
// Додаючи до імені властивості на початку символ #, ми робимо її приватною.
// Оголошення приватної властивості до ініціалізації в конструкторі є обов'язковим

class User6 {
  // Необов'язкове оголошення публічних властивостей
  name;
  // Обов'язкове оголошення приватних властивостей
  #email;

  constructor(params) {
    this.name = params.name;
    this.#email = params.email;
  }
}

const mango6 = new User6({
  name: "Mango",
  email: "mango@mail.com",
});
console.log(mango6.name); // "Mango"
// console.log(mango6.#email); // Виникне помилка, це приватна властивість

//* Для того щоб отримати або змінити значення приватної властивості використовуються публічні методи
class User7 {
  name;
  #email;

  constructor(params) {
    this.name = params.name;
    this.#email = params.email;
  }

  getEmail() {
    return this.#email;
  }

  changeEmail(newEmail) {
    this.#email = newEmail;
  }
}

const mango7 = new User7({
  name: "Mango",
  email: "mango@mail.com",
});

console.log(mango7.getEmail()); // "mango@mail.com"
mango7.changeEmail("mango@supermail.com");
console.log(mango7.getEmail()); // "mango@supermail.com"

// ------------------------------------------------

//* Приватні методи
// Додаючи до назви методу на початку символ #, ми робимо його приватним

class User8 {
  name;
  #email;

  constructor(params) {
    this.name = params.name;
    this.#email = params.email;
  }

  // Публічний метод для отримання електронної пошти
  getEmail() {
    return this.#email;
  }

  // Публічний метод для зміни електронної пошти
  changeEmail(newEmail) {
    if (this.#validateEmail(newEmail)) {
      this.#email = newEmail;
    } else {
      console.log("Invalid email format");
    }
  }

  // Приватний метод для валідації електронної пошти
  #validateEmail(email) {
    return email.includes("@");
  }
}

const mango8 = new User8({
  name: "Mango",
  email: "mango@mail.com",
});

// Спробуємо змінити електронну пошту
mango8.changeEmail("newmail.com"); // "Invalid email format"
mango8.changeEmail("new@mail.com");
console.log(mango8.getEmail()); // "new@mail.com"

//! Прямий виклик приватного методу ззовні призведе до помилки
// mango8.#validateEmail("test"); // Помилка

// Цей метод не доступний ззовні класу, тому користувачі (або інші розробники) не можуть його викликати напряму

// ------------------------------------------------

//* Геттери і сеттери

// Геттер - повертає значення приватної властивості
//? get email() {
//?   return this.#email;
//? }

//  Сеттер - змінює значення приватної властивості
//? set email(newEmail) {
//?   this.#email = newEmail;
//? }

// Example
class User9 {
  #email;

  constructor(params) {
    this.name = params.name;
    this.#email = params.email;
  }

  // Геттер email
  get email() {
    return this.#email;
  }

  // Сеттер email
  set email(newEmail) {
    this.#email = newEmail;
  }
}

const mango9 = new User9({
  name: "Mango",
  email: "mango@mail.com",
});

console.log(mango9.email); // mango@mail.com
//todo console.log(mango9.email); фактически превращается в mango.email(), но без скобок
//todo Когда мы пишем mango9.email, JavaScript автоматически вызывает геттер.
//todo return this.#email; возвращает значение приватного свойства #email

mango9.email = "mango@supermail.com";
//todo mango.email = "mango@supermail.com"; превращается в mango.email("mango@supermail.com"); (но опять же без скобок)
//todo Когда выполняется mango.email = "mango@supermail.com", JavaScript автоматически вызывает сеттер.
//todo this.#email = newEmail; заменяет старое значение #email на новое

console.log(mango9.email); // mango@supermail.com

///* можна виконати додатковий код з будь-якими перевірками
//? set email(newEmail) {
//?   if(newEmail === "") {
//?     console.log("Помилка! Пошта не може бути порожнім рядком!");
//?     return;
//?   }

//?   this.#email = newEmail;
//? }

// ------------------------------------------------

//* Статичні властивості - властивості, що доступні тільки класові, але не його екземплярам

class MyClass {
  static myProp = "value";
}

console.log(MyClass.myProp); // "value"

const inst = new MyClass();
console.log(inst.myProp); //! undefined - y екземпляра немає доступу до статичних властивостей класу

// Example
class User10 {
  static roles = {
    admin: "admin",
    editor: "editor",
    basic: "basic",
  };

  #email;
  #role;

  constructor(params) {
    this.#email = params.email;
    this.#role = params.role || User10.roles.basic;
  }

  get role() {
    return this.#role;
  }

  set role(newRole) {
    this.#role = newRole;
  }
}

const mango10 = new User10({
  email: "mango@mail.com",
  role: User10.roles.admin,
});

console.log(mango10.role); // "admin"
mango10.role = User10.roles.editor;
console.log(mango10.role); // "editor"

// ------------------------------------------------

//* Статичні методи - методи, доступні тільки класу. Вони можуть бути публічні та приватні

// Example
class User11 {
  static #takenEmails = [];

  static isEmailTaken(email) {
    return User11.#takenEmails.includes(email);
  }

  #email;

  constructor(params) {
    this.#email = params.email;
    User11.#takenEmails.push(params.email);
  }
}

const mango11 = new User11({ email: "mango@mail.com" });

console.log(User11.isEmailTaken("poly@mail.com")); // false
console.log(User11.isEmailTaken("mango@mail.com")); // true

//! Особливість статичних методів: під час їх виклику ключове слово this посилається на сам клас

// ================================================

//* Наслідування класів - extends
//? class Parent {}

//? class Child extends Parent {
//?    ...
//? }
// можемо оголосити базовий клас, який зберігає загальні характеристики й методи для групи похідних класів,
// які наслідують властивості й методи батьківського, але також додають свої унікальні

// Example
class User12 {
  #email;

  constructor(email) {
    this.#email = email;
  }

  get email() {
    return this.#email;
  }

  set email(newEmail) {
    this.#email = newEmail;
  }
}

class ContentEditor extends User12 {
  // Тіло класу ContentEditor
}

const editor = new ContentEditor("mango@mail.com");
console.log(editor); // { #email: "mango@mail.com" }
console.log(editor.email); // "mango@mail.com"
//todo Клас ContentEditor наслідує від класу User його конструктор, геттер і сеттер email, а також приватну властивість #email

// ------------------------------------------------

//* Конструктор дочірнього класу - необхідно викликати спеціальну функцію super(args) — це псевдонім конструктора батьківського класу
//! В іншому випадку при спробі звернутися до this у конструкторі дочірнього класу виникне помилка

// Example
class User13 {
  #email;

  constructor(email) {
    this.#email = email;
  }

  get email() {
    return this.#email;
  }

  set email(newEmail) {
    this.#email = newEmail;
  }
}

class ContentEditor13 extends User13 {
  constructor(params) {
    // Виклик конструктора батьківського класу User
    super(params.email);

    this.posts = params.posts;
  }
}

const editor13 = new ContentEditor13({
  email: "mango@mail.com",
  posts: [],
});
console.log(editor13); // { #email: "mango@mail.com", posts: [] }
console.log(editor13.email); // "mango@mail.com"

// ------------------------------------------------

//* Методи дочірнього класу
