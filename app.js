/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/
var scores, roundScore, activePlayer, gamePlaying, lastDice;
init()
 //0 reppresents the first player, 1 represents the second player.
//dice=Math.floor(Math.random()*6)+1;
//console.log(Math.floor(Math.random()*6)+1);
//document.querySelector('#current-'+activePlayer).textContent=dice;
//document.querySelector('#current-'+activePlayer).innerHTML='<em>'+dice+'</em>';
//var x=document.querySelector('#current-'+activePlayer).textContent;
//console.log(x);
document.querySelector('.dice').style.display='none';

document.querySelector(".btn-roll").addEventListener("click",function()
        {
    if(gamePlaying)
        {
          //random number
            var dice=Math.floor(Math.random()*6)+1;
            var diceDom=document.querySelector(".dice");
          //display the result
            diceDom.style.display="block";
            diceDom.src='dice-'+dice+'.png';
          //update the dice
            if(dice===6&&lastDice===6){
                 scores[activePlayer]=0;
                 document.querySelector("#score-"+activePlayer).textContent=scores[activePlayer];
            }
            else if(dice!==1){
                  roundScore+=dice;
                  //document.getElementById("current-"+activePlayer).textContent=roundScore;
                  document.querySelector('#current-'+activePlayer).textContent=roundScore;
              }else{
                nextPlayer();
              }
        }
        lastDice=dice;
        }
);

document.querySelector(".btn-hold").addEventListener("click",function(){
    if(gamePlaying){
        scores[activePlayer]+=roundScore;
        document.querySelector("#score-"+activePlayer).textContent=scores[activePlayer];
        //document.querySelector(".final-score").textContent="fds";
        var input= document.querySelector(".final-score").value;
        //console.log(input);
        var winnerscore;
        if(input){
            winnerscore=input;
        }else{
            winnerscore=100;
        }
        if(scores[activePlayer]>winnerscore){
            document.querySelector("#name-"+activePlayer).textContent="winner";
            document.querySelector(".dice").style.display='none';
            document.querySelector(".player-"+activePlayer+"-panel").classList.add("winner");
            document.querySelector(".player-"+activePlayer+"-panel").classList.remove("active");
            gamePlaying=false;
        }
        else{
            nextPlayer();
        }
    }
   
});

document.querySelector(".btn-new").addEventListener("click",function(){
    init();
});

function nextPlayer()
{
    activePlayer===0 ? activePlayer=1 : activePlayer=0;//注意空格
           
              roundScore=0;
              document.querySelector("#current-0").textContent='0';
              document.querySelector("#current-1").textContent='0';
              document.querySelector(".player-0-panel").classList.toggle("active");
              document.querySelector(".player-1-panel").classList.toggle("active");
}

function init(){
    scores=[0,0];
    roundScore=0;
    activePlayer=0;
    gamePlaying=true;
    document.querySelector(".dice").style.display='none';
    document.querySelector("#current-0").textContent='0';
    document.querySelector("#current-1").textContent='0';
    document.querySelector("#score-0").textContent='0';
    document.querySelector("#score-1").textContent='0';
    document.querySelector(".player-0-panel").classList.remove("active");
    document.querySelector(".player-1-panel").classList.remove("active");
    document.querySelector(".player-0-panel").classList.remove("winner");
    document.querySelector(".player-1-panel").classList.remove("winner");
    document.querySelector(".player-0-panel").classList.add("active");
}




