// function pow(x, n) {
//   if (n != 1) { // пока n!=1 сводить вычисление pow(..n) к pow(..n-1)
//     return x * pow(x, n - 1);
//   } else {
//     return x;
//   }
// }
// <!-- 
// alert( pow(2, 3) ); // (*) -->

// sumTo(n) = n + sumTo(n-1) для n > 1.

//     function sumTo(n) {
//       if (n > 1) {
//         return (n + sumTo(n - 1));
//       } else {
//         return 1;
//       }
//     }

//     alert(sumTo(100));

//     function factorial(n) {
//       if(n > 1) {
//         return (n * factorial(n - 1));
//       } else {
//         return 1;
//       }
//     }
// console.log(factorial(5));









// function retmin (a,b) {
//   if (a > b) {
//     return b;
//   } else {
//     return a;
//   }
// }

// retmin (2,5);
// retmin (3,-1);
// retmin (1,1);

// caculate(3, 6);

// var chislo = prompt('Какое число возвести встепень?', '');
// var stepen = prompt('Какая степень?', '');

// function caculate(base, pow) {
//   var result = base;
//   for (let i = 1; i < pow; i++) {
//     result = result * base;
//   }

//   return result;
// }


// alert (caculate(chislo, stepen));


// function factorial(n) {
//     let result = 0;
//     for (let i = 1; i <= n; i++) {
//         result = result + i;
//     }

//     return result;
// }

// alert (factorial(100));

// function checkAge(age) {
// return (age > 18) ? true : confirm('Родители разрешили?');

//   if (age > 18) {
//     return true;
//   } else {
//     return confirm('Родители разрешили?');
//   }
// }









// var prim = 0;

// while (prim < 3) {
//   prim += 1;

//   var agata = 'Милая';
// }

// function lesson(...args) {
//   console.log(agata);

//   return `${agata} моя кошечка`;
// }
// var result = lesson('one', 'two', 'three', 'four');

// ucFirst(str) {

//       var i = str.charAt(0);

//       return i.toUpperCase();

//       }

//       ucFirst('Вася');

////////////////// Роберта задача 1 
//    function change(str) {
//      if (!str) return str;

//     return str.replace(/ /g, "-"); 
//    }

// alert(change('i learn js'));
//////////////////////////////////////


//   function change(str) {


//     while (str.search(/ /i) != -1) {
//       str.replace(" ", "-");
//     } 

//  }

// alert(change('i learn js'));
///////////////////////////
// <!-- 
//   function change(str) {

// while (/ /i.test(str)) {
//   str = str.replace(" ", "-");
// }

// }

// alert(change('i learn js'));

/////////////////////////////////


/////////////////////////////////////////////////////////////////////////////////////////





// let officalname = prompt('Каково «официальное» название JavaScript?','');

// if (officalname == 'ECMAScript') {
//     console.log('Верно!');
// } else {
//     console.log('Не знаете? «ECMAScript»!');
// }


// function sumTo(n) {
//     if (n > 1) {
//       return (n + sumTo(n - 1));
//     } else {
//       return 1;
//     }
//   }

//   alert(sumTo(100));

// function caculate(base, pow) {
// var result = base;
// for (let i = 1; i < pow; i++) {
// result = result * base;
// }

// return result;
// }


// alert (caculate(chislo, stepen));


// function factorial(n) {
//     let result = 0;
//     for (let i = 1; i <= n; i++) {
//         result = result + i;
//     }

//     return result;
// }

// alert (factorial(100));



// function fib(n) {
//     let result = 0;
//     for (let i = 1; i <= n; i++) {
//         resalt = (resalt - i)
//     }
// }



// function ucFirst(str) {

//     if (!str) return str;

//     return str[0].toUpperCase() + str.slice(1);
//   }

//   alert( ucFirst("вася") );

/////////////////////Задача Роб вар1////////////////////

// function change(str) {
//     if (!str) return str;

//     return str.replace(/ /g, "-");
// }

// console.log(change('i learn js'));
// //
// function change(str) {
//     return str ? str.replace(/ /g, "-") : str;
// }

// console.log(change('i learn js'));

/////////////////////Задача Роб вар2////////////////////

// function change(str) {
//     if (str) {
//         while (/ /i.test(str)) {
//             str = str.replace(" ", "-");
//         }
//     }
//     return str;
// }

// console.log(change('i learn js'));

////////////////////Обьекты/////////////////////////

// let user = {}
//     user.name = 'Вася';
//     user.surname = 'Петров';
//     user.name = 'Сергей';
//     delete user.name;

// let user = {
//     name: 'Вася',
//     surname: Петров';
//     user.name = 'Сергей';
//     delete user.name;
// }

//Создайте функцию isEmpty(obj), которая возвращает true, если в объекте нет свойств и false – если хоть одно свойство есть.

// function isEmpty(obj) {
//     for (var key in obj) {
//       return false;
//     }
//     return true;
//   }

//   var schedule = {};

//   alert( isEmpty(schedule) ); // true

//   schedule["8:30"] = "подъём";

//   alert( isEmpty(schedule) ); // false

// Напишите код, который выведет сумму всех зарплат.

// let salaries = {
//     "Вася": 100,
//     "Петя": 300,
//     "Даша": 250
//   };

// let counter = 0;

// for (let key in salaries) {
//     counter = counter + salaries[key];
// }
// console.log('сумма:' + counter );

// Пример итерации по свойствам:

//  var menu = {
//     width: 300,
//     height: 200,
//     title: "Menu"
//   };

//   for (var key in menu) {
//     // этот код будет вызван для каждого свойства объекта
//     // ..и выведет имя свойства и его значение

//     alert( "Ключ: " + key + " значение: " + menu[key] );
//   }

// напишите код, который выведет имя сотрудника, у которого самая большая зарплата.

// let salaries = {
//     "Вася": 100,
//     "Петя": 300,
//     "Даша": 250
//   };

// let maxN = 0;
// let max = "";

// for (let key in salaries) {
//   if (maxN < salaries[key]) {
//      maxN = salaries[key];
//      max = key;
//   }
// }

// console.log ( max || "нет сотрудников");

// Создайте функцию multiplyNumeric, которая получает объект и умножает все численные свойства на 2

// var menu = {
//     width: 200,
//     height: 300,
//     title: "My menu"
//   };

//   function isNumeric(n) {
//     return !isNaN(parseFloat(n)) && isFinite(n)
//   }

// function multiplyNumeric(obj) {
//     for (let key in menu) {
//         if (isNumeric(obj[key])) {
//             obj[key] = obj[key] * 2
//         }
//     }
// }

//   multiplyNumeric(menu);

//   console.log("menu width=" + menu.width + " height=" + menu.height + " title=" + menu.title);


/////////////////////////асинхронное/////////////////////////////////

// const func = function (callback) {
//     let i = 0;
//     i++;

//     const interval = setInterval(callback, 1000);
//     const timeout = setTimeout(function () {
//         clearInterval(interval);
//     }, 3000);
//     console.log('hello rob!');
//     clearTimeout(timeout);
// }

// const func = function (cb) {
//     const timeout = Math.random() * 2000;

//     setTimeout(cb, timeout);
// }

// let i = 0;

// const callback = function () {
//     i = i + 1;
//     console.log('hello vio!');
// };


// func(callback);
// func(callback);

// const iteration = function () {
//     const timeout = setTimeout(iteration, 50);

//     if (i == 2) {
//         console.log('Hello Rob');
//         clearTimeout(timeout);
//     }

// };

// iteration();

////////////////////////////////////

// const func = function (cb) {
//     const timeout = Math.random() * 2000;

//     setTimeout(cb, timeout);
// }


// const callback = function () {
//        console.log('hello vio!');
// };



// func(callback);
// func(callback);

// ///////////////// финкция для получения первых эллементов в массиве ////////////

// function firstelem(arr, num) {
//     if (num > arr.length) {
//         return console.log('Ваше число превышает колличество элементов в массиве');
//     }

//     var arr2 = arr.slice(0, num);
//     console.log(arr2);

// }

// let arr = ['Роберт', ',', 'хватит', 'курить', 'свой', 'сраный', 'weed', '!']

// firstelem(arr, 6);

///////////////////////////вариант при помощи цикла/////////////////////////////////////////

// function firstelem(arr, num) {
//     if (num > arr.length) {
//         return console.log('Ваше число превышает колличество элементов в массиве');
//     }

//     let arr2 = [];

//     for (let i = (arr.length - 1), j = num; j > 0; i--) {
//         j--;
//         // arr2[i] = arr[i];
//         // arr2.push(arr[i]);
//         // arr2.push(arr.shift());

//         // arr2[num] = arr[i];
//         // num--;

//         arr2[i] = arr[i];



//         // arr2.push(arr[i]);
//         // arr2.push(arr.pop());
//     }

//     console.log(arr2);
// }

// let arr = ['Роберт', ',', 'хватит ', 'курить ', 'свой ', 'сраный ', 'weed ', '!']

// firstelem(arr, 6);

////////////////////////Получить последний элемент массива///////////////////////////////////

// let goods = ['Роберт', ',', 'хватит ', 'курить ', 'свой ', 'сраный ', 'weed ', '!']

// console.log( goods[goods.length - 1]);

/////////////////////////////////////////////////////////////////////////////////////




// <!DOCTYPE html>
// <html>
//     <head>
//         <meta charset="utf-8">
//         <title>Подключение скриптов</title>
//     </head>
//     <body>
//         <h1>Подключение скриптов</h1>
//         <p id="blinking">Подключение скриптов можно выполнять разными способами. Один из способов заключается в описании скриптов прямо внутри HTML-страницы.</p>
//         <script>
//             var p = document.getElementById("blinking");
//             setInterval(function() {
//                 if (p.style.fontSize != "10px") {
//                     p.style.fontSize = "10px";
//                 } else {
//                     p.style.fontSize = "20px";
//                 }
//             }, 2000);
//         </script>-->
//     </body>
// </html>
//////////////////////СПРОСИТЬ У РОБА////////////////////////Спросить у Роба ***

// function compareNumeric(a, b) {
//     if (a > b) return 1;
//     if (a < b) return -1;
//   }
/////////////////////////////////////////////////////

//   function compareNumeric(a, b) {
//     return a - b;
//   }

//  const arr = [3, 8, 7, 6, 5, -4, 3, 2];

//   arr.sort(compareNumeric);

//   console.log(arr);

/////////////////Добавить класс в строку//////////////////////////



// function addClass(obj, cls) {
//     var classes = obj.className ? obj.className.split(' ') : [];

//     for (var i = 0; i < classes.length; i++) {
//       if (classes[i] == cls) return; // класс уже есть
//     }

//     classes.push(cls); // добавить

//     obj.className = classes.join(' '); // и обновить свойство
//   }

// var obj = {
//     className: 'open menu'
//   }

// addClass(obj, 'new'); // obj.className='open menu new'
// addClass(obj, 'open'); // без изменений (класс уже существует)
// addClass(obj, 'me'); // obj.className='open menu new me'

// console.log( obj.className ); // "open menu new me"



// var arr = ["Яблоко", "Апельсин", "Груша", "Лимон"];

// var rand = Math.floor(Math.random() * arr.length);

// console.log(arr[rand]);












// var styles = ['джаз','блюз'];

// styles.push('рокенрол');

// console.log(styles);

// styles[styles.length - 2] = 'классика';
// console.log(styles);

// console.log(styles.shift());
// console.log(styles);

// styles.unshift('реп','регби');
// console.log(styles);



/////////////////////////////////////

// var array1 = ['a', 'b', 'c'];

// array1.forEach(function(element) {
//   console.log(element);
// });

// expected output: "a"
// expected output: "b"
// expected output: "c"


//////Создайте калькулятор для введённых значений/////// Спросить у Роба ***

// let arr = [];

// while (true) {
//     const allname = prompt('Введите число',0);
//     if (allname === "" || allname === null || isNaN(allname)) break;

//     arr.push(+allname); // вот тут
// }

// let sum = 0;
// for(var i = 0; i < arr.length; i++){
//     sum += arr[i];
// }

// alert(sum);

//////////////////////Поиск в массиве/////////////////////

// arr = ["test", 2, 1.5, false];

// function find(arr, value) {
//     for(var i = 0; i < arr.length; i++) {
//        if (arr[i] === value) return i;
//     }
//     return -1;
// }

// console.log(find(arr, "test")); // 0
// console.log(find(arr, 2));
// console.log(find(arr, 1.5));
// console.log(find(arr, 0));

////////////////////////Фильтр диапазона////////////////////////////////

// function filterRange(arr, a, b){
//     var arr2 = [];

//    for (var i = 0; i < arr.length; i++) {
//     if (arr[i] >= a && arr[i] <= b) {
//         arr2.push(arr[i]); 
//     }

//    }
//    return arr2;

// }
// var arr = [5, 4, 3, 8, 0];
// var filtered = filterRange(arr, 3, 5);
// console.log(filtered);

///////////////////////////////////////////////



// var credentials = {
//     login: 'admin',
//     password: 'qwerty',
// };

// var login = prompt('Ваш логин?','');
// var password = prompt('Ваш пароль?','');



// if (credentials.login === login && credentials.password === password) {
//     console.log('Вы авторизированы');
// } else {
//     console.log('Введены неверные данные')
// }

////////////////////Number: age////////////////////////

// var age = prompt('Сколько вам лет?','');

// console.log('Вы родились в ' + (2018 - age) + ' году');

////

// var a = prompt('Делитель','');
// var b = prompt('Частное','');
// console.log(Math.floor(a / b));

////

// var arr = prompt('Your massage');
// arr.indexOf("a");

///

// var floors = 9;
// var porch = 6;
// var flats_flor = 4;
// var flat = 100;
// var flat_in_porch = floors * flats_flor;
// var all = floors * flat_in_porch;


// var i = 0;
// for (var a = 0; i < flat; a++) {
//     var i = i + flat_in_porch
// };

// console.log(a);

// var l = i - flat_in_porch;

// var r = 0;
// for (var e = 0; r <= flat; e++){
//     var r = l + 4
// }

// console.log(e);



// function getFlat(porch, flat) {
//     return porch.find(function (el) {
//         return el === flat;
//     }) !== undefined;
// }

// const obj = {
//     malishka1: [1,2,3],
//     malishka2: [1,2,3],
//     malishka3: [1,2,3],
// }

// Object.keys(obj).forEach(function(element) {
//   if (getFlat(obj[element], 2)) {
  
//  }
// });

///////////////////////


    // function getFlat1(porch, flat) {
    //     return porch.includes(flat);
    // }

    // function getFlat(porch, flat) {
    //     return porch.find(function (element) {
    //         return element === flat;
    //     }) !== undefined;
    // }
    
    // const obj = {
    //     malishka1: [1,6,3],
    //     malishka2: [1,2,3],
    //     malishka33: [1,2,3],
    //     malishka3: [1,4,3],
    // }
    
    // var finish;
    // Object.keys(obj).forEach(function(key) {
    //     // var i = getFlat(obj[key], 2) ? 'нашли' : 'не нашли';

    //     if (getFlat1(obj[key], 2)) {
    //         finish = key;
    //     }
    //   });

    // console.log(finish)

    


      
// 100/40 = 2 +1 подьезд
// 20/4= 5 этаж

// var floors = 9;
// var porch = 3;
// var flats_flor = 4;
// var flat = 107;
// var flat_in_porch = floors * flats_flor; // 36
// var all = floors * porch * flats_flor; // 108

// var find1 = Math.floor(flat / flat_in_porch + 1);
// console.log('Ваша квартира в ' + find1 + ' подьезде')
// var florsMyFlat = Math.floor(flat % flat_in_porch / flats_flor + 1)

// console.log('на ' + florsMyFlat + ' этаже')


////////////////////////////////////////////////////////

let lesson = 'JavaScript';
var les = 'courses';
var result = lesson + ' ' + les;
var res2 = `${lesson} ${les}`;
console.log(result);
console.log(res2);

var s = 0;
s += 3;
var z = x = s; 
console.log(s);

z = String(z);
z = Number(z);
z = Boolean(z);
console.log(typeof(z));


