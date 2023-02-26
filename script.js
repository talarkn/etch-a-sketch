const body = document.querySelector('body');
const gridContainer = document.querySelector('.grid-container');
const sqrBtn = document.querySelector('.sqr-nbr');
const clearBtn = document.querySelector('.clear');
const blackWhite = document.querySelector('.bw');
const randomColor = document.querySelector('.random');
const eraser = document.querySelector('.eraser');

let gridRow;
let grid;
let sqrs = 0;

function clear() {
    if (sqrs > 0) {
        const gridRows = document.querySelectorAll('.grid-row');
        gridRows.forEach(gridRow => gridContainer.removeChild(gridRow));
    }
    sqrs = 0;
}

function colorGrid(aColor) {
    const grids = document.querySelectorAll('.grid');
    grids.forEach(grid => grid.addEventListener('mouseover', () => grid.style.backgroundColor = aColor));
}

function getColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

sqrBtn.addEventListener('click', () => {
    if (sqrs === 0 || sqrs > 100) {
    sqrs = Number(prompt('How many squares?'));
    
    if (sqrs <= 100) {
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
}});

blackWhite.addEventListener('click', () => colorGrid('black'));
randomColor.addEventListener('click', () => colorGrid(getColor()));
eraser.addEventListener('click', () => colorGrid('white'));
clearBtn.addEventListener('click', clear);