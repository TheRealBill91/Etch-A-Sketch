let divSquares;
let gridBorder = document.querySelector('.gridBorder');
const sixteenButton = document.querySelector('.sixteenButton');
const twentyFourButton = document.querySelector('.twentyFourButton');
const thirtyTwoButton = document.querySelector('.thirtyTwoButton');
let divSquareTwo = document.querySelectorAll('.divSquareTwo');
let divSquareOne = document.querySelectorAll('.divSquareOne');
let divSquareThree = document.querySelectorAll('.divSquareThree');

//Creates 16x16 grid
function initializeFirstGrid() {

    for (let i = 0; i < 256; i++) {
        divSquares = document.createElement('div');
        divSquares.classList.add('divSquareOne');
        gridBorder.appendChild(divSquares);
    }
    //console.log
}

function createFirstGrid() {
    let divSquareTwo = document.querySelectorAll('.divSquareTwo');
    let divSquareOne = document.querySelectorAll('.divSquareOne');
    let divSquareThree = document.querySelectorAll('.divSquareThree');

    //will probably need another conditional to determine if the divsquares are empty
    if (divSquareOne.length !== 0) {
        for (const div of divSquareOne) {
            div.parentNode.removeChild(div);
        }
    } else if (divSquareTwo.length !== 0) {
        for (const div of divSquareTwo) {
            div.parentNode.removeChild(div);
        }
    } else if (divSquareThree.length !== 0) {
        for (const div of divSquareThree) {
            div.parentNode.removeChild(div);
        }
    }

    initializeFirstGrid();
}

//Create 24x24 grid
function initializeSecondGrid() {
    for (let i = 0; i < 576; i++) {
        divSquares = document.createElement('div');
        divSquares.classList.add('divSquareTwo');
        gridBorder.appendChild(divSquares);
    }
}


function createSecondGrid() {
    let divSquareTwo = document.querySelectorAll('.divSquareTwo');
    let divSquareOne = document.querySelectorAll('.divSquareOne');
    let divSquareThree = document.querySelectorAll('.divSquareThree');

    //will prob need another conditional to determine if the divsquares are empty
    if (divSquareOne.length !== 0) {
        for (const div of divSquareOne) {
            div.parentNode.removeChild(div);
        }
    } else if (divSquareTwo.length !== 0) {
        for (const div of divSquareTwo) {
            div.parentNode.removeChild(div);
        }
    } else if (divSquareThree.length !== 0) {
        for (const div of divSquareThree) {
            div.parentNode.removeChild(div);
        }
    }

    initializeSecondGrid();

}
//Create 32x32 grid
function initializeThirdGrid() {
    for (let i = 0; i < 1024; i++) {
        divSquares = document.createElement('div');
        divSquares.classList.add('divSquareThree');
        gridBorder.appendChild(divSquares);
    }
}

function createThirdGrid() {
    let divSquareTwo = document.querySelectorAll('.divSquareTwo');
    let divSquareOne = document.querySelectorAll('.divSquareOne');
    let divSquareThree = document.querySelectorAll('.divSquareThree');

    //will prob need another conditional to determine if the divsquares are empty
    if (divSquareOne.length !== 0) {
        for (const div of divSquareOne) {
            div.parentNode.removeChild(div);
        }
    } else if (divSquareTwo.length !== 0) {
        for (const div of divSquareTwo) {
            div.parentNode.removeChild(div);
        }
    } else if (divSquareThree.length !== 0) {
        for (const div of divSquareThree) {
            div.parentNode.removeChild(div);
        }
    }

    initializeThirdGrid();

}

function sixteenGridListener() {
    const sixteenButton = document.querySelector('.sixteenButton');
    sixteenButton.addEventListener('click', createFirstGrid);

}

function twentyFourGridListener() {
    const twentyFourButton = document.querySelector('.twentyFourButton');
    twentyFourButton.addEventListener('click', createSecondGrid);

}

function thirtyTwoGridListener(){
    const thirtyTwoButton = document.querySelector('.thirtyTwoButton');
    thirtyTwoButton.addEventListener('click', createThirdGrid )
}



initializeFirstGrid();
//createSecondGrid();
//createThirdGrid();
sixteenGridListener();
twentyFourGridListener();
thirtyTwoGridListener();
