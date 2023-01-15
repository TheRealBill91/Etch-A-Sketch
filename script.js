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
    handleSmallGridMouseover();
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
    handleMediumGridMouseover();

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
    handleLargeGridMouseover();

}

function handleSmallGridButton() {
    const sixteenButton = document.querySelector('.sixteenButton');
    sixteenButton.addEventListener('click', createFirstGrid);

}

function handleMediumGridButton() {
    const twentyFourButton = document.querySelector('.twentyFourButton');
    twentyFourButton.addEventListener('click', createSecondGrid);

}

function handleLargeGridButton() {
    const thirtyTwoButton = document.querySelector('.thirtyTwoButton');
    thirtyTwoButton.addEventListener('click', createThirdGrid)
}

function handleSmallGridMouseover() {
    let divSquareOne = document.querySelectorAll('.divSquareOne');
    if (divSquareOne.length !== 0) {
        console.log(divSquareOne.length);
        divSquareOne.forEach(divSquareOne =>
            divSquareOne.addEventListener('mouseover', smallGridEventChange));
    } else {
        return;
    }
}

function smallGridEventChange(event) {
    let randomColor = returnRandomColor();
    this.style.backgroundColor = randomColor;
}

function handleMediumGridMouseover() {
    let divSquareTwo = document.querySelectorAll('.divSquareTwo');
    if (divSquareTwo.length !== 0) {
        console.log(divSquareTwo.length);
        divSquareTwo.forEach(divSquareTwo => divSquareTwo.addEventListener('mouseover', mediumGridEventChange))
    } else {
        return
    }
}

function mediumGridEventChange(event) {
    let randomColor = returnRandomColor();
    this.style.backgroundColor = randomColor;
}

function handleLargeGridMouseover() {
    let divSquareThree = document.querySelectorAll('.divSquareThree');
    if (divSquareThree.length !== 0) {
        console.log(divSquareThree.length);
        divSquareThree.forEach(divSquareThree => divSquareThree.addEventListener('mouseover', largeGridEventChange))
    } else {
        return
    }
}

function largeGridEventChange(event){
    let randomColor = returnRandomColor();
    this.style.backgroundColor = randomColor;
}




function returnRandomColor() {
    const varietyOfColors = ['blue', 'green', 'brown', 'purple', 'black',];
    let randomIndex = Math.floor(Math.random() * 5);
    return varietyOfColors[randomIndex];
}

initializeFirstGrid();
//createSecondGrid();
//createThirdGrid();
handleSmallGridButton();
handleMediumGridButton();
handleLargeGridButton();
// handleSmallGridMouseover();
// handleMediumGridMouseover();

//console.log(divSquares.length);