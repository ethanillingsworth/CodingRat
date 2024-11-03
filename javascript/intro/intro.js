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
        sub: "(if-else, logic)"
    },
    {
        name: "Even or Odd",
        func: "evenOrOdd",
        parent: parent,
        lang: lang,
        desc: "Check if a number is even or odd",
        link: "./evenOrOdd/",
        sub: "(modulus)"
    },
    {
        name: "Grade Finder",
        func: "gradeFinder",
        parent: parent,
        lang: lang,
        desc: "Return the percent grade as a letter",
        link: "./gradeFinder/",
        sub: "(if-else)"
    },
    {
        name: "Is Capital",
        func: "isCapital",
        parent: parent,
        lang: lang,
        desc: "Check if a string is captialized or not",
        link: "./isCapital/",
        sub: "(string methods)"
    },
    {
        name: "Password Validiation",
        func: "validatePass",
        parent: parent,
        lang: lang,
        desc: "Check if password is valid",
        link: "./validatePass/",
        sub: "(if-else, string methods)"
    },
    {
        name: "FizzBuzz",
        func: "fizzBuzz",
        parent: parent,
        lang: lang,
        desc: "A popular practice problem adapted for Javascript",
        link: "./fizzBuzz/",
        sub: "(if-else, logic, math)"
    },
    {
        name: "Rectangle or Square",
        func: "rectOrSqaure",
        parent: parent,
        lang: lang,
        desc: "Check if a shape is a rectangle or square based on its length and width",
        link: "./rectOrSqaure/",
        sub: "(if-else)"
    },
    {
        name: "Shipping Fee",
        func: "shipFee",
        parent: parent,
        lang: lang,
        desc: "Calculate the shipping fee based on the weight and location",
        link: "./shipFee/",
        sub: "(if-else, logic, math)"
    },
    {
        name: "Count Digits",
        func: "countDigits",
        parent: parent,
        lang: lang,
        desc: "Count the digits from a given integer",
        link: "./countDigits/",
        sub: "(loops, vars)"
    },
    {
        name: "Count Digits 2",
        func: "countDigits2",
        parent: parent,
        lang: lang,
        desc: "Count the digits from a given float",
        link: "./countDigits2/",
        sub: "(loops, vars)"
    },
    {
        name: "Product of Digits",
        func: "productOfDigits",
        parent: parent,
        lang: lang,
        desc: "Multiply all digits of a number together",
        link: "./productOfDigits/",
        sub: "(loops, math, vars)"
    },
    {
        name: "Sum of Even",
        func: "sumOfEven",
        parent: parent,
        lang: lang,
        desc: "Add all of the even numbers within a range",
        link: "./productOfDigits/",
        sub: "(loops, math)"
    },
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

