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

// ------------------------------------------------

console.group("Метод insertAdjacentHTML()");
//* Метод insertAdjacentHTML() - метод для додавання рядка з HTML-тегами перед, після або всередину елемента
//? element.insertAdjacentHTML(position, string)
// position — рядок, який визначає позицію щодо element:
// "beforebegin" — перед element
// "afterbegin" — всередині element, перед усіма дітьми
// "beforeend" — всередині element, після усіх дітей
// "afterend" — після element

//! "beforebegin" і "afterend" працюють тільки тоді, коли element вже знаходиться в DOM-дереві

// Example (continue example at line 336)
const newTechnologies = ["React", "TypeScript", "Node.js"];
const newMarkup = newTechnologies
  .map((technology) => `<li class="list-item new">${technology}</li>`)
  .join("");

list2.insertAdjacentHTML("beforeend", newMarkup);
list2.insertAdjacentHTML(
  "beforebegin",
  "<h2 class='second-title'>Popular technologies</h2><p>↑ title with <span class='accent'>'beforebegin'</span> position ↑</p>"
);

document.querySelectorAll(".list-item.new").forEach((item) => {
  const span = document.createElement("span");
  span.textContent = "🟢 ";
  item.prepend(span);
});

document.querySelector(".tech-section .second-title").style.marginBottom = "0";
document.querySelector(".tech-section .accent").style.color = "brown";
document.querySelector(".tech-section p").style.marginTop = "0";

console.groupEnd();

console.groupEnd();
console.log("\n");

// ================================================

console.group("Події");

// ---

console.group("Метод addEventListener()");
//* Метод addEventListener() - додає слухача події до елемента
//? element.addEventListener(event, handler, options)
// event — рядок, що містить ім'я події, наприклад, "click"
// handler — колбек-функція, яка буде викликана під час настання події
// options — необов'язковий об'єкт параметрів із розширеними налаштуваннями

// Example
const button2 = document.querySelector(".my-button");

button2.addEventListener("click", () => {
  console.log(
    "Anonymous f:",
    "The button was pressed and now the next image will appear"
  );
});

//#region ↓ or with a non-anonymous function ↓
const handleClick = () => {
  console.log("Non-anonymous f:", "the button was pressed...");
};

button2.addEventListener("click", handleClick);
//#endregion

//#region Additional markup (not this theme)
const eventSection = document.querySelector(".event-listener");
eventSection.insertAdjacentHTML("afterbegin", "<h2>Events</h2>");
//#endregion

//! На одному елементі може бути будь-яка кількість обробників подій, навіть подій одного типу.
//! Колбек-функції будуть викликатися в порядку їхньої реєстрації в коді.

// ---

console.group("once: true");
//* once: true - use the event only once
const onceBtn = document.querySelector(".once-btn");
onceBtn.addEventListener(
  "click",
  () =>
    console.log("Disposable button (only once!):", "the button was pressed..."),
  {
    once: true,
  }
);

console.log("Create a one-time event!");
console.groupEnd();

console.groupEnd();

// ------------------------------------------------

console.group("Метод removeEventListener()");
//* Метод removeEventListener() - видаляє слухача події з елемента.
//! Only with non-anonymous functions
//? element.removeEventListener(event, handler, options)

// Example
const addListenerBtn = document.querySelector(".js-add");
const removeListenerBtn = document.querySelector(".js-remove");
const targetBtn = document.querySelector(".target-btn");

const handleClick2 = () => {
  console.log("Click-click 😄");
};

//#region For fun
const doesntClick = () => {
  console.log("Doesn't click ☹️");
};
targetBtn.addEventListener("click", doesntClick);
const updateListener = () => {
  if (isListenerAdded) {
    targetBtn.removeEventListener("click", doesntClick);
    targetBtn.addEventListener("click", handleClick2);
  } else {
    targetBtn.addEventListener("click", doesntClick);
    targetBtn.removeEventListener("click", handleClick2);
  }
};
//#endregion

let isListenerAdded = false; // Flag 🚩

addListenerBtn.addEventListener("click", () => {
  if (isListenerAdded) {
    console.log("The 'Click me' button already has an event listener");
  } else {
    console.log("Event listener was added to 'Click me' button");
    isListenerAdded = true; // Flag added
    updateListener();
  }
});

removeListenerBtn.addEventListener("click", () => {
  if (!isListenerAdded) {
    console.log(
      "The event listener has already been removed from the 'Click me' button"
    );
  } else {
    console.log(
      "The event listener has been removed from the 'Click me' button"
    );
    isListenerAdded = false; // Flag removed
    updateListener();
  }
});

console.groupEnd();

// ------------------------------------------------

console.group("Об'єкт події");
//* Об'єкт події

const eventObjBtn = document.querySelector(".event-obj");
const handleClick3 = (event) => {
  console.log("event:", event);
};

eventObjBtn.addEventListener("click", handleClick3);

// event — об'єкт події, автоматично передається першим аргументом під час виклику колбек-функції
// Mожнa називати  як завгодно, як правило - e, evt, event

// ---

console.group("Властивості об'єкта події");
//* Властивості об'єкта події:
// event.type — тип події;
// event.currentTarget — елемент, на якому виконується обробник події;

const handleClick4 = (event) => {
  console.log("event type: ", event.type);
  console.log("currentTarget: ", event.currentTarget);
};

eventObjBtn.addEventListener("click", handleClick4);

console.groupEnd();

console.groupEnd();

// ------------------------------------------------

console.group("Події клавіатури");
//* Події клавіатури
// keydown — подія, що відбувається при натисканні клавіші
// keyup — подія, що відбувається, коли клавішу відпустили
// походять від базового класу KeyboardEvent

document.addEventListener("keydown", (event) => {
  console.log("Keydown: ", event);
});

document.addEventListener("keyup", (event) => {
  console.log("Keyup: ", event);
});

// ---

console.group("Властивості key і code");
//* Властивості key і code
//todo key - return символ, згенерований натисканням клавіші на клавіатурі
// Ця властивість враховує: стан клавіш-модифікаторів, наприклад Shift i поточну мову
//todo code - return код фізичної клавіші на клавіатурі й не залежить від мови та стану клавіш-модифікаторів

document.addEventListener("keydown", (event) => {
  console.log("key: ", event.key);
  console.log("code: ", event.code);
});

console.groupEnd();
console.groupEnd();

// ================================================

console.group("Події елементів форм");
//* Події елементів форм

// ---

console.group("Подія submit");
//* Подія submit
//! Подія submit відбувається безпосередньо на формі (тег form), тому обробник подій слід встановлювати саме на ній

//? Example
const form = document.querySelector("form");
form.addEventListener("submit", (event) => {
  // ...
});

// ---

console.group("Mетод preventDefault()");
//* Mетод preventDefault() - скасування дії браузера за замовчуванням в об'єкта події, наприклад, перезавантаження сторінки при відправленні форми

//? Example
const form2 = document.querySelector("form");

form2.addEventListener("submit", (event) => {
  event.preventDefault();
});
console.groupEnd();

//? Live example (submit event)
const registerForm = document.querySelector(".form");

registerForm.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const form = event.target;
  const login = form.elements.login.value;
  const password = form.elements.password.value;

  if (login === "" || password === "") {
    return console.log("Please fill in all the fields!");
  }

  console.log(`Login: ${login}, Password: ${password}`);
  form.reset();
}

//todo Властивість elements DOM-елемента форми містить об'єкт з посиланнями на всі її елементи, які мають атрибут name. Саме тому в прикладі ми отримуємо значення полів, звертаючись до event.target.elements.login.value і event.target.elements.password.value
console.groupEnd();

// ------------------------------------------------

console.group("Подія change");
//* Подія change -  відбувається після зміни елемента форми
//todo для текстових полів або textarea подія відбудеться не на кожному введенні символу, а після втрати фокусу
//todo для інших елементів, наприклад, select, чекбоксів і радіокнопок, подія change спрацьовує відразу під час вибору значення

//? Live example
const select = document.querySelector(".pizza-select");
const textOutput = document.querySelector(".text-output");
const valueOutput = document.querySelector(".value-output");

select.addEventListener("change", setOutput);

function setOutput(event) {
  const selectedOptionValue = event.currentTarget.value;
  const selectedOptionIndex = event.currentTarget.selectedIndex;
  const selectedOptionText =
    event.currentTarget.options[selectedOptionIndex].text;

  textOutput.textContent = selectedOptionText;
  valueOutput.textContent = selectedOptionValue;
}

console.groupEnd();

// ------------------------------------------------

console.group("Подія input");
//* Подія input - відбувається тільки на текстових полях і textarea
//todo створюється щоразу при зміні значення елемента, не чекаючи втрати фокусу

//? Live example
const textInput = document.querySelector(".text-input");
const output = document.querySelector(".output");

textInput.addEventListener("input", (event) => {
  output.textContent = event.currentTarget.value;
});

console.groupEnd();

// ------------------------------------------------

//* Подія focus і blur
// focus відбувається під час фокусування на елементі
// blur відбувається при втраті фокусу

// Активувати або скасувати фокус можна програмно. Для цього треба викликати в коді для елемента однойменні методи focus() і blur()

//? Live example
const textInput2 = document.querySelector(".text-input-2");
const setFocusBtn = document.querySelector('[data-action="set"]');
const removeFocusBtn = document.querySelector('[data-action="remove"]');

setFocusBtn.addEventListener("click", () => {
  textInput2.focus();
});

removeFocusBtn.addEventListener("click", () => {
  textInput2.blur();
});

textInput2.addEventListener("focus", () => {
  textInput2.value = "This input has focus";
});

textInput2.addEventListener("blur", () => {
  textInput2.value = "";
});

//! Фокус може бути тільки на одному елементі сторінки за одиницю часу
// Поточний елемент, на якому знаходиться фокус, доступний як document.activeElement
//! не інтерактивнi елементи не можуть отримати фокус
console.groupEnd();

console.groupEnd();
console.log("\n");
