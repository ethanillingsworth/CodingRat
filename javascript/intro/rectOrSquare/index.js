import { addEditor, runCode, getSave } from "/js/global.js";

const desc = `
Given 2 parameters (length, width) determine if the shape is a square or rectangle

`

const name = "rectOrSquare"
const parent = "intro"
const lang = "javascript"

document.title = "CodingRat Intro to JS | " + name

const editor = addEditor(document.body, "Rect or Square", "Intro to JS", "../", desc, "../fizzBuzz/", "../shipFee/")
const defaultCode = `function rectOrSquare(length, width) {

}`

let data = getSave(name, parent, lang, editor, defaultCode)


const testCases = [
    {
        expected: "Square",
        call: `rectOrSquare(5, 5)` // Equal length and width
    },
    {
        expected: "Rectangle",
        call: `rectOrSquare(5, 10)` // Different length and width
    },
    {
        expected: "Square",
        call: `rectOrSquare(0, 0)` // Both length and width are zero (edge case)
    },
    {
        expected: "Rectangle",
        call: `rectOrSquare(3, 7)` // Different length and width
    },
    {
        expected: "Square",
        call: `rectOrSquare(100, 100)` // Large equal length and width
    },
    {
        expected: "Rectangle",
        call: `rectOrSquare(1, 2)` // Small rectangle
    },
    {
        expected: "Square",
        call: `rectOrSquare(8, 8)` // Equal length and width
    },
    {
        expected: "Rectangle",
        call: `rectOrSquare(10, 5)` // Different length and width
    },
    {
        expected: "Rectangle",
        call: `rectOrSquare(15, 20)` // Different length and width
    },
    {
        expected: "Square",
        call: `rectOrSquare(50, 50)` // Equal length and width
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

