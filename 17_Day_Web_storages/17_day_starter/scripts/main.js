
localStorage.setItem('name', 'mikasa')
console.log(localStorage.getItem('name'))

let skills = [
    { tech: 'HTML', level: 10 },
    { tech: 'CSS', level: 9 },
    { tech: 'JS', level: 8 },
    { tech: 'React', level: 9 },
    { tech: 'Redux', level: 10 },
    { tech: 'Node', level: 8 },
    { tech: 'MongoDB', level: 8 }
]
  
let skillJSON = JSON.stringify(skills)
localStorage.setItem('skills', skillJSON)
console.log(localStorage.getItem('skills'))

let langs = ["Java","JavaScript","Go","C++"]
localStorage.setItem('langs', langs)
console.log(localStorage.getItem('langs'))
console.log(langs.toString());

localStorage.setItem('age', 200)
console.log(localStorage);

console.log("skills type: ", typeof localStorage.getItem("skills"))

// localStorage.clear()