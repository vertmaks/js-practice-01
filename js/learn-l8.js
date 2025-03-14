console.group("Делегування подій");
//* Делегування подій

// ---

console.group("Поширення подій");
//* Поширення подій (event propagation)
console.groupEnd("");

// ---

console.group("Спливання подій");
//* Спливання подій (event bubbling)
console.groupEnd("");

// ---

console.group("Цільовий елемент");
//* Цільовий елемент (event.target) - eлемент, на якому відбулася подія
// event.target — це посилання на вихідний елемент, на якому відбулася подія, у процесі спливання вона — незмінна, вихідний (і найглибший) елемент, на якому був клік
// event.currentTarget — це посилання на поточний елемент, до якого прив’язаний поточний обробник події, і до якого в результаті спливання дійшла прослуховувана подія

//? Example
const parent = document.querySelector("#parent");

parent.addEventListener("click", (event) => {
  console.log("event.target: ", event.target);
  console.log("event.currentTarget: ", event.currentTarget);
});
console.groupEnd("");

// ---

console.group("Припинення спливання");
//* Припинення спливання
// Зазвичай подія буде спливати вгору до елемента window, викликаючи всі наявні обробники на своєму шляху

// Будь-який проміжний обробник може зупинити спливання цієї події за допомогою методів об’єкта події (event):

// event.stopPropagation() - Зупиняє "спливання" події в DOM-дереві, жоден батьківський елемент не зможе відловити цю подію.
//! ↑ Hе заважає іншим обробникам подій виконуватися на тому ж самому елементі.

// event.stopImmediatePropagation() - Зупиняє "спливання" події так само, як event.stopPropagation().
//! ↑ Також зупиняє виконання всіх інших обробників подій, які слухають цю ж подію на даному елементі, навіть якщо вони були зареєстровані перед цим.

//! Не припиняти спливання без необхідності.
console.groupEnd("");

// ---

console.group("Делегування подій");
//* Делегування подій (event delegation)

// Делегування реалізується у три кроки:
// 1. Визначити спільного предка групи елементів для відстеження подій.
// 2. Зареєструвати на елементі-предку обробник події, яку ми хочемо відловлювати з групи елементів.
// 3. В обробнику використовувати event.target для вибору цільового елемента, на якому безпосередньо відбулась подія.

//? Example
const box = document.querySelector(".box");

box.addEventListener("click", function (event) {
  console.log(event.target); // Елемент, на якому відбулась подія click
});

console.groupEnd("");

// ---

console.group("Перевірка цільового елемента події");
//* Перевірка цільового елемента події

//? Example
// Кожен клік на елементі палітри — це подія, яка змінює колір і вміст заголовка. Елементів дуже багато. Замість призначення обробника кожному елементу палітри, повісимо один слухач на загального предка div.color-palette

const colorPalette = document.querySelector(".color-palette");

colorPalette.addEventListener("click", selectColor);

//? function selectColor(event) {
//?   console.log(event.target);
//?   const selectedColor = event.target.dataset.color;
//? }

// ↑ В обробнику події кліка використовуємо event.target, щоб отримати елемент, на якому безпосередньо відбулася подія, і пов'язаний з ним колір. Інформацію про колір будемо зберігати в атрибуті data-color

// ↓ Обов'язково перевіряємо цільовий елемент події click.
// ↓ Це точно має бути кнопка, в іншому разі ми випадково можемо обробити клік, коли користувач клікне між кнопками, що може викликати помилку.
// ↓ Для перевірки типу елемента використовуємо властивість nodeName

function selectColor(event) {
  if (event.target.nodeName !== "BUTTON") {
    return; // користувач клікнув між кнопками
  }

  const selectedColor = event.target.dataset.color; // користувач клікнув на кнопку і ми маємо доступ до її атрибутів

  output.textContent = `Selected color: ${selectedColor}`;
  output.style.color = selectedColor;
}

const output = document.querySelector(".output");

colorPalette.addEventListener("click", selectColor);

// Some helper functions to render palette items
createPaletteItems();

function createPaletteItems() {
  const items = [];
  for (let i = 0; i < 60; i++) {
    const color = getRandomHexColor();
    const item = document.createElement("button");
    item.type = "button";
    item.dataset.color = color;
    item.style.backgroundColor = color;
    item.classList.add("item");
    items.push(item);
  }
  colorPalette.append(...items);
}

function getRandomHexColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";

  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }

  return color;
}

console.groupEnd("");
console.groupEnd("");

// ------------------------------------------------

console.group("Бібліотеки");
//* Бібліотеки

// Популярні:
// Chart.js: Бібліотека для створення інтерактивних графіків і діаграм.
// Lodash: Бібліотека для роботи з масивами, об'єктами, рядками тощо, що надає безліч зручних функцій.

// ---

console.group("Підключення бібліотеки");
//* Підключення бібліотеки

// Підключення JavaScript бібліотеки через CDN складається з декількох кроків:
// Крок 1. Для початку зайди на сайт CDN сервісу https://www.jsdelivr.com/ і знайди необхідну бібліотеку за її ім'ям
// Крок 2. У списку результатів обери необхідну бібліотеку, клікнувши на назву. Після переходу за посиланням, ти опинишся на сторінці з інформацією про бібліотеку
// Крок 3. Скопіюй HTML-код тега script, після чого відкрий свій HTML-файл і додай посилання на скрипт бібліотеки наприкінці HTML-документа

// Example
//? <script async src="https://cdn.jsdelivr.net/npm/lodash@4.17.21/lodash.min.js"></script>

// Live examples lodash library
console.log(_);
console.log(_.sum([4, 2, 8, 6])); // 20
console.log(_.sum([5, 10])); // 15

console.log(_.shuffle([1, 2, 3, 4])); // [4, 1, 3, 2]
console.log(_.shuffle([1, 2, 3, 4])); // [3, 2, 1, 4]

// Live examples basicLightbox
const instance = basicLightbox.create(`
	<h1>Dynamic Content</h1>
	<p>You can set the content of the lightbox with JS.</p>
  `);

console.log(instance);
// instance.show(); - сразу показывает созданный элемент га странице

document.querySelector("#lightbox").addEventListener("click", () => {
  instance.show();
});

console.groupEnd("");
console.groupEnd("");

// ------------------------------------------------

console.group("Деструктуризація");
//* Деструктуризація

// Example 1

const user = {
  name: "Jacob",
  age: 32,
};

const { name, age } = user;
console.log(name); // Jacob
console.log(age); // 32

// Деструктуризація дозволяє «розпакувати» значення властивостей об'єкта в локальні змінні. Це робить код у місці їх використання менш «шумним»

// ---

console.group("Деструктуризація об'єктів");
//* Деструктуризація об'єктів

// ↓ Example
const book = {
  title: "The Last Kingdom",
  author: "Bernard Cornwell",
  genres: ["historical prose", "adventure"],
  isPublic: true,
  rating: 8.38,
};

// Деструктуризуємо
const { title, author, isPublic, rating } = book;

// Використовуємо
const accessType = isPublic ? "pulbic" : "private";
const message = `Book ${title} by author ${author} with rating ${rating} is in ${accessType} access!`;
console.log(message);
// ↑ Example

// ---

console.group("Деструктуризація неіснуючих властивостей");
//* Деструктуризація неіснуючих властивостей

// У випадку, якщо ім'я змінної та ім'я властивості збігаються, то відбувається присвоєння
// Коли в об'єкті немає властивості з таким ім'ям, змінній буде присвоєно undefined

// Example object - book from last chapter
const { bookTitle, coverImage, bookRating } = book;
console.log(title); // "The Last Kingdom"
console.log(bookTitle); // undefined
console.log(coverImage); // undefined
console.log(bookRating); // undefined

//! З метою уникнення присвоєння undefined під час деструктуризації неіснуючих властивостей, можна задати змінним значення за замовчуванням,
//! використовуючи знак =. Це значення буде присвоєно тільки у випадку, коли в об'єкті відсутня властивість із таким ім'ям

// Example
const { coverImage1 = "https://via.placeholder.com/640/480" } = book;

console.log(title); // "The Last Kingdom"
console.log(author); // "Bernard Cornwell"
console.log(coverImage1); // "https://via.placeholder.com/640/480"

console.groupEnd("");

// ---

console.group("Перейменування змінної");
//* Перейменування змінної

// Під час деструктуризації можна перейменувати змінну, в яку розпаковується значення властивості, використовуючи :

// Example
const book2 = {
  title2: "The Last Kingdom",
  author2: "Bernard Cornwell",
  genres2: ["historical prose", "adventure"],
  isPublic2: true,
  rating2: 8.38,
};

// Деструктуризуємо
const { title2, author2: bookAuthor2, isPublic2, rating2: bookRating2 } = book2;
console.log(title2); // "The Last Kingdom"
console.log(bookAuthor2); // "Bernard Cornwell"
console.log(isPublic2); // true
console.log(bookRating2); // 8.38

console.groupEnd("");

// ---

console.group("Значення за замовчуванням");
//* Значення за замовчуванням

// При перейменуванні змінної, в яку ми розпаковуємо значення властивості об'єкта, також можна присвоїти значення за замовчуванням.
// Для цього після нового імені ставимо дорівнює = і вказуємо її значення за замовчуванням

// Example
const book3 = {
  title3: "The Last Kingdom",
  coverImage3:
    "https://images-na.ssl-images-amazon.com/images/I/51b5YG6Y1rL.jpg",
};

const {
  title3,
  coverImage3: bookCoverImage3 = "https://via.placeholder.com/640/480",
} = book3;

console.log(title3); // "The Last Kingdom"
console.log(bookCoverImage3); // "https://images-na.ssl-images-amazon.com/images/I/51b5YG6Y1rL.jpg"

//! Якщо така властивість існує в об'єкті, у змінну буде присвоєно її значення. В іншому випадку змінній буде присвоєно значення за замовчуванням

console.groupEnd("");

// ---

console.group("Деструктуризація в циклах");
//* Деструктуризація в циклах

// Під час ітерації по масиву об'єктів циклом for...of відбуваються багаторазові звернення до властивостей об'єкта
// Для того щоб скоротити кількість повторень, можна деструктуризувати властивості об'єкта в локальні змінні в тілі циклу

// Example
const books = [
  {
    title: "The Last Kingdom",
    author: "Bernard Cornwell",
    rating: 8.38,
  },
  {
    title: "Beside Still Waters",
    author: "Robert Sheckley",
    rating: 8.51,
  },
];

for (const book of books) {
  const { title, author, rating } = book;

  console.log(title);
  console.log(author);
  console.log(rating);
}

// Якщо об'єкт містить небагато властивостей, деструктуризацію можна виконати безпосередньо в місці оголошення змінної book

// Example
for (const { title, author, rating } of books) {
  console.log(title);
  console.log(author);
  console.log(rating);
}
console.groupEnd("");

// ---

console.group("Деструктуризація параметрів");
//* Деструктуризація параметрів

// ↓ Example WITHOUT destructuring
function printUserInfo(user) {
  console.log(`Name: ${user.name}, Age: ${user.age}, Hobby: ${user.hobby}`);
}

printUserInfo({
  name: "Alice",
  age: 25,
  hobby: "dancing",
}); // Name: Alice, Age: 25, Hobby: dancing

// ↓ Example WITH destructuring in function body
function printUserInfo2(user) {
  const { name, age, hobby } = user;
  console.log(`Name: ${name}, Age: ${age}, Hobby: ${hobby}`);
}

printUserInfo2({
  name: "Alice",
  age: 25,
  hobby: "dancing",
}); // Name: Alice, Age: 25, Hobby: dancing

// ↓ Example WITH destructuring at the parameter declaration location
function printUserInfo3({ name, age, hobby }) {
  console.log(`Name: ${name}, Age: ${age}, Hobby: ${hobby}`);
}

printUserInfo3({
  name: "Alice",
  age: 25,
  hobby: "dancing",
}); // Name: Alice, Age: 25, Hobby: dancing

console.groupEnd("");

// ---

console.group("Деструктуризація параметрів");
//* Глибока деструктуризація

// Example
const user2 = {
  name2: "Jacques Gluke",
  tag2: "jgluke",
  stats2: {
    followers: 5603,
    views: 4827,
    likes: 1308,
  },
};

const {
  name2,
  tag2,
  stats2: { followers = 0, views: userViews = 0, likes: userLikes = 0 },
} = user2;

console.log(name2); // Jacques Gluke
console.log(tag2); // jgluke
console.log(followers); // 5603
console.log(userViews); // 4827
console.log(userLikes); // 1308

console.groupEnd("");
console.groupEnd("");

// ------------------------------------------------

console.group("Деструктуризація масивів");
//* Деструктуризація масивів

// Example
const color = [200, 255, 100];
const [red, green, blue] = color;

console.log(`rgb(${red}, ${green}, ${blue})`); // "rgb(200, 255, 100)"

// ---

console.group("Значення за замовчуванням");
//* Значення за замовчуванням

// Якщо змінних оголошено більше, ніж елементів масиву, їм буде присвоєно undefined. Щоб запобігти цьому, можна вказувати значення за замовчуванням

// Example with the array from the previous section
const color2 = [200, 255, 100];
const [red2, green2, blue2, alfa = 0.3] = color2;
console.log(`rgba(${red2}, ${green2}, ${blue2}, ${alfa})`); // "rgba(200, 255, 100, 0.3)"

console.groupEnd("");

// ------------------------------------------------

console.group("Часткова деструктуризація");
//* Часткова деструктуризація

// Example Arrays
const color3 = [200, 255, 100];

const [red3, ...otherColors] = color3;

console.log(red3); // 200
console.log(otherColors); // [255, 100]

// Example Onjects
const user3 = {
  name_3: "Jacob",
  age_3: 32,
  email_3: "j.cob@mail.com",
  isOnline_3: true,
};

const { name_3, isOnline_3, ...otherProps } = user3;

console.log(name_3); // "Jacob"
console.log(isOnline_3); // true
console.log(otherProps); // {age: 32, email: "j.cob@mail.com"}

console.groupEnd("");

// ---

console.group("Пропуск значень");
//* Пропуск значень
const rgb = [200, 100, 255];

const [, , blue3] = rgb;

console.log(`Blue: ${blue3}`); // "Blue: 255"

console.groupEnd("");

console.groupEnd("");

console.groupEnd("");
