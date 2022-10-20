export {};

declare global {
  interface Window {
    application: Application;
  }
}

type Application = {
    screens: Object,
    difficultyLevel: any,
    cardsTotal: Array<string>,
    cardsOpened: Array<any>,
    cardsToCompare: Array<any>,
    cardsLength: Array<string>,
    cardHideTimer: Array<NodeJS.Timer>,
    gameTimer: Array<NodeJS.Timer>,
}


