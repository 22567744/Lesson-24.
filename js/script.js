// Строгий режим
"use strict"

// Масиви
/*
let someArray = [10, "Жека", true];
console.log(typeof someArray);
console.log(someArray);
console.log(someArray.length);
*/
/*
let usersNames = ["Вася", "Петро", "Ілдика"];
console.log(usersNames);
*/
/*
let usersNames = ["Вася", "Петро", "Ілдика"];
*/
/*
console.log(usersNames);
console.log(usersNames[1]);
*/
/*
for (let i = 0; i < usersNames.length; ++i) {
	console.log(usersNames[i]);
}
*/

// Метод перебору масиву
/*
usersNames.forEach(userName => {
	console.log(userName);
});
*/
/*
// З використанням індексу
usersNames.forEach((userName, index) => {
	console.log(index);
	console.log(userName);
});
*/

// Додати елемент в масив
// push додає елемент  кінець масиву
/*
let usersNames = ["Вася", "Петро", "Ілдика"];
console.log(usersNames);
usersNames.push("Жека");
console.log(usersNames);
*/

// Чи є елемент в масиві (пошук елемента)
/*
let usersNames = ["Вася", "Петро", "Ілдика"];
console.log(usersNames);
console.log(usersNames.includes("Петро"));

if (!usersNames.includes(10)) {
	usersNames.push(10);
	console.log(usersNames);
}
*/

// Чи це масив. Array.isArray(тут пишемо змінну)
/*
let usersNames = ["Вася", "Петро", "Ілдика"];
console.log(Array.isArray(usersNames));
*/

// Сортування чисел
/*
let arrTwo = [8, 22, 1];
console.log(arrTwo.sort());

function compareNumeric(a, b) {
	//console.log(`Порівнюємо ${a} і ${b}`);
	//if (a > b) return 1;
	//if (a == b) return 0;
	//if (a < b) return -1;
	return a - b;
}
console.log(arrTwo.sort(compareNumeric));
*/

// З масива у рядок
/*
let usersNames = ["Вася", "Петро", "Ілдика"];
let usersNamesStr = usersNames.join(' ');
console.log(usersNamesStr);
*/

// Функції
/*
Використовується для запуску
коду який повторюється,
та для використання методу функціонального
програмування (кожну дію варто помістити в окрему функцію)
*/


// Об'ява функції
// Синтаксис
/*
function ім'я(параметри){
	// тіло функції (код функції)
}
*/
/*
Наприклад, функції, починаючі с
"show..." зазвичай що-то показують,
"get..." – повертають значення,
"calc..." – що-то вичисляють,
"create..." – що-то створюють,
"check..." – що-то перевіряють і повертають логічно
значення, і т.д.
*/
/*
// Приклади імен
showMessage
getOptions
calcSum
*/
/*
function showMessage() {
	console.log("Повідомлення");
}
*/
// Виклик (запуск) функції

/*
showMessage();

function showMessage() {
	console.log("Повідомлення");
}

showMessage();
showMessage();
showMessage();

// ... code ...
// ... code ...
// ... code ...
showMessage();

// ... code ...
// ... code ...
// ... code ...
showMessage();

*/

// Параметри функції
/*
const numOne = 10;
const numTwo = 20;

// Функція суми двох чисел
function calcSum(a, b) {
	showSum(a + b);
}
// Функція виводу в консоль
function showSum(sum) {
	console.log(sum);
}

calcSum(numOne, numTwo);
*/

// Значення параметру за замовченням
/*
function someFunc(text = "Жека") {
	console.log(text);
}
someFunc();
*/


// Поовернення результату
/*
const numOne = 10;
const numTwo = 20;

// Функція суми двох чисел
function calcSum(a, b) {
	return a + b;
}
// Функція виводу в консоль
function showSum(sum) {
	console.log(sum);
}
const calcSumResult = calcSum(numOne, numTwo);
showSum(calcSumResult);
*/

// Область видимості
// Привласнення функції змінній
/*
let someVar;
let someElseFunc;

function someFunc() {
	someVar = 10;
	// Функціональний вираз
	someElseFunc = function () {
		console.log("Some Text");
	}
}
someFunc();
someElseFunc();

console.log(someVar);
*/

// Стрілочні функції

// Функція в один рядок
/*
let showText = function (text) { console.log(text); }
let showTextArrow = (text) => console.log(text);

// Функція де більше рядків
let showTextArrowMore = (text) => {
	console.log(text);
	console.log(text);
	console.log(text);
}
showTextArrow('Привіт!')
*/

// =================== DOM ========================

// WINDOW

// Отримання ширини вікна браузера (в'юпорта)
/*
let windowWidth = window.innerWidth;
console.log(windowWidth);

// Отримання висоти вікна браузера (в'юпорта)
let windowHeight = window.innerHeight;
console.log(windowHeight);
*/

//BOM
//Navigator

// Дані про браузер
// console.log(navigator.userAgent);

// Який в нас браузер
/*
if (navigator.userAgent.includes("Chrome")) {
	console.log('Браузер Хром');
} else if (navigator.userAgent.includes("Firefox")) {
	console.log('Браузер Firefox');
}*/

// Платформа
// console.log(navigator.platform);

//Location
// Адресний рядок браузера
// console.log(location.href);

// Перенаправлення користувача
// location.href = "https://google.com";

// Alert
// alert('Повідомлення');

//Сonfirm
/*
let confirmAnswer = confirm("Запитання");
console.log(confirmAnswer);
*/
//Prompt
/*
let promptAnswer = prompt("Запитання");
console.log(promptAnswer);
*/

// Document Object Model
// Об'ектна модель документу

/*
Навігація по документу
*/
/*
// До тегу html
const htmlElement = document.documentElement;
// До тегу head
const headElement = document.head;
// До тегу body
const bodyElement = document.body;
*/
// Перший та останній дочірній елемент
/*
const bodyElement = document.body;
const firstChild = bodyElement.firstElementChild;
const lastChild = bodyElement.lastElementChild;
console.log(firstChild);
console.log(lastChild);
*/

// Усі дочірні елементи (Колекція)
//const bodyElement = document.body;

// Колекція дочірніх елементів
/*
const childNodes = bodyElement.children;
console.log(childNodes);
*/
// Перебір колекції
/*
for (let i = 0; i < childNodes.length; ++i) {
	console.log(childNodes[i]);
}
*/
// For ... of метод перебору для колекцій
/*
for (let childNode of childNodes) {
	console.log(childNode);
}
*/

// Навігація до батьківських та сусідніх елементів
/*
const bodyElement = document.body;
const previousSibling = bodyElement.previousElementSibling;
const nextSibling = bodyElement.nextElementSibling;
const parentElement = bodyElement.parentElement;

console.log(previousSibling);
console.log(nextSibling);
console.log(parentElement);
*/

// !!! Найчастіше використовується !!!
// Плшук та отримання довільного елементу

// Оримання першого знайденого об'єкту
/*
const someObject = document.querySelector('.list__item');
console.log(someObject);
*/

// Оримання список (статична колекція) знайдених об'єктів
/*
const someObjects = document.querySelectorAll('.list__item');
console.log(someObjects);

someObjects.forEach(someObject => {
	someObject.style.color = 'red';
});
*/

// Шакути можна і в будь-якому об'єкті
/*
const list = document.querySelector('.list');
const listItems = list.querySelectorAll('.list__item');
*/

// Closest
// Пошук батьківського об'єкту
// (Перевірка наявності батьківського об'єкту)
// ! Шукає не тільки батьківський об'єкт
// а й перевіряє чи є вказаний селектор у самого об'єкту
/*
const list = document.querySelector('.list');
const isPageParent = list.closest('.page');

if (isPageParent) {
	console.log('Так, є');
} else {
	console.log('Ні, немає');
}
*/

// Зміна документу
/*
const listItems = document.querySelectorAll('.list__item');

// innerHTML дає змогу отримати те що всередені об'єкту
// включно з тегами. Також дозволяє перезаписувати контент в середені об'єкту

// textContent дає змогу отримати текст всередені об'єкту. Також дозволяє перезаписувати текст в середені об'єкту

// Ці методи перезаписують усе що є в об'екті

listItems.forEach((listItem, index) => {
	listItem.innerHTML = `<span>Індекс: ${index}</span>`;
});
*/

// Створення об'єктів
/*
let newObject = document.createElement('div');
newObject.innerHTML = `<span class="big">Привіт!</span>`;
console.log(newObject);

const page = document.querySelector('.page');
*/
// Вставка створеного об'єкту
// Перед
// page.before(newObject);
// Після
// page.after(newObject);
// Всередену на початок
// page.prepend(newObject);
// Всередену в кінець
// page.append(newObject);

// insertAdjacentHTML/Text/Element

// const page = document.querySelector('.page');

/*
"beforebegin" – вставити html безпосередньо перед page,
"afterbegin" – вставити html на початок page,
"beforeend" – вставити html в кінець page,
"afterend" – вставити html безпосередньо після page.
*/

/*
// Вставка HTML коду
page.insertAdjacentHTML("beforeend", `
	<div class="block">
		<div class="block__item">
			Text
		</div>
	</div>
`);

const block = document.querySelector('.block');
console.log(block);
*/
/*
// Вставка елементу
const listItem = document.querySelector('.list__item');
page.insertAdjacentElement("beforeend", listItem);
*/


// Функція вивода сообщіння
function showMessage() {
	console.log('Сообщіння');
}


// Возврат результат

function calcSum(numOne, numTwo){

	let numSum = numOne + numTwo;

	// Возврат
	return numSum;

}

	let funcRezult =calcSum(8, 12);

	console.log('Сума: ${funcRezult}');



// Функціональне вираження

function getSum(){
	let sum = 8 + 12;
	console.log(sum);
};

let someVar = getSum;

someVar();
getSum();


// Функція стрілки

let getMessage = (text, name) => text +',' + name + '!';

console.log(getMessage('Привіт', 'Мітя'));


// Планіровані setTimeout u setInterval

function showMessage(text, name){
	console.log('${text}, ${name}!');
}

setTimeout(showMessage, 1000, 'Привіт', 'Мітя');


function showNumber(num){
	console.log(num);
	setTimeout(showNumber, 1000, ++num);
}
setTimeout(showNumber, 1000, 1);


// Задача №1
function showName(){
	console.log('Вася!');
}
setTimeout(showName, 0);
console.log('Коля');


// Задача №2
showMessage();
function showMessage() {
	console.log('Повідомлення');
}

// Задача №3
showMessage();
function  showMessage () {
	console.log('Message');
}


// Задача №4
'use strict'
if (2 > 1){
	function showMessage(){
		console.log('Сообщіння');
	}
}
showMessage();




//Создання массива

let arr = new Array();
let ara = [];


//Значення Висяча массива

let arrOne = [ 'Мітя', 'Кевін', 'Катя' ,];


//Висяча занята массива

let arrOnu = [
	     'Мітя',
        'Кевін',
		  'Катя',
		];

console.log(arrOnu[1]);
console.log(arrOnu[5]);


let arrTwo =[
	"Антон",
	{
		type: "JS",
		age: 20
	},
	true,
	function () {
		console.log('Фрілансер, по життю');
	}
];

console.log(arrTwo);
console.log(arrTwo[0]);
console.log(arrTwo[1].type);
console.log(arrTwo[2]);
arrTwo[3]();

//Многомерні массиви
let matrix = [
	[1, 2, 3],
	[4, 5, 6],
	[7, 8, 9],
];
console.log(matrix);
console.log(matrix[0][1]);

//Длина массива.Свойство length

let arrOnp = ['Мітя', 'Кевін', 'Катя',];
console.log(arrOnp);
console.log(arrOnp.length);

//Доступ к массиву

let arq = ['Мітя', 'Кевін', 'Катя',];
console.log(arq);

let arrNew = arq;

arrNew.length = 3;

console.log(arq);


// Метод push

let ars = ['Мітя', 'Кевін', 'Катя',];
ars.push('Ілліч');
console.log(ars);

ars.push('Вілсон', 'Мак');
console.log(ars);




let ari = ['Мітя', 'Кевін', 'Катя',];

//indexOf
console.log(ari.indexOf('Кевін'));
console.log(ari.indexOf('Мітя'));
console.log(ari.indexOf('Кевін', 2));

//includes
console.log(ari.indexOf('Кевін'));
console.log(ari.indexOf('Мітя'));
console.log(ari.indexOf('Кевін', 2));


// filter

let art = [
	{ name: 'Оля', age: 70},
	{ name: 'Юра', age: 18 },
	{ name: 'Вадим', age: 18 },
]
let result = art.filter(function(item, index, array){return item.age >= 18;});
console.log(result);


// Сортировка массивов
let arrTwl = [8, 23, 1];
console.log(arrTwl.sort());

function compareNumeric(x, y) {
	console.log('Сравнівані ${x} u ${y}');
	if (x > y) return 1;
	if (x == y) return 0;
	if (x < y) return -1;
}

console.log(arrTwl.sort(compareNumeric));


//Метод map
let arw = ['Мітя', 'Кевін', 'Катя',];

let resulp = arw.map(function(item, index, array){
   return item[0];
});

console.log(arw);
console.log(resulp);



// Задача №1.

let arg =['Ваня', 'Іштван', 'Оля',];
let newArr = arg;
newArr.push('Петя');
console.log(arg.length);

// Задача №2.

let users = ['Ваня', 'Іштван',];
console.log(users);

users.push('Оля');
console.log(users);

users.push('Петя');
console.log(users);

let remove = users.shift(0,1);
console.log(remove);
console.log(users);

users.unshift('Маша', 'Паша');
console.log(users);


// Задача №3.
let ark = ['Ваня', 'Іштван', 'Оля',];
console.log (ark);
let remoe = ark.splice(1,1);
console.log(remoe);


// Задача №4.
let str = 'Ваня, Іштван, Оля';
let array = str.split(',3');
console.log(array);

// Задача №5.

let ard = [9, 2, 8];
let reduceValue = ard.reduce(function(previousValue, item, index, array){
   console.log(previousValue);
});

// DOM

const htmlElement = document.documentElement;
const headElement = document.head;
const bodyElement = document.body;
console.log(htmlElement);
console.log(headElement);
console.log(bodyElement);


//



const firstChild = bodyElement.firstChild;
const lastChild = bodyElement.lastChild;

console.log(firstChild);
console.log(lastChild);


// childNodes


const childNodes = bodyElement.childNodes;
console.log(childNodes);

console.log(bodyElement.hasChildNodes());


// Перебор колекцій

for (let node of childNodes) {
	console.log(node);
}

//--
const bodyChildren = bodyElement.children;
console.log(bodyChildren);


// Задача №1 

let hi = document.querySelector('[data-say-hi]');
console.log(hi);


// Задача №2 

let list = document.querySelector('ul');
const listItem = list.lastElementChild;
console.log(list);
console.log(listItem);

// Задача №3 

let like = document.querySelectorAll('.like');
console.log(like);


// Задача №4 on Document object model
const litt = document.querySelectorAll('ul')[1];
litt.insertAdjacentHTML(
	'beforeend',
   '<li>Текст</li>'
);


// clientWidth  і clientHeight

const mainElement = document.documentElement;
const mainElementWidth = mainElement.clientWidth;
const mainElementHeight = mainElement.clientHeight;

console.log(mainElementWidth);
console.log(mainElementHeight);

//--

const windowWidth = window.innerWidth;
const windowHeight = window.innerHeight;


console.log(windowWidth);
console.log(windowHeight);


//--

const windowScrollTop = window.pageYOffset;
const windowScrollLeft = window.pageXOffset;

console.log(windowScrollTop);
console.log(windowScrollLeft);


// offsetWidth u offsetHeight

const elementOffsetWidth = window.offsetWidth;
const elementOffsetHeight = window.offsetHeight;

console.log(elementOffsetWidth);
console.log(elementOffsetHeight);


// clientTop u clientLeft

const elementClientTop = window.clientWidth;
const elementClientLeft = window.clientHeight;

console.log(elementClientTop);
console.log(elementClientLeft);

// clienWidth u clienHeight

const elementClienWidth = window.clientWidth;
const elementClienHeight = window.clientHeight;

console.log(elementClienWidth);
console.log(elementClienHeight);


//--

const elem = document.elementsFromPoint(100, 100);

console.log(elem);

// Задача №1

const documentWidth = document.documentElement.clientWidth;
const entireWidth = window.innerWidth;
console.log(entireWidth - documentWidth)

// Задача №2

function scrollPage() {
	window.scrollTo({
		top: 100,
		left: 0,
		behavior: "smooth"
   });
}

setTimeout(scrollPage, 1000);


// Задача №3

const lessonFirst = document.querySelector('.lesson_first');
const lessonSecond = document.querySelector('.lesson_second');
const lessonThird = document.querySelector('.lesson_third');

console.log(lessonFirst);
console.log(lessonSecond);
console.log(lessonThird);