import Pitch from '../Pitch/Pitch.js'
import Chord from '../Chord/Chord.js'
import { Note } from '../index.js';

export default class Scale {
  constructor(chromaticNoteIndex, notes) {
    if (typeof chromaticNoteIndex !== 'number') {
      console.error("Scale constructor- chromaticNoteIndex must be a number-", chromaticNoteIndex)
      chromaticNoteIndex = 0
    }
    if (!Array.isArray(notes)) {
      console.error("Scale constructor- notes must be an array-", notes);
      notes = []
    }

    let o = chromaticNoteIndex
    while (chromaticNoteIndex < 0) { chromaticNoteIndex += 12 }
    while (chromaticNoteIndex > 11) { chromaticNoteIndex -= 12 }
    if (o > 11 || o < 0) {
      console.warn(`Warning- ChromaticNoteIndex out of bounds- ${o} should be 0 < x < 11. Changed to ${chromaticNoteIndex}`)
    }

    //Half steps from C
    this.chromaticNoteIndex = chromaticNoteIndex

    //Array of notes, represented as half-steps from root
    notes.map((n, i) => (n > 11 || n < 0) ? console.warn(`UNDEFINED BEHAVIOR: ScaleNote[${i}] greater than an octave away from root: ${n}`) : "")
    if (notes.length !== 7) { console.warn(`UNDEFINED BEHAVIOR: ScaleNotes are not of length 7.`, notes) }
    this.notes = notes
  }

  setKeyByIndex = (chromaticNoteIndex) => {
    this.chromaticNoteIndex = chromaticNoteIndex
  }

  setKeyByNote = (note) => {
    this.chromaticNoteIndex = note.chromaticNoteIndex
  }

  adjustKeyByHalfSteps = (amount) => {
    let newVal = this.chromaticNoteIndex + amount

    while (newVal < 0) { newVal += 12 }
    while (newVal > 11) { newVal -= 12 }

    this.chromaticNoteIndex = newVal
  }

  degree = (degreeValue) => {
    return new Note(degreeValue, this)
  }

  findDegreeForPitch = (pitch) => {
    let rootNote = new Pitch(this.chromaticNoteIndex, 4)

    let halfStepDistance = rootNote.halfStepDistanceFromPitch(pitch)

    while (halfStepDistance < 0) { halfStepDistance += 12 }
    while (halfStepDistance > 11) { halfStepDistance -= 12 }

    let res = this.notes.indexOf(halfStepDistance)
    if (res === -1) { res = false }
    else { res += 1 }
    return res
  }

  chromaticValueForDegree = (degreeIndex) => {
    return this.notes[degreeIndex-1] + this.chromaticNoteIndex
  }

  chromaticIndexForDegree = (degreeIndex) => {
    return this.chromaticValueForDegree(degreeIndex) % 12
  }

  findPitchForDegree = (degreeIndex) => {
    return new Pitch(this.chromaticValueForDegree(degreeIndex))
  }

  chord = (degreeIndex) => {
    return new Chord(degreeIndex, this)
  }

}
