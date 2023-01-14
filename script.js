let divSquares;
let gridBorder = document.querySelector('.gridBorder');

//Creates 16x16 grid
function createFirstGrid() {
    for (let i = 0; i < 256; i++) {
        divSquares = document.createElement('div');
        divSquares.classList.add('divSquareOne');
        gridBorder.appendChild(divSquares);
    }
    //console.log
}

//Create 24x24 grid
function createSecondGrid(){
    for (let i = 0; i < 576; i++){
        divSquares = document.createElement('div');
        divSquares.classList.add('divSquareTwo');
        gridBorder.appendChild(divSquares);
    }
}

//createFirstGrid();
createSecondGrid();
