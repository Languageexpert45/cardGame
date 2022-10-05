window.application = {
    blocks: {},
    screens: {renderDifficultyScreen,},
    difficultyLevel: {},
    timers: []
}

function renderDifficultyScreen() {
    container.innerHTML = '';
    container.appendChild(templateEngine(difficultyScreen));
    const difficultySelectBox = document.querySelector('.main__difficulty_box');
    const button = document.querySelector('.main__difficulty_button')
    difficultySelectBox.addEventListener('click', (event) => {
        const target = event.target;
        window.application.difficultyLevel = target.textContent;
        button.textContent = window.application.difficultyLevel;
    })
    button.addEventListener('click', () => {
        if (window.application.difficultyLevel === 'easy') {
            renderEasyGame()
        }
        if (window.application.difficultyLevel === 'normal') {
            renderNormalGame()
        }
        if (window.application.difficultyLevel === 'hard') {
            renderHardGame()
        }
    })
};

function renderEasyGame() {
    container.innerHTML = '';
    container.appendChild(templateEngine(easyGame));

}
function renderNormalGame() {
    container.innerHTML = '';
    container.appendChild(templateEngine(normalGame));

}
function renderHardGame() {
    container.innerHTML = '';
    container.appendChild(templateEngine(hardGame));

}





