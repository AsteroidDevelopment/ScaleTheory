import { CHROMATIC_NOTES, A4_FREQUENCY } from "../constants.js"


/*

PITCH
=====
A class for controlling and manipulating pitches.

new Pitch(chromaticValue, octave) 

Functions
=========
Altering Pitch:
changePitchByHalfSteps(amountOfHalfSteps)- positive or negative
changePitchByOctaves(amountOfOctaves)- positive or negative

Comparing Pitch:
halfStepDistanceFromPitch(Pitch{})- calculates the amount of half steps between two pitches.
frequency()- returns the frequency for the current value.

*/


export default class Pitch {
    constructor(chromaticValue, octave = 4) {
        while (chromaticValue >= 12) {
            chromaticValue -= 12
            octave += 1
        }
        while (chromaticValue < 0) {
            chromaticValue += 12
            octave -= 1
        }

        this.chromaticNoteIndex = chromaticValue
        this.octave = octave.bound(0, 11)
    }

    changePitchByHalfSteps = (amount) => {
        let totalHalfSteps = this.chromaticNoteIndex + amount

        while (totalHalfSteps >= 12) {
            totalHalfSteps -= 12
            if(this.octave < 11) { this.octave += 1 }
        }
        while (totalHalfSteps < 0) {
            totalHalfSteps += 12
            if(this.octave > 0) { this.octave -= 1 }
        }
        this.chromaticNoteIndex = totalHalfSteps
    }

    changePitchByOctaves = (amount) => {
        this.changePitchByHalfSteps(amount * 12)
    }


    halfStepDistanceFromPitch = (pitch) => {
        let indexDiff = pitch.chromaticNoteIndex - this.chromaticNoteIndex
        let octaveDiff = pitch.octave - this.octave

        return indexDiff + (octaveDiff * 12)
    }

    frequency = () => {
        let a4 = new Pitch(9, 4)
        //formula from http://techlib.com/reference/musical_note_frequencies.htm
        let freq = A4_FREQUENCY * ( 2 ** ( a4.halfStepDistanceFromPitch(this) / 12 ) )
        
        return freq
    }

    print = () => {
        return CHROMATIC_NOTES[this.chromaticNoteIndex] + this.octave
    }

    printNote = () => {
        return CHROMATIC_NOTES[this.chromaticNoteIndex]
    }

}