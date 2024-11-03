import { addGridElement, addGrid, getSave } from "/js/global.js";

const grid = addGrid(document.body)

const parent = "intro"
const lang = "javascript"

const elements = [
    {
        name: "Sleep In",
        func: "sleepIn",
        parent: parent,
        lang: lang,
        desc: "A basic logic problem",
        link: "./sleepIn/",
        sub: "(boolean if statements)"

    }
]



elements.forEach((e) => {
    const data = getSave(e.func, e.parent, e.lang)
    let star = 0

    if (data[e.parent][e.func].star === 1) {
        star = 1
    }

    addGridElement(grid, e.name, e.sub, e.desc, e.link, [star])
})

