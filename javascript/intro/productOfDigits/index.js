import { addEditor, runCode, getSave } from "/js/global.js";

const desc = `
Multiply all digits of a given integer together and return the result.

Hint: use a for loop and parseInt
`

const name = "productOfDigits"
const parent = "intro"
const lang = "javascript"

document.title = "CodingRat Intro to JS | " + name

const editor = addEditor(document.body, "Product of Digits", "Intro to JS", "../", desc, "../isCapital/", "../rectOrSquare/")
const defaultCode = `function productOfDigits(num) {

}`

let data = getSave(name, parent, lang, editor, defaultCode)


const testCases = [
    {
        expected: 0,
        call: `productOfDigits(0)` // Product of digits: 0
    },
    {
        expected: 7,
        call: `productOfDigits(7)` // Only 1 digit: 7
    },
    {
        expected: 6,
        call: `productOfDigits(123)` // 1 * 2 * 3 = 6
    },
    {
        expected: 0,
        call: `productOfDigits(105)` // 1 * 0 * 5 = 0
    },
    {
        expected: 24,
        call: `productOfDigits(234)` // 2 * 3 * 4 = 24
    },
    {
        expected: 720,
        call: `productOfDigits(123456)` // 1 * 2 * 3 * 4 * 5 * 6 = 720
    },
    {
        expected: 0,
        call: `productOfDigits(-907)` // 9 * 0 * 7 = 0 (ignoring negative sign)
    },
    {
        expected: 12,
        call: `productOfDigits(34)` // 3 * 4 = 12
    },
    {
        expected: 4,
        call: `productOfDigits(22)` // 2 * 2 = 4
    },
    {
        expected: 512,
        call: `productOfDigits(888)` // 8 * 8 * 8 = 512
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

