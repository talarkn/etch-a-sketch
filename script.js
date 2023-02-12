const body = document.querySelector('body');
const gridContainer = document.querySelector('.grid-container');

for (let i = 0; i < 16; i++) {
    const gridRow = document.createElement('div');
    gridRow.classList.toggle('grid-row');
    gridContainer.appendChild(gridRow);
    for (let j = 0; j < 16; j++) {
        const div = document.createElement('div');
        gridRow.appendChild(div);
        div.classList.toggle('grid');
    }
}

const grids = document.querySelectorAll('.grid');

grids.forEach(grid => grid.addEventListener('mouseover', () => grid.classList.add('grid-color')));