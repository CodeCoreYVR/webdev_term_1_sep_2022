// Async example with debugger

function a() {
  console.log('a') // step over
}

function b() {
  a()
  console.log('b')
}

function c() {
  setTimeout(a) // step over
  b()
  console.log('c')
}

function d() {
  setTimeout(b, 1000) // step over
  c()
  console.log('d')
}

d() // step into