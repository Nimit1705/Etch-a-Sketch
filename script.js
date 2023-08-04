var container = document.querySelector('.container');
let currentColor = "#444";
let buttonState = false;
let gridSize = 16;
const colorPicker = document.getElementById('colorPicker')

var grid = document.getElementById('grid');





for(var j = 0; j < gridSize; j++ ){
    const line = document.createElement('div');
    line.setAttribute('class', 'line');
    container.appendChild(line);

    for (var i = 0; i < gridSize; i++) {
        var newGrid = document.createElement('div');
        newGrid.setAttribute('class', 'grid');
        container.appendChild(newGrid);

    }
}

let block = document.querySelectorAll(".grid");
beginGrid(block)
function beginGrid(block){
    block.forEach(block => {
        block.addEventListener('mouseenter', () => {
            block.style.backgroundColor = currentColor;
        });
    });
}

function clear(block){
    block.forEach(block => {
        block.style.cssText = "background-color: white";
    });
}

let resetBtn = document.querySelector('.reset');
resetBtn.addEventListener('click', () => {
    clear(block);
});


colorPicker.oninput = (e) => setCurrentColor(e.target.value);

function setCurrentColor(newColor) {
    currentColor = newColor;
}
