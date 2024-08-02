const grid = document.querySelector('.grid');
const gridRect = grid.getBoundingClientRect();
const gridWidth = gridRect.width;
const gridHeight = gridRect.height;

// Keep track of whether the mouse button is down while in the grid
let isMouseDown = false;
grid.addEventListener('mousedown', () => {isMouseDown = true;});
grid.addEventListener('mouseup', () => {isMouseDown = false});
grid.addEventListener('mouseleave', () => {isMouseDown = false});

// Code to create grid
const ROWS_INITIAL = 30;
createGrid(ROWS_INITIAL);
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
        gridSquare.addEventListener('mousedown', fillSquare);
        gridSquare.addEventListener('mouseenter', () => {
            if (isMouseDown) fillSquare({ target: gridSquare });
        })
        grid.appendChild(gridSquare);
    }
}

// Code for Resets
const sliderRange = document.querySelector('.slider_range');
const sliderValue = document.querySelector('.slider_value');

sliderRange.addEventListener('input', () => {
    sliderValue.textContent = sliderRange.value;
});

// Toggle the reset popup with reset/confirm buttons
const btnReset = document.querySelector('button.reset'); 
const btnConfirm = document.querySelector('.btn_confirm');
const popup = document.querySelector('.popup');

btnReset.addEventListener('click', () => {
    popup.classList.toggle('show_reset');
});

btnConfirm.addEventListener('click', () => {
    createGrid(sliderRange.value);
    popup.classList.toggle('show_reset');
})


// Add color options
const btnBlack = document.querySelector('.btn_black');
const btnGray = document.querySelector('.btn_gray');
const btnRainbow = document.querySelector('.btn_rainbow');
const btnErase = document.querySelector('.btn_erase');

btnBlack.addEventListener('click', () => {
    selectedColor = 'black';
})
btnGray.addEventListener('click', () => {
    selectedColor = 'gray';
}) 
btnErase.addEventListener('click', () => {
    selectedColor = 'inherit';
})
btnRainbow.addEventListener('click', () => {
    selectedColor = 'rainbow';
})

let selectedColor = 'black'; // Initial color

function fillSquare (event) {
    event.target.style.backgroundColor = selectedColor;
}

/* 
Next steps:
- work on color/eraser options
- color button click animations
- improve slider UI
- improve drawing experience (less choppy)
*/

