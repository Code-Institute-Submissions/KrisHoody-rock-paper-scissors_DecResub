  // Decide winner
let [comp_points, your_points] = [0,0];
let result_game = document.getElementById('result');
let chooseRps = {
    'rock' : {
        'rock' : 'draw',
        'scissors' : 'win',
        'paper' : 'lose',
        'lizard' : 'win',
        'spock' : 'lose',
    },
    'scissors' : {
        'rock' : 'lose',
        'scissors' : 'draw',
        'paper' : 'win',
        'lizard' : 'win',
        'spock' : 'lose'
    },
    'paper' : {
        'rock' : 'win',
        'scissors' : 'lose',
        'paper' : 'draw',
        'spock' : 'win',
        'lizard' : 'lose',
    },
    'lizard' : {
        'rock' : 'lose',
        'scissors' : 'lose',
        'paper' : 'win',
        'spock' : 'win',
        'lizard' : 'draw'
    },
    'spock' : {
        'rock' : 'win',
        'scissors' : 'win',
        'paper' : 'lose',
        'spock' : 'draw',
        'lizard' : 'lose'
    },

};


// Logic of a game

function playGame(input) {
    var choices = ['rock', 'paper', 'scissors', 'lizard', 'spock'];
    var num = Math.floor(Math.random() * 5);

// Get computer pick
    document.getElementById('computer-choose').innerHTML =
    `<span> ${choices[num]}</span>`;
// Get player pick
    document.getElementById('you-choose').innerHTML = 
    `<span> ${input}</span>`;

    let comp_choice = choices[num];
// points counting
    switch(chooseRps[input][comp_choice]){
        case 'win':
            result_game.innerHTML = 'You win';
            your_points++;
            break;
        case 'lose':  
            result_game.innerHTML = 'You loose';
            comp_points++;
            break;     
        default:
            result_game.innerHTML = 'Draw';
            break;   
//displaying ponts
    }
    document.getElementById('comp_points').innerHTML = comp_points;
    document.getElementById('your_points').innerHTML = your_points; 
    
}
// reloads page for new game
function newGame() {
    window.parent.location = window.parent.location.href;
}