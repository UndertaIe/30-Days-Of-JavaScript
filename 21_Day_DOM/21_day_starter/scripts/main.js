
console.group("document.getElementsByTagName")
const allTitles = document.getElementsByTagName('h1')
for (let i = 0; i < allTitles.length; i++) {
  console.log(allTitles[i]) // prints each elements in the HTMLCollection
}
console.groupEnd()

console.group("document.getElementsByClassName")
const allTitles2 = document.getElementsByClassName('title')
for (let i = 0; i < allTitles2.length; i++) {
    console.log(allTitles2[i]) // prints each elements in the HTMLCollection
  }
console.groupEnd()

console.group("document.getElementById")
let firstTitle = document.getElementById('first-title')
console.log(firstTitle, typeof firstTitle) // <h1>First Title</h1>
console.groupEnd()


// =================== document.querySelector ===================
console.group("document.querySelector")
console.group("#id")
let firstTitles = document.querySelector('#first-title')
console.log(firstTitles, typeof firstTitles) // <h1>First Title</h1>
console.groupEnd()

console.group(".class")
let firstTitles2 = document.querySelector('.title')
console.log(firstTitles2, typeof firstTitles2) // <h1>First Title</h1>
console.groupEnd()

console.group("tagName")
let firstTitles3 = document.querySelector('h1')
console.log(firstTitles3, typeof firstTitles3) // <h1>First Title</h1>
console.groupEnd()

console.groupEnd()


// =================== document.querySelectorAll ===================
console.group("document.querySelectorAll")

console.group("#id")
let firstTitles4 = document.querySelectorAll('#first-title')
console.log(firstTitles4, typeof firstTitles4) // <h1>First Title</h1>
for (ele of firstTitles4) {
    console.log(ele)
}
console.groupEnd()

console.group(".class")
let firstTitles5 = document.querySelectorAll('.title')
console.log(firstTitles5, typeof firstTitles5) // <h1>First Title</h1>
for (ele of firstTitles5) {
    console.log(ele)
}
console.groupEnd()

console.group("tagName")
let firstTitles6 = document.querySelectorAll('h1')
console.log(firstTitles6, typeof firstTitles6) // <h1>First Title</h1>
console.groupEnd()

console.groupEnd()

function setAttr() {
    const titles = document.querySelectorAll('h1')
    titles[3].className = 'title'
    titles[3].id = 'fourth-title'
}
// setAttr()

function setAttr2() {
    const titles = document.querySelectorAll('h1')
    titles[3].setAttribute('class', 'title')
    titles[3].setAttribute('id', 'fourth-title')
}
setAttr2()

function appendClassVals() {
    const titles = document.querySelectorAll('h1')
    titles[3].classList.add('header-title')
}
appendClassVals()

function removeClassVals() {
    const titles = document.querySelectorAll('h1')
    titles[3].classList.remove('header-title','title')
}
removeClassVals()

function addText() {
    const titles = document.querySelectorAll('h1')
    titles[0].textContent = 'First Text has been modified'
}
addText()

function addInnerHTML() {
    const lists = `
    <li>30DaysOfPython Challenge Done</li>
            <li>30DaysOfJavaScript Challenge Ongoing</li>
            <li>30DaysOfReact Challenge Coming</li>
            <li>30DaysOfFullStack Challenge Coming</li>
            <li>30DaysOfDataAnalysis Challenge Coming</li>
            <li>30DaysOfReactNative Challenge Coming</li>
            <li>30DaysOfMachineLearning Challenge Coming</li>`
    // const ul = document.querySelector('ul')
    const ul = document.querySelector('.list')
    ul.innerHTML = lists
}
addInnerHTML()

function removeInnerHTML() {
    const ul = document.querySelector('ul')
    ul.innerHTML = ''
}
// removeInnerHTML()

// ==================== element style ===============
function addElementStyles() {
    const items = document.querySelectorAll('.list li')
    items.forEach((item, i) => {
        item.style.fontSize = '24px'; 
        i % 2 === 0 ? item.style.color = 'blue' : item.style.color = 'gray'
        i % 2 === 0 ? item.style.backgroundColor  = 'green' : item.style.backgroundColor  = 'blue'
        i % 2 === 0 ? item.style.fontSize  = '24px' : item.style.fontSize  = '30px'
    })
}
addElementStyles()


