
const story = document.getElementById("story");
const choices = document.getElementById("choices");
const restartButton = document.getElementById("restart");

// Game state
let gameState = {};

// Game data
const storyNodes = {
  start: {
    text: "You find yourself at the entrance of a mysterious forest. Do you:",
    choices: [
      { text: "Enter the forest", nextNode: "forest" },
      { text: "Walk away", nextNode: "village" },
    ],
  },
  forest: {
    text: "The forest is dark and full of strange sounds. You see three paths. Do you:",
    choices: [
      { text: "Take the left path", nextNode: "lake" },
      { text: "Take the middle path", nextNode: "clearing" },
      { text: "Take the right path", nextNode: "cave" },
    ],
  },
  village: {
    text: "You walk away and find a peaceful village. Do you:",
    choices: [
      { text: "Explore the market", nextNode: "market" },
      { text: "Stay at the inn", nextNode: "inn" },
      { text: "Talk to the village elder", nextNode: "elder" },
    ],
  },
  lake: {
    text: "You reach a serene lake. A mysterious figure appears and offers you a riddle. Do you:",
    choices: [
      { text: "Solve the riddle", nextNode: "treasure" },
      { text: "Refuse and walk away", nextNode: "lost" },
    ],
  },
  clearing: {
    text: "You arrive at a clearing with a magical portal. Do you:",
    choices: [
      { text: "Enter the portal", nextNode: "portal" },
      { text: "Turn back to the forest", nextNode: "forest" },
    ],
  },
  portal: {
    text: "The portal takes you to a mystical realm. You see two paths. Do you:",
    choices: [
      { text: "Follow the golden path", nextNode: "goldenPath" },
      { text: "Follow the shadowy path", nextNode: "shadowPath" },
    ],
  },
  goldenPath: {
    text: "You find a castle filled with riches. You are crowned the ruler of the mystical realm. The adventure ends in glory!",
    choices: [],
  },
  shadowPath: {
    text: "You are ambushed by shadowy creatures. The adventure ends tragically.",
    choices: [],
  },
  cave: {
    text: "The cave is dark and eerie. You hear growling. Do you:",
    choices: [
      { text: "Face the danger", nextNode: "dragon" },
      { text: "Explore deeper into the cave", nextNode: "treasure" },
      { text: "Run back", nextNode: "forest" },
    ],
  },
  market: {
    text: "The village market is bustling. A merchant offers you a map. Do you:",
    choices: [
      { text: "Buy the map", nextNode: "treasure" },
      { text: "Ignore the merchant", nextNode: "inn" },
      { text: "Help a beggar", nextNode: "beggar" },
    ],
  },
  beggar: {
    text: "The beggar reveals himself as a wizard and gives you a magical artifact. You feel stronger for the journey ahead.",
    choices: [
      { text: "Return to the market", nextNode: "market" },
      { text: "Leave the village", nextNode: "forest" },
    ],
  },
  inn: {
    text: "You rest at the inn and wake up refreshed. Do you:",
    choices: [
      { text: "Talk to the innkeeper", nextNode: "innkeeper" },
      { text: "Leave the village", nextNode: "forest" },
    ],
  },
  innkeeper: {
    text: "The innkeeper tells you about a hidden treasure in the forest.",
    choices: [
      { text: "Search for the treasure", nextNode: "treasure" },
      { text: "Ignore and leave", nextNode: "forest" },
    ],
  },
  elder: {
    text: "The village elder warns you about dangers in the forest and gives you a protective amulet. Do you:",
    choices: [
      { text: "Thank the elder and leave", nextNode: "forest" },
      { text: "Ask about the amulet's powers", nextNode: "amulet" },
    ],
  },
  amulet: {
    text: "The elder explains that the amulet can protect you from magical creatures.",
    choices: [
      { text: "Take the amulet and leave", nextNode: "forest" },
      { text: "Decline the amulet and leave", nextNode: "forest" },
    ],
  },
  dragon: {
    text: "You bravely face the dragon. Do you:",
    choices: [
      { text: "Fight the dragon", nextNode: "fightDragon" },
      { text: "Offer it a gift", nextNode: "dragonGift" },
    ],
  },
  fightDragon: {
    text: "You fight valiantly but are defeated by the mighty dragon. The adventure ends.",
    choices: [],
  },
  dragonGift: {
    text: "The dragon accepts your gift and grants you a treasure. You leave victorious!",
    choices: [],
  },
  treasure: {
    text: "Congratulations! You find a hidden treasure and become a legend!",
    choices: [],
  },
  lost: {
    text: "You wander aimlessly and get lost in the wilderness. The adventure ends.",
    choices: [],
  },
};

// Start the game
function startGame() {
  gameState = {};
  showNode("start");
}

// Show a story node
function showNode(nodeKey) {
  const node = storyNodes[nodeKey];
  story.textContent = node.text;

  choices.innerHTML = "";
  node.choices.forEach((choice) => {
    const button = document.createElement("button");
    button.textContent = choice.text;
    button.onclick = () => showNode(choice.nextNode);
    choices.appendChild(button);
  });

  restartButton.style.display = node.choices.length === 0 ? "block" : "none";
}

// Restart the game
restartButton.onclick = startGame;

// Initialize the game
startGame();
