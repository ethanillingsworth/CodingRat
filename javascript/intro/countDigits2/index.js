import { addEditor, runCode, getSave } from "/js/global.js";

const desc = `
Return the amount of digits for a given number

The number can be an integer or a float

Hint: use a while loop and parseInt
`

const name = "countDigits2"
const parent = "intro"
const lang = "javascript"

document.title = "CodingRat Intro to JS | " + name

const editor = addEditor(document.body, "Count Digits 2", "Intro to JS", "../", desc, "../countDigits/", "../evenOrOdd/")
const defaultCode = `function countDigits2(num) {

}`

let data = getSave(name, parent, lang, editor, defaultCode)


const testCases = [
    {
        expected: 1,
        call: `countDigits2(0)` // Only 1 digit: "0"
    },
    {
        expected: 1,
        call: `countDigits2(7)` // Only 1 digit: "7"
    },
    {
        expected: 3,
        call: `countDigits2(123)` // Three digits: "123"
    },
    {
        expected: 5,
        call: `countDigits2(10000)` // Five digits: "10000"
    },
    {
        expected: 4,
        call: `countDigits2(9999)` // Four digits: "9999"
    },
    {
        expected: 6,
        call: `countDigits2(-123456)` // Six digits: "-123456" (negative sign doesn't count)
    },
    {
        expected: 10,
        call: `countDigits2(1000000000)` // Ten digits: "1000000000"
    },
    {
        expected: 4,
        call: `countDigits2(12.34)` // Four digits: "12.34" → "1234"
    },
    {
        expected: 5,
        call: `countDigits2(-56.789)` // Five digits: "56.789" → "56789"
    },

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