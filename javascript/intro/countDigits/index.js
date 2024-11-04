import { addEditor, runCode, getSave } from "/js/global.js";

const desc = `
Return the amount of digits for a given number

Hint: use a while loop
`

const name = "countDigits"
const parent = "intro"
const lang = "javascript"

document.title = "CodingRat Intro to JS | " + name

const editor = addEditor(document.body, "Count Digits", "Intro to JS", "../", desc, null, "../countDigits2/")
const defaultCode = `function countDigits(num) {

}`

let data = getSave(name, parent, lang, editor, defaultCode)


const testCases = [
    {
        expected: 1,
        call: `countDigits(0)` // Only 1 digit: "0"
    },
    {
        expected: 1,
        call: `countDigits(7)` // Only 1 digit: "7"
    },
    {
        expected: 3,
        call: `countDigits(123)` // Three digits: "123"
    },
    {
        expected: 5,
        call: `countDigits(10000)` // Five digits: "10000"
    },
    {
        expected: 4,
        call: `countDigits(9999)` // Four digits: "9999"
    },
    {
        expected: 6,
        call: `countDigits(-123456)` // Six digits: "-123456" (negative sign doesn't count)
    },
    {
        expected: 10,
        call: `countDigits(1000000000)` // Ten digits: "1000000000"
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