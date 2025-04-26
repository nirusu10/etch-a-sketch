const gridContainer = document.querySelector('#grid')
let mousedown = false

document.addEventListener('mousedown', () => (mousedown = true))
document.addEventListener('mouseup', () => (mousedown = false))

function createGrid() {
  gridContainer.innerHTML = ''
  for (let i = 0; i < 16 * 16; i++) {
    const cell = document.createElement('div')
    cell.classList.add('cell')
    cell.addEventListener('mousedown', (e) => {
      e.target.classList.add('filled')
    })
    cell.addEventListener('mouseenter', (e) => {
      if (mousedown) {
        e.target.classList.add('filled')
      }
    })
    gridContainer.appendChild(cell)
  }
}

createGrid()
