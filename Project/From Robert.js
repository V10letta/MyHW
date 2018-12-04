// напиши ф-ю которая подсчитывает количество символов в строке
// принимает параметр строку и возвращает объект со статистикой
// func('dddsssszzl') // { d: 3, s: 4, z: 2, l: 1 }




let str = 'ddddeeeeeyyyyyddd';
let b = {};

let newArray = str.split('');

// (17) ["d", "d", "d", "d", "e", "e", "e", "e", "e", "y", "y", "y", "y", "y", "d", "d", "d"]

for (var a = 0; a < newArray.length; a++) {

    var e = newArray[a];

    if (e in b) {
        b[e] += 1;
    } else {
        b[e] = 1;
    }


}


console.log(b);


//

const stat = str => {
    const arr = str.split('');
    return arr.reduce((result, key) => {
        console.log(result);
        console.log(key);

        if (key in result) {
            result[key] += 1;
        } else {
            result[key] = 1;
        }

        return result;
    }, {})
}

const lettar = 'ddddsssstttt';
stat(lettar);


//

let arr = ['a', 'b', 'c'];

const result = arr.forEach(function (value, index, arr) {
    console.log(value.toUpperCase());

    console.log(arr[index].toUpperCase());


})

console.log(result); // undefined

//

let arr = ['a', 'b', 'c'];

const result = arr.map(function (value, index, arr) {
    return value.toUpperCase();
})

console.log(result); // ['A','B','C']

// 

let arr = ['a', 'b', 'c'];

const result = arr.some(function (value, index, arr) {
    return value === 'f';
})

console.log(result); // false

//

let arr = [1, 2, 3, 4, 5, 6];


const sum = arr.reduce(function (prev, curr) {
    return curr + prev;
}, 0);

console.log(sum);

//

const obj = {
    rob: 'мой любимый мальчик',
    vio: 'ТП',

}

const result = Object.keys(obj).map(function (value) {
    return obj[value];
})

console.log(result); // ["мой любимый мальчик", "ТП"]

//

function sortNumb(...args) {
    let newArr = args.sort(function compareNumeric(a, b) {
        return a - b;
    });

    return newArr[0];
}

sortNumb(2, 5, 8, 4, 1);

//

const sortNumb = (...args) => args.sort((a, b) => a - b)[0];
sortNumb(2, 5, 8, 4, 1, 11);






// 

console.log(new Array(4).join("ля"))

Sting.prototype.repeatIt = function (n) {

    let newS = '';
    for (var i = 0; i <= n; i++) {
        newS += this;

    }
    return newS;
}

console.log('hi'.repeatIt(3));


// 

let arr = ['a', 'b', 'c'];
let newArr = [];
for (var i = 0; i < arr.length; i++) {
    newArr += arr[i].toUpperCase()
}

console.log(newArr); // ['A','B','C']

//  написать свой map

Array.prototype.myMap = function (cb) {
    let arrNew = [];

    for (var i = 0; i < this.length; i++) {
        arrNew.push(cb(this[i]));
    }

    return arrNew;
}


let a = [3, 5, 1].myMap(function (el) {
    return el + 1;
});

console.log(a);  // [4, 6, 2]




























