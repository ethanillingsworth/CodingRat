import { addEditor, runCode, getSave } from "/js/global.js";

const desc = `
If the location is domestic the intial fee should be $5, or $15 if it's international, otherwise return "Invalid location"

If the weight is less than or equal to 0 kg return "Invalid weight"

If the weight is less than or equal to 1 kg dont add any additional charges

If it is less than or equal to 5 kg add $10 to the intial fee

If 10 kg add $20 and anything greater than 10 kg should be charged $30 

Return the total fee

`

const name = "shipFee"
const parent = "intro"
const lang = "javascript"

document.title = "CodingRat Intro to JS | " + name

const editor = addEditor(document.body, "Shippping Fee", "Intro to JS", "../", desc, "../rectOrSquare2/", "../sleepIn/")
const defaultCode = `function shipFee(weight, location) {

}`

let data = getSave(name, parent, lang, editor, defaultCode)


const testCases = [
    {
        expected: 5,
        call: `shipFee(0.5, "domestic")` // Weight <= 1 kg, domestic
    },
    {
        expected: 5,
        call: `shipFee(1, "domestic")` // Weight = 1 kg, domestic
    },
    {
        expected: 15,
        call: `shipFee(3, "domestic")` // Weight <= 5 kg, domestic
    },
    {
        expected: 25,
        call: `shipFee(6, "domestic")` // Weight <= 10 kg, domestic
    },
    {
        expected: 35,
        call: `shipFee(11, "domestic")` // Weight > 10 kg, domestic
    },
    {
        expected: 15,
        call: `shipFee(0.5, "international")` // Weight <= 1 kg, international
    },
    {
        expected: 25,
        call: `shipFee(3, "international")` // Weight <= 5 kg, international
    },
    {
        expected: "Invalid location",
        call: `shipFee(5, "local")` // Invalid location
    },
    {
        expected: "Invalid weight",
        call: `shipFee(-1, "domestic")` // Invalid weight
    },
    {
        expected: "Invalid weight",
        call: `shipFee(0, "international")` // Invalid weight
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

