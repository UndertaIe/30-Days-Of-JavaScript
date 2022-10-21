console.log(countries)
// alert('Open the console and check if the countries has been loaded')

for(let i = 0; i <= 5; i++){
    console.log(`${i} * ${i} = ${i * i}`)
}


const countries2 = ['Finland', 'Sweden', 'Denmark', 'Norway', 'Iceland']
const newArr = []
for(let i = 0; i < countries2.length; i++){
  newArr.unshift(countries2[i].toUpperCase()) // 左 shift，unshift 右pop，push
}
console.log(newArr)
 // f loop for arrays
for ( element of newArr) {
    console.log(element)
  }


let i = 0
while (i <= 5) {
  console.log(i)
  i++
}
console.log(i)

let j = 0
do {
  console.log(j)
  j++
} while (j <= 5)
console.log(j)


// break
let x = 0
for (; x < 10; x++) {
    console.log(x)
    if (x > 3){
        break
    }
}
console.log("x is ", x)

// break
for (; x < 10; x++) {
    if (x === 8 ){
        continue
    }
    console.log(x)
    
}
console.log("x is ", x)


function sumAllNums() {
  let sum = 0
  for (let i = 0; i < arguments.length; i++) {
    sum += arguments[i]
  }
  return sum
}

console.log("sumAllNums: ", sumAllNums(1, 2, 3, 4)) // 10
console.log("sumAllNums: ", sumAllNums(10, 20, 13, 40, 10))  // 93