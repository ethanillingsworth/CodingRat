import { addEditor, runCode, getSave } from "/js/global.js";

const desc = `
Given a percent, return the corresponding letter grade

90 and above: "A"
80-89: "B"
70-79: "C"
60-69: "D"
Below 60: "F"
`

const name = "gradeFinder"
const parent = "intro"
const lang = "javascript"

document.title = "CodingRat Intro to JS | " + name


const editor = addEditor(document.body, "Grade Finder", "Intro to JS", "../", desc, "../evenOrOdd/", "../isCapital/")
const defaultCode = `function gradeFinder(percent) {

}`

let data = getSave(name, parent, lang, editor, defaultCode)


const testCases = [
    {
        expected: "A",
        call: `gradeFinder(95)` // Midpoint in the A range
    },
    {
        expected: "A",
        call: `gradeFinder(90)` // Boundary: exactly 90
    },
    {
        expected: "B",
        call: `gradeFinder(85)` // Midpoint in the B range
    },
    {
        expected: "B",
        call: `gradeFinder(80)` // Boundary: exactly 80
    },
    {
        expected: "C",
        call: `gradeFinder(75)` // Midpoint in the C range
    },
    {
        expected: "C",
        call: `gradeFinder(70)` // Boundary: exactly 70
    },
    {
        expected: "D",
        call: `gradeFinder(65)` // Midpoint in the D range
    },
    {
        expected: "D",
        call: `gradeFinder(60)` // Boundary: exactly 60
    },
    {
        expected: "F",
        call: `gradeFinder(55)` // Midpoint in the F range
    },
    {
        expected: "F",
        call: `gradeFinder(0)` // Extreme low value
    }
];

runCode(testCases, editor, data, name, parent, lang)

document.getElementById("run").onclick = () => {
    
    runCode(testCases, editor, data, name, parent, lang)

    data = JSON.parse(localStorage.getItem(lang)[parent][name])
}

document.getElementById("reset").onclick = () => {
    editor.setValue(defaultCode)
    runCode(testCases, editor, data, name, parent, lang)
}

