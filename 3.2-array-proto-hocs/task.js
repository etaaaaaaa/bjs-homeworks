'use strict';

function sleep(milliseconds) {
    let e = new Date().getTime() + milliseconds;
    while (new Date().getTime() <= e) {}
}

function sum(...args) {
    // Замедление на половину секунды.
    sleep(100); // Можно использовать другое значение замедления.

    // console.log(args.reduce((sum,arg) => {return sum += +arg;}, 0));
    // sumsArgs.push(args);

    return args.reduce((sum, arg) => {
        return sum += +arg;
    }, 0);

}

function compareArrays( arr1, arr2 ) {
    return arr1.every((val, index) => {return val === arr2[index]}) &&
        arr1.length === arr2.length;
}

//Здесь я разложила сложное выражение в return
// let array1 = [1,2,3,4];
// // let array2 = [2,3,4,5];
// let array2 = [1,1,3,4];
// function compareArrays (ar1, ar2) {
//     debugger;
//     function ifEqual(value, index) {
//         if (value === ar2[index]){ //как это работает?
//             return true;
//         }
//     }
//     console.log(ar1.every(ifEqual));
//     return (ar1.every(ifEqual));
// }
// a(array1,array2);

//Проверка
// compareArrays([8, 9], [6]); // false, разные значения
// compareArrays([8, 9, 5, 4], [8, 9, 5, 4, 8, 3, 5]); // false, разные значения
// compareArrays([9, 2, 4, 8, 2], [9, 2, 4]); // false, разные значения
// compareArrays([1, 2, 3], [2, 3, 1]); // false, разные индексы, хотя и одинаковые значения
// compareArrays([8, 1, 2], [8, 1, 2]); // true

function memorize(fn, limit) {

    let memory = []; //Объявите внутри memorize массив memory,
                     //который будет хранить историю вызовов
                     //возвращаемой memorize функции

    return function (...args) {
        //не понимаю к какой функции относится args
        let search = memory.find(element => compareArrays(element.arguments, args));

        if (search) {
            return search.result;
        };

        let result = fn(...args);

        memory.push({
            arguments: args,
            result: result
        });
        // console.log(args);
        // console.log(result);

        if(memory.length > limit) {
            memory.shift();
        }
        // console.log(memory);
        return result;
    }
}

// const mSum = memorize(sum, 5); // 5 результатов может хранится в памяти
// console.log(sum(3, 4)); // 7
// console.log(mSum(3, 4)); // 7
//
// const mSum = memorize(sum, 2);
// mSum(3, 4); // 7
// mSum(1, 3); // 4
//
// const array = [[1, 2, 3, 8], [1, 2, 9], [1, 2, 3, 8], [1, 2, 9], [9, 5, 2, 4]];

function testCase(testFunction, name) {
    console.time(name);

    for (let i = 0; i < 10; i ++) {
        array.forEach(function (arrg) {
            testFunction(...arrg);
        })
    };
    console.timeEnd(name);
}

// testCase(mSum, 'withMemory');
// testCase(sum, 'withoutMemory');