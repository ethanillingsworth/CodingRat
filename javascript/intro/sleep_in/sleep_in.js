import { addEditor, runCode } from "/js/global.js";

const desc = `
The parameter weekday is true if it is a weekday, and the parameter vacation is true if we are on vacation.

We sleep in if it is not a weekday or we're on vacation. Return true if we sleep in.
`

const editor = addEditor(document.body, "Sleep In", "Intro to JS", "../", desc, null, null)

editor.setValue(`function sleepIn(weekday, vacation) {
    
}`)

const testCases = [
    {
        expected: true,
        call: "sleepIn(false, false)"
    },
    {
        expected: false,
        call: "sleepIn(true, false)"
    },
    {
        expected: true,
        call: "sleepIn(true, true)"
    },
]

runCode(testCases, editor)

document.getElementById("run").onclick = () => {
    runCode(testCases, editor)
}

