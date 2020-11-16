'use strict';

class alarmClock {

    constructor (id) {
        this.alarmCollection = [];
        this.timerId = id;
    }

    addClock(time, callback, id) {

        if (id === undefined) {
            throw new Error('no id parameter')
        }

        for (let key in this.alarmCollection) {
            if (this.alarmCollection[key].id === id){
                return console.error('this id already exists');
            }
        }

        this.alarmCollection.push ({
            time: time,
            callback: callback.toString(), //здесь не уверена, нужен ли toString(),
                                           // пытаюсь вызвать функцю отсюда,
                                           // не получиается
            id: id
        });
    }

    removeClock(id) {

        const removedClock = this.alarmCollection.filter(objId => objId.id != id);
        return removedClock;

        //А что если мы захотим сделать что-нибудь еще с массивом alarmCollection?
        //Он же ведь останется неизменным, потому что filter() создает новый массив.
        //А значит и удаленный будильник на самом деле не удалился?
    }

    getCurrentFormattedTime () {
        let today = new Date();

        if (today.getMinutes() < 10) {
            console.log(today.getHours() + ':0' + today.getMinutes());
            return today.getHours() + ':0' + today.getMinutes();
        } else {
            console.log(today.getHours() + ':' + today.getMinutes());
            return today.getHours() + ':' + today.getMinutes();
        }
    }

    start () {
//что за звонок принимает эта функция ниже? Какой должен быть ее параметр?
        // function checkClock () {
        for (let alarm in this.alarmCollection) {
            debugger;
            if (this.getCurrentFormattedTime() === this.alarmCollection[alarm].time) {
                eval(this.alarmCollection[alarm].callback);
                console.log('this works');
            } else {
                console.log('this doesnt work');
            }
        }
        // }
        // checkClock();
    }

}
// debugger;
const clock = new alarmClock(1);

clock.addClock('22:03', () => console.log('-'), 1);
clock.addClock('21:57', () => console.log('12'), 2);

console.log(clock.alarmCollection);
console.log(clock.alarmCollection[0].callback);
