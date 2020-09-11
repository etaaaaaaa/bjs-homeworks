'use strict';

//TASK 1
function parseCount (value) {

    if (isNaN(Number.parseInt(value))) {
        const invalid = new Error('Невалидное значение!');
        throw invalid;
    }

    console.log(Number.parseInt(value));
    return Number.parseInt(value);
}

function validateCount (value) {
    try {
        return parseCount(value);
    } catch(e) {
        console.error(e);
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
        return this.firstSide + this.secondSide + this.thirdSide;
    }

    getArea() {
        let p = (this.firstSide + this.secondSide + this.thirdSide) / 2;
        return (Math.sqrt(p * (p - this.firstSide) * (p - this.secondSide) * (p - this.thirdSide))).toFixed(3);
    }

}


// console.log(tri.getArea());
// console.log(tri.getPerimeter());
function getTriangle(firstSide, secondSide, thirdSide) {
    let tri = new Triangle(firstSide, secondSide, thirdSide);
    try {
        return tri;
    } catch (e) {
        console.error(e);
    }
}

getTriangle(1,2,3);