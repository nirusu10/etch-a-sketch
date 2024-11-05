const container = document.querySelector('#grid-container')
const newGridButton = document.querySelector('#new-grid-button')

let mousePressed = false

document.addEventListener('mousedown', () => {
  mousePressed = true
})

document.addEventListener('mouseup', () => {
  mousePressed = false
})

newGridButton.addEventListener('click', () => {
  let size

  do {
    size = parseInt(prompt('How many cells wide should your grid be?'))
  } while (Number.isNaN(Number(size)))
  generateGrid(size)
})

function generateGrid(size) {
  container.innerHTML = ''
  for (let i = 0; i < size * size; i++) {
    const cell = document.createElement('div')
    cell.style.cssText = `width: ${800 / size}px; height: ${
      800 / size
    }px; border: 1px solid gray; user-select: none`

    container.appendChild(cell)
    cell.addEventListener('mouseover', () => {
      if (mousePressed) {
        cell.classList.add('filled')
      }
    })
    cell.addEventListener('mousedown', () => cell.classList.add('filled'))
  }
}

generateGrid(16)
