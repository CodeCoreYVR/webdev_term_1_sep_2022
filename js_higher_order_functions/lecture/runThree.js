const runThree = function(func){
  func();
  func();
  func();
}

const sayHello = function(){
  console.log("hello world")
}

const sayBye = function(){
  console.log('goodbye my old friend')
}
runThree(sayHello)
runThree(sayBye)
// sayHello()
// sayHello()
// sayHello()
// sayBye()
// sayBye()
// sayBye()
