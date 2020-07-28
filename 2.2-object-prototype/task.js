'use strict';

//TASK 1
 String.prototype.isPalindrome = function() {
     let a = this.toUpperCase().split(' ').join('');
     let b = a.split('').reverse().join('');
     if (a === b) {
         return true;
     }
     return false;
 }

 console.log('eyee'.isPalindrome());

//TASK 2
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

    let roundedAverage = Math.round(data.average);
    console.log(roundedAverage);
    return roundedAverage;
}

getAverageScore(grades);

//TASK 3
function checkBirthday(birthday) {
    // код для задачи №3 писать здесь
    // return verdict
}
