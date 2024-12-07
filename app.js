let gameSeq = [];
let userSeq = [];

let btns = ["red", "yellow", "green", "purple"]

let started = false;
let level = 0;

let h2 = document.querySelector("h2");

document.addEventListener("keypress", function () {
    if (started == false) {
        console.log("Game Is Started");
        started = true;

        levelUp();
    }
})

function btnFlash(btn) {
    btn.classList.add("flash");
    setTimeout(function () {
        btn.classList.remove("flash");
    }, 250)
}

function levelUp() {
    userSeq = [];
    level++;
    h2.innerText = `Level ${level}`;

    let randIdx = Math.floor(Math.random() * 3);
    let randColor = btns[randIdx];
    let randBtn = document.querySelector(`.${randColor}`);
    gameSeq.push(randColor);

    btnFlash(randBtn);
}

function checkAns(idx) {
    if (userSeq[idx] === gameSeq[idx]) {
        if (userSeq.length == gameSeq.length) {
            setTimeout(levelUp, 700)
        }
    } else {
        h2.innerHTML = `Game Over!<br>Your Score Was ${level} <br> Press Any Key To Restart The Game`;
        document.querySelector("body").style.backgroundColor = "red";
        setInterval(function(){
            document.querySelector("body").style.backgroundColor = "red";
        }, 150)

        reset();
    }

    
}


function btnPress() {
    let btn = this;
    btnFlash(btn);
    let userColor = btn.getAttribute("id");
    userSeq.push(userColor);

    checkAns(userSeq.length - 1);
}

let allBts = document.querySelectorAll(".btn");
for (btn of allBts) {
    btn.addEventListener("click", btnPress);
}

function reset() {
    gameSeq = [];
    userSeq = [];
    started = false;
    level = 0;



}