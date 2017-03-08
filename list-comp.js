//range function
const range = (start = 0, stop, step = 1) => {
  if(!stop){
  	stop = start
  	start = 0
  }
  return  [...Array(stop)].map((element, index) => index + start).filter(x => x%step == 0)
}

console.log(range(2, 12, 2))

let numbers = range(9)

console.log(numbers)

let doubled = [for (i of numbers) i * 2]

console.log(doubled)

let dbl = numbers.map(i => i * 2)

console.log(dbl)

let nums = [1, 2, 3, 21, 22, 30]
let evens = [for (i of nums) if (i % 2 === 0) i]
console.log(evens) // logs 2,22,30

