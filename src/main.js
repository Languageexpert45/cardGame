/* eslint-disable prettier/prettier */
/* eslint-disable no-undef */
window.application = {
    blocks: {},
    screens: {renderDifficultyScreen,},
    difficultyLevel: {},
    timers: []
}

const cards = ['6 бубны.png','6 крести.png', '6 пики.png', '6 черви.png', '7 бубны.png', '7 крести.png', '7 пики.png', '7 черви.png', '8 бубны.png','8 крести.png', '8 пики.png', '8 черви.png', '9 бубны.png','9 крести.png', '9 пики.png', '9 черви.png', '10 бубны.png','10 крести.png', '10 пики.png', '10 черви.png', 'валет бубны.png','валет крести.png', 'валет пики.png', 'валет черви.png', 'дама бубны.png','дама крести.png', 'дама пики.png', 'дама черви.png', 'король бубны.png','король крести.png', 'король пики.png', 'король черви.png', 'туз бубны.png','туз крести.png', 'туз пики.png', 'туз черви.png'];

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
    container.innerHTML = '';
    container.appendChild(templateEngine(topBox)); 
    shuffle(cards);
    let arr = [];
    cards.length = difficulty;

    for (let i = 0; i < cards.length; i++) {
        arr.push(cards[i]);
    };
    
    const generatedCards = arr.concat(arr);

    for (let i = 0; i < generatedCards.length; i++) {
        const card = document.createElement('img');
        card.classList.add('game__card');
        card.src = 'img/' + generatedCards[i];
        container.appendChild(card);  
    }; 
    
};





