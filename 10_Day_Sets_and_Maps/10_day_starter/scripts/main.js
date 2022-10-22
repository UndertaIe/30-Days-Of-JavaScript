

const sets = new Set()
console.log(sets)

arr = [1,2,3,1]
const sets2 = new Set(arr)
console.log(sets2)

sets.add(1)
sets.add('AB')
console.log(sets)

console.log(sets.keys())
console.log(sets.values())

sets.delete('AB')
console.log(sets)

sets.clear()
console.log(sets)



const map = new Map()
console.log(map)

countries2 = new Set(
    [['Finland', 'Helsinki'],
    ['Sweden', 'Stockholm'],
    ['Norway', 'Oslo']
]);
// countries2= [
//     ['Finland', 'Helsinki'],
//     ['Sweden', 'Stockholm'],
//     ['Norway', 'Oslo'],
//   ]

const map2 = new Map(countries2)
console.log(map2)
console.log(map2.size)

map2.set('1','2')
console.log(map2)

map2.set(1,'2')
console.log(map2)

let v = map2.get(1)
console.log("map2[1]: ", v)
console.log(map2[1])

map2.delete(1)
map2.delete('1')
map2.delete("Norway")
console.log(map2)

map2.clear()
console.log(map2)

