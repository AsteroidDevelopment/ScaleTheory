import {Pitch, Chord, Scale, SCALES} from '../index.js'

let fMajorScale = new Scale(5, SCALES.MAJOR)

test(new Chord(1, fMajorScale, [1, 3, 5], 1).printName(), "F", "Printing chord name")

test(new Chord(1, fMajorScale, [1, 3, 5, 7], 1).printName(), "F7", "Printing 7 chord")
test(new Chord(1, fMajorScale, [1, 3, 5, 7, 9], 1).printName(), "F9", "Printing 9 chord name")
test(new Chord(1, fMajorScale, [1, 3, 5, 7, 9, 11], 1).printName(), "F11", "11 chord name")
test(new Chord(1, fMajorScale, [1, 3, 5, 7, 11], 1).printName(), "F7add11", "11 chord name")
test(new Chord(1, fMajorScale, [1, 3, 5, 11], 1).printName(), "Fadd11", "11 chord name")
test(new Chord(1, fMajorScale, [1, 3, 5, 9], 1).printName(), "Fadd9", "chord name")

test(new Chord(1, fMajorScale, [1, 2, 5], 1).printName(), "Fsus2", "chord name")
test(new Chord(1, fMajorScale, [1, 2, 4, 5], 1).printName(), "Fsus2add4", "chord name")
test(new Chord(1, fMajorScale, [1, 4, 5], 1).printName(), "Fsus4", "chord name")
test(new Chord(1, fMajorScale, [1, 4, 5, 9], 1).printName(), "Fsus4add9", "chord name")
test(new Chord(1, fMajorScale, [1, 2, 5, 11], 1).printName(), "Fsus2add11", "chord name")

test(new Chord(1, fMajorScale, [1, 3, 5, 6], 1).printName(), "F6", "chord name")
test(new Chord(1, fMajorScale, [1, 3, 5, 6, 7], 1).printName(), "F67", "chord name")
test(new Chord(1, fMajorScale, [1, 3, 5, 6, 9], 1).printName(), "F6add9", "chord name")
test(new Chord(1, fMajorScale, [1, 3, 5, 6, 7, 9], 1).printName(), "F69", "chord name")
test(new Chord(1, fMajorScale, [1, 3, 4, 5, 6, 7], 1).printName(), "F67add4", "chord name")

test(new Chord(1, fMajorScale, [1, 2, 3, 5, 11], 1).printName(), "Fadd2add11", "chord name")
test(new Chord(1, fMajorScale, [1, 2, 3, 5, 7, 11], 1).printName(), "F7add2add11", "chord name")

test(new Chord(1, fMajorScale, [1, 5, 7]).printName(), "F5add7", "chord name")
test(new Chord(1, fMajorScale, [1, 2, 5, 7, 11]).printName(), "Fsus2add7add11", "chord name")

// [1, 2, 3] //add2(no5)
// [1, 2, 4] //sus2add4(no5)
// [1, 2, 6] //6sus2(no5)
// [1, 2, 7] //sus2add7(no5)

// [1, 3, 4] //add4(no5)
// [1, 3, 6] //6(no5)
// [1, 3, 7] //add7(no5)

// [1, 4, 6] //6sus4(no5)
// [1, 4, 7] //sus4add7(no5)

// [1, 5, 6] //5add6
// [1, 5, 7] //5add7

// [1, 6, 7] //C67(no3)(no5)








test(new Chord(5, fMajorScale, [1, 3, 5], 1).printName(), "C", "Printing chord name")
test(new Chord(5, fMajorScale, [1, 3, 5], 3).printName(), "C/E", "Printing chord name")
test(new Chord(5, fMajorScale, [1, 3, 5, 7], 5).printName(), "C7/G", "Printing chord name")

test(new Chord(5, fMajorScale, [1, 3, 5, 7], 1).printName(), "C7", "Printing 7 chord")
test(new Chord(5, fMajorScale, [1, 3, 5, 7, 9], 1).printName(), "C9", "Printing 9 chord name")
test(new Chord(5, fMajorScale, [1, 3, 5, 7, 9, 11], 1).printName(), "C11", "11 chord name")
test(new Chord(5, fMajorScale, [1, 3, 5, 7, 11], 1).printName(), "C7add11", "11 chord name")
test(new Chord(5, fMajorScale, [1, 3, 5, 11], 1).printName(), "Cadd11", "11 chord name")
test(new Chord(5, fMajorScale, [1, 3, 5, 9], 1).printName(), "Cadd9", "chord name")

test(new Chord(5, fMajorScale, [1, 2, 5], 1).printName(), "Csus2", "chord name")
test(new Chord(5, fMajorScale, [1, 2, 4, 5], 1).printName(), "Csus2add4", "chord name")
test(new Chord(5, fMajorScale, [1, 4, 5], 1).printName(), "Csus4", "chord name")
test(new Chord(5, fMajorScale, [1, 4, 5, 9], 1).printName(), "Csus4add9", "chord name")
test(new Chord(5, fMajorScale, [1, 2, 5, 11], 1).printName(), "Csus2add11", "chord name")

test(new Chord(5, fMajorScale, [1, 3, 5, 6], 1).printName(), "C6", "chord name")
test(new Chord(5, fMajorScale, [1, 3, 5, 6, 9], 1).printName(), "C6add9", "chord name")

test(new Chord(5, fMajorScale, [1, 2, 3, 5, 11], 1).printName(), "Cadd2add11", "chord name")

test(new Chord(5, fMajorScale, [1, 5, 7]).printName(), "C5add7", "chord name")
test(new Chord(5, fMajorScale, [1, 2, 5, 7, 11]).printName(), "Csus2add7add11", "chord name")




test(new Chord(3, fMajorScale, [1, 3, 5], 1).printName(), "Am", "Printing chord name")

test(new Chord(3, fMajorScale, [1, 3, 5, 7], 1).printName(), "Am7", "Printing 7 chord")
test(new Chord(3, fMajorScale, [1, 3, 5, 7, 9], 1).printName(), "Am9", "Printing 9 chord name")
test(new Chord(3, fMajorScale, [1, 3, 5, 7, 9, 11], 1).printName(), "Am11", "11 chord name")
test(new Chord(3, fMajorScale, [1, 3, 5, 7, 11], 1).printName(), "Am7add11", "11 chord name")
test(new Chord(3, fMajorScale, [1, 3, 5, 11], 1).printName(), "Amadd11", "11 chord name")
test(new Chord(3, fMajorScale, [1, 3, 5, 9], 1).printName(), "Amadd9", "chord name")

test(new Chord(3, fMajorScale, [1, 2, 5], 1).printName(), "Asus2", "chord name")
test(new Chord(3, fMajorScale, [1, 2, 4, 5], 1).printName(), "Asus2add4", "chord name")
test(new Chord(3, fMajorScale, [1, 4, 5], 1).printName(), "Asus4", "chord name")
test(new Chord(3, fMajorScale, [1, 4, 5, 9], 1).printName(), "Asus4add9", "chord name")
test(new Chord(3, fMajorScale, [1, 2, 5, 11], 1).printName(), "Asus2add11", "chord name")

test(new Chord(3, fMajorScale, [1, 3, 5, 6], 1).printName(), "Am6", "chord name")
test(new Chord(3, fMajorScale, [1, 3, 5, 6, 9], 1).printName(), "Am6add9", "chord name")

test(new Chord(3, fMajorScale, [1, 2, 3, 5, 11], 1).printName(), "Amadd2add11", "chord name")

test(new Chord(3, fMajorScale, [1, 5, 7]).printName(), "A5add7", "chord name")
test(new Chord(3, fMajorScale, [1, 2, 5, 7, 11]).printName(), "Asus2add7add11", "chord name")




test(new Chord(7, fMajorScale, [1, 3, 5], 1).printName(), "Edim", "Printing chord name")

test(new Chord(7, fMajorScale, [1, 3, 5, 7], 1).printName(), "Edim7", "Printing 7 chord")
test(new Chord(7, fMajorScale, [1, 3, 5, 7, 9], 1).printName(), "Edim9", "Printing 9 chord name")
test(new Chord(7, fMajorScale, [1, 3, 5, 7, 9, 11], 1).printName(), "Edim11", "11 chord name")
test(new Chord(7, fMajorScale, [1, 3, 5, 7, 11], 1).printName(), "Edim7add11", "11 chord name")
test(new Chord(7, fMajorScale, [1, 3, 5, 11], 1).printName(), "Edimadd11", "11 chord name")
test(new Chord(7, fMajorScale, [1, 3, 5, 9], 1).printName(), "Edimadd9", "chord name")

test(new Chord(7, fMajorScale, [1, 2, 5], 1).printName(), "Esus2b5", "chord name")
test(new Chord(7, fMajorScale, [1, 2, 4, 5], 1).printName(), "Esus2add4b5", "chord name")
test(new Chord(7, fMajorScale, [1, 4, 5], 1).printName(), "Esus4b5", "chord name")
test(new Chord(7, fMajorScale, [1, 4, 5, 9], 1).printName(), "Esus4add9b5", "chord name")
test(new Chord(7, fMajorScale, [1, 2, 5, 11], 1).printName(), "Esus2add11b5", "chord name")

test(new Chord(7, fMajorScale, [1, 3, 5, 6], 1).printName(), "Edim6", "chord name")
test(new Chord(7, fMajorScale, [1, 3, 5, 6, 9], 1).printName(), "Edim6add9", "chord name")

test(new Chord(7, fMajorScale, [1, 2, 3, 5, 11], 1).printName(), "Edimadd2add11", "chord name")

test(new Chord(7, fMajorScale, [1, 5, 7]).printName(), "E5add7b5", "chord name")
test(new Chord(7, fMajorScale, [1, 2, 5, 7, 11]).printName(), "Esus2add7add11b5", "chord name")




//Add an "E" note to an "F" chord
let cx = new Chord(1, fMajorScale)
cx.addNote( new Pitch(4, 1) )
test( cx.printName(), "F7", "")


//Add an "E" note to an "Gm" chord
let cx2 = new Chord(2, fMajorScale)
cx2.addNote( new Pitch(4, 8) )
test( cx2.printName(), "Gm6", "")


//Add an "C" note to a "Dm" chord
let cx3 = new Chord(6, fMajorScale)
cx3.addNote( new Pitch(0, 4) )
test( cx3.printName(), "Dm7", "")

testStatus("CHORDS")

export default true

