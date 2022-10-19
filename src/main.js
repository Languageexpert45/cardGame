/* eslint-disable prettier/prettier */
/* eslint-disable no-undef */

import {templateEngine} from './js/templateEngine';

import {difficultyScreen} from './js/screenPatterns';

import {topBox} from './js/screenPatterns';

import './styles/styles.css';

import Swal from '../node_modules/sweetalert2/dist/sweetalert2.min.js';

import '../node_modules/sweetalert2/dist/sweetalert2.css';


window.application = {
    blocks: {},
    screens: {renderDifficultyScreen},
    difficultyLevel: {},
    cardsTotal:[],
    cardsOpened:[],
    cardsToCompare: [],
    cardsLength: [],
    cardHideTimer: [],
    gameTimer: [],
}


function shuffle(array) {
    array.sort(() => Math.random() - 0.5);
};

function renderDifficultyScreen() {
    container.innerHTML = '';
    container.appendChild(templateEngine(difficultyScreen));
    const difficultySelectBox = document.querySelector('.difficulty_box');
    const button = document.querySelector('.difficulty_button')
    difficultySelectBox.addEventListener('click', (event) => {
        const target = event.target;
        window.application.difficultyLevel = target.textContent;
        button.textContent = window.application.difficultyLevel;
    })
    button.addEventListener('click', () => {
        if (window.application.difficultyLevel === 'easy') {
            renderGame(3, 2)
        }
        if (window.application.difficultyLevel === 'normal') {
            renderGame(6, 4)
        }
        if (window.application.difficultyLevel === 'hard') {
            renderGame(9, 6)
        }
    })
};

function renderGame(difficulty, time) {
    window.application.gameTimer.forEach(item => {
        clearInterval(item);
    });
    window.application.gameTimer = [];
    window.application.cardsTotal = [];
    window.application.difficultyLevel = {};
    
    const cards = ['6 бубны.png','6 крести.png', '6 пики.png', '6 черви.png', '7 бубны.png', '7 крести.png', '7 пики.png', '7 черви.png', '8 бубны.png','8 крести.png', '8 пики.png', '8 черви.png', '9 бубны.png','9 крести.png', '9 пики.png', '9 черви.png', '10 бубны.png','10 крести.png', '10 пики.png', '10 черви.png', 'валет бубны.png','валет крести.png', 'валет пики.png', 'валет черви.png', 'дама бубны.png','дама крести.png', 'дама пики.png', 'дама черви.png', 'король бубны.png','король крести.png', 'король пики.png', 'король черви.png', 'туз бубны.png','туз крести.png', 'туз пики.png', 'туз черви.png'];
    container.innerHTML = '';
    container.appendChild(templateEngine(topBox));

    shuffle(cards);
    cards.length = difficulty;
    const generatedCards = [...cards, ...cards];

    shuffle(generatedCards); 
    
    renderCards(generatedCards); 
    
    restartCurrentGame (difficulty, time);

    timeCount (time);
};

function restartCurrentGame (difficulty, time) {
    const restartButton = document.querySelector('.restart_button');
    restartButton.addEventListener('click', () => {
        renderGame(difficulty, time);  
    })
}

function renderCards(array) {
    window.application.cardsTotal = array;
    window.application.cardsOpened = [];
    for (let i = 0; i < array.length; i++) {
        const card = document.createElement('img'); 
        card.classList.add('game__card');  
        card.src = 'static/' + array[i];
        container.appendChild(card);
        const cardCover =  document.createElement('img');
        cardCover.classList.add('game__card-cover', 'game__card-cover_hidden');
        container.appendChild(cardCover);

        hideCards(card, cardCover);
        
        openCards(cardCover, card, array[i]);
        
    };
}

function hideCards(card, cardCover) {
    let hideCards = setInterval(() => { 
        card.classList.add('game__card_hidden');
        cardCover.classList.remove('game__card-cover_hidden');
        window.application.cardHideTimer.push(hideCards);
        window.application.cardHideTimer.forEach(item => {
            clearInterval(item);
        });
    }, 5000);
}

function openCards(cardCover, card, arrayCard) {
    cardCover.addEventListener('click', (event) => {
        let target = event.target
        target = arrayCard;
        card.classList.remove('game__card_hidden');
        cardCover.classList.add('game__card-cover_hidden');
        window.application.cardsToCompare.push(target);
        if (window.application.cardsToCompare.length > 1) {
            compareCards();
        }            
    });
}

function compareCards() {
    let card1 = window.application.cardsToCompare[0];
    let card2 = window.application.cardsToCompare[1];
    if (card1 === card2) {
        playerWin(window.application.cardsToCompare);
        window.application.cardsToCompare = [];
        
    } else {
        window.application.cardsToCompare = [];
        window.application.difficultyLevel = {};
        window.application.gameTimer.forEach(item => {
            clearInterval(item);
        });
        window.application.gameTimer = [];

        Swal.fire({
            title: 'Oops!',
            text: 'Try again!',
            icon: 'error',
            confirmButtonText: 'Ok'
          })
        renderDifficultyScreen();
    };  
}

function playerWin (cardsOpened) {
    window.application.cardsOpened.push(cardsOpened);
    let array2 = window.application.cardsTotal;
    let array1 = window.application.cardsOpened.flat();
    if (array1.length === array2.length) {
        Swal.fire({
            title: 'Congratulations!',
            text: 'You won!',
            icon: 'success',
            confirmButtonText: 'Ok'
        });
        renderDifficultyScreen();
    }
}

function timeCount (time) {
    const timeBox = document.querySelector('.game__top-box_timer');
    timeBox.textContent = `${time}:00`;
    let timeMinut = parseInt(time) * 60;

    let timer = setInterval(function () {
        let seconds = timeMinut%60;
        let minutes = timeMinut/60%60;
        let strTimer = `${Math.trunc(minutes)}:${seconds}`;
        timeBox.innerHTML = strTimer;

        --timeMinut;
        window.application.gameTimer.push(timer);
        
        if (timeMinut <= 0) {
            clearInterval(timer);
            Swal.fire({
                title: 'Sorry!',
                text: 'The time is over',
                icon: 'error',
                confirmButtonText: 'Ok'
            });
            renderDifficultyScreen();
        } 
    }, 1000)
}









