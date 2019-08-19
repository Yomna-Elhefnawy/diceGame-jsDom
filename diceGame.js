var randNum, currentScore, activePlayer, globalScore, gamePlaying ;

    function init(){
    
        currentScore = 0;
        activePlayer = 0;
        globalScore = [0,0];
        gamePlaying = true;


        document.querySelector('.dice').style.display = 'none';
        document.querySelector('.score-0').textContent = 0;
        document.querySelector('.score-1').textContent = 0;
        document.querySelector('.round-score-1').textContent = 0;
        document.querySelector('.round-score-0').textContent = 0;
        document.querySelector('.player-0-panel').classList.remove('winner');
        document.querySelector('.player-1-panel').classList.remove('winner');
        document.querySelector('.player-0-panel').classList.add('active');
        document.querySelector('.player-1-panel').classList.remove('active');
        document.querySelector('.player-0' ).textContent = 'player 1';
        document.querySelector('.player-1').textContent= 'player 2';
        document.querySelector('.player-0').style.color = '#333';
        document.querySelector('.player-1').style.color = '#333';
        document.querySelector('.score-0').style.color = '#EB4D4D';
        document.querySelector('.score-1').style.color = '#EB4D4D';
        document.querySelector('.dice-2').style.display ='none';
}
init();
document.querySelector('.btn-roll').addEventListener('click',function(){
    // 1 - show dice and save its record in currentScore ( if dice !==1) if ==1 go to nextPlayer and hide dice
    if(gamePlaying){
    var randNum = Math.floor ( Math.random() * 6) + 1;
    var random2 = Math.floor ( Math.random() * 6) + 1;
        
    var lastDice;
        
        
    if ( randNum === 6 && lastDice === 6){
        globalScore[activePlayer] = 0;
        document.querySelector('.score-' + activePlayer).textContent = '0';
        nextPlayer();
    }    
    else if ( randNum !== 1 && random2 !==1 ) {
        currentScore = randNum +random2 + currentScore;
        document.querySelector('.dice').style.display = 'block';
        document.querySelector('.dice-2').style.display = 'block';
        document.querySelector('.dice').src = 'images/dice-' + randNum + '.png'; 
        document.querySelector('.dice-2').src = 'images/dice-' + random2 + '.png';
        document.querySelector('.round-score-' + activePlayer ).textContent = currentScore ;
    }
    else {
        //nextPlayer
       nextPlayer();
    }
    
        lastDice = randNum;
    }
});

document.querySelector('.btn-hold').addEventListener('click' , function(){
    // add current score to global score
    if(gamePlaying){
    globalScore[activePlayer] += currentScore;
    document.querySelector('.score-' + activePlayer).textContent = globalScore[activePlayer];
        
// challenge -2 take the final score from user
        
        var input = document.querySelector('.final-score').value;
        var finalScore;
    
        if(input){
            finalScore = input;
        }
        else{
            finalScore = 100;
        }
        
    //checking final Score
    if(globalScore[activePlayer] >= finalScore){
         document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
         document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
         document.querySelector('.player-' + activePlayer ).textContent = 'Winner ..!';
         document.querySelector('.player-' + activePlayer ).style.color = '#16949f';
         document.querySelector('.score-' + activePlayer).style.color = '#16949f';
        
        document.querySelector('.dice').style.display = 'none';
        document.querySelector('.round-score-1').textContent = 0;
        document.querySelector('.round-score-0').textContent = 0;
        gamePlaying =false;
         
    }
    
    else 
    { 
        nextPlayer();
    } 
    
        }
})

function nextPlayer(){
    
    activePlayer === 0  ? activePlayer = 1: activePlayer = 0;
        
        currentScore = 0; 
        document.querySelector('.dice').style.display = 'none';
        document.querySelector('.dice-2').style.display = 'none';
        
        document.querySelector('.round-score-0').textContent = 0;
        document.querySelector('.round-score-1').textContent = 0;
        document.querySelector('.player-1-panel').classList.toggle('active');
        document.querySelector('.player-0-panel').classList.toggle('active');
    
    
}
// new game button
document.querySelector('.btn-new').addEventListener('click',init);




// three challenges

// first : player loss his all score if he get 6 twice

//2- input to change final score





