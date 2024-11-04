import { addEditor, runCode, getSave } from "/js/global.js";

const desc = `
Given 2 parameters (length, width) determine if the shape is a square or rectangle

`

const name = "rectOrSquare"
const parent = "intro"
const lang = "javascript"

document.title = "CodingRat Intro to JS | " + name

const editor = addEditor(document.body, "Rect or Square", "Intro to JS", "../", desc, "../productOfDigits/", "../rectOrSquare2/")
const defaultCode = `function rectOrSquare(length, width) {

}`

let data = getSave(name, parent, lang, editor, defaultCode)


const testCases = [
    {
        expected: "Square",
        call: `shapeType(5, 5)` // Both sides equal
    },
    {
        expected: "Rectangle",
        call: `shapeType(5, 10)` // Length and width are different
    },
    {
        expected: "Rectangle",
        call: `shapeType(3, 4)` // Different dimensions
    },
    {
        expected: "Square",
        call: `shapeType(100, 100)` // Large square
    },
    {
        expected: "Rectangle",
        call: `shapeType(1, 2)` // All different dimensions
    },
    {
        expected: "Invalid dimensions",
        call: `shapeType(0, 5)` // Length is zero
    },
    {
        expected: "Invalid dimensions",
        call: `shapeType(5, -10)` // Negative width
    },
    {
        expected: "Invalid dimensions",
        call: `shapeType(-3, -3)` // All negative
    },
    {
        expected: "Square",
        call: `shapeType(2, 2)` // Small square
    },
    {
        expected: "Rectangle",
        call: `shapeType(7, 3)` // Two sides unequal
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

