import Pitch from "../Pitch/Pitch.js"

export default class Note {
    constructor(degreeIndex, scale) {
        this.degreeIndex = degreeIndex
        this.scale = scale
    }

    changeDegree = (degreeIndex) => {
        this.degreeIndex = degreeIndex
    }
    alterNoteDegree = (intervals) => {
        this.degreeIndex += intervals
    }
    alterNoteOctave = (amount) => {
        this.alterNoteDegree(amount * 7)
        return this
    }

    pitch = (baseOctave = 3) => {
        let baseDegree = this.degreeIndex % 7
        if(baseDegree === 0) { baseDegree = 7 }
        let addOctave = Math.floor((this.degreeIndex-1)/7)

        let chrVal = this.scale.chromaticValueForDegree(baseDegree)

        let pitch = new Pitch(chrVal, baseOctave + addOctave)

        return pitch
    }


    print = () => {
        return this.pitch().print()
    }

}