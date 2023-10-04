console.log("Завдання 1: Обчислення середнього арифметичного значення масиву");
console.log("Завдання 2: Перевірка парних чисел значень масиву (вивести тільки парні та їх загальну кількість)");
console.log("Завдання 3: Пошук максимального числа в масиві");

console.log("Масив Array: ");
let Array = [4, 12, 93, -3, 6, -45, 83];
let sum = 0;
let sum_even = 0;
let max = 0;
for (let i = 0; i < Array.length; i++) {
	console.log(Array[i]);
	sum += Array[i];
}
console.log("Середнє арифметичне масиву = " + (sum / Array.length));

console.log("Парні елементи масиву Array: ");
for (let i = 0; i < Array.length; i++) {
	if (Array[i] % 2 == 0) {
		console.log(Array[i]);
		sum_even++;
	}

	if (Array[i] >= max) max = Array[i];
}
console.log("Всього парних елементів масиву = " + sum_even);
console.log("Максимальне число в масиві = " + max);

console.log("Завдання 4: Обчислення факторіалу числа (користувач вводить число через prompt)");
let number = prompt("Введіть число, для якого треба порахувати факторіал");

function factorial(number) {
  return (number != 1) ? number * factorial(number - 1) : 1;
}

console.log("Факторіал числа " + number + " = " + factorial(number));

