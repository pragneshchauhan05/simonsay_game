let gameSeq = [];
let userSeq = [];
let btns = ["red","yello","green","purpal"];

let h2 = document.querySelector("h2");


let started = false;
let level = 0;

window.addEventListener("keypress",function () {
    
    if(started == false){
        console.log("st");
        started = true;

        levelUp();
    }
});

function flashGame (btn) {
    btn.classList.add("gameflash");
    setTimeout(function() {
        btn.classList.remove("gameflash");
    },250);  
}

function userFlash (btn) {
    btn.classList.add("userFlash");
    setTimeout(function() {
        btn.classList.remove("userFlash");
    },250);  
}

function levelUp () {
    userSeq = [];
    level ++;
    h2.innerText = `Level ${level}`;

    let randomIdx = Math.floor(Math.random()*3);
    let randomColor = btns[randomIdx];
    let randomBtn = document.querySelector(`.${randomColor}`);
    gameSeq.push(randomColor);
    console.log(gameSeq);
    flashGame(randomBtn);
}

function checkAns (idx) {
    
    if(userSeq[idx] === gameSeq[idx]){
        if(userSeq.length === gameSeq.length){
            setTimeout(levelUp,1000);
        }
    }else{
        h2.innerHTML = `Game Over ! Your Score was <br>${level}</br> Press Any Key to Start.`;
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function () {
            document.querySelector("body").style.backgroundColor = "white";
        },150);
        reset();
    }
}

function btnPress() {
    
    let btn = this;
    userFlash(btn);

    userColor = btn.getAttribute("id");
    userSeq.push(userColor);
    checkAns(userSeq.length-1);
}

let allBtn = document.querySelectorAll(".btn");
for (btn of allBtn){
    btn.addEventListener("click",btnPress);
}

function reset () {
    started = false;
    gameSeq = [];
    userSeq = [];
    level = 0;
}