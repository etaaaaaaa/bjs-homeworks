'use strict';

//TASK 1
function parseCount (value) {
    let parsedValue = Number.parseInt(value);

    if (isNaN(parsedValue)) {
        throw new Error('Невалидное значение!');
    }

    return parsedValue;
}

function validateCount (value) {
    try {
        return parseCount(value);
    } catch(e) {
        // console.error(e);
        return e;
    }
}

// validateCount('r');

//TASK 2
class Triangle {

    constructor(firstSide, secondSide, thirdSide) {
        this.firstSide = firstSide;
        this.secondSide = secondSide;
        this.thirdSide = thirdSide;

        if ((firstSide + secondSide) <= thirdSide ||
            (secondSide + thirdSide) <= firstSide ||
            (firstSide + thirdSide) <= secondSide) {
            const invalidSides = new Error("Error! This triangle doesn't exist!");
            throw invalidSides;
        }
    }

    getPerimeter() {
        // try {
            return this.firstSide + this.secondSide + this.thirdSide;
        // } catch {
        //     return 'Ошибка! Треугольник не существует';
        // }
    }

    getArea() {
        let p = this.getPerimeter() / 2;
        return (Math.sqrt(p * (p - this.firstSide) * (p - this.secondSide) * (p - this.thirdSide))).toFixed(3);
    }

}

class FakeTriangle {

    constructor(firstSide, secondSide, thirdSide) {
        this.firstSide = firstSide;
        this.secondSide = secondSide;
        this.thirdSide = thirdSide;
    }

    getPerimeter() {
        // console.log('Ошибка! Треугольник не существует');
        return 'Ошибка! Треугольник не существует';
    }

    getArea() {
        // console.log('Ошибка! Треугольник не существует');
        return 'Ошибка! Треугольник не существует';
    }

}

function getTriangle(firstSide, secondSide, thirdSide) {
    try {
        return new Triangle(firstSide, secondSide, thirdSide);
    } catch {
        const triangle = new FakeTriangle(firstSide, secondSide, thirdSide);
        return triangle;
    }
}

// debugger;
// console.log(getTriangle(1,2,3));
// getTriangle(1,2,3).getPerimeter();
// const tt = new FakeTriangle(1,2,3);
// tt.getArea();