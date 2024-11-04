import { addEditor, runCode, getSave } from "/js/global.js";

const desc = `
Return if the parameter number is even or odd

True being even
False being odd
`

const name = "evenOrOdd"
const parent = "intro"
const lang = "javascript"

document.title = "CodingRat Intro to JS | " + name

const editor = addEditor(document.body, "Even or Odd", "Intro to JS", "../", desc, "../countDigits2/", "../fizzBuzz/")
const defaultCode = `function evenOrOdd(num) {

}`

let data = getSave(name, parent, lang, editor, defaultCode)


const testCases = [
    {
        expected: false,
        call: `${name}(5)`
    },
    {
        expected: true,
        call: `${name}(4)`
    },
    {
        expected: false,
        call: `${name}(3)`
    },
]

runCode(testCases, editor, data, name, parent, lang)

document.getElementById("run").onclick = () => {
    
    runCode(testCases, editor, data, name, parent, lang)

    data = JSON.parse(localStorage.getItem(lang)[parent][name])
}

document.getElementById("reset").onclick = () => {
    editor.setValue(defaultCode)
    runCode(testCases, editor, data, name, parent, lang)
}