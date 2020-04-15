let numSquares = 6;
let colors = generateRandomColors(numSquares);
let chosenColor = chooseColor();
let colorDisplay = document.getElementById("color-display");
let squares = document.getElementsByClassName("square");
let message = document.getElementById("message");
let h1 = document.querySelector("h1");
let resetButton = document.getElementById("reset");
let modeButtons = document.getElementsByClassName("mode");
// let easyButton = document.getElementById("easy");
// let hardButton = document.getElementById("hard");
init();

function init() {
    setModeButtons();
    resetButton.addEventListener("click", function() {
        setBoard();
        setSquares();
        message.textContent = "";
        this.textContent = "New Colors";
    })
    colorDisplay.textContent = chooseColor();
    setSquares();
}

function setModeButtons() {
    for (let i = 0; i < modeButtons.length; i++) {
        modeButtons[i].addEventListener("click", function() {
            for (let j = 0; j < modeButtons.length; j++) {
                modeButtons[j].classList.remove("selected");
            }
            modeButtons[i].classList.add("selected");
            if (i == 0) {
                numSquares = 3;
            }
            else if (i == 3) {
                numSquares = 6;
            }
            setBoard();
            for (let k = 0; k < squares.length; k++) {
                if (colors[k]) {
                    squares[k].style.backgroundColor = colors[k];
                    sqaures[k].style.display = "block";
                }
                else {
                    squares[i].style.display = "none";
                }
            }
        });
    }
}

function setBoard() {
    colors = generateRandomColors(numSquares);
    chosenColor = chooseColor();
    colorDisplay.textContent = chosenColor;
    resetButton.textContent = "Change Colors";
    h1.style.background = "steelblue";
}

function setSquares() {
    for (let i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = colors[i];
        squares[i].addEventListener("click", function() {
            let clickedColor = this.style.backgroundColor;
            if (clickedColor === chosenColor) {
                message.textContent = "Correct";
                changeColors(clickedColor);
                h1.style.backgroundColor = chosenColor;
                resetButton.textContent = "Play Again?";
            }
            else {
                this.style.backgroundColor = "#232323";
                message.textContent = "Try Again";
            }
        })
    }
}

function generateRandomColors(squares) {
    let colors = []
    for (let i = 0; i < squares; i++) {
        colors.push(randomColor());
    }
    return colors;
}

function randomColor() {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    let color = "rgb(" + r + ", " + g + ", " + b + ")";
    return color;
}

function changeColors(color) {
    for (let i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = color;
    }
}

function chooseColor() {
    let random = Math.floor(Math.random() *  colors.length);
    return colors[random];
}