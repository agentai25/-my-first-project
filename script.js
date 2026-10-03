const celebrateButton = document.querySelector("#celebrate-button");
const celebrationMessage = document.querySelector("#celebration-message");

celebrateButton.addEventListener("click", () => {
  celebrationMessage.hidden = false;
});
