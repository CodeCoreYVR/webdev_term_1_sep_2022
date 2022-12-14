const add = (a,b) =>  a + b
const subtract = (a,b) => a - b

const flip = fn =>
  (a,b) =>
    (fn(b, a))

const func = add(1,2)
console.log(flip(add)(1,2))
console.log(flip(subtract)(5, 10))

const V = x =>
   y =>
     z =>
       x + y + z

// can also be condensed downn to one line, it's preference
// const V = x = y => z => x + y + z


