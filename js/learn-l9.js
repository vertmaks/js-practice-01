console.group("Формат JSON");
//* Формат JSON

// ---

console.group("Стандарт JSON");
//* Стандарт JSON

//? Example
// {
//   "name": "Josh",
//   "weight": 175,
//   "age": 30,
//   "eyecolor": "brown",
//   "isHappy": true,
//   "cars": ["Chevy", "Honda"],
//   "favoriteBook": {
//     "title": "The Last Kingdom",
//     "author": "Bernard Cornwell",
//     "rating": 8.38
//   }
// }

console.groupEnd();

// ---

console.group("Перетворення у json");
//* Перетворення у json

// Значенням може бути число, буль, null, масив, об'єкт

const dog = {
  name: "Mango",
  age: 3,
  isGoodBoy: true,
};

const json = JSON.stringify(dog);
console.log(json); // '{"name":"Mango","age":3,"isGoodBoy":true}'

console.groupEnd();

// ---

console.group("Перетворення функцій");
//* Перетворення функцій

// ↓ Якщо в об'єкта є методи, то при перетворенні вони будуть проігноровані та не потраплять у JSON
//? Example 1
const dog2 = {
  name: "Mango",
  age: 3,
  isGoodBoy: true,
  bark() {
    console.log("Woof!");
  },
};

const json2 = JSON.stringify(dog2);
console.log(json); // '{"name":"Mango","age":3,"isGoodBoy":true}'

// ↓ При спробі перетворити функцію у JSON результатом буде undefined
//? Example 2
const json3 = JSON.stringify(() => console.log("Well, this is awkward"));
console.log(json3); // undefined

console.groupEnd();

// ---

console.group("Парсинг із json");
//* Парсинг із json (parse) - отримання з JSON валідне JavaScript значення

//* Метод JSON.parse(value) - приймає json, тобто рядок, і перетворює його у JavaScript дані.

//? Example
console.log(JSON.parse("5")); // 5
console.log(JSON.parse("false")); // false
console.log(JSON.parse("null")); // null

// ↓ Якщо json описує складний тип даних, наприклад об'єкт, то в результаті отримаємо валідний об'єкт, з яким можна працювати звичайним чином

const json4 = '{"name":"Mango","age":3,"isGoodBoy":true}';

const dog4 = JSON.parse(json4);
console.log(dog4); // {name: "Mango", age: 3, isGoodBoy: true}
console.log(dog4.name); // "Mango"

console.groupEnd();

// ---

console.group("Обробка помилок");
//* Обробка помилок - конструкція try...catch

try {
  // Code that may throw a runtime error
} catch (error) {
  // Error handling
}

//? Example
try {
  const data = JSON.parse("Well, this is awkward");
} catch (error) {
  console.log(error);
  console.log(error.name); // "SyntaxError"
  console.log(error.message); // Unexpected token W in JSON at position 0
}

console.log("✅ This is fine, we handled parsing error in try...catch");

// ↑ Змінна error — це об'єкт помилки з інформацією про те, що сталося.
// У цього об'єкта є кілька корисних властивостей:

// name — тип помилки. Для помилки парсингу — це SyntaxError.
// message — повідомлення про деталі помилки.
// stack — стек викликів функцій на момент помилки. Використовується для налагодження

console.groupEnd();

// ---

console.group("Додавання даних");
//* Додавання даних
//? setItem(key, value)

//? Example 1
localStorage.setItem("ui-theme", "light");

//? Example 2
localStorage.setItem("tra-ta-ta", "param");

try {
  console.log(localStorage);
  console.log("tra-ta-ta with spaces:", localStorage.tra - ta - ta); // Storage {ui-theme: "light", length: 1}
} catch (error) {
  console.log("tra-ta-ta with spaces (incorrect):", "\n", error);
  console.log(error.message);
}

// ---

console.group("Додавання складних даних");
//* Додавання складних даних

const settings = {
  theme: "dark",
  isAuthenticated: true,
  options: [1, 2, 3],
};

localStorage.setItem("settings", JSON.stringify(settings));

// Without parse - return string
console.log(localStorage.settings);

console.groupEnd();
console.groupEnd();

// ---

console.group("Отримання даних");
//* Отримання даних
//? method getItem(key)

//? Example 1
const savedTheme = localStorage.getItem("ui-theme");
console.log(savedTheme); // "light"

//? Example 2
const savedItem = localStorage.getItem("key-that-does-not-exist");
console.log(savedItem); // null

//? Example 3 with array or onject - need to parse with method JSON.parse()
const settings2 = {
  theme: "dark",
  isAuthenticated: true,
  options: [1, 2, 3],
};
localStorage.setItem("settings2", JSON.stringify(settings2));

const savedSettings = localStorage.getItem("settings2");
console.log(savedSettings); // A string

const parsedSettings = JSON.parse(savedSettings);
console.log(parsedSettings); // Settings object

console.groupEnd();

// ---

console.group("Видалення даних");
//* Видалення даних
//? method removeItem(key)
// В результаті своєї роботи він не повертає значення

//? Example
localStorage.removeItem("ui-theme");
console.log(localStorage.getItem("ui-theme")); // null

//* method clear()
// повністю очищає сховище

//? Example
localStorage.setItem("ui-theme", "light");
localStorage.setItem("notif-level", "mute");

console.log(localStorage);
// Storage {notif-level: 'mute', ui-theme: 'light', length: 2}

localStorage.clear();
console.log(localStorage); // Storage {length: 0}

//! Операція повного очищення сховища є ризикованою. Вона може порушити записи, створені іншими розробниками проєкту.

console.groupEnd();

// ---

console.group("Сховище сесії");
//*Сховище сесії - sessionStorage

console.log(window.sessionStorage); // Storage {length: 0}

//? Example 1 - setItem(key, value)
sessionStorage.setItem("user-id", "123");
sessionStorage.setItem(
  "tickets",
  JSON.stringify({ from: "Lviv", to: "Kyiv", quantity: 2 })
);
console.log(sessionStorage);
// Storage {user-id: '123', tickets: '{"from":"Lviv","to":"Kyiv","quantity":2}', length: 2}

//? Example 2 - getItem(key)
const userId = sessionStorage.getItem("user-id");
console.log(userId); // "123"

const tickets = JSON.parse(sessionStorage.getItem("tickets"));
console.log(tickets); // { from: "Lviv", to: "Kyiv", quantity: 2 }

//? Example 3 - removeItem(key) and clear()
sessionStorage.removeItem("tickets");
console.log(sessionStorage); // Storage {user-id: '123', length: 1}

sessionStorage.clear();
console.log(sessionStorage); // Storage {length: 0}

// ---

//? Кейс: Форма з повідомленням
const form = document.querySelector(".feedback-form");

// form.addEventListener("submit", (event) => {
//   event.preventDefault();
//   console.log(event.target.elements.message.value);
//   form.reset();
// });

// if the user refreshes the page, the message disappears
//? fix this ↓

const localStorageKey = "form-message";

form.addEventListener("input", (event) => {
  localStorage.setItem(localStorageKey, event.target.value);
});

form.addEventListener("submit", (event) => {
  event.preventDefault();
  console.log(event.target.elements.message.value);
  // ↓ delete locale storage data
  localStorage.removeItem(localStorageKey);
  form.reset();
});

// додаємо код читання збереженого повідомлення з локального сховища і встановлення його початковим значенням для текстового поля під час завантаження сторінки
const textarea = form.elements.message;

textarea.value = localStorage.getItem(localStorageKey) ?? "";

console.groupEnd();

console.groupEnd();
