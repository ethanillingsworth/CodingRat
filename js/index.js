import { addGrid, addGridElement } from "../js/global.js"

const grid = addGrid(document.body)

const langs = {
    "javascript": [
        {
            name: "Intro to JavaScript",
            func: "intro",
            sub: "(basic logic and loops)",
            desc: "If you're brand new to JavaScript this is the place for you",
            link: "../javascript/intro/"
        }
    ]
}

Object.keys(langs).forEach(lang => {
    let data = localStorage.getItem(lang)
    if (!data) {
        localStorage.setItem(lang, "{}")
        data = localStorage.getItem(lang)
    }

    let jData = JSON.parse(data)

    langs[lang].forEach((item) => {
        let stars = []
        if(!jData[item.func]) {
            jData[item.func] = {}
        }
        
        Object.values(jData[item.func]).forEach((lesson) => {
            if (lesson.star === 1) {
                stars.push(1)
            }
            else {
                stars.push(0)
            }
        })

        
        addGridElement(grid, item.name, item.sub, item.desc, item.link, stars)
        if (stars.every( (val, i, arr) => val === 1 ) && stars.length > 0) {
            document.getElementById(item.name).style.borderColor = "var(--yellow)"
        }
    })

});

