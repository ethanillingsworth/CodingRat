import { addEditor, runCode, getSave } from "/js/global.js";

const desc = `
Return if a password is valid or not

A password is valid if:

It is atleast 8 characters

It contains the number 8

It contains atleast 1 special character ($, @, ! or ?)

Hint: some methods that may help you (replace String with variable name!!)

String.length

String.includes()

`

const name = "validatePass"
const parent = "intro"
const lang = "javascript"

document.title = "CodingRat Intro to JS | " + name

const editor = addEditor(document.body, "Password Validation", "Intro to JS", "../", desc, "../isCapital/", "../fizzBuzz/")
const defaultCode = `function validatePass(pass) {

}`

let data = getSave(name, parent, lang, editor, defaultCode)


const testCases = [
    {
        expected: true,
        call: `validatePass("Passw0rd8!")` // Valid: contains "8", length >= 8, and has special character "!"
    },
    {
        expected: false,
        call: `validatePass("Pw8!")` // Invalid: length < 8
    },
    {
        expected: false,
        call: `validatePass("Password!")` // Invalid: missing "8"
    },
    {
        expected: false,
        call: `validatePass("Password8")` // Invalid: missing special character
    },
    {
        expected: true,
        call: `validatePass("MyPassw8$")` // Valid: contains "8", length >= 8, and has special character "$"
    },
    {
        expected: true,
        call: `validatePass("StrongP8@ss")` // Valid: contains "8", length >= 8, and has special character "@"
    },
    {
        expected: false,
        call: `validatePass("Password")` // Invalid: missing both "8" and special character
    },
    {
        expected: false,
        call: `validatePass("P@ssword!")` // Invalid: missing "8"
    },
    {
        expected: false,
        call: `validatePass("Password8")` // Invalid: contains "8" but missing special character
    },
    {
        expected: true,
        call: `validatePass("Passw8d!")` // Valid: contains "8", length = 8, and has special character "!"
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

