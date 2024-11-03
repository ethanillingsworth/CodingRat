import { addEditor, runCode, getSave } from "/js/global.js";

const desc = `
Return if parameter str is capitalized or not

Hint: use the .substring method to get the first char of a string
`

const name = "isCapital"
const parent = "intro"
const lang = "javascript"

document.title = "CodingRat Intro to JS | " + name

const editor = addEditor(document.body, "Is Capital", "Intro to JS", "../", desc, "../gradeFinder/", "../validatePass/")
const defaultCode = `function isCapital(str) {

}`

let data = getSave(name, parent, lang, editor, defaultCode)


const testCases = [
    {
        expected: true,
        call: `${name}("Hello")`
    },
    {
        expected: true,
        call: `${name}("World")`
    },
    {
        expected: false,
        call: `${name}("hello")`
    },
    {
        expected: false,
        call: `${name}("world")`
    },
    {
        expected: false,
        call: `${name}("test")`
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

