const grid = document.querySelector('.grid');
const gridRect = grid.getBoundingClientRect();
const gridWidth = gridRect.width;
const gridHeight = gridRect.height;

const ROWS_INITIAL = 16;

function createGrid(rows) {
    grid.innerHTML = '';

    const columns = Math.floor(gridWidth / gridHeight * rows);
    const squareWidth = gridWidth / columns;
    const squareHeight = gridHeight / rows;

    for (let i=0; i < rows * columns; i++) {
        const gridSquare = document.createElement('div');
        gridSquare.classList.add('square');
        gridSquare.style.height = `${squareHeight}px`;
        gridSquare.style.width = `${squareWidth}px`;
        grid.appendChild(gridSquare);
    }
}

createGrid(ROWS_INITIAL);

