// function
const dice = document.querySelector("#dice")
const btn = document.querySelector("#btn")
const rollthedice = () => {
const dice = document.getElementById("dice");
const roll = Math.floor(Math.random() * 6) + 1;
dice.textContent = roll;
};
btn.addEventListener("click", rollthedice);

