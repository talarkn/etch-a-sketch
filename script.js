const body = document.querySelector('body');
const gridContainer = document.querySelector('.grid-container');
const btn = document.querySelector('button');

let sqrs = 0;

btn.addEventListener('click', () => {
    sqrs = Number(prompt('How many squares?'));

    if (sqrs < 100) {
        for (let i = 0; i < sqrs; i++) {
            const gridRow = document.createElement('div');
            gridRow.classList.toggle('grid-row');
            gridContainer.appendChild(gridRow);
            for (let j = 0; j < sqrs; j++) {
                const div = document.createElement('div');
                gridRow.appendChild(div);
                div.classList.toggle('grid');
            }
        }
    }
    else {
        alert('Cannot input a number higher than 100. Try again!');
    }

    const grids = document.querySelectorAll('.grid');
    grids.forEach(grid => grid.addEventListener('mouseover', () => grid.classList.add('grid-color')));
});
