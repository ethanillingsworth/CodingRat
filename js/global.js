import ace from 'https://cdn.jsdelivr.net/npm/ace-builds@1.36.3/+esm';

const topBar = document.createElement("div")
topBar.id = "top"

document.body.append(topBar)

const logo = document.createElement("h1")
logo.innerHTML ="<a href='/'>CodingRat</a>"

topBar.append(logo)


const back = document.createElement("div")
back.id = "back"

topBar.append(back)

function addLink(label, href) {
    const link = document.createElement("a")
    link.href = href
    link.innerText = label
    back.append(link)
}

// If window size is iPad or smaller, then use JS to set screen height.

let value = `${window.innerHeight}px`

document.body.style.height = value;

export function addGrid(parent) {
    const grid = document.createElement("div")
    grid.className = "grid"

    parent.append(grid)
    return grid
}

export function addGridElement(grid=document.querySelector(".grid"), title, sub, desc, href, stars) {
    const item = document.createElement("a")
    item.href = href
    item.id = title
    const headingDiv = document.createElement("div")
    headingDiv.className = "hDiv"

    const heading = document.createElement("h2")
    heading.innerText = title
    headingDiv.append(heading)

    const ss = document.createElement("div")
    ss.className = "stars"
    headingDiv.append(ss)

    if (stars !== undefined) {
        stars.forEach(star => {
            const s = document.createElement("img")
            s.className = "star"
            if (star == 1) {
                s.src = "/icons/starfill.png"
            }
            else {
                s.src = "/icons/staroutline.png"
            }
            ss.append(s)
        });
    }      
        
    

    item.append(headingDiv)

    const subH = document.createElement("h3")
    subH.innerText = sub
    item.append(subH)

    const des = document.createElement("p")
    des.innerText = desc
    item.append(des)

    grid.append(item)

    return item
}


export function addEditor(parent, head, p, pLink, desc, prev, next) {
    const editDiv = document.createElement("div")
    editDiv.id = "editDiv"

    const col2 = document.createElement("div")
    col2.style.width = "20%"
    col2.className = "col"
    col2.id = "details"

    const heading = document.createElement("h2")
    heading.innerHTML = `<a href="${pLink}">${p}</a> \> ${head}`

    col2.append(heading)

    const sub = document.createElement("h3")
    sub.innerText = desc
    sub.style.fontWeight = "normal"

    col2.append(sub)

    const nav = document.createElement("div")
    nav.className = "nav"
    if (prev) {
        const pr = document.createElement("a")
        pr.innerText = "\< Prev"
        pr.href = prev
        nav.append(pr)
    }

    if (prev && next) {
        nav.innerHTML += "&nbsp|&nbsp"
    }

    if (next) {
        const ne = document.createElement("a")
        ne.innerText = "Next \>"
        ne.href = next
        nav.append(ne)
    }

    col2.append(nav)

    
    editDiv.append(col2)

    const col3 = document.createElement("div")
    col3.style.paddingRight = "0"
    col3.style.paddingLeft = "0"
    col3.className = "col"
    col3.style.width = "50%"

    const editElem = document.createElement("div")
    editElem.id = "editor"
    col3.append(editElem)

    const editorOptions = document.createElement("div")
    editorOptions.id = "editOptions"

    const row1 = document.createElement("div")
    row1.className = "row"

    row1.innerHTML = `
    <h2 >Editor Size:</h2>
    <select id="editor-size">
        <option>10px</option>
        <option>12px</option>
        <option>14px</option>
        <option>16px</option>
        <option>18px</option>
        <option>20px</option>
        <option>22px</option>
        <option>24px</option>
    </select>
    `

    editorOptions.append(row1)

    const row2 = document.createElement("div")
    row2.className = "row"

    row2.innerHTML = `
    <h2>Editor Theme:</h2>
    <select id="theme">
        <option>Ambiance</option>
        <option>Cloud Editor Dark</option>
        <option>Clouds Midnight</option>
        <option>Cobalt</option>
        <option>Github Dark</option>
        <option>Nord Dark</option>
        <option>One Dark</option>
        <option>Pastel on Dark</option>
        <option>Solarized Dark</option>
        <option>Tomorrow Night</option>
        <option>Tomorrow Night Blue</option>
        <option>Tomorrow Night Bright</option>
        <option>Tomorrow Night Eighties</option>

    </select>
    `

    editorOptions.append(row2)

    col3.append(editorOptions)


    editDiv.append(col3)


    const col = document.createElement("div")
    col.className = "col"
    col.style.paddingRight = "0"
    col.style.paddingLeft = "0"

    const output = document.createElement("div")
    output.id = "output"
    col.append(output)
    output.innerHTML = "<h3>Expected</h3><h3>Run</h3><h3>Pass</h3>"

    const buttons = document.createElement("div")
    buttons.id = "buttons";

    const star = document.createElement("img")
    star.id = "star"

    star.src = "/icons/staroutline.png"

    buttons.append(star)

    const reset = document.createElement("button")
    reset.id = "reset"

    reset.style.marginLeft = "auto"

    reset.innerText = "RESET"

    buttons.append(reset)

    const run = document.createElement("button")
    run.id = "run"

    run.innerText = "RUN"

    buttons.append(run)

    col.append(buttons)


    editDiv.append(col)

    parent.append(editDiv)

    if (!localStorage.getItem("edit")) {
        localStorage.setItem("edit", JSON.stringify({
            fontSize: "16px",
            theme: "ambiance"
        }))
    }

    let dat = JSON.parse(localStorage.getItem("edit"))

    var editor = ace.edit("editor");
    editor.session.setMode("ace/mode/javascript");

    const editSize = document.getElementById("editor-size")
    const theme = document.getElementById("theme")


    editSize.value = dat.fontSize
    theme.value = dat.theme


    editSize.onchange = () => {

        dat.fontSize = editSize.value

        editElem.style.fontSize = dat.fontSize

        localStorage.setItem("edit", JSON.stringify(dat))
        
    }

    theme.onchange = () => {

        dat.theme = theme.value

        editor.setTheme("ace/theme/" + dat.theme.toLowerCase().replaceAll(" ", "_"))

        localStorage.setItem("edit", JSON.stringify(dat))
        
    }

    editor.setTheme("ace/theme/" + dat.theme.toLowerCase().replaceAll(" ", "_"))
    editElem.style.fontSize = dat.fontSize

    editor.session.setUseWrapMode(true);

    return editor
}

function safeEval(input, test) {


    var console = function() {}
    var window = function() {}
    var document = function() {}
    var editor = function() {}

    const a = function() {return eval(input + test)}


    // Return the eval'd result
    return a();

    
}

export function runCode(testCases, editor, data, name, parent, lang) {

    document.onkeyup = (ev) => {
        if (ev.ctrlKey && ev.key == "Enter") {
            ev.preventDefault()
            runCode(testCases, editor, data, name, parent, lang)
        }
    }
    const output = document.getElementById("output")

    output.innerHTML = "<h3>Expected</h3><h3>Run</h3><h3>Pass</h3>"
    data[parent][name]["code"] = editor.getValue()

    testCases.forEach(test => {
        let val = undefined;
        try {
            val = safeEval(editor.getValue(), test.call)
        }
        catch (e) {
            val = e
        }
        output.innerHTML += `<span>${test.call} => ${test.expected}</span>`
        output.innerHTML += `<span>${val}</span>`
        
        

        if (val === test.expected) {
            document.getElementById("star").src = "/icons/starfill.png"
            output.innerHTML += `<span style="background-color: var(--green);"></span>`
            data[parent][name].star = 1
        }
        else {
            output.innerHTML += `<span style="background-color: var(--red);"></span>`

        }
        
        localStorage.setItem(lang, JSON.stringify(data))
        
    });
    
}

export function getSave(name, parent, lang, editor, defaultCode, star=document.getElementById("star")) {
    let data = localStorage.getItem(lang)
    if (!data) {
        localStorage.setItem(lang, "{}")
        data = localStorage.getItem(lang)
    }

    let jData = JSON.parse(data)

    if (!jData[parent]) {
        jData[parent] = {}
        localStorage.setItem(lang, JSON.stringify(jData))
    }

    if (!jData[parent][name]) {
        jData[parent][name] = {}
        localStorage.setItem(lang, JSON.stringify(jData))
    }
    if (star) {
        if (jData[parent][name].star === 1) {
            star.src = "/icons/starfill.png"
        }
    }

    if (defaultCode) {
        if (jData[parent][name].code) {
            editor.setValue(jData[parent][name].code)
        }
        else {
            editor.setValue(defaultCode)
        }
    }

    return jData
}


window.deleteValue = function(path, removedItem) {
    var dat = JSON.parse(localStorage.getItem(path))

    delete dat[removedItem]

    console.log(dat)

    localStorage.setItem(path, JSON.stringify(dat))

}