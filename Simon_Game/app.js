let gameSeq=[];
let userSeq=[];
let started=false;
let level=0;
let h2 = document.querySelector("h2");
let btns=["yellow","green","purple","red"];
document.addEventListener("keypress",function(){
    // console.log("game started");
    if(started == false){  //if game is started set value true else false
        console.log("game is started");
        started = true;
        levelUp();
    }
});
function gameFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");

    },250);
}
function userflash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash");

    },250);
}
function levelUp(){
    level ++;
    h2.innerText=`Level ${level}`;
    // chooses random button (btn)
    
    let randIdx = Math.floor(Math.random()*3);
    let randColor = btns[randIdx];
    let randbtn=document.querySelector(`.${randColor}`);
    console.log(randIdx);
    console.log(randColor);
    console.log(randbtn);
    gameFlash(randbtn);

}
function btnPress() {
    console.log(this);
    let btn=this; //which button is choosed 
    userflash(btn);
    

}
let allBtns=document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener("click",btnPress);
}