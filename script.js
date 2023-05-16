function dicenumber(){
    var num = Math.random();
    num = num*6;
    num = Math.floor(num);
    return num;
}

var imagesList = ["./images/dice1.png","./images/dice2.png","./images/dice3.png","./images/dice4.png","./images/dice5.png","./images/dice6.png"];
var score1;
var score2;
function player1(){
    score1 = dicenumber();
    document.getElementsByClassName("img1")[0].setAttribute("src",imagesList[score1]);
}

function player2(){
    score2 = dicenumber();
    document.getElementsByClassName("img2")[0].setAttribute("src",imagesList[score2]);
}

function winner(){
    if(score1 > score2){
        document.querySelector("h1").innerHTML="🥇 Player 1 Wins";
    }
    else if(score1 < score2){
        document.querySelector("h1").innerHTML="Player 2 Wins 🥇 ";
    }
    else{
        document.querySelector("h1").innerHTML="Draw";
    }
}

player1();
player2();
winner();