const container = document.querySelector('#grid-container')

let mousePressed = false

document.addEventListener('mousedown', () => {
  mousePressed = true
})

document.addEventListener('mouseup', () => {
  mousePressed = false
})

for (let i = 0; i < 16 * 16; i++) {
  const cell = document.createElement('div')
  cell.classList.add('cell')
  container.appendChild(cell)
  cell.addEventListener('mouseover', () => {
    if (mousePressed) {
      cell.classList.add('filled')
    }
  })
  cell.addEventListener('mousedown', () => cell.classList.add('filled'))
}
