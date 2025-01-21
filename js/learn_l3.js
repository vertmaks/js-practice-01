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
