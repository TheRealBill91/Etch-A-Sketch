let divSquares;
let gridBorder = document.querySelector('.gridBorder');

//Creates 16x16 grid
function createFirstGrid() {
    for (let i = 0; i < 256; i++) {
        divSquares = document.createElement('div');
        divSquares.classList.add('divSquare');
        gridBorder.appendChild(divSquares);
    }


    //console.log


}

createDivSquares();