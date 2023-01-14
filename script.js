let divSquares;
let gridBorder = document.querySelector('.gridBorder');

function createDivSquares() {
    for (let i = 0; i < 256; i++) {
        divSquares = document.createElement('div');
        divSquares.classList.add('divSquare');
        gridBorder.appendChild(divSquares);
    }


    //console.log


}

createDivSquares();