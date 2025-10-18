let Zbtn = document.getElementById("0btn");
const Inc = document.getElementById("Inc");
const Res = document.getElementById("Res");
const Dec = document.getElementById("Dec");
let StartNum = 0;

function updateBoard(){
    Zbtn.textContent = StartNum;
    if(StartNum > 0){
        Zbtn.style.color = "rgb(3, 252, 107)";
    }
    else if(StartNum < 0){
        Zbtn.style.color = "rgba(255, 0, 0, 1)";
    }
    else{
        Zbtn.style.color = "rgb(66, 164, 245)";
    }
}
updateBoard();
Inc.onclick = function(){
    StartNum++;
    updateBoard();
}
Res.onclick = function(){
    StartNum = 0;
    updateBoard();
}
Dec.onclick = function(){
    StartNum--;
    updateBoard();
}