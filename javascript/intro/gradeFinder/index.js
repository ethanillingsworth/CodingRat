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

const editor = addEditor(document.body, "Grade Finder", "gradeFinder", "../", desc, "../evenOrOdd/", null)
const defaultCode = `function gradeFinder(percent) {

}`

let data = getSave(name, parent, lang, editor, defaultCode)


const testCases = [
    {
        expected: "A",
        call: `${name}(90)`
    },
    {
        expected: "B",
        call: `${name}(86)`
    },
    {
        expected: "C",
        call: `${name}(72)`
    },
    {
        expected: "D",
        call: `${name}(61)`
    },
    {
        expected: "F",
        call: `${name}(59)`
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

