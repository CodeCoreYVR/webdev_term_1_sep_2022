document.addEventListener('keydown', (e) =>{
  console.log(e)
  if(e.key ==="r") {
    document.body.style.backgroundColor = "red"
  } else if (e.key === "b"){
    document.body.style.backgroundColor = "blue"
  } else if (e.key === "g"){
    document.body.style.backgroundColor = "green"
  }
})

document.addEventListener('keyup',() => {
  document.body.style.backgroundColor = ""
})
