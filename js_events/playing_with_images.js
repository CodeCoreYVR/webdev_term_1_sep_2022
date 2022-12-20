images = document.querySelectorAll('img')

images.forEach(image =>
  image.addEventListener('mouseenter', () => {
    image.style.opacity = "0.5"
  })
)

images.forEach(image =>
  image.addEventListener('mouseleave', () => {
    image.style.opacity = "1"
  })
)

images.forEach(image =>
  image.addEventListener('mousedown', () => {
    image.style.opacity = "0"
  })
)

images.forEach(image =>
  image.addEventListener('mouseup', () => {
    image.style.opacity = "1"
  })
)
