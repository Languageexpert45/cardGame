/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/* eslint-disable prettier/prettier */
/* eslint-disable no-undef */
window.application = {
    blocks: {},
    screens: {renderDifficultyScreen,},
    difficultyLevel: {},
    cardsToCompare: [],
    cardsLength: [],
    timers: []
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
            renderGame(6)
        }
        if (window.application.difficultyLevel === 'normal') {
            renderGame(12)
        }
        if (window.application.difficultyLevel === 'hard') {
            renderGame(18)
        }
    })
};

function renderGame(difficulty) {
    const cards = ['6 бубны.png','6 крести.png', '6 пики.png', '6 черви.png', '7 бубны.png', '7 крести.png', '7 пики.png', '7 черви.png', '8 бубны.png','8 крести.png', '8 пики.png', '8 черви.png', '9 бубны.png','9 крести.png', '9 пики.png', '9 черви.png', '10 бубны.png','10 крести.png', '10 пики.png', '10 черви.png', 'валет бубны.png','валет крести.png', 'валет пики.png', 'валет черви.png', 'дама бубны.png','дама крести.png', 'дама пики.png', 'дама черви.png', 'король бубны.png','король крести.png', 'король пики.png', 'король черви.png', 'туз бубны.png','туз крести.png', 'туз пики.png', 'туз черви.png'];
    container.innerHTML = '';
    container.appendChild(templateEngine(topBox));

    shuffle(cards);
    cards.length = difficulty;
    const generatedCards = [...cards, ...cards];

    shuffle(generatedCards); 
    
    renderCards(generatedCards);      
};

function renderCards(array) {
    for (let i = 0; i < array.length; i++) {
        const card = document.createElement('img'); 
        card.classList.add('game__card');  
        card.src = 'img/' + array[i];
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
        window.application.timers.push(hideCards);
        window.application.timers.forEach(item => {
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
        console.log('success!');
        window.application.cardsToCompare = [];
    } else {
        window.application.cardsToCompare = [];
        console.log('nope!');
        Swal.fire({
            title: 'Oops!',
            text: 'Try again!',
            icon: 'error',
            confirmButtonText: 'Ok'
          })
        renderDifficultyScreen();
    };  
}








/******/ })()
;
//# sourceMappingURL=bundle.js.map