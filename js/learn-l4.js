// Об'єкти
// Доступ до властивостей через крапку
// objectName.key
// Якщо в об'єкті відсутня властивість з таким ключем - undefined

const book = {
  title: "The Last Kingdom",
  author: "Bernard Cornwell",
  genres: ["historical prose", "adventure"],
  isPublic: true,
  rating: 8.38,
};

const bookTitle = book.title;
console.log(bookTitle); // "The Last Kingdom"

const bookGenres = book.genres;
console.log(bookGenres); // ["historical prose", "adventure"]

const bookPrice = book.price;
console.log(bookPrice); // undefined

// ------------------------------------------------

// Доступ до вкладених властивостей

// Значення властивості — це вкладений об’єкт
// user.location.country

const user = {
  name: "Jacques Gluke",
  tag: "jgluke",
  location: {
    country: "Jamaica",
    city: "Ocho Rios",
  },
  hobbies: ["swimming", "music", "sci-fi"],
};

const location = user.location;
console.log(location); // {country: "Jamaica", city: "Ocho Rios"}

const country = user.location.country;
console.log(country); // "Jamaica"

// ------------------------------------------------

// Значення властивості — це масив
// user.hobbies -> user.hobbies[0]

const hobbies = user.hobbies;
console.log(hobbies); // ["swimming", "music", "sci-fi"]

const firstHobby = user.hobbies[0];
console.log(firstHobby); // "swimming"

// ------------------------------------------------

// Використання властивості й методи масиву в об'єкті

const numberOfHobbies = user.hobbies.length;
console.log(numberOfHobbies); // 3

// ------------------------------------------------

// Доступ до властивостей через квадратні дужки
// objectName["key"]

console.log(book.title); // "The Last Kingdom"
console.log(book["title"]); // "The Last Kingdom"

console.log(book.genres); // ["historical prose", "adventure"]
console.log(book["genres"]); // ["historical prose", "adventure"]

// !!!
const propKey = "author";
console.log(book.propKey); // undefined
console.log(book[propKey]); // "Bernard Cornwell"

// ------------------------------------------------

// Зміна значення властивостей

book.rating = 9;
book.isPublic = false;
book.genres.push("drama");

console.log(book.rating); // 9
console.log(book.isPublic); // false
console.log(book.genres); // ["historical prose", "adventure", "drama"]

// ------------------------------------------------

// Додавання нових властивостей
book.pageCount = 836;
book.originalLanguage = "en";
book.translations = ["ua", "ru"];
book.price = {
  hardcover: 39,
  softcover: 29,
};

console.log(book.pageCount); // 836
console.log(book.originalLanguage); // "en"
console.log(book.translations); // ["ua", "ru"]

// Example
const apartment = {
  imgUrl: "https://via.placeholder.com/640x480",
  descr: "Spacious apartment in the city center",
  rating: 4.7,
  price: 5000,
  tags: ["premium", "promoted", "top", "trusted"],
  owner: {
    name: "Henry Sibola",
    phone: "982-126-1588",
    email: "henry.carter@aptmail.com",
  },
};

apartment.area = 60;
apartment.rooms = 3;
apartment.location = {};
apartment.location.country = "Jamaica";
apartment.location.city = "Kingston";

// !!! Зверніть увагу: якщо ви спробуєте додати властивості country і city до ще не створеної властивості location,
// ви отримаєте помилку. Спочатку ініціалізуйте location як порожній об'єкт, а потім додавайте до нього властивості.

// ------------------------------------------------

// Короткі властивості
const name = "Henry Sibola";
const age = 25;

const user2 = {
  name,
  age,
};

console.log(user2.name); // "Henry Sibola"
console.log(user2.age); // 25

// Під час оголошення об'єкта достатньо вказати тільки ім'я властивості, а значення буде взято зі змінної з аналогічним ім'ям
// !!! Якщо є така змінна !!!

// ------------------------------------------------

// Обчислювальні властивості
const propName = "name";
const user3 = {
  age: 25,
  // ключ цієї властивості буде взято зі значення змінної propName
  [propName]: "Henry Sibola",
};

console.log(user3.name); // "Henry Sibola"

// =================================================

// Перебір об'єктів

// Цикл for...in
// for (key in object) {
//   // інструкції
// }
const book2 = {
  title: "The Last Kingdom",
  author: "Bernard Cornwell",
  genres: ["historical prose", "adventure"],
  rating: 8.38,
};

for (const key in book2) {
  console.log(key); // Ключ
  console.log(book2[key]); // Значення властивості з таким ключем
}

// Example
const apartment2 = {
  descr: "Spacious apartment in the city center",
  rating: 4,
  price: 2153,
};

const keys = [];
const values = [];

for (const key in apartment2) {
  keys.push(key);
  values.push(apartment2[key]);
}

console.log(keys); // ["descr", "rating", "price"]
console.log(values); // ["Spacious apartment in the city center", 4, 2153]

// ------------------------------------------------

// Метод Object.keys() - приймає об'єкт і повертає масив ключів його властивостей. If no keys - return empty array.
// Object.keys(object)
const keys2 = Object.keys(book2);
console.log(keys2); // ['title', 'author', 'genres', 'rating']

// Скомбінувавши результат Object.keys() і цикл for...of, можна зручно перебрати властивості об'єкта,
// не вдаючись до використання циклу for...in
const book3 = {
  author: "Bernard Cornwell",
  genres: ["historical prose", "adventure"],
  rating: 8.38,
};
const keys3 = Object.keys(book3);

for (const key of keys3) {
  console.log(key); // Ключ
  console.log(book3[key]); // Значення властивості
}

// ------------------------------------------------

// Метод Object.values() - приймає об'єкт і повертає масив значень його властивостей. If no values - return empty array.
// Object.values(object)
const book5 = {
  title: "The Last Kingdom",
  author: "Bernard Cornwell",
  rating: 8.38,
};
const keys5 = Object.keys(book5);
console.log(keys5); // ['title', 'author', 'rating']

const values5 = Object.values(book5);
console.log(values5); // ["The Last Kingdom", "Bernard Cornwell", 8.38]

// =================================================

// Масив об’єктів
// const arrtName = [
//   { key1: property1, key12: property12 },
//   { key2: property2, key22: property22 },
//   { key3: property3, keys31: property31 },
// ];
// Для перебору такого масиву - for...of

// Example
const colors = [
  { hex: "#f44336", rgb: "244,67,54" },
  { hex: "#2196f3", rgb: "33,150,243" },
  { hex: "#4caf50", rgb: "76,175,80" },
  { hex: "#ffeb3b", rgb: "255,235,59" },
];

const hexColors = [];
const rgbColors = [];

for (const color of colors) {
  hexColors.push(color.hex);
  rgbColors.push(color.rgb);
}

// ------------------------------------------------

// Пошук об'єкта за значенням властивості
const books = [
  { title: "The Last Kingdom", author: "Bernard Cornwell" },
  { title: "Beside Still Waters", author: "Robert Sheckley" },
  { title: "The Dream of a Ridiculous Man", author: "Fyodor Dostoevsky" },
];

const authorToSearchFor = "Robert Sheckley";

for (const book of books) {
  if (book.author === authorToSearchFor) {
    console.log(book);
    console.log(book.title);
    console.log(book.rating);
  }
}

// ------------------------------------------------

// Колекція значень властивості

// Example 1
// Список назв усіх книг у колекції books
const books2 = [
  { title: "The Last Kingdom", author: "Bernard Cornwell", rating: 8.2 },
  { title: "Beside Still Waters", author: "Robert Sheckley", rating: 9 },
  {
    title: "The Dream of a Ridiculous Man",
    author: "Fyodor Dostoevsky",
    rating: 6.8,
  },
];

const titles = [];

for (const book of books2) {
  titles.push(book.title);
}

console.log(titles); // ["The Last Kingdom", "Beside Still Waters", "The Dream of a Ridiculous Man"]

// Example 2
// Cередній рейтинг усієї колекції
let totalRating = 0;

for (const book of books2) {
  totalRating += book.rating;
}

const averageRating = totalRating / books2.length;
console.log(averageRating); // 8

// ------------------------------------------------
// Напиши функцію getAllPropValues(propName), яка приймає один параметр propName - ім'я (ключ) властивості.
// Функція повинна повернути масив усіх значень властивості з таким ім'ям з кожного об'єкта в масиві products.
// Якщо в об'єктах відсутні властивості з таким ім'ям, функція повинна повернути порожній масив.
function getAllPropValues(propName) {
  const products = [
    { name: "Radar", price: 1300, quantity: 4 },
    { name: "Scanner", price: 2700, quantity: 3 },
    { name: "Droid", price: 400, quantity: 7 },
    { name: "Grip", price: 1200, quantity: 9 },
  ];
  const newArr = [];

  for (const product of products) {
    if (propName in product) {
      newArr.push(product[propName]);
    }
  }
  return newArr;
}

getAllPropValues("name");
getAllPropValues("quantity");
getAllPropValues("price");
getAllPropValues("category");

// Функція calculateTotalPrice(productName) приймає один параметр productName- назва товару.
// Функція містить масив об'єктів products з такими властивостями, як name — ім'я товару, price — ціна і quantity — кількість.
// Доповни код функції так, щоб вона повертала загальну вартість (ціна * кількість) товару з таким ім'ям з масиву products.
// Якщо продукту з такою назвою немає, то функція повинна повертати рядок "Product <productName> not found!" , де <productName> — це ім'я товару.
function calculateTotalPrice(productName) {
  const products = [
    { name: "Radar", price: 1300, quantity: 4 },
    { name: "Scanner", price: 2700, quantity: 3 },
    { name: "Droid", price: 400, quantity: 7 },
    { name: "Grip", price: 1200, quantity: 9 },
  ];

  for (const product of products) {
    if (product.name === productName) {
      return product.price * product.quantity;
    }
  }
  return `Product ${productName} not found!`;
}

calculateTotalPrice("Blaster");
calculateTotalPrice("Radar");
calculateTotalPrice("Droid");
calculateTotalPrice("Grip");
calculateTotalPrice("Scanner");

// =================================================

// Методи об'єкта - значення властивості — це функція
// const obj = {
//   method(value) {
//     console.log(`I'm a method with ${value}!`);
//   },
// };

// obj.method(5); // "I'm a method with 5!"
// obj.method(10); // "I'm a method with 10!"
const bookShelf = {
  books: ["The Last Kingdom", "Dream Guardian"],
  // Це метод об'єкта
  getBooks() {
    return "Returning all books";
  },
  // Це метод об'єкта
  addBook(bookName) {
    return `Adding book ${bookName}`;
  },
};

// Виклики методів
bookShelf.getBooks(); // поверне "Returning all books"
bookShelf.addBook("New book 1"); // поверне "Adding book New book 1"
bookShelf.addBook("New book 2"); // поверне "Adding book New book 2"

// ------------------------------------------------

// Доступ до властивостей об'єкта - використовується не ім'я змінної цього об’єкта, наприклад bookShelf, а ключове слово this
// const bookShelf = {
//   books: ["The Last Kingdom", "The Mist"],
//   getBooks() {
//     console.log(this);
//   },
// };

// bookShelf.getBooks(); // {books: ["The Last Kingdom", "The Mist"], getBooks: f}

// Example
const bookShelf2 = {
  books: ["The Last Kingdom", "The Mist"],
  getBooks() {
    return this.books;
  },
};

console.log(bookShelf2.getBooks()); // ["The Last Kingdom", "The Mist"]

// ------------------------------------------------

// Зміна об'єкта в масиві
// const bookShelf = {
//   books: [
//     { title: "The Last Kingdom", rating: 8 },
//     { title: "The Mist", rating: 6 },
//   ],
//   changeRating(bookName, newRating) {
//     for (const book of this.books) {
//       if (book.title === bookName) {
//         // Знайшли необхідний об’єкт за назвою книги
//       }
//     }
//   },
// };

// Example
const atTheOldToad = {
  potions: [
    { name: "Speed potion", price: 460 },
    { name: "Stone skin", price: 520 },
  ],
  getPotions() {
    return this.potions;
  },
  updatePotionName(oldName, newName) {
    for (const potion of this.potions) {
      if (potion.name === oldName) {
        potion.name = newName;
      }
    }
    // return this.potions;
  },
};

atTheOldToad.updatePotionName("Stone skin", "Invisibility");
console.log(atTheOldToad.getPotions()); // [{name: 'Dragon breath', price: 460}, {name: 'Invisibility', price: 520}]
console.log(atTheOldToad.updatePotionName("Speed potion", "Dragon breath")); // undefined - because no return
console.log(atTheOldToad.potions); // [{name: 'Dragon breath', price: 460}, {name: 'Invisibility', price: 520}]
