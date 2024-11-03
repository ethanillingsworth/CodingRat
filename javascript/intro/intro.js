import { addGridElement, addGrid, getSave } from "/js/global.js";

const grid = addGrid(document.body)

const parent = "intro"
const lang = "javascript"

const lessons = [
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

lessons.forEach((e) => {
    const data = getSave(e.func, e.parent, e.lang)
    let star = 0

    if (data[e.parent][e.func].star === 1) {
        star = 1
        
    }

    addGridElement(grid, e.name, e.sub, e.desc, e.link, [star])
    if (star === 1) document.getElementById(e.name).style.borderColor = "var(--yellow)"
})

