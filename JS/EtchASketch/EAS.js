
const grid = document.getElementById('grid');
const slider = document.getElementById('slider')
let gridSizeDisplay = document.getElementById('gridSizeDisplay')
defaultColor = '#000000';
selectedColor = defaultColor;
let setting = 'color';

const colorPicker = document.getElementById('colorPicker');
const erase = document.getElementById('erase');
colorPicker.addEventListener('click', () => settingToColor());
colorPicker.addEventListener('input', (e) => getColor(e));

let mouseDown = false;
document.body.onmousedown = () => {mouseDown = true}
document.body.onmouseup = () => (mouseDown = false);

slider.value = 16;
let gridSize = slider.value;

slider.addEventListener('change', (e) => updateGrid(e.target.value));
erase.onclick = () => updateGrid(gridSize);

updateGridSize(gridSize)
makeGrid(gridSize)

function makeGrid(size) {
    grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`
    grid.style.gridTemplateRows = `repeat(${size}, 1fr)`
    
    for (let i = 0; i < size * size; i++) {
      const grid_cell = document.createElement('div');
      grid.style.columnGap = `1px`;
      grid.style.rowGap = grid.style.columnGap;
      grid_cell.classList.add('grid_cell');
      grid_cell.addEventListener('mousechange', (e) => updateColor(e));
      grid_cell.addEventListener('click', (e) => updateColor(e));
      grid_cell.addEventListener('mouseover', (e) => updateColor(e));
      grid.appendChild(grid_cell);
    }
  }



  function settingToColor(){
    setting = 'color';
  }
  function updateColor(e){
       if (e.type === 'mouseover' &&  mouseDown === false) return
      
       else if (setting = 'color'){ 
       e.target.style.backgroundColor  = selectedColor;
    }
    else  {
  
    }
  }

  function getColor(e){
    console.log(e);
    selectedColor = e.target.value;
  }

  function refreshGrid(value) {
    grid.innerHTML = '';
    makeGrid(value);
  }

  function updateGrid(value) {
    refreshGrid(value)
    updateGridSize(value)
  }

  function updateGridSize(value) {
  gridSize = value;
  gridSizeDisplay.innerHTML = `${gridSize} x ${gridSize}`;
  }



