// parseInt()
// Number()
// Plus sign(+)
// =========cast string to int ================

let num = '10'
let numInt = parseInt(num)
console.log(num, typeof num) // 10
console.log(numInt, typeof numInt) // 10

let num2 = '10'
let numInt2 = Number(num)
console.log(num2, typeof num2) // 10
console.log(numInt2, typeof numInt2) // 10

let num3 = '10'
let numInt3 = +(num)
console.log(num3, typeof num3) // 10
console.log(numInt3, typeof numInt3) // 10

// =========== cast error ===============


let bs = 's1'
let n = +bs
console.log(n, typeof n)

let ns = ' 1'
let nn = +ns
console.log(nn, typeof nn)

// ============= cast string to float ==========

// Number("1.2")
// +"1.2"
// parseFloat("1.2")

let fs = "1.2"
console.log(Number(fs), typeof Number(fs))
console.log(+fs, typeof +fs)
console.log(parseFloat(fs), typeof parseFloat(fs))