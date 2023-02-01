let divSquares;
let selectedColor = 'grey';
let gridBorder = document.querySelector('.gridBorder');
const sixteenButton = document.querySelector('.sixteenButton');
const twentyFourButton = document.querySelector('.twentyFourButton');
const thirtyTwoButton = document.querySelector('.thirtyTwoButton');
const redButtonSelector = document.querySelector('.redButtonSelector');
const rainbowButtonSelector = document.querySelector('.rainbowButtonSelector');
const greenButtonSelector = document.querySelector('.greenButtonSelector')
let divSquareTwo = document.querySelectorAll('.divSquareTwo');
let divSquareOne = document.querySelectorAll('.divSquareOne');
let divSquareThree = document.querySelectorAll('.divSquareThree');

let rainbowMode = false;

//Creates 16x16 grid
function initializeFirstGrid() {

    for (let i = 0; i < 256; i++) {
        divSquares = document.createElement('div');
        divSquares.classList.add('divSquareOne');
        gridBorder.appendChild(divSquares);
    }

    handleSmallGridMouseover();

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

    rainbowMode = false;
    selectedColor = 'grey';
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

    selectedColor = 'grey';
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

    rainbowMode = false;
    selectedColor = 'grey';
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

    rainbowMode = false;
    selectedColor = 'grey';
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
    thirtyTwoButton.addEventListener('click', createThirdGrid);
    selectedColor = 'grey';
    
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

function smallGridEventChange() {
    if (rainbowMode)
        this.style.backgroundColor = returnRandomColor();
    else
        this.style.backgroundColor = selectedColor;
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

function mediumGridEventChange() {
    if (rainbowMode)
        this.style.backgroundColor = returnRandomColor();
    else
        this.style.backgroundColor = selectedColor;
}

function handleLargeGridMouseover() {
    let divSquareThree = document.querySelectorAll('.divSquareThree');
    if (divSquareThree.length !== 0) {
        divSquareThree.forEach(divSquareThree => divSquareThree.addEventListener('mouseover', largeGridEventChange))
    } else {
        return
    }
}

function largeGridEventChange() {
    if (rainbowMode)
        this.style.backgroundColor = returnRandomColor();
    else
        this.style.backgroundColor = selectedColor;

}


function returnRandomColor() {
    const varietyOfColors = ['blue', 'green', 'brown', 'purple', 'black', 'pink', 'organge', 'yellow',];
    let randomIndex = Math.floor(Math.random() * 8);
    return varietyOfColors[randomIndex];



}

function rainbowSizeDetermination() {
    let divSquareTwo = document.querySelectorAll('.divSquareTwo');
    let divSquareOne = document.querySelectorAll('.divSquareOne');

    if (divSquareOne.length !== 0) {
        smallGridEventChange();
    } else if (divSquareTwo.length !== 0) {
        mediumGridEventChange();
    } else {
        largeGridEventChange();
    }
}


function returnRed() {
    rainbowMode = false;
    selectedColor = 'red';
    return selectedColor;
}

function returnGreen() {
    rainbowMode = false;
    selectedColor = 'green';
    return selectedColor;
}


function redButtonListener() {
    redButtonSelector.addEventListener('click', returnRed);

}

function rainbowButtonListener() {
    rainbowButtonSelector.addEventListener('click', rainbowSizeDetermination => {
        rainbowMode = true;

    });
}

function greenButtonListener() {
    greenButtonSelector.addEventListener('click', returnGreen);
}

initializeFirstGrid();
handleSmallGridButton();
handleMediumGridButton();
handleLargeGridButton();
redButtonListener();
rainbowButtonListener();
greenButtonListener();
// handleSmallGridMouseover();
// handleMediumGridMouseover();

//console.log(divSquares.length);