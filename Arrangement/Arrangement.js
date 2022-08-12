import ArrangementNote from "./ArrangementNote.js"

export default class Arrangement {
    constructor(scale) {
        this.scale = scale
        this.arrangementNotes = []
    }

    scheduleNote = (musicObject, duration = 4, time = this.currentTime(), velocity = 50) => {
        if(this.checkOpenTime(duration, time)) {
            let aN = new ArrangementNote(musicObject, duration, time, velocity)
            this.arrangementNotes.push(aN)
            return aN
        }
        return false
    }

    currentTime = () => {
        if(this.arrangementNotes.length === 0) { return 0 }
        let lastScheduledNote = this.arrangementNotes.sort((a, b) => b.time - a.time)[0]
        return lastScheduledNote.time + (1.0/lastScheduledNote.duration)
    }

    checkOpenTime = (duration, time) => {
        let open = true
        this.arrangementNotes.forEach(aNote => {
            if(aNote.checkOverlap(duration, time)){
                open = false
            }
        })
        return open
    }
}


