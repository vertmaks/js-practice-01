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
