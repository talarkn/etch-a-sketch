const body = document.querySelector('body');
let gridRow;
let grid;
const gridContainer = document.querySelector('.grid-container');
const sqrBtn = document.querySelector('.sqr-nbr');
const clearBtn = document.querySelector('.clear');

let sqrs = 0;

sqrBtn.addEventListener('click', () => {
    if (sqrs === 0 || sqrs > 100) {
    sqrs = Number(prompt('How many squares?'));
    
    if (sqrs < 100) {
        for (let i = 0; i < sqrs; i++) {
            gridRow = document.createElement('div'); // add these outside the for loops? Before them?
            gridRow.classList.toggle('grid-row');
            gridContainer.appendChild(gridRow);
            for (let j = 0; j < sqrs; j++) {
                grid = document.createElement('div');
                gridRow.appendChild(grid);
                grid.classList.toggle('grid');
            }
        }
    }
    else {
        alert('Cannot input a number higher than 100. Try again!');
    }

    const grids = document.querySelectorAll('.grid');
    grids.forEach(grid => grid.addEventListener('mouseover', () => grid.classList.add('grid-color')));

}});

clearBtn.addEventListener('click', clear);

function clear() {
    if (sqrs > 0) {
        const gridRows = document.querySelectorAll('.grid-row');
        gridRows.forEach(gridRow => gridContainer.removeChild(gridRow));
    }
    sqrs = 0;
}