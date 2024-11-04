import { addEditor, runCode, getSave } from "/js/global.js";

const desc = `
Return if a shape is a cube or rectangular prism based on its length, width, and height

`

const name = "rectOrSquare2"
const parent = "intro"
const lang = "javascript"

document.title = "CodingRat Intro to JS | " + name

const editor = addEditor(document.body, "Rect or Square 2", "Intro to JS", "../", desc, "../rectOrSquare/", "../shipFee/")
const defaultCode = `function rectOrSquare2(length, width, height) {

}`

let data = getSave(name, parent, lang, editor, defaultCode)


const testCases = [
    {
        expected: "Cube",
        call: `rectOrSquare2(5, 5, 5)` // All sides equal
    },
    {
        expected: "Rectangular Prism",
        call: `rectOrSquare2(5, 10, 5)` // Different length and width
    },
    {
        expected: "Rectangular Prism",
        call: `rectOrSquare2(3, 3, 4)` // Different height
    },
    {
        expected: "Cube",
        call: `rectOrSquare2(100, 100, 100)` // Large cube
    },
    {
        expected: "Rectangular Prism",
        call: `rectOrSquare2(1, 2, 3)` // All different dimensions
    },
    {
        expected: "Invalid dimensions",
        call: `rectOrSquare2(0, 5, 5)` // Length is zero
    },
    {
        expected: "Invalid dimensions",
        call: `rectOrSquare2(5, -10, 5)` // Negative width
    },
    {
        expected: "Invalid dimensions",
        call: `rectOrSquare2(-3, -3, -3)` // All negative
    },
    {
        expected: "Cube",
        call: `rectOrSquare2(2, 2, 2)` // All sides equal and small
    },
    {
        expected: "Rectangular Prism",
        call: `rectOrSquare2(7, 7, 3)` // Two sides equal, one different
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

