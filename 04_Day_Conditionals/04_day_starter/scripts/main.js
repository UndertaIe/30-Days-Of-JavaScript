// this is your main.js script

// alert('Open the browser console whenever you work on JavaScript')

if (1>2) {
    console.log("it's not impossible")
}else{
    console.log("...")
}

i = 1
if (i != 1) {
    console.log("i != 1")
}else if (i == 1) {
    console.log("i = 1")
}

i = 2
if (i < 1) {
    console.log("i != 1")
}else if (i == 1) {
    console.log("i = 1")
}else{
    console.log("i > 1")
}

i = 3

switch (i) {
    case 1:
        console.log("i = 1")
    case 2:
        console.log("i = 2")
    case 3:
        console.log("i = 3")
    default:
        console.log("unknown i values")
}

// Ternary Operators
 qq = "123";
(qq =="123" ) ? console.log(`qq = "123"`) : console.log(`qq = "123"`)

// 80-100, A
// 70-89, B
// 60-69, C
// 50-59, D
// 0-49, F
x = 70; // err
var grade;
switch (x) {
    case 80<=x<=100:
        grade = 'A';  
    case 70<=x<=89:
        grade = 'B';  
    case 60<=x<=69:
        grade = 'C';  
    case 50<=x<=59:
        grade = 'D';  
    case x<=49:
        grade = 'F';  
}
console.log("grade: " + grade);