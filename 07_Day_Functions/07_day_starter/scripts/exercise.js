console.log("*".repeat(20))
console.log("day07 exercise start")
console.log("*".repeat(20))

function fullNameA() {
    console.log("ning")
}
fullNameA()

function fullNameB(firstName, lastName) {
    return `${firstName} ${lastName}`
}
console.log(fullNameB("mikasa", "Ackerman"))

function addNumbers(i, j) {
    return i + j
}
console.log("addNumbers(1,2): ", addNumbers(1,2))

function areaOfRectangle(i, j) {
    return i * j
}
console.log("areaOfRectangle(4,2): ", areaOfRectangle(4,2))

function perimeterOfRectangle(width, length) {
    return 2*(width+length)
}
console.log("perimeterOfRectangle(4,2): ", perimeterOfRectangle(4,2))


function volumeOfRectPrism(width, length,height) {
    return width*length*height
}
console.log("volumeOfRectPrism(4,2,2): ", volumeOfRectPrism(4,2, 2))

function areaOfCircle(r ){
    return Math.PI*r*r
}
console.log("areaOfCircle(2): ", areaOfCircle(2))

function circumOfCircle(r) {
    return 2*Math.PI*r
}
console.log("circumOfCircle(2): ", circumOfCircle(2))

function calcDensity(mass, volume) {
    return mass/volume
}
console.log("calcDensity(2, 1): ", calcDensity(2, 1))

function printArray(arr) {
    for (ele of arr) {
        console.log(ele)
    }
}
printArray(["A","B","C"])

function showDateTime() {
    now = new Date()
    console.log(now)
}
showDateTime()


function swapValues(x,y) {
    return [y, x]
}
z = swapValues(1, 2)
console.log("swapValues(1,2)",z)

function evensAndOdds(x) {
    let c1 = 0
    let c2 = 0
    for(let i= 0;i<=x;i++) {
        if (i %2 == 0) {
            c1++
        }else{
            c2++
        }
    }
    return [c2,c1]
}
console.log("evensAndOdds(100): ", evensAndOdds(100))

function isPrime(x) {
    let start = 2
    let end = parseInt(x/2)
    for(;start<=end;start++){
        if (x%start == 0) {
            return false
        }
    }
    return true

}
console.log("isPrime(2): ", isPrime(2))
console.log("isPrime(4): ", isPrime(4))
console.log("isPrime(7): ", isPrime(7))
console.log("isPrime(9): ", isPrime(9))
console.log("isPrime(11): ", isPrime(11))

console.log("*".repeat(20))
console.log("day07 exercise end")
console.log("*".repeat(20))