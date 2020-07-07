"use strict";

function calculateTotalMortgage(percent, contribution, amount, date) {

    let arr = [percent, contribution, amount, date];

    for (let i = 0; i < arr.length; i++) {
        arr[i] = Number(arr[i]);

        if (Number.isNaN(arr[i])) {
            return `Параметр ${i} содержит неправильное значение ${arr[i]}`;
            //DONNO HOW TO WRITE THE NAME OF THE PARAMETER IN A FOR LOOP (FOOR LOOP IS NOT SUITABLE??)
        }
    }

    let s = amount - contribution;
    let tempVarForDate = new Date().getMonth();
    let n = (12 - date.getMonth()) + tempVarForDate;
//DOES THIS EVEN WORK ^
    let p = (percent / 100) / 12;
    let monthlyPayment = s * (p + p / (((1 + p) ** n) - 1));
    let totalAmount = monthlyPayment * n;

    return totalAmount;
}

function getGreeting(name) {
    if (name == 0) {
        return `Привет, мир! Меня зовут Аноним`
    }

    return `Привет, мир! Меня зовут ${name}`
    // код для задачи №2 писать здесь/
    // return greeting;
}