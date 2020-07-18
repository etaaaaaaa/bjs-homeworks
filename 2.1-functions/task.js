"use strict";

//Task 1
function getSolutions( a,b,c ) {
    let D = Math.pow(b, 2) - 4 * a * c;

    if (D < 0) {
        return {
            D,
            roots: []
        }
    } else if (D == 0) {
        let x1 = -b / (2 * a);
        return {
            D,
            roots: [x1]
        }
    } else {
        let x1 = (-b  + Math.sqrt(D)) / (2 * a);
        let x2 = (-b  - Math.sqrt(D)) / (2 * a);
        return {
            D,
            roots: [x1, x2]
        }
    }
}

function showSolutionMessage( a,b,c ) {
    let result = getSolutions( a,b,c );
    console.log(`Вычисляем корни квадратного уровнения ${a}x² + ${b}x + c`);
    console.log(`Значение дискриминанта: ${result.D}`);
    if (result.D < 0) {
        console.log('Уравнение не имеет вещественных корней');
    } else if (result.D === 0) {
        console.log(`Уравнение имеет один корень X₁ = ${result.roots}`);
    } else {
        console.log(`Уравнение имеет два корня. X₁ = ${result.roots[0]}, X₂ = ${result.roots[1]}`);
    }
}

showSolutionMessage(2,4,2)

//Task 2
let grades = {
    algebra: [2,4,5,2,3,4],
    geometry: [2,4,5],
    russian: [3,3,4,5],
    physics: [5,5],
    music: [2,2,6],
    english: [4,4,3],
    poetry: [5,3,4],
    chemistry: [2],
    french: [4,4]
}

function getAverageScore(data) {
debugger;
    function getAverageMark(marks){
        let sum = 0;
        let avg = 0;
        for (let i = 0; i < marks.length; i++) {
            sum += marks[i];
            avg = sum / marks.length;
        }
        return avg;
    }

    for (let subject in data) {
        data[subject] = getAverageMark(data[subject]);
    }

    data['average'] = getAverageMark(Object.values(data));
    console.log(data);
    return data;
}

getAverageScore(grades);



//Task 3

let tryout = {
    aaa: 1,
    bbb: 0
}
let decoded = {}

function getPersonData( secretData ) {
debugger;
    function getDecodedValue( secret ) {
        return  (secret == 0 ? 'Rodrigo' : 'Emilio');
    }
    decoded['lastName'] = getDecodedValue(Object.values(secretData)[0]);
    decoded['secondName'] = getDecodedValue(Object.values(secretData)[1]);
    return decoded;
}
getPersonData(tryout);
console.log(decoded);