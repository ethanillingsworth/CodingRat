import { addEditor, runCode, getSave } from "/js/global.js";

const desc = `
The parameter weekday is true if it is a weekday, and the parameter vacation is true if we are on vacation.

We sleep in if it is not a weekday or we're on vacation. Return true if we sleep in.
`

const name = "sleepIn"
const parent = "intro"
const lang = "javascript"

const editor = addEditor(document.body, "Sleep In", "Intro to JS", "../", desc, null, "../evenOrOdd/")
const defaultCode = `function sleepIn(weekday, vacation) {

}`

let data = getSave(name, parent, lang, editor, defaultCode)


const testCases = [
    {
        expected: true,
        call: `${name}(false, false)`
    },
    {
        expected: false,
        call: `${name}(true, false)`
    },
    {
        expected: true,
        call: `${name}(true, true)`
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