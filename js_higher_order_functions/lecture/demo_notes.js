// function saySomething(){
//   return "hello class"
// }

// function functionAccepter(fn){
//   console.log(fn())
// }

// functionAccepter(saySomething)

function add(a,b) {
  const total = a + b
  return total
}

function functionReturner(){
  return add
}

const adder = functionReturner();

console.log(typeof adder)
console.log(typeof add)
console.log(adder === add)

adder(4,3)
