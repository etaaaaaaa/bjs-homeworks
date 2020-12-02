'use strict';

class AlarmClock {

    constructor () {
        this.alarmCollection = [];
        this.timerId = null;
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
            callback: callback,
            id: id
        });
    }

    removeClock(id) {
        let beforeDelete = this.alarmCollection.length;
        this.alarmCollection = this.alarmCollection.filter(objId => objId.id != id);
        let afterDelete = this.alarmCollection.length;
        if (beforeDelete === afterDelete) {
            console.log('something is wrong');
            return false;
        }
        console.log('element deleted');
        return true;
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

    checkClock(alarm) {
        if ( alarm.time === this.getCurrentFormattedTime() ) {
            alarm.callback();
        }
    }

    start () {
        if (this.timerId === null) {
            this.timerId = setInterval( () => this.alarmCollection.forEach( (alarm) => this.checkClock(alarm) ), 1000 )
        }
    }

    stop() {
        if (this.timerId !== null) {
            clearInterval(this.timerId);
            this.timerId = null;
        }
    }

    printAlarms() {
        if (this.alarmCollection.length === 0) {
            console.log('there is no alarms!');
        } else {
            this.alarmCollection.forEach( (alarm) => console.log(`Alarm %${alarm.id} is set up for ${alarm.time}`) );
        }
    }

    clearAlarms() {
        this.stop();
        this.alarmCollection = [];
    }
}

function testCase() {

    console.log('start testcase');
    const Alarm = new AlarmClock();

    Alarm.addClock('21:08', () => console.log('Skoro spat'), 1);
    Alarm.addClock('21:59', () => console.log(''), 1);

    Alarm.addClock('21:09', () => {console.log(''); Alarm.removeClock(2)}, 2);
    try {
        Alarm.addClock('21:09', () => console.log(''));
    } catch(e) {
        console.log(e);
    }

    console.log(Alarm.alarmCollection);

    Alarm.addClock('21:10', () => {
        console.log('');
        Alarm.clearAlarms();
        Alarm.printAlarms();
    }, 3);

    Alarm.printAlarms();
    Alarm.start();
}

testCase();