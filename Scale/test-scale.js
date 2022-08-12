import {Pitch, Scale, SCALES} from '../index.js'

let fMajorScale = new Scale(5, SCALES.MAJOR)

//Going through the degrees one at a time
test(fMajorScale.degree(1).pitch().print() , "F4", "Basic root note")
test(fMajorScale.degree(2).pitch().print() , "G4", "2nd note")
test(fMajorScale.degree(3).pitch().print() , "A4", "3rd note")
test(fMajorScale.degree(4).pitch().print() , "A#4", "4th note")
test(fMajorScale.degree(5).pitch().print() , "C5", "4th note")
test(fMajorScale.degree(6).pitch().print() , "D5", "6th note")
test(fMajorScale.degree(7).pitch().print() , "E5", "7th note")
test(fMajorScale.degree(8).pitch().print() , "F5", "Octave note")
test(fMajorScale.degree(9).pitch().print() , "G5", "2nd note + 1 octave")
test(fMajorScale.degree(10).pitch().print() , "A5", "3rd note + 1 octave")
test(fMajorScale.degree(11).pitch().print() , "A#5", "4th note + 1 octave")


test( fMajorScale.chord(1).printPitches().join('-'), "F4-A4-C5", "Root major chord" ) 
test( fMajorScale.chord(5).printPitches().join('-'), "C5-E5-G5", "Dominant major chord" ) 
test( fMajorScale.chord(6).printPitches().join('-'), "D5-F5-A5", "minor 6 chord" ) 

test( fMajorScale.chord(1).note(1).pitch().print(), "F4", "Chord:Note" ) 
test( fMajorScale.chord(1).note(3).pitch().print(), "A4", "Chord:Note" ) 
test( fMajorScale.chord(1).note(5).pitch().print(), "C5", "Chord:Note" ) 





test( fMajorScale.findDegreeForPitch( new Pitch(5,4) ), 1, "finding degree by note" )
test( fMajorScale.findDegreeForPitch( new Pitch(7,4) ), 2, "finding degree by note" )
test( fMajorScale.findDegreeForPitch( new Pitch(4,4) ), 7, "finding degree by note" )

fMajorScale.chromaticNoteIndex += 2

test( fMajorScale.findDegreeForPitch( new Pitch(5,4) ), false, "finding degree by note" )
test( fMajorScale.findDegreeForPitch( new Pitch(6,4) ), 7, "finding degree by note" )
test( fMajorScale.findDegreeForPitch( new Pitch(7,4) ), 1, "finding degree by note" )
test( fMajorScale.findDegreeForPitch( new Pitch(4,4) ), 6, "finding degree by note" )



testStatus("SCALE")

export default passed

