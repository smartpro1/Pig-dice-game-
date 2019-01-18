/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/


var scores, roundScore, activePlayer, gamePlaying;
newGame();




var diceDom = document.querySelector('.dice')


document.querySelector('.btn-roll').addEventListener('click', function(){
   
    // Once the click event happens
    if(gamePlaying){
    // 1. We need a random number 
    var dice = Math.floor(Math.random() * 6) + 1;
    
    // 2.Display the result
    
    diceDom.style.display = 'block';
    diceDom.src =  'dice-' + dice + '.png' ;
   
    
    // Update the round score if the rolled number was not 1
       if(dice !== 1){
           
          // add score
           roundScore += dice;
           document.querySelector('#current-' +activePlayer).textContent = roundScore;
          }
       else{
           
           //Next player
           nextPlayer();
                                   
       }
}
       
});


// addEventListener to the hold button 
    document.querySelector('.btn-hold').addEventListener('click', function(){
         
        if(gamePlaying){
        // Once this button is clicked
        // 1. Add CURRENT score to GLOBAL score
              scores[activePlayer] += roundScore;
        
        // 2. Update the UI
              document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];
        
        
        // 3. Check if player won the game
        if(scores[activePlayer] >= 100) {
            document.querySelector('#name-' +activePlayer).textContent = 'Winner';
            diceDom.style.display = 'none';
            document.querySelector('.player-' +activePlayer+'-panel').classList.add('winner');
            document.querySelector('.player-' + activePlayer+ '-panel').classList.remove('active');
            gamePlaying = false;
            
        }
        
        else{
           //Next player
            nextPlayer();
        }
        }
         
        
           
        
        
       
    });


function nextPlayer(){
           activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
           roundScore = 0;
           
          //document.querySelector('#current-' +activePlayer).textContent =         roundScore; 
           document.getElementById('current-0').textContent = '0';
           document.getElementById('current-1').textContent = '0';
           
           
           
           document.querySelector('.player-0-panel').classList.toggle('active');
           document.querySelector('.player-1-panel').classList.toggle('active');
           diceDom.style.display = 'none';
}


document.querySelector('.btn-new').addEventListener('click', newGame);

function newGame(){
    scores = [0, 0];
    roundScore = 0;
    activePlayer = 0; // keeps track of the player that is currently playing
    gamePlaying = true;
    
    //document.querySelector('#current-' +activePlayer).textContent = dice;
 // document.querySelector('#current-' +activePlayer).innerHTML = '<em>' + dice + '</em>';
document.querySelector('.dice').style.display = 'none';
document.getElementById('score-0').textContent = '0';
document.getElementById('score-1').textContent = '0';
document.getElementById('current-0').textContent = '0';
document.getElementById('current-1').textContent = '0';
    
document.getElementById('name-0').textContent = 'Player1';
document.getElementById('name-1').textContent = 'Player2';
document.querySelector('.player-0-panel').classList.remove('winner');
document.querySelector('.player-1-panel').classList.remove('winner');
document.querySelector('.player-0-panel').classList.remove('active');
document.querySelector('.player-1-panel').classList.remove('active');
document.querySelector('.player-0-panel').classList.add('active');
}