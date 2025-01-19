// Task 1
// Конвертация температур
// Напиши функцию, которая принимает температуру в градусах Цельсия и возвращает её эквивалент в градусах Фаренгейта.

// function temperature(grad) {
//   const gradF = grad * (9 / 5) + 32;
//   const res = gradF;
//   return `Income temperature in Celsium is ${grad}, this temperature in Farengate is ${res.toFixed(
//     2
//   )}.`;
// }

function temperature(gradC) {
  const gradF = gradC * (9 / 5) + 32;
  return `Temperature in Celsius: ${gradC}, in Fahrenheit: ${gradF.toFixed(
    2
  )}.`;
}

console.log(temperature(37));
console.log(temperature(25));

// Task 2
// Работа с числами
// Напиши функцию, которая принимает два числа и возвращает их сумму, разность, произведение и частное в виде объекта.
// Example: { sum: 12, difference: 8, product: 20, quotient: 5 }

// function numberOperation(number1, number2) {
//   const productNumber = Math.round(number1 * number2 * 10) / 10;
//   const quotientNumber = Math.round((number1 / number2) * 10) / 10;
//   return `Your numbers are ${number1} and ${number2}. The sum of these numbers is ${
//     number1 + number2
//   }, the difference of these numbers is ${
//     number1 - number2
//   }, the product of these numbers is ${productNumber}, the quotient of these numbers is ${quotientNumber}.`;
// }

function numberOperation(number1, number2) {
  if (number2 === 0) {
    return { error: "Division by zero is not allowed." };
  }
  const roundToTwo = (value) => Math.round(value * 100) / 100;
  return {
    sum: number1 + number2,
    difference: number1 - number2,
    product: number1 * number2,
    quotient: roundToTwo(number1 / number2),
  };
}

console.log(numberOperation(25, 5));
console.log(numberOperation(15, 3));
console.log(numberOperation(5, 18));
console.log(numberOperation(10, 0));

// Task 3
// Чётное или нечётное
// Напиши функцию, которая принимает число и возвращает строку: "Чётное" или "Нечётное".

// function evenOrOdd(number) {
//   if (number % 2 === 0) {
//     return `Number ${number} is even.`;
//   } else {
//     return `Number ${number} is odd.`;
//   }
// }

function evenOrOdd(number) {
  return number % 2 === 0
    ? `Number ${number} is even.`
    : `Number ${number} is odd.`;
}

console.log(evenOrOdd(2));
console.log(evenOrOdd(13));
console.log(evenOrOdd(5));
console.log(evenOrOdd(2));
