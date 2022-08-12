import {Arrangement, Note, Chord, Scale, SCALES} from '../index.js'

let fMajorScale = new Scale(5, SCALES.MAJOR)

let arrangement = new Arrangement(fMajorScale)

let note1 = new Note(1, fMajorScale)
let chord1 = fMajorScale.chord(1)

arrangement.scheduleNote(chord1, '8')
arrangement.scheduleNote(chord1, '8')
arrangement.scheduleNote(chord1, '1')

arrangement.scheduleNote(note1)
arrangement.scheduleNote(note1)
arrangement.scheduleNote(note1)
arrangement.scheduleNote(note1)

arrangement.scheduleNote(chord1, '2')
arrangement.scheduleNote(chord1, '2')

test(arrangement.arrangementNotes.length, 9, 'testing length')
test(arrangement.currentTime(), 3.25, 'testing time')

testStatus("ARRANGEMENT")

export default true