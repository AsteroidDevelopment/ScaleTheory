import {Note, Scale, SCALES} from '../index.js'

let passed = 0

let fMajorScale = new Scale(5, SCALES.MAJOR)
let note = new Note(1, fMajorScale)


test(note.pitch().print(), "F4", "Printing basic note")

note.alterNoteDegree(1)
test(note.pitch().print(), "G4", "Printing basic note")

note.alterNoteDegree(1)
test(note.pitch().print(), "A4", "Printing basic note")

note.alterNoteDegree(1)
test(note.pitch().print(), "A#4", "Printing basic note")

note.alterNoteDegree(1)
test(note.pitch().print(), "C5", "Printing basic note")

note.alterNoteDegree(1)
test(note.pitch().print(), "D5", "Printing basic note")

note.alterNoteDegree(1)
test(note.pitch().print(), "E5", "Printing basic note")

note.alterNoteDegree(1)
test(note.pitch().print(), "F5", "Printing basic note")

note.alterNoteDegree(1)
test(note.pitch().print(), "G5", "Printing basic note")

note.alterNoteDegree(1)
test(note.pitch().print(), "A5", "Printing basic note")

note.alterNoteDegree(-2)
test(note.pitch().print(), "F5", "Printing basic note")

note.alterNoteOctave(1)
test(note.pitch().print(), "F6", "Printing basic note")

note.alterNoteOctave(-2)
test(note.pitch().print(), "F4", "Printing basic note")

fMajorScale.adjustKeyByHalfSteps(2)

test(note.pitch().print(), "G4", "Printing basic note")

note.alterNoteDegree(1)
test(note.pitch().print(), "A4", "Printing basic note")

note.alterNoteDegree(1)
test(note.pitch().print(), "B4", "Printing basic note")


testStatus("NOTE")

export default passed

