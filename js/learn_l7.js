//* Об'єктна модель документа
// Mодулі: ECMAScript, DOM, BOM;
// ECMAScript (скорочено ES) — це стандарт, який описує мову програмування JavaScript
// Об'єктна модель документа (Document Object Model) — незалежний інтерфейс для роботи з HTML-документом. Ця модель містить набір властивостей і методів, що дозволяють шукати, створювати й видаляти елементи, реагувати на дії користувача і багато іншого
// Об'єктна модель браузера (Browser Object Model) — незалежний від мови інтерфейс для роботи з браузером. Містить набір властивостей і методів, що дозволяють отримати доступ до ряду функцій браузерa. Mожна отримувати розміри вікна браузера, читати URL, працювати з історією навігації, місцем розташування тощо

// ------------------------------------------------

//* Пошук елементів за довільним CSS-селектором

//? element.querySelector(selector)
// Використовується, якщо необхідно знайти тільки один, найчастіше унікальний елемент.
// return: перший знайдений елемент усередині element, що відповідає рядку CSS-селектора selector or null

//? element.querySelectorAll(selector)
// Використовується, якщо необхідно знайти колекцію елементів, тобто отримати масив посилань на елементи з однаковим селектором
// return: псевдомасив усіх елементів всередині element, які відповідають CSS-селектору selector or empty arr

// ------------------------------------------------

//* Навігація по DOM
// Елементи DOM-дерева мають ієрархічне відношення один до одного. Для опису відносин використовуються терміни предок (ancestor), нащадок (descendant), батько (parent), дитина (child) і сусід (sibling)

// ================================================

//* Властивості та атрибути
console.group("Властивості та атрибути");

// ------------------------------------------------

//* Доступ до властивостей
// Під час побудови DOM-дерева деякі стандартні HTML-атрибути стають властивостями елементів
console.group("Доступ до властивостей");

const link = document.querySelector(".link");
console.log(link.href); // "https://goit.global"

console.groupEnd();

// ------------------------------------------------

//* Зміна значення атрибута тегу
// Значення атрибутів можна змінювати, перевизначивши їм нове значення прямо з JavaScript коду, і під час виконання скрипта значення в HTML, тобто в DOM-дереві, зміниться.
console.group("Зміна значення атрибута");

link.href = "https://neo.goit.global";
console.log(link.href); // "https://neo.goit.global"

console.groupEnd();

// ------------------------------------------------

//* Властивість textContent - повертає весь текстовий контент усередині елементів (власних і вкладених елементів)
console.group("Властивість textContent");

const el = document.querySelector(".text");
const nested = document.querySelector(".sub-text");

console.log(el.textContent); // "Username: Mango"
console.log(nested.textContent); // "Mango"

// Change example
el.textContent = "Username: Poly";
console.log(el.textContent); //

console.groupEnd();

// ------------------------------------------------

//* Властивість classList - дозволяє прочитати, додати, видалити або перевірити наявність CSS-класу в елемента
// у властивості classList зберігається об'єкт із методами для роботи з CSS-класами елемента, який подібний до масиву
// Він зберігає в собі весь перелік класів DOM-елемента, властивість length і властивість value
console.group("Властивість classList");

const link2 = document.querySelector(".link-2");
console.log(link2.classList);
// ["link", "is-active", length: 2, value: "link is-active"]

// ---

//* Метод classList.contains(className) - очікує аргументом рядок з іменем класу та повертає true або false
//! className передаємо як рядок без крапки (без селектора класу)
console.group("Метод classList.contains(className)");

const hasActiveClass1 = link2.classList.contains("is-active"); // true
console.log(" hasActiveClass1:", hasActiveClass1);
const hasActiveClass2 = link2.classList.contains("title"); // false
console.log(" hasActiveClass2:", hasActiveClass2);

console.groupEnd();

// ---

//* Метод classList.add(className) - додає клас className до списку класів елемента
console.group("Метод classList.add(className)");

link2.classList.add("special");
console.log("add 'special':", link2.classList);
// ["link", "is-active", "special", length: 3, value: "link is-active special"]

// ↑ Можна додавати більше одного класу, вказавши кілька аргументів через кому ↑

console.groupEnd();

// ---

//* Метод classList.remove(className) - видаляє клас className зі списку класів елемента
console.group("Метод classList.remove(className)");

link2.classList.remove("is-active");
console.log("remove 'is-active':", link2.classList);
// ["link", "special", length: 2, value: "link special"]

// Якщо спробувати видалити клас, якого не існує на елементі, то це не викличе помилку. Просто нічого не видалиться

console.groupEnd();

// ---

//* Метод classList.toggle(className)
// працює як перемикач:
// className відсутній - додає в кінець списку класів
// className присутній — видаляє
console.group("Метод classList.toggle(className)");

link2.classList.toggle("is-active");
console.log(link2.classList);
// ["link", "special", "is-active", length: 3, value: "link special is-active"]

console.groupEnd();

// ---

//* Метод classList.replace(oldClassName, newClassName) - замінює існуючий клас oldClassName на вказаний newClassName
console.group("Метод classList.replace(oldClassName, newClassName)");

link2.classList.replace("special", "regular");
console.log(link2.classList);
// ["link", "regular", "is-active", length: 3, value: "link regular is-active"]

// Якщо спробувати поміняти клас, якого не існує на елементі, то це не викличе помилку. Просто нічого не поміняється

console.groupEnd();
console.groupEnd();

// ------------------------------------------------

//* Властивість style - використовується для читання та зміни вбудованих стилів з DOM-елементів
// return: об'єкт, який містить; список лише всіх вбудованих властивостей елемента, а не увесь CSS
//! Під час запису властивості вони записуються в camelCase нотації, замість дефісів: background-color → backgroundColor
console.group("Властивість style");

const button = document.querySelector(".btn");

button.style.backgroundColor = "teal";
button.style.fontSize = "24px";
button.style.textAlign = "center";

console.log(button.style); // inline styles object

// На практиці стилізація елементів зазвичай виконується шляхом додавання CSS-класів
// Властивість style використовується для додавання будь-яких динамічних стилів,
// наприклад, якщо посилання на фонове зображення невідомо заздалегідь і приходить з бекенда

console.groupEnd();

// ================================================

//* Доступ до атрибутів
console.group("Доступ до атрибутів");

//* Метод element.hasAttribute(nameAttribute)
// return: boolean - результат перевірки наявності атрибута nameAttribute на елементі element — true or false
console.group("Метод element.hasAttribute(nameAttribute)");

const image = document.querySelector(".image");
console.log("Has 'src'?", image.hasAttribute("src")); // true
console.log("Has 'href'?", image.hasAttribute("href")); // false

console.groupEnd();

// ---

//* Метод element.getAttribute(nameAttribute)
// return: значення атрибута nameAttribute для вказаного HTML-елемента element or null
console.group("Метод element.getAttribute(nameAttribute)");

console.log(image.getAttribute("alt")); // "Rocks and waterfall"

console.groupEnd();

// ---

//* Метод element.setAttribute(nameAttribute, value)
// встановлює або змінює значення value зазначеного атрибута nameAttribute для вказаного HTML-елемента element
console.group("Метод element.setAttribute(nameAttribute, value)");

image.setAttribute("alt", "Amazing nature");
console.log(image.getAttribute("alt")); // Amazing nature

console.groupEnd();

// ---

//* Метод element.removeAttribute(nameAttribute)
// видаляє атрибут nameAttribute зі вказаного HTML-елемента
console.group("Метод element.removeAttribute(nameAttribute)");

image.removeAttribute("alt");
console.log(image.hasAttribute("alt")); // false

// Якщо зазначеного атрибута немає на елементі, метод не викликає жодних помилок та не робить нічого.

// Отримати доступ або змінити значення деяких атрибутів елемента можна безпосередньо,
// звернувшись до них як до властивостей DOM-об'єкта. Це буде менш затратно за кількістю коду
console.groupEnd();
console.groupEnd();

// ------------------------------------------------

//* Власні атрибути - data-атрибути, дозволяють додати до тегу довільний атрибут і отримати його значення в JavaScript
console.group("Власні атрибути");

// ---

//* Отримання значень
// використовується властивість dataset, після якої через крапку пишеться ім'я атрибута без data-
console.group("Отримання значень");

const saveBtn = document.querySelector('button[data-action="save"]');
console.log(saveBtn.dataset.action); // "save"

const closeBtn = document.querySelector('button[data-action="close"]');
console.log(closeBtn.dataset.action); // "close"

// data- відкидається, а інша частина імені записується як ім'я властивості об'єкта

console.groupEnd();

// ---

//* Зміна значень
console.group("Зміна значень");

// Змінюємо значення data-action для кнопки saveBtn
saveBtn.dataset.action = "update";

// Додаємо новий data-атрибут data-role
saveBtn.dataset.role = "admin";

// Перевіримо нові значення
console.log(saveBtn.dataset.action); // "update"
console.log(saveBtn.dataset.role); // "admin"

console.groupEnd();
console.groupEnd();
console.groupEnd();
console.log("\n");

// ================================================

//* Створення та видалення елементів
// DOM API (Document Object Model Application Programming Interface)
console.group("Створення та видалення елементів");

// ---

//* Створення елементів
//? document.createElement(tagName)
//! eлемент tagName створюється в пам'яті, у DOM його ще немає;
// tagName — це рядок
// return: посилання на об’єкт елементa tagName
console.group("Створення елементів");

const heading = document.createElement("h2");

heading.classList.add("title");
heading.textContent = "This is a heading";
console.log(heading); // <h1 class="title">This is a heading</h1>

const image1 = document.createElement("img");
image1.src = "https://picsum.photos/id/11/320/240";
image1.alt = "Nature";
console.log(image1); // <img src="https://picsum.photos/id/11/320/240" alt="Nature" />

console.groupEnd();

// ---

//* Додавання елементів
// створений елемент необхідно додати до вже існуючого елемента в DOM-дереві
//? elem.append(el1, el2, ...) - додає один або декілька елементів після всіх дітей елемента elem
//? elem.prepend(el1, el2, ...) - додає один або декілька елементів перед усіма дітьми елемента elem
console.group("Додавання елементів");

const list = document.querySelector(".usernames");

// Adds an item to the end of the list
const lastItem = document.createElement("li");
lastItem.textContent = "Poly";
list.append(lastItem);

// Adds an item to the beginning of the list
const firstItem = document.createElement("li");
firstItem.textContent = "Ajax";
list.prepend(firstItem);

//todo  Якщо елемент для додавання вже знаходиться в DOM, то він видаляється зі свого старого місця й додається у нове.
//!     Oдин і той самий елемент не може бути одночасно у двох місцях.
console.groupEnd();

// ---

//* Видалення елементів
//? element.remove()
console.group("Видалення елементів");

const text = document.querySelector(".del-text");
text.remove();

console.groupEnd();

// ------------------------------------------------

//* Властивість innerHTML
console.group("Властивість innerHTML");

// Example 1
const title = document.querySelector(".article .title");
title.innerHTML = 'New and <span class="accent">improved</span> title';

const titleAccent = document.querySelector(".article .title .accent");
titleAccent.style.color = "tomato";
titleAccent.style.textDecoration = "underline";

// Example 2
const technologies = ["HTML", "CSS", "JavaScript", "React", "Node"];
const list2 = document.querySelector(".list");

const markup = technologies
  .map((technology) => `<li class="list-item">${technology}</li>`)
  .join("");

// Check the console, you'll see a single string with HTML tags
console.log(markup);

// Adding all the markup in one operation
list2.innerHTML = markup;

list2.style.padding = "0";
list2.style.margin = "0";
list2.style.listStyleType = "none";

document
  .querySelectorAll(".list-item")
  .forEach((item) => (item.style.padding = "8px"));
//   border-width: 2px;
//   border-style: dashed;

//! Якщо у властивість innerHTML записати порожній рядок, то вміст елемента буде очищено. Це простий і швидкий спосіб видалення всього вмісту
console.groupEnd();

console.groupEnd();
console.log("\n");

// ------------------------------------------------

//* Метод insertAdjacentHTML()
