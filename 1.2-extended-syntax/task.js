"use strict";

function getResult(a,b,c){
    let d = Math.pow(b, 2) - 4 * a * c;
    let x = [];

    if (d < 0) {
        x = [''];
    } else if (d = 0) {
        x.push(-b / 2 * a);
    } else {
        x.push((-b  + Math.sqrt(d)) / (2 * a));
        x.push((-b  - Math.sqrt(d)) / (2 * a));
    }
    return x;
}

function getAverageMark(marks){

    if (marks.length === 0) {
        return 0;
    } else {
        if (marks.length > 5) {
            console.log('Error: more than 5 marks!');
            marks.splice(5);
        }
            averageMark = (marks.reduce((a,b) => a+b, 0)) / marks.length;
            return averageMark;
        }

}

function askDrink(name,dateOfBirthday){
    let date = new Date().getFullYear;
    let age = date - dateOfBirthday;

    if (age < 18) {
        console.log(`Сожалею, ${name}, но я не могу вам продать алкоголь. Зато могу предложить вам замечательный клюквенный компот!`)
    } else {
        console.log(`Не желаете ли олд-фэшн, ${name}?`);
    }
}