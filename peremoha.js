let currChickenTile;
let currZhidTile;
let score = 0;
let gameover = false;
// let btn = document.querySelector(".restart-button");

window.onload = function() {
    setGame();
}

const createElement = (tag,classElem,append) => {
    let element = document.createElement(tag)
    element.classList.add(classElem)
    append.append(element)
}

// const startGame = () => {
//     createElement('button','restart-button',btn)
// }
// startGame


function setGame() {
    // setka dlya game polya
    for (let i = 0; i < 9; i++) {
        let tile = document.createElement("div");
        tile.id = i.toString();
        tile.addEventListener("click", selectTile);
        document.getElementById("board").appendChild(tile);
    }
    
    setInterval(setChicken, 1000) // 1 sec
    setInterval(setZhid, 2000) // 2 sec
}

function getRandomTile() {
    // math.random -> (0-1) * 9 = (0-9) -> okruhlyau do (0-8) celyh chisel
    let num = Math.floor(Math.random() * 9);
    return num.toString();
}

function setChicken() {
    if (gameover) {
        return;
    }

    if (currChickenTile) {
        currChickenTile.innerHTML = "";
    }

    let chicken = document.createElement("img");
    chicken.src = "./chick.png";

    let num = getRandomTile();
    if (currZhidTile && currZhidTile.id == num) {
        return;
    }
    
    currChickenTile = document.getElementById(num);
    currChickenTile.appendChild(chicken);
}

function setZhid() {
    if (gameover) {
        return;
    }

    if (currZhidTile) {
        currZhidTile.innerHTML = "";
    }

    let zhid = document.createElement("img");
    zhid.src = "./evrei.png";

    let num = getRandomTile();
    if (currChickenTile && currChickenTile.id == num) {
        return;
    } 
    currZhidTile = document.getElementById(num);
    currZhidTile.appendChild(zhid);
}

function selectTile() {
    if (gameover) {
        return;
    }

    if (this == currChickenTile){
        score += 10;
        document.getElementById("score").innerText = score.toString(); // na updatichah 
    }
    else if (this == currZhidTile) {
        document.getElementById("score").innerText = "JEW OVER:" + score.toString();
        gameover = true;
    }
}

// let restart = (btn)
// restart.innerHTML = "Restart"

// restart.addEventListener('click', () => {
//     window.location.reload()

// })