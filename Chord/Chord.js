export default class Chord {
    constructor(degreeIndex, scale, notes = [1, 3, 5], bass = 1) {
        if (typeof degreeIndex !== 'number') {
            console.error("Chord constructor- degreeIndex must be a number-", degreeIndex)
            degreeIndex = 1
        }

        let o = degreeIndex
        while (degreeIndex < 1) { degreeIndex += 7 }
        while (degreeIndex > 7) { degreeIndex -= 7 }
        if (o > 7 || o < 1) {
            console.warn(`Warning- degreeIndex out of bounds- ${o} should be 1 < x < 7. Changed to ${degreeIndex}`)
        }
        this.degreeIndex = degreeIndex

        if (scale.constructor.name !== "Scale") {
            console.error("Chord constructor- Scale must be of type Scale-", scale)
        }
        this.scale = scale

        this.notes = notes
        this.validateNotes()

        o = bass
        while (bass < 1) { bass += 7 }
        while (bass > 7) { bass -= 7 }
        if (o > 7 || o < 1) {
            console.warn(`Warning- bass out of bounds- ${o} should be 1 < x < 7. Changed to ${bass}`)
        }
        this.bass = bass
    }

    validateNotes = () => {
        if (!Array.isArray(this.notes)) {
            console.error('Chord Notes- Needs to be array, ', this.notes)
        }
        this.notes.map((n, i) => (n < 0 || n > 15) ? console.warn(`UNDEFINED BEHAVIOR: ChordNote[${i}] out of bounds: ${n}`) : "")
    }

    calculateInterval = (pitch) => {
        let deg1 = this.note(1).degreeIndex
        let deg2 = this.scale.findDegreeForPitch(pitch)

        if (deg1 !== false && deg2 !== false) {
            let interval = (deg2 - deg1 + 1)

            while (interval < 1) { interval += 7 }
            while (interval > 15) { interval -= 7 }

            return interval
        }

        return false
    }

    //F in C => 5 => Add a C (5)
    //G in C => 5 => Add a D (5) 
    //D in C => 5 => Add a A (5)
    //F in F => 5 => Add a C (5) 
    addNoteByInterval = (interval) => {
        this.notes.push(interval)
        this.validateNotes()
        this.notes = this.notes.sort((a, b) => a - b)
    }

    //F in C => C4 => Add a C (5)
    //G in C => C4 => Add a C (4)
    //D in C => C4 => Add a C (7)
    //F in F => C4 => Add a C (5)
    addNote = (note) => {
        let interval = this.calculateInterval(note)
        if (interval) { this.addNoteByInterval(interval) }
    }

    removeNoteByInterval = (interval) => {
        this.notes = this.notes.filter(n => n !== interval)
    }
    removeNote = (note) => {
        let interval = this.calculateInterval(note)
        this.removeNoteByInterval(interval)
    }

    changeBassByInterval = (interval) => {
        this.bass = interval
    }
    changeBassByNote = (note) => {
        let interval = this.calculateInterval(note)
        if (interval) { this.bass = interval }
    }


    note = (index) => {
        return this.scale.degree(this.degreeIndex + index - 1)
    }



    printPitches = () => {
        return this.notes.map(n => this.scale.degree(this.degreeIndex + (n - 1)).pitch().print())
    }

    print = () => {
        return this.printPitches()
    }


    /* 
    Ultimately, a futile but helpful feature- to name a chord based on any combination of notes in the scale, given the root. 

    In general, the function works by taking the name of the root note, and working through all the other notes and adding to a suffix.

    Tries as best as possible to follow common music theory naming convention.

    As it processes the notes, it removes them from an array. If there's any notes that haven't been processed, throw a * onto the end.

    Rules
    =====
    If there's no 2nd, 3rd, or 4th, call it a '5' chord (power chord)
    If there's a 3rd, look at the intervals to determine, major, minor, dim, or aug.
        If there's also a 7th, look up to the 13th in order.
    If there's a 6, add a 6.
    If there's not a 3rd, look at the 2nd and 4th. If there's on or the other, it's a sus chord. If there's both, we'll settle on sus2add4
    If there's any 7-13ths that haven't been hit, add them as "addX"
    If the 1 or 5 is not present, follow up with no1 or no5
    If there was never a 3, and the 5 is not perfect, reflect that
    Add the bass not if not the 1
    
    */
    printName = () => {

        let baseName = this.note(1).pitch().printNote()
        let suffix = ''

        let parseNotes = [...this.notes]


        if (!parseNotes.includes(3) && !parseNotes.includes(2) && !parseNotes.includes(4)) {
            suffix += '5'
        }



        if (parseNotes.includes(3)) {
            parseNotes = parseNotes.filter(n => n !== 3)

            let firstInterval = this.note(1).pitch().halfStepDistanceFromPitch(this.note(3).pitch())
            let secondInterval = this.note(3).pitch().halfStepDistanceFromPitch(this.note(5).pitch())

            if (firstInterval === 3 && secondInterval === 3) { suffix = 'dim' }
            if (firstInterval === 3 && secondInterval === 4) { suffix = 'm' }
            if (firstInterval === 4 && secondInterval === 3) { suffix = '' }
            if (firstInterval === 4 && secondInterval === 4) { suffix = 'aug' }


            if (parseNotes.includes(6)) {
                suffix += '6'
                parseNotes = parseNotes.filter(n => n !== 6)
            }

            if (parseNotes.includes(7)) {

                if (parseNotes.includes(9)) {
                    if (parseNotes.includes(11)) {
                        if (parseNotes.includes(13)) {
                            suffix += '13'
                            parseNotes = parseNotes.filter(n => n !== 13 && n !== 11 && n !== 9 && n !== 7)
                        } else {
                            suffix += '11'
                            parseNotes = parseNotes.filter(n => n !== 11 && n !== 9 && n !== 7)
                        }
                    } else {
                        suffix += '9'
                        parseNotes = parseNotes.filter(n => n !== 9 && n !== 7)
                    }
                } else {
                    suffix += '7'
                    parseNotes = parseNotes.filter(n => n !== 7)
                }
            }


            if (parseNotes.includes(6)) {
                suffix += '6'
                parseNotes = parseNotes.filter(n => n !== 6)
            }

            if (parseNotes.includes(2)) {
                suffix += 'add2'
                parseNotes = parseNotes.filter(n => n !== 2)
            }

            if (parseNotes.includes(4)) {
                suffix += 'add4'
                parseNotes = parseNotes.filter(n => n !== 4)
            }
        }


        if (parseNotes.includes(4) && !parseNotes.includes(2)) {
            suffix += 'sus4'
            parseNotes = parseNotes.filter(n => n !== 4)
        }
        if (parseNotes.includes(2) && !parseNotes.includes(4)) {
            suffix += 'sus2'
            parseNotes = parseNotes.filter(n => n !== 2)
        }

        if (parseNotes.includes(2) && parseNotes.includes(4)) {
            suffix += 'sus2add4'
            parseNotes = parseNotes.filter(n => n !== 2 && n !== 4)
        }


        if (parseNotes.includes(7)) { suffix += 'add7'; parseNotes = parseNotes.filter(n => n !== 7) }
        if (parseNotes.includes(9)) { suffix += 'add9'; parseNotes = parseNotes.filter(n => n !== 9) }
        if (parseNotes.includes(11)) { suffix += 'add11'; parseNotes = parseNotes.filter(n => n !== 11) }
        if (parseNotes.includes(13)) { suffix += 'add13'; parseNotes = parseNotes.filter(n => n !== 13) }


        if (!parseNotes.includes(1)) { suffix += '(no1)' }
        parseNotes = parseNotes.filter(n => n !== 1)
        if (!parseNotes.includes(5)) { suffix += '(no5)' }
        parseNotes = parseNotes.filter(n => n !== 5)

        if (!this.notes.includes(3)) {
            if (this.note(1).pitch().halfStepDistanceFromPitch(this.note(5).pitch()) === 6) { suffix += 'b5' }
            if (this.note(1).pitch().halfStepDistanceFromPitch(this.note(5).pitch()) === 8) { suffix += '#5' }
        }

        if (parseNotes.length > 0) { suffix += "*" }

        if (this.bass !== 1) { suffix += '/' + this.note(this.bass).pitch().printNote() }

        return baseName + suffix


    }
}