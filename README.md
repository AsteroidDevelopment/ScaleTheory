=============
ScaleTheoryJs
=============
Quick Description: ScaleTheoryJs is a library that provides basic music theory functionality, including primarily Scales, Chords, and Notes. What separates it from others like 
Tonal, is the way Scales, Notes, and Chords are handled and manipulated. Use a general library like Tonal for general uses where you know the notes you're working with, but ScaleTheory allows easy generation of notes and chords simply from defining a scale.

Creator: Jordan Hubbard

Version: 0.1




=============
Docs
=============

=== Constants ===
Chromatic Notes with ChromaticNoteIndex
['C', "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"]
  0    1     2    3     4    5    6     7    8     9    10    11

A4_Frequency
used to calculate other note frequencies

=== Pitch ===
Pitches are the base class and represent a musical pitch.
They are created by passing in a ChromaticNoteIndex (0-11 referring to the semitones) and Octave (0-11)
For example-
new Note(0, 4) => C4
new Note(5, 1) => F1

Functions
changePitchByHalfSteps(amount) => the amount of half steps to move the note. This can be any value, including more than an octave.
pitchOctaves(octave) => A shorthand for quickly pitching an octave.
halfStepDistanceFromPitch(note2) => a function for determining how many half steps apart two notes are.
print() => prints the full value, note & octave (C4, F1)
printNote() => prints just the note name (C, F)
frequency() => returns the frequency of the notes in hertz


=== Scales ===
Scales obviously represent a musical scale. The two main inputs are the key of the scale, as a ChromaticNoteIndex, and the array of notes in the scale stored as halfsteps from the root, called ScaleNotes. ScaleNotes must currently be exactly 7 long, and not go above an octave. 

Examples-
new Scale(0, [0, 2, 4, 5, 7, 9, 11]) => C Major Scale
new Scale(1, [0, 2, 3, 5, 7, 8, 10]) => D Natural Minor Scale
new Scale(2, [0, 2, 3, 5, 7, 8, 11]) => E Harmonic Minor Scale

Functions
KEY:setKeyByIndex(chromaticNoteIndex) => explicitly changes the key to the new provided index.
KEY:setKeyByNote(note) => helper function to change it to a note instead
KEY:adjustKeyByHalfSteps(halfSteps) => alters it by half steps

NOTE: degree(degreeIndex, octave = 4) => returns the note at the index provided; index-1; so; cMajor.degree(1) => Note[C4]; cMajor.degree(5) => Note[G4]
NOTE: findDegreeForPitch(note) => provided a note, it returns what degree that note occurs at, or false if it does not occur in the scale. 
cMajor.findDeg(C4) => 1; cMajor.findDeg(E4) => 3; cMajor.findDeg(C#4) => false;  

CHORD: chord(degreeIndex) => creates & returns a default chord at the degreeIndex; index-1; cMajor.chord(1) => Chord[C4-E4-G4]; cMajor.chord(5) => Chord[G4-B4-D5]

=== Chords ===
Representation of a chord; requires a Scale, and stores notes based off scale degree distance from the root. 
Example-
new Chord(1, cMajor, [1, 3, 5]) => C Major Chord, C E G
cChord = cMajor.chord(1)

new Chord(3, cMajor, [1, 3, 5]) => E minor Chord, E G B
cMajor.chord(3)

Explicity supported notes- [1, 2, 3, 4, 5, 6, 7, 9, 11, 13]
Technically possible notes- [8, 10, 12, 14, 15]


Functions
NOTE:addNoteByInterval(interval) => adds the interval to the array 
NOTE:addNote(note) => if the note is in the scale, it adds it to the chord
NOTE:removeNoteByInterval(interval)
NOTE:removeNote(note)
NOTE:changeBassByInterval(interval)
NOTE:changeBassByNote(note)

NOTE:note(interval) => returns a note object for that position, based on the interval & scale- cChord.note(1) => Note[C4], cChord.note(9) => Note[D5]

PRINT:printName() => best attempt at coming up with a chord name given the notes


=== Arrangement ===
Arrangements are a very simple way to order a series of notes. For more complex arrangements (like repeating parts and instrument tracks, see SongTheory.)




==============
Upcoming
==============
Come up with full testing parameters for Chord Names
Allow changing between sharps/flats in display and with scales- currently all are just sharp
Possibly- adjust scales- sharpen/flatten different notes; but that introduces a lot of unknown/undescribed behavior- if one note goes above another or they become equal
Song/measure/timing of some form? import/export as json
Define pitches in more ways
Expand chords to allow for non-chromatic notes

Similar To:
https://github.com/tonaljs/tonal