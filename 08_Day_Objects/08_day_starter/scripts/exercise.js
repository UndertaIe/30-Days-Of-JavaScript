console.log("*".repeat(20))
console.log("day08 exercise start")
console.log("*".repeat(20))


// name, legs, color, age and bark properties for the dog object. The bark property is a method which return woof woof
// Add name, legs, color, age and bark properties for the dog object. The bark property is a method which return woof woof
// Get name, legs, color, age and bark value from the dog object
// Set new properties the dog object: breed, getDogInfo
const dog = {
    name:'dogA',
    legs:'l',
    color:'black',
    age: 4,
    bark: function() {
        return 'woof woof'
    }
} 
console.log(dog)
console.log("dog.name: ", dog.name)
console.log("dog.name: ", dog['name'])
console.log("dog.color: ", dog.color)
console.log("dog.age: ", dog.age)
console.log("dog.bark: ", dog.bark())

dog.breed = "b"
dog.getDogInfo = function() {
    return `name: ${this.name}, age: ${this.age} `
}
console.log("getDogInfo: ", dog.getDogInfo())


















console.log("*".repeat(20))
console.log("day08 exercise end")
console.log("*".repeat(20))