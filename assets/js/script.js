
let [comp_points, your_points] = [0, 0];
let result_game = document.getElementById('result');
let chooseRps = {
    'rock' : {
        'rock' : 'draw',
        'scissor' : 'win',
        'paper' : 'lose'
    },
    'scissor' : {
        'rock' : 'lose',
        'scissor' : 'draw',
        'paper' : 'win'
    },
    'paper' : {
        'rock' : 'win',
        'scissor' : 'lose',
        'paper' : 'draw'
    }

}

function playGame(input) {
    var choices = ['rock', 'paper', 'scissors']
    var num = Math.floor(Math.random() * 3);


    document.getElementById('computer-choose').innerHTML =
    `Computer choose <span> ${choices[num]} </span>`;

    document.getElementById('you-choose').innerHTML = 
    `You choose <span> ${input} </span>`;

    let comp_choice = choices[num];

    switch(playGame[input][comp_choice]) {
        case 'win':
            result_game.innerHTML = 'You win';
            your_points++;
            break;
        case 'lose'  
            result_game.innerHTML = 'You loose';
            your_points++;
            break; 
            
            default:
            result_game.innerHTML = 'Tie';
            break;   

    }
    document.getElementById('comp_points').innerHTML = 'comp_points';
    document.getElementById('your_points').innerHTML = 'your_points';


    
    
}

