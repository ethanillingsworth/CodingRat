import { addEditor, runCode, getSave } from "/js/global.js";

const desc = `
Return "Fizz" if the number is divisible by 3

Return "Buzz" if it's divisible by 5

Return "FizzBuzz" if it's divisible by both

Otherwise return the number

`

const name = "fizzBuzz"
const parent = "intro"
const lang = "javascript"

document.title = "CodingRat Intro to JS | " + name

const editor = addEditor(document.body, "FizzBuzz", "Intro to JS", "../", desc, "../validatePass/", "../rectOrSquare/")
const defaultCode = `function fizzBuzz(num) {

}`

let data = getSave(name, parent, lang, editor, defaultCode)


const testCases = [
    {
        expected: "Fizz",
        call: `fizzBuzz(3)` // Divisible by 3 only
    },
    {
        expected: "Buzz",
        call: `fizzBuzz(5)` // Divisible by 5 only
    },
    {
        expected: "FizzBuzz",
        call: `fizzBuzz(15)` // Divisible by both 3 and 5
    },
    {
        expected: 1,
        call: `fizzBuzz(1)` // Not divisible by 3 or 5
    },
    {
        expected: 2,
        call: `fizzBuzz(2)` // Not divisible by 3 or 5
    },
    {
        expected: "Fizz",
        call: `fizzBuzz(6)` // Divisible by 3 only
    },
    {
        expected: "Buzz",
        call: `fizzBuzz(10)` // Divisible by 5 only
    },
    {
        expected: "FizzBuzz",
        call: `fizzBuzz(30)` // Divisible by both 3 and 5
    },
    {
        expected: 4,
        call: `fizzBuzz(4)` // Not divisible by 3 or 5
    },
    {
        expected: "Fizz",
        call: `fizzBuzz(9)` // Divisible by 3 only
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

