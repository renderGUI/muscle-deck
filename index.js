// MENU VARIABLES
const readyButton = document.querySelector(".menu__ready-button");
const menuScreen = document.querySelector(".menu-container");
const helpButton = document.querySelector(".help-button");
const modal = document.querySelector(".modal");
const closeModalButton = document.querySelector(".close-modal-button");

// GAME VARIABLES
const gameScreen = document.querySelector(".game-container");
const cardButton = document.querySelector(".game-card");
const suitUI = document.querySelectorAll(".suit");
const repsUI = document.querySelector(".rep-amount");
const exerciseUI = document.querySelector(".exercise");
const progressUI = document.querySelector(".progress__text");
const progressBar = document.querySelector(".progress-bar");
const currentProgressBar = document.querySelector(".current-progress");
const newGameButton = document.querySelector(".new-game-button");
const gameMessage = document.querySelector(".game__message");

function startGame() {
  menuScreen.classList.add("hidden");
  gameScreen.classList.remove("hidden");
  pickCard();
  updateProgress();
}

function openModal() {
  modal.classList.remove("hidden");
}

function closeModal() {
  modal.classList.add("hidden");
}

let progress = 0;
progressUI.textContent = `${progress}/36`;
function updateProgress() {
  progress++;
  console.log(`current progress: ${progress}`);
  progressUI.textContent = `${progress}/36`;
  let progressAsPercentage = (progress / 36) * 100;
  currentProgressBar.style.width = `${progressAsPercentage}%`;
}

class Card {
  constructor(suit, exercise, reps) {
    this.suit = suit;
    this.exercise = exercise;
    this.reps = reps;
  }
}

const twoOfS = new Card("spades", "PUSH-UPS", 2);
const threeOfS = new Card("spades", "PUSH-UPS", 3);
const fourOfS = new Card("spades", "PUSH-UPS", 4);
const fiveOfS = new Card("spades", "PUSH-UPS", 5);
const sixOfS = new Card("spades", "PUSH-UPS", 6);
const sevenOfS = new Card("spades", "PUSH-UPS", 7);
const eightOfS = new Card("spades", "PUSH-UPS", 8);
const nineOfS = new Card("spades", "PUSH-UPS", 9);
const tenOfS = new Card("spades", "PUSH-UPS", 10);

const twoOfH = new Card("hearts", "SQUATS", 2);
const threeOfH = new Card("hearts", "SQUATS", 3);
const fourOfH = new Card("hearts", "SQUATS", 4);
const fiveOfH = new Card("hearts", "SQUATS", 5);
const sixOfH = new Card("hearts", "SQUATS", 6);
const sevenOfH = new Card("hearts", "SQUATS", 7);
const eightOfH = new Card("hearts", "SQUATS", 8);
const nineOfH = new Card("hearts", "SQUATS", 9);
const tenOfH = new Card("hearts", "SQUATS", 10);

const twoOfD = new Card("diamonds", "PULL-UPS", 2);
const threeOfD = new Card("diamonds", "PULL-UPS", 3);
const fourOfD = new Card("diamonds", "PULL-UPS", 4);
const fiveOfD = new Card("diamonds", "PULL-UPS", 5);
const sixOfD = new Card("diamonds", "PULL-UPS", 6);
const sevenOfD = new Card("diamonds", "PULL-UPS", 7);
const eightOfD = new Card("diamonds", "PULL-UPS", 8);
const nineOfD = new Card("diamonds", "PULL-UPS", 9);
const tenOfD = new Card("diamonds", "PULL-UPS", 10);

const twoOfC = new Card("clubs", "BURPEES", 2);
const threeOfC = new Card("clubs", "BURPEES", 3);
const fourOfC = new Card("clubs", "BURPEES", 4);
const fiveOfC = new Card("clubs", "BURPEES", 5);
const sixOfC = new Card("clubs", "BURPEES", 6);
const sevenOfC = new Card("clubs", "BURPEES", 7);
const eightOfC = new Card("clubs", "BURPEES", 8);
const nineOfC = new Card("clubs", "BURPEES", 9);
const tenOfC = new Card("clubs", "BURPEES", 10);

const deckArray = [
  twoOfS,
  threeOfS,
  fourOfS,
  fiveOfS,
  sixOfS,
  sevenOfS,
  eightOfS,
  nineOfS,
  tenOfS,
  twoOfH,
  threeOfH,
  fourOfH,
  fiveOfH,
  sixOfH,
  sevenOfH,
  eightOfH,
  nineOfH,
  tenOfH,
  twoOfD,
  threeOfD,
  fourOfD,
  fiveOfD,
  sixOfD,
  sevenOfD,
  eightOfD,
  nineOfD,
  tenOfD,
  twoOfC,
  threeOfC,
  fourOfC,
  fiveOfC,
  sixOfC,
  sevenOfC,
  eightOfC,
  nineOfC,
  tenOfC,
];

function pickCard() {
  const chosenCard = deckArray[Math.floor(Math.random() * deckArray.length)];

  for (const icon of suitUI) {
    icon.src = `/images/suit--${chosenCard.suit}.png`;
  }
  repsUI.textContent = chosenCard.reps;
  exerciseUI.textContent = chosenCard.exercise;

  if (chosenCard.suit == "spades" || chosenCard.suit == "clubs") {
    repsUI.style.color = "#000000";
    exerciseUI.style.color = "#000000";
  } else if (chosenCard.suit == "hearts" || chosenCard.suit == "diamonds") {
    repsUI.style.color = "#ff0000";
    exerciseUI.style.color = "#ff0000";
  }

  removeCardFromArray(chosenCard);
}

function nextCard() {
  if (progress < 36) {
    pickCard();
    updateProgress();
  } else {
    endGame();
  }
}

function endGame() {
  for (const icon of suitUI) {
    icon.classList.add("hidden");
  }
  repsUI.classList.add("hidden");
  exerciseUI.classList.add("hidden");
  gameMessage.classList.remove("hidden");
  progressUI.classList.add("hidden");
  progressBar.classList.add("hidden");
  currentProgressBar.classList.add("hidden");
  newGameButton.classList.remove("hidden");
}

function newGame() {
  location.reload();
}

function removeCardFromArray(card) {
  const cardIndex = deckArray.indexOf(card);
  deckArray.splice(cardIndex, 1);
  console.log(deckArray);
  console.log(`Deck array length: ${deckArray.length}`);
}

readyButton.addEventListener("click", startGame);
helpButton.addEventListener("click", openModal);
closeModalButton.addEventListener("click", closeModal);
cardButton.addEventListener("click", nextCard);
newGameButton.addEventListener("click", newGame);
