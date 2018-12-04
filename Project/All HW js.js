// получить первую и последнюю строки

let test = 'some test string';

console.log(test[0], test[test.length - 1]);  // s g


// первая и последняя в верхнем регистре

let test = 'some test string';

// console.log(test[0].toUpperCase(), test[test.length-1].toUpperCase()); // S G

let testNew = '';

for (var i = 0; i < test.length; i++) {


    if (test[i] === test[0] || test[i] === test[test.length - 1]) {
        testNew += test[i].toUpperCase();
    } else {
        testNew += test[i];
    }
}

console.log(testNew);


// найти положение слова "string"

let test = 'some test string';

console.log(test.indexOf('string')); // 10
console.log(test.match(/test/gmi));// ['test']
console.log(test.search(/test/gmi)); //5


// найти положение второго пробела

let test = 'some test string';

console.log(test.lastIndexOf(' ')); //9


// получить строку с 5го символа длинной 4 буквы

let test = 'some test string';

console.log(test.substr(5, 4)); // test


// получить строку с пятого по 9й символ

let test = 'some test string';

console.log(test.substring(5, 9)); // test




///  1

function multiply(...args) {
    return args.reduce(function (a, b) {
        return a * b;
    })
}

multiply(1, 2, 3); // 6

///  2

function factorial(n) {
    return (n != 1) ? n * factorial(n - 1) : 1;
}

console.log(factorial(5)); // 120


// 3

function reverseString(b) {
    let result = '';
    for (let i = b.length - 1; i >= 0; i -= 1){
        result += b[i];
    }
    return result;

}

reverseString('test');  //"tset"

// 4

function getStringFromText (str) {
    let result = '';
    for (let i = 0; i < str.length; i++){
        result += `${str.charCodeAt(i)} `;
    }
    return result;
}

console.log(getStringFromText('hello'));  // "104 101 108 108 111 "

// 5

function printChars (a) {
    console.log(a[0]);

    if (a.length > 1) {
        printChars(a.slice(1, a.length));
    }

}


printChars('test');


/// 6


const func1 = (arr = [], callback) => {
    let value = callback(arr);

    return `New value: ${value}`;
}



//// HW 4 
//// 1. массив с дубл эл

let arr = [1,2,3];

function doubleArray (a) {
    return a.concat(a);
}

doubleArray(arr);  // [1, 2, 3, 1, 2, 3]

// 2. получить последний эллемент масива

let arr = [1,2,3];

function getArr (a) {
    return a[a.length - 1];
}

getArr(arr); // 3

// 3. массив заполненный числами от 1 до N

let n = 10;

function getArray (n) {
    let result = [];
    for (let i = 1; n >= i; i++){
        result.push(i);
    }
    return result;
}

getArray(n); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// 1. функция которая принимает произвольное число масивов и удаляет первый эллемент, возвращает масив из оставшихся элементов

function letters( word) {

    let str = word.split("").sort().reverse().join("");
    
    return str;
}

letters('bcdaeflmjkhi'); //"mlkjihfedcba"

////// без функции

let str = 'bcdaeflmjkhi';

str = str.split("").sort().reverse().join(""); //"mlkjihfedcba"


// 2. отсортировать массив в обратном порядке

let arr = [2, 4, 7, 1, -2, 10, -9];

function compareNumeric(a, b) {
    if (a > b) return -1;
    if (a < b) return 1;
  }
  
arr.sort(compareNumeric);
  
console.log(arr); // [10, 7, 4, 2, 1, -2, -9]

// 3. функция возвращает новый массив состоящий из эллементов первой коллекции

function getNewArray (arr, a, b) {

    let arr2 = arr.slice(a, b + 1);
    return arr2;
}

getNewArray(['a', 'b', 'c', 'd', 'f'], 2, 4);  // ["c", "d", "f"]

// 4. удвоить все эллементы массива

let arr = ['one', 2, 'three', 4]

function doubleArray (a) {
    return a.concat(a);
}

doubleArray(arr); // ["one", 2, "three", 4, "one", 2, "three", 4]

// 5. удалить второй и третий эллемент

let arr = [1, 2, 3, 4, 5];

var removed = arr.splice(2, 2);

console.log(arr); // [1, 2, 5]

// 6. удалить второй и третий эллемент и на их место поставить другие

let arr = [1, 2, 3, 4, 5];

var removed = arr.splice(2, 2, 'three', 'four');

console.log(arr); // [1, 2, "three", "four", 5]

// 7.  в произвольный массив после третьего эллемента любое значение

function getArray (arr, ellement) {
    arr.splice(4, 0, ellement);
    return arr;
}

getArray([1, 2, 3, 4, 5, 6], 'JavaScript'); // [1, 2, 3, 4, "JavaScript", 5, 6]

// 8. отсортировать массив массивов по их длине

let arr = [[2, 4, 7, 1, -2, 10, -9], [3, 4, 5], [2, 5]];

function compareNumeric(a, b) {
  
  return a.length - b.length;

  }
  
arr.sort(compareNumeric); //  [[2, 5], [3, 4, 5], [2, 4, 7, 1, -2, 10, -9]]

// 9. создать копию произвольного массива

// 10. отсортировать по возрастающему колличеству ядер (cores)

let arrObj = [
    {cpu: 'intel', info: {cores: 2, cache: 3}},
    {cpu: 'intel', info: {cores: 4, cache: 4}},
    {cpu: 'intel', info: {cores: 1, cache: 1}},
    {cpu: 'intel', info: {cores: 3, cache: 2}},
    {cpu: 'intel', info: {cores: 4, cache: 2}},
]

arrObj.sort(function (a, b) {
    if (a.info.cores > b.info.cores) {
      return 1;
    }
    if (a.info.cores < b.info.cores) {
      return -1;
    }
 
    return 0;
  });

console.log(arrObj);  

// 11. Функция возвращает все продукты, цена которых нах-ся в указаном диапазоне,и сортирует от дешевым к дорогим

const products = [
    {title: 'prod1', price: 5.2},
    {title: 'prod1', price: 15},
    {title: 'prod1', price: 18.9},
    {title: 'prod1', price: 19},
    {title: 'prod1', price: 0.18},
    {title: 'prod1', price: 25},
    {title: 'prod1', price: 8},
    {title: 'prod1', price: 63},
   ];

function sortPrice (pro, min, max) {

    pro.sort(function (a, b) {
        if (a.price > b.price) {
          return 1;
        }
        if (a.price < b.price) {
          return -1;
        }
     
        return 0;
      });
     
    var positiveArr = pro.filter(function(number) {
        return number.price > min && number.price < max;
      });
    
    return positiveArr;
}

sortPrice(products, 15, 30) // [{title: "prod1", price: 18.9}, {title: "prod1", price: 19}, {title: "prod1", price: 25}]


// Дата и время
// Функция принимает год, а возвращает день первого января

function fhowDay (year) {

    const da = new Date(year, 0);
    const days = ['вс', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб'];
	return days[da.getDay()];

}

fhowDay(2000); // "сб"

// 

function fhowDay (year) {

    const da = new Date(year);
    const days = ['вс', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб'];
	return days[da.getDay()];

}

fhowDay("01.11.2005"); // "сб"

//

let a = new Date(2017,01,01);
console.log(a);
this90,console.log();






// Ключевое слова THIS
// 1. обьект который описывает ширину и высоты прямоугольника, может посчитать площадь фигуры

const rectangle = {
    width: 100,
    height: 55,
    getSquare: function () {
        return `Площадь фигуры ${this.width * this.height} px`;
    }
}

rectangle.getSquare(); // "Площадь фигуры 5500 px"

// 2. У обьекта есть цена товара и его скидка, два метода: цена, цена с учетом скидки

const price = {
    price: 10,
    discount:'15%',
    getPrice: function () {
        return this.price;
    },
    getPriceWithDiscount: function () {
        return this.price - parseInt(this.discount) / 100 * 10;
    },
}

price.getPrice(); // 10
price.getPriceWithDiscount(); // 8.5  Почему при когда вызываються сразу две функции работает только вторая? Если по отдельности все работает

// 3. 

const user = {
    name: 'Abraham',
    getUserName: function () {
        return this.name;
    }
}

getUserName(); // "Abraham"

// 4. метод возвращает новую высоту увеличенную на один

const obj = {
    height: 10,
    addHeight: function () {
        return this.height + 1;
    }
}

obj.addHeight(); // 11

// 5. 

const numerator = {
    value: 1,
    double: function () { this.value = this.value * 2; return numerator},
    plusOne: function () { this.value = this.value + 1; return numerator },
    minusOne: function () { this.value = this.value - 1; return numerator },
}

numerator.double().plusOne().plusOne().minusOne();
numerator.value; // 3

// 1. стайд 36-40 

function getList() {
    return this.list;
}

let users = {
    lenght: 4,
    list: ['Abraham', 'James', 'Stiw', 'Lis'],

}

getList(); // undefined //  финкции не доступны данные с users

users.getList = getList;
users.getlist; //  ["Abraham", "James", "Stiw", "Lis"]

getList.call(users); // ["Abraham", "James", "Stiw", "Lis"] 

// 2.

const products = {
    price: 5,
    quantili: 10,
    cost: function () { return this.price * this.quantili},
}

products.cost(); // 50

// 3.

const products = {
    price: 5,
    quantili: 10,
    cost: function () { return this.price * this.quantili},
}

const products2 = {
    price: 37,
    quantili: 8,
}

products.cost.call(products2); // 296

// 4. не изменяя функцию или обьект получить результат функции

let sizes = {
    width: 5,
    height: 10,
}

getSquare = function () {
    return this.width * this.height;
}

getSquare.call(sizes); // 50

// 5.  найти минимальный эллемент массива

let numbers = [4, 12, 3, -2, 10, 11];

let minNumb = Math.min(...numbers);

console.log(minNumb); // -2

// 6.

const element = {
    height:'15px',
    martinTop: '5px',
    martinBattom: '5px',
    getFullHeight: function () {
        return parseInt(this.height) + parseInt(this.martinBattom) + parseInt(this.martinTop);
    }
}

element.getFullHeight();  // 25

const block = {
    height:'5px',
    martinTop: '3px',
    martinBattom: '3px',
}

element.getFullHeight.call(block); // 11

// 7. 

let element = {
    height: 25,
    getHeight: function () {
        return this.height;
    }
};

let getElementHeight = element.getHeight;

getElementHeight = element.getHeight.bind(element);
getElementHeight(); // 25





// Замыкания
// 1.

var dollar, getDollar;

( function() {
    var dollar = 0;
    getDollar = function () {
        return dollar;
    }
}());

dollar = 30;
getDollar();  // dollar = 30 обращаеться к несуществующей переменной, a getDollar продолжает возвращать тот доллар который нах-ся внутри функции

// 2.

var greet = 'Hello';
(function() {
    var text = 'World';
    console.log(greet + test);
}());

console.log(greet + test); // helloWorld , из глобально контекста переменную обьявленную внутри функции нне будет видно. поэтому выполняеться правильно только консоль лог который нах-ся внутри функции

// 3

function foo (a) {
    let one = a;

    function bar (b) {
        let two = b;
        return one - two;  
    }

    return bar;
}

foo(10)(6); // 4

// 4

function multiplyMarker (a) {
      let one = a;
      return function (second) {
          let result = one * second;
      }

}

const multiply = multiplyMarker(2);

multiply(2);
multiply(4);


// функция которая умножает и умеет запоминать возвращаемый рез-т между вызовами

function multiplyMarker (a) {

    let cointer = a;

    return function (b){
            return cointer = cointer * b;
    }
}

const multiply = multiplyMarker(2);

multiply(2); // 4 (2*2)
multiply(1); // 4 (1*2)
multiply(3); // 12 (4*3)


// модули
const module = (function () {

    var string = '';

    function setString (value) {
        if (typeof(vallue) != 'string') {
            string = String(value);
        } else {
            string = value;
        }
        
    }

    function getString () {
        return string;
    }

    function lengthString () {
        return string.length;
    }

    function turnString () {
        return string = string.split("").reverse().join("");
    }

    return {
        setString: setString,
        getString: getString,
        lengthString: lengthString,
        turnString: turnString,
    }
})();

module.setString(12345);
module.lengthString(); // 5 
module.getString(); 
module.turnString(); // "54321"

// модуль "калькулятор"

const module = (function () {

    var number = 0;

    function setValue (value) {

            number = value;   
        
    }

    function addNum (num1) {
        return number += num1;
    }

    function multiplyNum (num2) {
        return number *= num2;
    }

    function result () {
//         return number.toFixed(2);
return Math.trunc(number * 100) / 100;
    }

    return {
        setValue: setValue,
        addNum: addNum,
        multiplyNum: multiplyNum,
        result: result,
    }
})();

module.setValue(10);
module.addNum(5);  
module.multiplyNum(2); 
module.result(); // 30




const module = (function () {
    
    var number = 0;

    function setValue (value) {

            number = value;
            return calk;   
        
    }

    function addNum (num1) {
        number += num1;
        return calk;
    }

    function multiplyNum (num2) {
        number *= num2;
        return calk;
    }

    function powNum (y) {
        number = Math.pow(number, y);
        return calk;
    }

    function result () {

        return Math.trunc(number * 100) / 100;
 
    }

    const calk =  {
        setValue: setValue,
        addNum: addNum,
        multiplyNum: multiplyNum,
        powNum: powNum,
        result: result,
    }

    return calk;
})();


module.setValue(10).powNum(2).result();


// HW 7
// Конструкторы
// 1

function Auto (type, age) {
    this.type = type,
    this.age = age, 
    this.saytype = function() {
        console.log(this.type);
    }
    this.sayage = function() {
    var d = new Date();
 d.setFullYear(d.getFullYear() - this.age);
 console.log(d.getFullYear());
        
    }
}

var lexus = new Auto ('Lexus', 2);
lexus.sayage(); // 2016
lexus.saytype(); // Lexus

// 2


function DoString(string) {
    let initialString = string;
    let decodedString = []; 

 
    for (var i = 0; i < initialString.length; i++) {
        decodedString.push(initialString.charCodeAt(i));
    }

    this.showInitialString = function () {
        return initialString;
    };

    this.turnString = function () {
        initialString = string.split("").reverse().join("");
        return initialString;
    }

    this.showDecodedString = function () { return decodedString.join('') };
    
    this.eraseString = function () {
        initialString = '';
        decodedString = '';
        return console.log('all strings are deleted'); 
    }
}

var doSomethingString = new DoString('Robert');

console.log(doSomethingString.showInitialString()); // "Robert"
console.log(doSomethingString.turnString()); // "treboR"
console.log(doSomethingString.showDecodedString()); // "1161141019811182"
doSomethingString.eraseString(); // 'all strings are deleted'

// 3

class MyString {

    constructor(value) {
        this.str = value;
    }

    get string () {
        // ...
        return this.str;
    }

    set string (value) {
        // ...
        this.str = value;
    }

    toString() {
        return this.str;
    }

    getStringLength() {
        return this.str.length;
    }

    valueOf() {
        return this.str.length;
    }
}

const str = new MyString('Vio');

// str.string // vio
// str.string = 'Rob';
str.toString();
str.getStringLength();
+str;

// ОПП
// 1

function Planet (name) {
    this.name = name;
    this.getName = function () {
        return 'Planet name is ' + this.name;
        }
}

function PlanetWithSatelite (name, saleliteName) {
    Planet.call(this, name);

    const fullResalt = this.getName;

    this.getName = function () {
        return fullResalt() + 'The salelite is ' + saleliteName;
    }
}

const earth = new PlanetWithSatelite('earth','moon');
earth.getName(); // "Planet name is The salelite is moon"

//2

function Building (name, stage) {
    this.name = name;
    this.stage = stage;

    this.getStage = function() {
        return this.stage;
    }

    this.setStage = function(newStage) {
        this.stage = newStage;
    }


}

function House (name, stage, flatsPerStage) {

    this.flatsPerStage = flatsPerStage;

    Building.call(this, name, stage);
    // Building.apply(this, arguments);

    const houseStages = this.getStage;

    this.getStage = function() {
        return { stages: houseStages(), allFlats: houseStages() * this.flatsPerStage};
    }


}


function Supermarket (name, stage, shopsPerStage) {

    this.shopsPerStage = shopsPerStage;

    Building.call(this, name, stage);
    // Building.apply(this, arguments);

    const houseStages = this.getStage;

    this.getStage = function() {
        return { stages: houseStages(), allFlats: houseStages() * this.shopsPerStage};
    }

}

const spm = new Supermarket('Daffi', 3, 7 );
const hrs = new House('family', 2, 3);


// 3. слайд. 41.  Задача на переопределение методоу у экземпляра

function Furniture (name, price) {
    this.name = name;
    this.price = price;
}

Furniture.prototype.showInfo = function () {
    return {name: this.name, price: this.price};
}

const homeFurnuture = new Furniture('divan', 45);
homeFurnuture.table = 'table';

homeFurnuture.showInfo = function () {
    return {name: this.name, price: this.price, table: this.table};
}

const officeFurniture = new Furniture('stol', 200);

officeFurniture.showInfo = function () {
    return {name: this.name, price: this.price, computer: 20};
}

// 4. слайд 42. Вывести информацию в виже обьектов

function User(name, date) {
    this.name = name;
    this.date = date;
}

User.prototype.showInfo = function () {
    console.log({
        name: this.name,
        date: this.date,
    });
};

function Admin(name, date, superAdmin) {
    Admin.prototype.showInfo = function () {
        User.prototype.showInfo.apply(this);
        console.log({ 
            superAdmin: superAdmin, 
        });
    };

    User.apply(this, arguments);
}

Admin.prototype = Object.create(User.prototype);
Admin.prototype.constructor = Admin;

const doit = new Admin('Gosha', '21.09.2018', false);
doit.showInfo();

function Gues (name, date, validDate) {
    Gues.prototype.showInfo = function () {
        User.prototype.showInfo.apply(this);
        console.log({
            valitDate: validDate,
        })
    };

    User.apply(this, arguments);
}

Gues.prototype = Object.create(User.prototype);
Gues.prototype.constructor = Gues;

const doit2 = new Gues('Vio', '09.08.2018', true)
doit2.showInfo();   // {name: "Gosha", date: "21.09.2018"}, {superAdmin: false}, {name: "Vio", date: "09.08.2018"}, {valitDate: true}

// Задания на прототипное наследование
// 1. Дан класс User. Создать наследника NewUser, у которого метод setNewName будет ко всему создавать новое свойство this.changed = “The field ‘name’ was changed!”.


function User(name, age) {
    this.name = name || 'Unknown';
    this.age = age || 0;
  } 
  
User.prototype.setNewName = function (name) {
    this.name = name;
};
  

function NewUser(name, age) {
    User.apply(this, arguments);
}

NewUser.prototype = Object.create(User.prototype);
NewUser.prototype.constructor = NewUser;

NewUser.prototype.setNewName = function (changed) {
 return this.changed = `The field ${this.name} was changed!`;
}

const newUser1 = new NewUser('retr', '21');
newUser1.setNewName(); // "The field Margaret was changed!"

// 2. Дан абстрактный класс Module. Создать наследника NewModule. Его setGlobalName должен делать всё то же самое, что и родительская функция, + устанавливать this.length = this.name.length.


function Module(name) {
    if (typeof name !== 'string') {
      throw 'Enter a name!';
    }
    
    this.getName = function () {
      return name;
    };
  }
  
Module.prototype.getPrettyName = function () {
    let name = this.getName();  
    name = name.replace(/\s+/, '_');  
    return 'The module name is ' + name[0].toUpperCase() + name.substr(1);
  };
  
Module.prototype.setGlobalName = function (prefix) {
    let name = this.getName();
    this.name = prefix ? prefix + '_' + name : name; };

    
function NewModule (name) {
    Module.apply(this, arguments);
}

NewModule.prototype = Object.create(Module.prototype);
NewModule.prototype.constructor = NewModule;

NewModule.prototype.setGlobalName = function () {
    Module.prototype.setGlobalName.apply(this, arguments);
    this.length = this.name.length;
  }
  

const newModule1 = new NewModule('Boris');
newModule1.setGlobalName('global'); // NewModule {getName: ƒ, name: "global_Boris", length: 12}
newModule1; // length: 5, name: "Boris"

// функциональное наследование  
// 1. Создайте наследника от General, у которого будет parent = false и появится новоё свойство child = true. Метод getInfo должен вернуть объект как из оригинальной функции + поле child ({test: .., parent: …, child: ...})


function General() {
    this.test = true;
    this.parent = true;
    this.getInfo = function () {
      return {test: this.test, parent: this.parent};
    }
  }

function ChildGeneral() {
    General.apply(this, arguments);

    this.parent = false; 
    this.child = true;
    let originalGeneral = this.getInfo.bind(this);

    this.getInfo = function () {
        const a = originalGeneral();
        a.child = this.child;
        return a;
    }
}

const newChildGeneral = new ChildGeneral();
newChildGeneral.getInfo(); // {test: true, parent: false, child: true}

// 2 
// Создайте класс Мальчик, который при инициализации принимает имя. 
// У этого класса есть свойство “хороший”=true.
// У класса так же есть метод “получить имя”, который должен вернуть строку вида:
// “Мальчика зовут ” + имя + “. Он ” + <свойство хороший> === true ? “хороший” : “плохой”.
// Далее создайте наследника от Мальчика - ПлохойМальчик. Установите свойство “хороший” равным false. Метод “получить имя” должен показывать алёрт со строкой из оригинального метода и добавочным текстом с новой строки “Не дружите с ним”.


function TheBoy (name) {
    this.name = name;
    this.good = true;
    this.getName = function() {
        return `Мальчика зовут ${this.name} , Он ${this.good === true ? "хороший" : "плохой"}`
    }
}

function BadBoy (name) {
    TheBoy.apply(this, arguments);

    this.good = false;

    let originalTheBoy = this.getName.bind(this);

    this.getName = function () {
        const a = originalTheBoy();
        return console.log(a + `\nНе дружите с ним`);
    }

}

const whoTheBoy = new BadBoy('Hyan');
whoTheBoy.getName(); // Мальчика зовут Hyan , Он плохой
                    //Не дружите с ним


// 3
// Создайте класс Fruit, который при инициализации принимает строковые аргументы “имя” и “цвет”. У класс есть один метод - “получить информацию”, который возвращает информацию о фрукте в виде строки “Фрукт” + имя + “цвет“ + цвет (“Фрукт - апельсин, цвет - оранжевый”).
// Создайте наследника от Fruit - SweetFruit. У него появится свойство sweetness=true.  
// Метод “получить информацию” должен вернуть строку “Фрукт - апельсин, цвет - оранжевый, сладость - true”. 
// Также добавить метод “установить сладость”, который позволит установить sweetness в любое значение (например, sweetness = “сладкий”). Метод “получить информацию” должен показывать актуальное значение sweetness (“Фрукт - апельсин, цвет - оранжевый, сладость - сладкий”)


function Fruit (name, color) {
    this.name = name;
    this.color = color;

    this.getInfo = function () {
        return `Фрукт: ${this.name}, цвет: ${this.color}, `;
    }
}

function SweetFruit (name, color) {
    Fruit.apply(this, arguments);

    this.sweetness = true;

    let origFruit = this.getInfo.bind(this);

    this.setSweetness = function (sweet) {
        this.sweetness = sweet;
    }

    this.getInfo = function () {
        const a = origFruit();

        return console.log(a + `сладость: ${this.sweetness}`);
    }


}

const showFruit = new SweetFruit('Banan', 'yellow');
showFruit.setSweetness('very sweet');
showFruit.getInfo(); // Фрукт: Banan, цвет: yellow, сладость: very sweet





////// ДЗ 9
// Обработка исключительных ситуаций

function PhotoGallery (name, images) {
    this._name = name || 'gallery'; 
    if (!images) {
        throw 'this error';
    } else {
        this._images = images;
    }
    
}

PhotoGallery.prototype.getImageByIndex = function (index) {
    if (this._image && this._image.length) {
        return this.images[index];
    }
};

PhotoGallery.prototype.getName = function () {
    return 'This is amazing ' + this._name;
};

const galery = new PhotoGallery ('slider', ['image1', 'image2', 'image3']);
galery.getName = function () {
    return 'this is amazing ' + this._name + ' with ' + this._images.length + ' images.'
};
galery.getName(); // "this is amazing slider with 3 images."

// таймеры
// 1

let str = 'test';
let strNew = '';
let strLength = str.length;
let a = 0;

function countDown() {
    console.clear();
    if(strLength--){
        
    if (a < str.length) {
        strNew += str[a];
        console.log(strNew);
    } else {
        console.log(strNew);
    }

    a++;

        setTimeout(countDown,500);
    }  else {
         console.log(strNew);
    }
}

countDown(); 
// t
// te
// tes
// test

// 2

function myFunc (text, sec) {
    let timerId = setTimeout(function() {console.log(text)}, sec)
    return timerId;
}

myFunc('Viola', 500);
// 31
// Viola

// 3

function Element(content) {
    this.content = content;
    this.elementType = 'html';
    this.getContent = function() {
        return this.content;
    }
    this.setContent = function(value) {
        this.content = value;
    }
}

function TextElement(content) {
    Element.apply(this, arguments);

    this.length = this.content.length;

    let origElement = this.setContent.bind(this);

    this.setContent = function(value) {
        origElement(value);
        this.length = value.length;
    console.log(this.content.length);
    }

}

const textFried = new TextElement('new_text');
textFried.length; // 8
textFried.setContent('new');
textFried.length; // 3


// регулярные выражения
// 1

let text = 'Годовой бюджет торганизации состовляет 500 тыс грн, что равняется 41.5 тысяч в месяц. За 12й месяц наблюдается прирост в 30 тыс грн.';

let a = text.replace(/\d+(\.\d+)?\sтыс/g, replacer);

function replacer (str) {
    return str.replace(/\d+(\.\d+)?/g, 'XXX');
}
console.log(a); // Годовой бюджет торганизации состовляет XXX тыс грн, 
// что равняется XXX тысяч в месяц. За 12й месяц наблюдается прирост в XXX тыс грн.


// 2

let text = 'Маша ела кашу, Саша любит Дашуню, это наши дети';

let a = text.match(/\S+аш\S+/g);
console.log(a); // ["Маша", "кашу,", "Саша", "Дашуню,", "наши"]





//

<html>
<head>
</head> 
<body>
  <div>
      <p> text </p>
      <p> other </p>
      <p> next </p>
      <p> last </p>
  </div>
  <div>div 1</div>
  <div>div 2</div>
</body>
</html>


    // 1. document.head
    // 2. document.body
    // 3. document.body.firstElementChild
    // 4. document.querySelector('div')
    // 5. let arr = document.querySelector('div');
    // for (let i = 1; i < arr.length-1; i++){
    //     console.log(arr[i]);
    // }
























// let str = 'test';
// let strNew = '';

// for (let a = 0; a < str.length; a++) {
    
//     strNew += str[a];

//     (function (strNew) {
//         setTimeout (function () {
//             console.log(strNew);
//         }, 200)
//     })(a);
    
     
// }

// let a = 1;


// for (; a < str.length; a++) {


//     (function (a) {
//         setTimeout (function () {
//             console.log(a);
//         })
//     })(a);
    
     
// }

// setTimeout(function () {console.log('500ms')},500);



// //
// let timer = setInterval( function() {
//     console.log(timer + 1);
//     console.clear();
//     if(text){
//         console.log(text);
//         text = text.substr(0, text.lenght - 1);

//     } else {
//         console.log('the end');
//         clearInterval(timer);
//     }
// }, 200)

// let text = 'strin';
// //

// let intex = 10;

// function countDown() {
//     console.clear();
//     if(intex--){
//         console.log(intex + ' ...');
//         setTimeout(countDown,500);
//     } else {
//         console.log('boom');
//     }
// }

// countDown();

// //

// // let intex = 10;
// let str = 'test';
// let strNew = '';
// let strLength = str.length;

// function countDown() {
//     console.clear();
//     if(strLength--){
//         for (let a = 0; a < str.length; a++) {
    
//             strNew += str[a];
//             console.log(strNew);  
             
//         }
//         setTimeout(countDown,500);
//     } else {
//         console.log('boom');
//     }
// }

// countDown();

// //
// let str = 'test';
// let strNew = '';

// for (let a = 0; a < str.length; a++) {
    
//     strNew += str[a];
//     console.log(strNew);  
     
// }

// // 

// let str = 'test';
// let strNew = '';
// let a = 0;
// function b (str) {
    

//     if (a < str.length) {
//         strNew += str[a];
//         console.log(strNew);
//     } else {
//         console.log(strNew);
//     }

//     a++;
// }
// b(str);
// b(str);
// b(str);
// b(str);

// // 
// let str = 'test';
// let strNew = '';
// let strLength = str.length;

// function countDown() {
//     console.clear();
//     if(strLength--){
        
//     let a = 0
//     if (a < str.length) {
//         strNew += str[a];
//         a++;
//         ;
//         console.log(strNew);
//     } else {
//         console.log(strNew);
//     }



//         setTimeout(countDown,500);
//     } else {
//         console.log('boom');
//     }
// }

// countDown();

































































































































































































































































//Числа задачи
// Получить число Пи, до двух знаков после запятой

var a = Math.PI;
console.log(a.toFixed(2)); // 3.14

// Минимальные и максимальные числа

console.log(Math.max(15, 11, 16, 12, 51, 12, 13, 51));  //51

console.log(Math.min(15, 11, 16, 12, 51, 12, 13, 51));  //11


// Работа с Math.random
//a) случайное число округлить до зяпятой

console.log(Math.random().toFixed(2));

// в) случайное число от 1 до х

let x = 6;

console.log(Math.floor(Math.random() * x) + 1);

// рез-т вычисления привести к нормальному виду

console.log(Math.round(0.6 + 0.7)); // 1

//  получить число из строки

console.log(parseInt('100$'));  // 100


// Обьект. Задачи

let obj = {
    product: 'iphone',
    price: 1000,
    currency: 'dillar',
    details: {
        model: '7+',
        color: 'red',
    }
}

// присваиваниею Задачи

a += 10;
b *= 18;
c -= 10;

x += a;
y *= z;
i *= 5 * y;


let x = 2;
x *= x // 4 переменная в квадрате

// условные операторы

let a = 'hidden';

if (a === 'hidden') {
    a = 'visible'

} else {
    a = 'hidden'

}

console.log(a);

//

a === 'hidden' ? a = 'visible' : a = 'hidden';

console.log(a); // visible

// Условие 2

let i = -8;

if (i === 0) {
    i = 1;
} else if (i < 0) {
    i = 'less then zero';
} else {
    i *= 10;
}


console.log(i);  // less then zero

// короткий способ

if (i === 0) {
    i = 1;

} else {
    i < 0 ? i = 'less then zero' : i *= 10;
}


console.log(i);  // less then zero


// Конструкция Switch...case

let x = 'none';

switch (x) {
    case 'block':
        console.log('block');
        break;

    case 'none':
        console.log('none');
        break;

    case 'inline':
        console.log('inline');
        break;

    default:
        console.log('other');
        break;
}













