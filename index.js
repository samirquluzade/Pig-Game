var scores,roundScore,activePlayer,dice,roundScore1;
init();
    document.querySelector('.btn-roll').addEventListener('click',function () {
    dice = Math.floor(Math.random() * 6) + 1;
    var diceDOM = document.querySelector('.dice');
    diceDOM.style.display = 'block';
    diceDOM.src = 'Images/dice-' + dice + '.png';
        if(dice!==1){
            roundScore+=dice;
            document.querySelector('#current-' + activePlayer).textContent = roundScore;
        }
        else
        {
           next();
        }
});
    document.querySelector('.btn-hold').addEventListener('click',function () {
    scores[activePlayer]+=roundScore;
    document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];

    if(scores[activePlayer]>=20){
        document.querySelector('#name-' + activePlayer).textContent = "Winner!";
        document.querySelector('.dice').style.display = 'none';
        document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
        document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
        document.querySelector('.btn-roll').disabled=true;
        document.querySelector('.btn-hold').disabled=true;
    }
    else
    {
    next();
    }
})
function next() {
    if(activePlayer===0){
        activePlayer=1;
    }
    else
    {
        activePlayer=0;
    }
    roundScore=0;
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');

}
document.querySelector('.btn-new').addEventListener('click',init);


function init() {
    scores=[0,0];
    roundScore=0;
    activePlayer=0;
    document.querySelector('#score-0').textContent = '0';
    document.querySelector('#score-1').textContent = '0';
    document.querySelector('#current-0').textContent = '0';
    document.querySelector('#current-1').textContent = '0';
    document.querySelector('.dice').style.display = 'none';
    document.querySelector('#name-0').textContent = "Player 1";
    document.querySelector('#name-1').textContent = "Player 2";
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');
}

