'use strict';

// Task 1
class PrintEditionItem {
    name;
    releaseDate;
    pagesCount;
    state = 100;
    type = null;

    constructor(name, releaseDate, pagesCount) {
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
    }

    fix() {
        this.setState = (this.state * 1.5);
    }

    set state(itemState){
        this.state = itemState;
        if (itemState <= 0) {
            this.state = 0;
        } else if (itemState > 100) {
            this.state = 100;
        }
    }

    get state() {
        return this.state;
    }

}

class Magazine extends PrintEditionItem {
    type = "magazine";
}

class Book extends PrintEditionItem {
    type = 'book';
    author;

    constructor(author, name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.author = author;
    }
}

class NovelBook extends Book {
    type = 'novel';
}

class FantasticBook extends Book {
    type = 'fantastic';
}

class DetectiveBook extends Book {
    type = 'detective';
}
//
const sherlock = new DetectiveBook("Артур Конан Дойл", "Полное собрание повестей и рассказов о Шерлоке Холмсе в одном томе", 2019, 1008);
const picknick = new FantasticBook("Аркадий и Борис Стругацкие", "Пикник на обочине", 1972, 168);


//Task 2
class Library {
    name;
    books = [];

    constructor(name) {
        this.name = name;
    }

    addBook(book) {
        if(book.getState >= 30) {
            this.books.push(book);
        }
    }
///!!!!!!!!!!!!!!!!!!!!!!!!!!
    findBookBy(type, value) {
        this._type = type;
        this._value = value;

        for (let j = 0; j < this.books.length; j++) { //эта чать почему-то не выполняется совсем.
                                                      //если раскомментировать мои две предыдущие функции
                                                      // там точно такой же кусочек не будет работаь по причине ошибки
                                                      // 'cannot read property 'books' of undefined' в строке 102, думаю здесь та же самая проблема
                                                      // Не понимаю почему :(

            if (this.books[type] === value) {
                console.log(this.books[j]);
                return this.books[j];
            }
            //else {
                console.log('null');
                return null;
        }

        // function detectType() { //checks whether the parameter we are looking for exists
        //
        //     for (let j = 0; j < this.books.length; j++) {
        //
        //         for (let i = 0; i < Object.keys(this.books[j]).length; i++) {
        //             if (type === (Object.keys(this.books[j])[i])) {
        //                 return type;
        //             }
        //         }
        //
        //         console.log('null');
        //         return null;
        //     }
        // }
        //
        // function returnValue(a) {
        //     a = detectType();
        //     for (let j = 0; j < this.books.length; j++) {
        //
        //         if (value === this.books[j][a]){
        //             console.log(this.books[j]);
        //             return this.books[j];
        //         }
        //     }
        //     console.log('null');
        //     return null;
        // }
        // returnValue();
    }

    giveBookByName (bookName) {
        const findBookIndex = this.books.findIndex(book => book.name === bookName);
        let findBook = 0;
        if (findBookIndex !== -1) {
            findBook = this.books[findBookIndex];
            this.books.splice(findBookIndex, 1);
            return findBook;
        } else {
            console.log('null');
            return null;
        }

    }

}
const library = new Library('newLibrary');
library.addBook(sherlock);
library.addBook(picknick);
library.addBook(new Magazine('Мурзилка', 1919, 60));
debugger;
library.findBookBy('releaseDate', 2019);
