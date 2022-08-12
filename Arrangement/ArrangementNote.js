import MidiWriter from '../../node_modules/midi-writer-js/build/index.browser.js'

export default class ArrangementNote {
    constructor(musicObject, duration = '4', time, velocity = 50) {
        this.musicObject = musicObject
        this.duration = duration
        this.velocity = velocity
        this.time = time
    }

    startTime = () => {
        return this.time
    }

    endTime = () => {
        return this.time + (1.0 / this.duration)
    }

    checkTime = (time) => {
        return (time > this.startTime()) && (time < this.endTime())
    }

    checkOverlap = (duration, secondStartTime) => {
        let secondEndTime = secondStartTime + ( 1.0 /duration )
        let entirelyBefore = this.endTime() <= secondStartTime
        let entirelyAfter = this.startTime() >= secondEndTime
        return !(entirelyBefore || entirelyAfter)
    }
}