

// homework assignment


console.log("*".repeat(20))
console.log("day02 exercise start")
console.log("*".repeat(20))


let challenge = '30 Days Of JavaScript';
console.log(challenge)
console.log("challenge.length: ", challenge.length)
console.log("challenge.toUpperCase: ", challenge.toUpperCase())
console.log("challenge.toLowerCase: ", challenge.toLowerCase())
console.log("challenge.substring: ", challenge.substring(3, 7))
console.log("challenge.substring: ", challenge.substr(3, 4))
console.log("challenge.includes(\"Script\"): ", challenge.includes("Script"))
let arr = challenge.split(" ")
console.log("arr: ", arr)
let arr2 = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon';
console.log("split string: ", arr2.split(", "))
console.log("challenge.replace: ", challenge.replace("30 Days Of JavaScript", "30 Days Of Python"))
console.log("challenge.charAt(15): ", challenge.charAt(15))
console.log("challenge.charAt(15): ", challenge.charCodeAt(15))
console.log("challenge.indexOf('a'): ", challenge.indexOf('a'))
console.log("challenge.indexOf('a'): ", challenge.lastIndexOf('a'))

let sss = 'You cannot end a sentence with because because because is a conjunction'
console.log("sss.indexOf: ", sss.indexOf('because'))
let s3 = 'You cannot end a sentence with because because because is a conjunction'
console.log("s3.search: ", s3.search('because'))


console.log("challenge.startsWith: ", challenge.startsWith('30'))
console.log("challenge.endsWith: ", challenge.endsWith('JavaScript'))
console.log("challenge.match: ", challenge.match('a'))
console.log("string.concat: ", "30 Days of".concat('JavaScript'))

// generate number by using Math.random()
console.log("random number between 0 and 100: ", Math.random()*100)
console.log("random number between 50 and 100: ", Math.random()*50+50)
console.log("random number between 0 and 255: ", Math.random()*255)

// access string character 
let s5 = "JavaScript"
let idx = parseInt(Math.random()*s5.length)
console.log("random string index access: ", idx, s5[idx])

console.log("parseInt(\"3.5\"): ", parseInt("3.5"))
console.log("parseInt(\"3.9\"): ", parseInt("3.9"))
console.log("parseInt(\"3.99999\"): ", parseInt("3.99999"))

console.log("1\t1\t1\t1\t1\n")
console.log("2\t1\t2\t4\t8\n")
console.log("3\t1\t3\t9\t27\n")
console.log("4\t1\t4\t16\t64\n")
console.log("5\t1\t5\t25\t125\n")

let s6 = 'You cannot end a sentence with because because because is a conjunction'
let start = s6.indexOf('because')
let end = s6.lastIndexOf('because')
console.log("string.substr: (include because): ", s6.substring(start, end+1+'because'.length))

let s7 = 'Love is the best thing in this world. Some found their love and some are still looking for their love.'
console.log("string.count: ", s7.match('love').length)
console.log("*".repeat(20))
console.log("day02 exercise end")
console.log("*".repeat(20))
