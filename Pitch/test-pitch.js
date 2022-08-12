import {Pitch} from '../musicTheory.js'


let cPitch = new Pitch(0, 4)
test(cPitch.print(), "C4", "Basic Pitch")

/* Create function */
let p2 = new Pitch(14, 4)
test(p2.print(), "D5", "High chromaticValue results in inc. octave")

let p3 = new Pitch(-10, 4)
test(p3.print(), "D3", "Low chromaticValue results in dec. octave")

//Upper limits- artbitrarliy big numbers
let p4 = new Pitch(100, 22)
test(p4.print(), "E11", "cap at octave 11")

p4.changePitchByHalfSteps(13)
test(p4.print(), "F11", "still moves at octave 11")

//Lower limits
let p5 = new Pitch(-100, -22)
test(p5.print(), "G#0", "cap at octave 0")

p5.changePitchByHalfSteps(-13)
test(p5.print(), "G0", "still moves at octave 0")

/* changePitchByHalfSteps && changePitchByOctaves */
/* Alter by half steps & octaves */
cPitch.changePitchByHalfSteps(12)
test(cPitch.print(), "C5", "Basic Pitch + Octave")
cPitch.changePitchByHalfSteps(-12)
test(cPitch.print(), "C4", "Basic Pitch + Octave")

cPitch.changePitchByOctaves(1)
test(cPitch.print(), "C5", "Alter by octaves")
cPitch.changePitchByOctaves(-2)
test(cPitch.print(), "C3", "Alter by octaves negative")

cPitch.changePitchByHalfSteps(36)
test(cPitch.print(), "C6", "Alter by half steps huge")

cPitch.changePitchByHalfSteps(2)
test(cPitch.print(), "D6", "Up a step")

cPitch.changePitchByHalfSteps(2)
test(cPitch.print(), "E6", "Up a step")

cPitch.changePitchByHalfSteps(2)
test(cPitch.print(), "F#6", "Up a step")

/* frequency */
test( Math.round( new Pitch(9, 4).frequency() ), Math.round( 440 ), 'a4 pitch freq')
test( Math.round( new Pitch(0, 4).frequency() ), Math.round( 261.64 ), 'c4 pitch freq')
test( Math.round( new Pitch(0, 2).frequency() ), Math.round( 65.41 ), 'c2 pitch freq')
test( Math.round( new Pitch(5, 7).frequency() ), Math.round( 2793.83 ), 'f7 pitch freq')

cPitch = new Pitch(6, 4)
let cPitch2 = new Pitch(0, 4)
test(cPitch.halfStepDistanceFromPitch(cPitch2), -6, "Testing distance function")
test(cPitch2.halfStepDistanceFromPitch(cPitch), 6, "+backwords")

cPitch.changePitchByHalfSteps(6)
test(cPitch.halfStepDistanceFromPitch(cPitch2), -12, "Distance at an octave")
test(cPitch2.halfStepDistanceFromPitch(cPitch), 12, "+backwords")

cPitch.changePitchByHalfSteps(2)
test(cPitch.halfStepDistanceFromPitch(cPitch2), -14, "Distance over an octave")
test(cPitch2.halfStepDistanceFromPitch(cPitch), 14, "+backwords")


testStatus("PITCH")

export default true

