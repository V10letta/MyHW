/* <div>
  <span>Enter a data please:</span><br/>
  <input type='text' id='name'>
  <input type='text' id='surname'>
  </div>
  <div>
  <button id='ok'>OK</button>
  <button id='cancel'>Cancel</button>
</div>

Сделайте декларативную JSON-структуру для тэгов выше, в которой:

каждый тэг будет объектом
имя тэга будет полем tagName
вложенные тэги будут в поле subTags
текст в тэге будет в поле text
набор аттрибутов тэга будет в поле attrs */

var div = {

    tagName: 'div',
    subTags: [
        {

            tagName: 'span',
            text: 'Enter a data please:',

        },

        {

            tagName: 'input',
            attrs: {
                type: 'text',
                id: 'name',
            },
            attrs: [
                { type: 'text' },
                { id: 'name' },
            ],
        },
        {
            tagName: 'input',
            attrs: {
                type: 'text',
                id: 'subname',
            },

        }

    ]

}

var div2 = {
    tagName: 'div',
    subTags: [

        {
            tagName: 'buttom',
            text: 'OK',
            attrs: {
                id: 'ok',
            },

            tagName: 'buttom',
            text: 'Cancel',
            attrs: {
                id: 'cancel',
            },
        }

    ]

}

// Array(100).fill().forEach

//////Сделайте цикл с confirm, который продолжается по Отмена и заканчивается по ОК.////

do {
    var ask = confirm('Do you love JS?')
}
while (ask === false);

var ask = false;
while (ask === false) {
    ask = confirm('Do you love JS?')
}

////Создайте пустой массив и добавляйте в него элементы, пока пользователь не нажмет Отмена в очередном prompt. Используйте push для удобства: push///

var arr = [];

do {
    var plus = prompt('Введите новый эллемент', '');
    arr.push(plus);
}

while (plus !== null);

console.log(arr);


///Создайте бесконечный цикл, который прерывается с помощью конструкции break///

for (var i = 0; true; i++) {

    if (Math.random() > 0.9) {
        break;
    }
}

console.log(i);

////Подсчитать сумму арифметической прогрессии от 1 до N c шагом 3 (1,4,7....) используя цикл for ///

// var n = prompt('');
var n = 100;
var sum = 0;

for (var progress = 1; progress < n; progress += 3) {

    sum += progress;

}
console.log(sum);

///

// четная и нечетная x + y;

////////////////////

for (var key in person) {
    console.log(key + ": " + person[key]);
}

// document.write 

for (var key in person) {
    console.log(`<tr><td> ${key} </td><td> ${person[key]} </td></tr>`);

}







/////////////////////Ассоциативные массивы//////////////////////////////////////////////////
///3 persons///
//different fields//

var a = {
    name: "Ivan",
    surname: "Ivanovv",
    age: 12
};

var b = {
    name: "Ivan",
    surname: "Ivanovv",
    fathername: "Nikolaevich"
};

var c = {
    name: "Ivan",
    surname: "Ivanovv",
    sex: "male"
};

///fields check///

if ("fathername" in b) {

    console.log(b["fathername"]);
}

if (typeof b["fathername"] !== "undefined") {

    console.log(b["fathername"]);
}

///array of persons///

var persons = [a, b, c, {
    name: "Ivan",
    surname: "Ivanovv",
    fathername: "Nikolaevich",
}];

///loop of persons///

persons.forEach(
    (element, i, arr) => {
        console.log(element);
        console.log(persons[i]);
    }
);

///loop of fields loop of persons///

persons.forEach(
    (person) => {
        for (var key in person) {
            if (key === "name" || key === "surname") {
                console.log(key + ": " + person[key]);
            }
        }
    }
);

/// loop of loop of keys ///

persons.forEach(
    (person) => {


        Object.keys(person).forEach(
            (key) => {
                if (["name", "surname"].includes(key)) {
                    console.log(key + ": " + person[key]);
                }


            }
        )


    }
);


/// loop of loop with optional fields ///

persons.forEach(
    (person) => {
        console.log("name" + ": " + person["name"])
        console.log("surname" + ": " + person["surname"])

        Object.keys(person).forEach(
            (key) => {
                if (!["name", "surname"].includes(key)) {
                    console.log(key + ": " + person[key]);
                }


            }
        )
    }
);

/// fullName ///

/// добавление полей в ассоциативный массив ///

// a.violetta = 'molodec';
// a['robert'] = 'cool';

// a.violetta;
// a['violetta'];

// a.robert;
// a['robert'];


persons.forEach(
    (person) => {

        Object.keys(person).forEach(
            (key) => {

                if (person.name && person.surname && person.fathername) {
                    person.fullname = `${person.name} ${person.surname} ${person.fathername}`;
                }


            }
        )
    }
);

/// Создайте JSON-строку из persons, Создайте ассоциативный массив с одной персоной из JSON-строки. Добавьте её в persons///

const json = JSON.stringify(persons);

const persons2 = JSON.parse(json);

//' Сделайте цикл, который выводит весь массив persons, в форме HTML-таблицы. Имя и Фамилия - колонки. ///

// https://plnkr.co/edit/PKbpGlcHooTJ6DFOW8wX?p=preview

var table = '';

for (var key in person) {
    table += `<tr><td> ${key} </td><td> ${person[key]} </td></tr>`;
}

document.getElementById("result").innerHTML = `<table id="border"> ${table} </table>`;
document.getElementById("border").style.border = "1px solid #000";

/// HTML th optional ///

// https://plnkr.co/edit/PKbpGlcHooTJ6DFOW8wX?p=preview

// объявляем входные данные
const a = {
    name: 'Ivan',
    surname: 'Ivanov',
    age: 12
};

const b = {
    name: 'Petr',
    surname: 'Petrov',
    fathername: 'Nikolaevich'
};

const c = {
    name: 'Sidor',
    surname: 'Sidorov',
    sex: 'male'
};

const persons = [a, b, c, {
    name: 'John',
    surname: 'Smith',
    sex: 'female',
}];

let table = '';
let keys = [];

// заполняем массив keys уникальными именами свойств
persons.forEach(
    (person) => {
        Object.keys(person).forEach(
            (key) => {
                if (!keys.includes(key)) {
                    keys.push(key);
                }
            }
        );
    }
);

// добавляем заголовки <th> (headers) к таблице
let headers = '';

keys.forEach(
    (key) => {
        headers += `<th>${key}</th>`;
    }
);

table += `<tr>${headers}</tr>`;

// добавляем строки <tr> (row) к таблице
persons.forEach(
    (person) => {
        let row = '';

        keys.forEach( // каждая строка состоит из столбцов <td> (ячеек)
            (key) => { // здесь в ячейку попадает person[key] или пустая строка
                row += `<td>${person[key] || '-'}</td>`;
            }
        );

        table += `<tr>${row}</tr>`;
    }
);

// оборачиваем результат в <table> и помещаем его в div result
document.getElementById('result').innerHTML = `<table style="border: 1px solid #000">${table}</table>`;










//// Домашнее задание. Функции ///

// cube 
// Напишите функцию cube, которая возвращает число в третьей степени


function cube(base, exponent) {
    return Math.pow(base, exponent);

}

console.log(cube(1, 3)) // возвращает 1
console.log(cube(2, 3))  // возвращает 8
console.log(cube(3, 3)) // возвращает 27
///////////////////////////////////////////

function cube(base) {
    return Math.pow(base, 3);

}

console.log(cube(1)) // возвращает 1
console.log(cube(2))  // возвращает 8
console.log(cube(3)) // возвращает 27


// avg2
// Напишите функцию avg2, которая рассчитывает среднюю для двух чисел


function avg2(a, b) {
    return (a + b) / 2;
}
///////////////////////////////////
var avg2 = (a, b) => (a + b) / 2;

console.log(avg2(1, 2)) // возвращает 1.5
console.log(avg2(10, 5)) // возвращает 7.5

/// sum3
// Напишите функцию sum3 для суммирования 3 чисел, sum3 от двух параметров тоже работает корректно

var sum3 = (a = 0, b = 0, c = 0) => a + b + c;

console.log(sum3(1, 2, 3)) // => 6
console.log(sum3(5, 10, 100500)) // => 100515
console.log(sum3(5, 10)) // => 15

///intRandom
// Напишите функцию intRandom, которая принимает два параметра: нижнюю и верхнюю границу, 
// и возвращает целое случайное число из этого диапазона включительно


// Math.floor(Math.random() * 10) + 1;  // returns a number between 1 and 10

var intRandom = (min, max = 0) => Math.floor(Math.random() * (max - min)) + min;


console.log(intRandom(2, 15)) // возвращает целое случайное число от 2 до 15 (включительно)
console.log(intRandom(-1, -1)) // вернет -1
console.log(intRandom(0, 1)) // вернет 0 или 1
console.log(intRandom(10)) // вернет 0 до 10 включительно

/// greetAll
// Сделайтей функцию, которая приветствует всех, кто передан в качестве параметров

var greetAll = (...args) => `Hello ${args.join(', ')}`;

console.log(greetAll("Superman")) // выводит alert "Hello Superman"
console.log(greetAll("Superman", "SpiderMan")) // выводит alert "Hello Superman, SpiderMan"
console.log(greetAll("Superman", "SpiderMan", "Captain Obvious")) // выводит alert "Hello Superman, SpiderMan, Captain Obvious"


/// вариант 2

var greetAll = function () {
    var arr = '';
    for (var i = 0; i < arguments.length; i++) {
        arr += arguments[i];
        // (i < arguments.length - 1) && (arr += ', ');
        if (i < arguments.length - 1) {
            arr += ', '
        }

    }
    return `Hello ${arr}`;
};
console.log(greetAll("Superman", "SpiderMan", "Captain Obvious"))

/// sum
// Напишите функцию sum, которая сумирует любое количество параметров



var sum = (...args) => {
    let i = 0;
    args.forEach(
        (num) => i += num
    );
    return i;
};

console.log(sum(1)) // => 1
console.log(sum(2)) // => 2
console.log(sum(10, 20, 40, 100)) // => 170


////

var sum = (...args) => args.reduce((summa, num) => summa += num, 0);

console.log(sum(1)) // => 1
console.log(sum(2)) // => 2
console.log(sum(10, 20, 40, 100)) // => 170

/// вар-т 2

var sum = function () {
    var arr = 0;

    for (var i = 0; i < arguments.length; i++) {

        arr += arguments[i]

    }

    return arr;
}

console.log(sum(1)) // => 1
console.log(sum(2)) // => 2
console.log(sum(10, 20, 40, 100)) // => 170


///avg
// Сделайте функцию avg, которая рассчитывает среднее значение любого количества параметров

var avg = (...args) => args.reduce((sum, current) => (sum + current), 0) / args.length;

console.log(avg(1)) // => 1
console.log(avg(2)) // => 2
console.log(avg(10, 20, 40, 100)) //  => 42.5

/// Union
// Всё предыдущие функции и примеры с ними объедините в функции, которые вызывайте в switch по имени задания:

switch (prompt('Название', '')) {

    case 'greetAll':
        var greetAll = (...args) => `Hello ${args.join(', ')}`;

        console.log(greetAll("Superman")) // выводит alert "Hello Superman"
        console.log(greetAll("Superman", "SpiderMan")) // выводит alert "Hello Superman, SpiderMan"
        console.log(greetAll("Superman", "SpiderMan", "Captain Obvious")) // выводит alert "Hello Superman, SpiderMan, Captain Obvious"

        break;

    case 'sum':
        var sum = (...args) => args.reduce((summa, num) => summa += num, 0);

        console.log(sum(1)) // => 1
        console.log(sum(2)) // => 2
        console.log(sum(10, 20, 40, 100)) // => 170

        break;

    case 'avg':
        var avg = (...args) => args.reduce((sum, current) => (sum + current), 0) / args.length;

        console.log(avg(1)) // => 1
        console.log(avg(2)) // => 2
        console.log(avg(10, 20, 40, 100)) //  => 42.5

        break;

    default:
        alert('Я таких значений не знаю');
}


////Union declarative
// Используйте ассоциативный массив вместо switch

var pr = prompt('Название', '');

var obj = {

    avg: () => {
        var avg = (...args) => args.reduce((sum, current) => (sum + current), 0) / args.length;

        console.log(avg(1)) // => 1
        console.log(avg(2)) // => 2
        console.log(avg(10, 20, 40, 100)) //  => 42.5
    },

    sum: () => {
        var sum = (...args) => args.reduce((summa, num) => summa += num, 0);

        console.log(sum(1)) // => 1
        console.log(sum(2)) // => 2
        console.log(sum(10, 20, 40, 100)) // => 170
    },

    greetAll: () => {
        var greetAll = (...args) => `Hello ${args.join(', ')}`;

        console.log(greetAll("Superman")) // выводит alert "Hello Superman"
        console.log(greetAll("Superman", "SpiderMan")) // выводит alert "Hello Superman, SpiderMan"
        console.log(greetAll("Superman", "SpiderMan", "Captain Obvious")) // выводит alert "Hello Superman, SpiderMan, Captain Obvious"
    }

}

if (obj[pr] === undefined) {
    console.log('Не найдено');
} else {
    obj[pr]()
}   
   
///Person category
//Добавьте в ассоциативный массив персоны метод (функцию) getAgeCategory, которая будет возвращать возрастную категорию персоны, анализируя её возраст. Можете использовать пример с if-else из второго занятия.


var person = {
    age: 50,

    getAgeCategory: function(){
        if (person['age'] < 18){
            alert("школьник");
        }
        else if (person['age'] > 18 && person['age'] < 30){
            alert("молодеж");
        }
        else if (person['age'] > 30 && person['age'] < 45){
            alert("зрелость");
        }
        else if (person['age'] > 45 && person['age'] < 60){
            alert("закат");
        }
        else if (person['age'] > 60){
            alert("как пенсия?");
        }
        else {
            alert("то ли киборг, то ли ошибка"); 
        }
    }
}

person.getAgeCategory();


///Синий пояс: inputPerson
// Сделайте функцию inputPerson, которая будет спрашивать у пользователя фамилию, имя, отчество, 
// и возвращать ассоциативный массив с новой персоной

var obj = {}

function push (new) {
    
}

push(ask)
var ask = prompt('Ваше имя','');

inputPerson() // => {"name": "то, что ввел пользователь", "surname": ..., }
var persons = [inputPerson(), inputPerson(), inputPerson()] // => вводим трех персон


/////// Напишите цикл, который предлагает prompt ввести число, большее 100. Если посетитель ввёл другое число – попросить ввести ещё раз, и так далее.////



while ( true ) {
    var num = prompt('ffff', '');
 
    if (num > 100 || num == null) {
     
     break;
    }
 }


/////// Проверка на аргумент-undefined

function f(x) {
    return (arguments.length >= 1) ? 1 : 0;
    // выведите 1, если первый аргумент есть, и 0 - если нет
  }
  
  f(undefined); // 1
  f(); // 0


/////// Сумма аргументов
// Напишите функцию sum(...), которая возвращает сумму всех своих аргументов:

  function sum (...args) {
    
    var s = 0;

    for(var i = 0; i < arguments.length; i++) {
        s += arguments[i];
    }

    return s;

}

sum() = 0
sum(1) = 1
sum(1, 2) = 3
sum(1, 2, 3) = 6
sum(1, 2, 3, 4) = 10


