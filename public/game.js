// https://www.youtube.com/watch?v=3SsYZDJdeXk&ab_channel=KnifeCircus 9:57
/*
var block = document.getElementById("block");
var hole = document.getElementById("hole");
var character = document.getElementById("character");
var jumping = 0;
var counter = 0;

hole.addEventListener('animationiteration', () => {
    var random = Math.random()*3;
    var top = (random * 100) + 150;
    hole.style.top = -(top) + "px";
    counter++;
});

setInterval(function(){
    var characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"))
    if (jumping == 0) {
        character.style.top = (characterTop + 3) + "px";
    }

    var blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"))
    var holeTop = parseInt(window.getComputedStyle(hole).getPropertyValue("top"))
    var cTop = -(500-characterTop);

    if(characterTop > 580 || ((blockLeft < 20) && (blockLeft > -50) && ((cTop < holeTop) || (cTop > holeTop + 130)))) {
        alert('poo: ' + counter);
        character.style.top = 100 + "px";
        counter = 0;
    }``
}, 10);

function jump() {
    jumping = 1;
    let jumpCount = 0;
    var jumpInterval = setInterval(function(){
        var characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"))
        if ((characterTop > 6)&&(jumpCount < 15)) {
            character.style.top = (characterTop - 5) + "px";
        }
        if (jumpCount > 20) {
            clearInterval(jumpInterval);
            jumping = 0;
            jumpCount = 0;
        }
        jumpCount ++;
    }, 10);
}
*/

var block = document.getElementById("block");
var hole = document.getElementById("hole");
var character = document.getElementById("character");
var countText = document.getElementById("counter");
var highText = document.getElementById("highscore");
var jumping = 0;
var counter = 0;
var highCounter = 0;

function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i <ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
}

highText.innerText = 'Highscore: ' + getCookie('hs');

hole.addEventListener('animationiteration', () => {
    var random = -((Math.random()*300)+150);
    hole.style.top = random + "px";
    counter++;
    countText.innerText = 'Score: ' + counter;
    highText.innerText = 'Highscore: ' + getCookie('hs');
});
setInterval(function(){
    var characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
    if(jumping==0){
        character.style.top = (characterTop+3)+"px";
    }
    var blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
    var holeTop = parseInt(window.getComputedStyle(hole).getPropertyValue("top"));
    var cTop = -(500-characterTop);
    if((characterTop>580)||((blockLeft<20)&&(blockLeft>-50)&&((cTop<holeTop + 100)||(cTop>holeTop+230)))){
        //alert("Game over. Score: "+(counter-1));
        character.style.top = 100 + "px";
        //console.log('counter, highcounter: ' + counter + highCounter);
        if (counter >= highCounter && counter >= getCookie('hs')) {
            console.log("highcuonter: " + highCounter);
            //console.log('coutner is currently: 0' + counter);
            highCounter = counter;
            highText.innerText = 'Highscore: ' + highCounter;
            document.cookie = "hs="+highCounter+"; expires=Thu, 18 Dec 2100 12:00:00 UTC";
            //console.log('IF counter, highcounter: ' + counter + highCounter);
        }
        counter=0;
        console.log("highcuonter: " + highCounter);
    }
    
},10);

function jump(){
    jumping = 1;
    let jumpCount = 0;
    var jumpInterval = setInterval(function(){
        var characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
        if((characterTop>6)&&(jumpCount<15)){
            character.style.top = (characterTop-5)+"px";
        }
        if(jumpCount>20){
            clearInterval(jumpInterval);
            jumping=0;
            jumpCount=0;
        }
        jumpCount++;
    },10);
}

