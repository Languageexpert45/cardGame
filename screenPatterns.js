const difficultyScreen = {
    tag: 'div',
    cls: 'main',
    content: [
        {
            tag: 'div',
            cls: 'main__difficulty',
            content: [
                {
                    tag: 'div',
                    cls: 'main__difficulty_box',
                    content: [
                        {
                            tag: 'div',
                            cls: 'main__difficulty_select',
                            content: [
                                {
                                    tag: 'h1',
                                    cls: 'main__difficulty_select-title',
                                    content: 'easy',
                                }
                            ]
                        },
                        {
                            tag: 'div',
                            cls: 'main__difficulty_select',
                            content: [
                                {
                                    tag: 'h1',
                                    cls: 'main__difficulty_select-title',
                                    content: 'normal',
                                }
                            ],
                        },
                        {
                            tag: 'div',
                            cls: 'main__difficulty_select',
                            content: [
                                {
                                    tag: 'h1',
                                    cls: 'main__difficulty_select-title',
                                    content: 'hard',
                                }
                            ],
                        },
                    ],
                                       
                },
                {
                    tag: 'button',
                    cls: 'main__difficulty_button',
                    content: 'choose',
                },
            ],
           
        },
    ],  
};
const easyGame = {
    tag: 'div',
    cls: 'game__box',
    content: [
        {
            tag: 'h1',
            cls: 'game__info_title',
            content: 'difficulty level: EASY',
        }
    ],
}
const normalGame = {
    tag: 'div',
    cls: 'game__box',
    content: [
        {
            tag: 'h1',
            cls: 'game__info_title',
            content: 'difficulty level: NORMAL',
        }
    ],
}

const hardGame = {
    tag: 'div',
    cls: 'game__box',
    content: [
        {
            tag: 'h1',
            cls: 'game__info_title',
            content: 'difficulty level: HARD',
        }
    ],
}