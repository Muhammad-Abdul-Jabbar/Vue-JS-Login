<template>
<html lang="en" onclick="jump()">
    <head>
        <meta charset="UTF-8">
        <title>Jump Game</title>
        <link rel="stylesheet" href="style.css">
    </head>
    <body>
        <div class="game">
            <div id="character"></div>
            <div id="block"></div>
        </div>
        <p>Score: <span id="scoreSpan"></span></p>
    </body>

</html>
    </template>

<style>
*{
    padding: 0;
    margin: 0;
    overflow-x: hidden;
    background-color: rgba(49, 25, 104, 0.103);
    
}
.game{
    width: 500px;
    height: 200px;
    border: 1px solid rgb(8, 8, 8);
    margin: auto;

}
#character{
    width: 10px;
    height: 50px;
    background-color: rgb(15, 15, 15);
    position:relative;
    top: 150px; 
}
.animate{
    animation: jump 0.3s linear;
    
}
@keyframes jump{
    0%{top: 150px;}
    30%{top: 100px;}
    70%{top: 100px;}
    100%{top: 150px;}
}

#block{
    background-color: rgb(247, 231, 8);
    width: 20px;
    height: 20px;
    position: relative;
    top: 130px;
    left: 500px;
    animation: block 5s infinite linear;
    animation-timing-function: cubic-bezier(0.075, 0.82, 0.165, 1);
    
    
}
@keyframes block{
    0%{left: 500px}
    100%{left: -20px}
   
}
p{
    text-align: center;
}
</style>


<script>

var character = document.getElementById("character");
var block = document.getElementById("block");
var counter=0;
function jump(){
    if(character.classList == "animate"){return}
    character.classList.add("animate");
    setTimeout(function(){
        character.classList.remove("animate");
    },300);
}
var checkDead = setInterval(function() {
    let characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
    let blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
    if(blockLeft<20 && blockLeft>-20 && characterTop>=130){
        block.style.animation = "none";
        alert("Game Over. score: "+Math.floor(counter/100));
        counter=0;
        block.style.animation = "block 1s infinite linear";
    }else{
        counter++;
        document.getElementById("scoreSpan").innerHTML = Math.floor(counter/100);
    }
}, 10); 

</script>