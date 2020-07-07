"use strict";

function getResult(a,b,c){
    let d = Math.pow(b, 2) - 4 * a * c;
    let x = [];

    if (d === 0) {
        x.push(-b / 2 * a);
    } else if (d > 0) {
        x.push((-b  + Math.sqrt(d)) / (2 * a));
        x.push((-b  - Math.sqrt(d)) / (2 * a));
    }
    return x;
}

function getAverageMark(marks){

    if (marks.length === 0) {
        return 0;
    }
    if (marks.length > 5) {
        console.log('Error: more than 5 marks!');
        marks.splice(5);
    }
    let averageMark = (marks.reduce((a,b) => a+b, 0)) / marks.length;
    return averageMark;
}

function askDrink(name,dateOfBirthday){
    let date = new Date().getYear();
    let age = date - dateOfBirthday.getYear();

    if (age < 18) {
        return `Сожалею, ${name}, но я не могу вам продать алкоголь. Зато могу предложить вам замечательный клюквенный компот!`;
    } else {
        return `Не желаете ли олд-фэшн, ${name}?`;
    }
}