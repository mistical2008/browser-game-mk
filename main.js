const arenas = document.querySelector(".arenas")
const button = document.querySelector(".button")

const player1 = {
  player: 1,
  name: "SCORPION",
  hp: 100,
  img: "http://reactmarathon-api.herokuapp.com/assets/scorpion.gif",
  weapon: "harpoon",
  attack: () => console.log(this.name + " Fight..."),
}

const player2 = {
  player: 2,
  name: "SONYA",
  hp: 100,
  img: "http://reactmarathon-api.herokuapp.com/assets/sonya.gif",
  weapon: "gun",
  attack: () => console.log(this.name + " Fight..."),
}

function random(min, max) {
  return Math.floor(Math.random() * (max + 1 - min) + min)
}

function changeLifeAmount(hp, playerLife) {
  playerLife.style.width = hp + "%";
}

function changeHp(player) {
  const playerLife = document.querySelector(`.player${player.player} .life`);

  if (player.hp > 0) {
    player.hp -= random(1, 20);
    changeLifeAmount(player.hp, playerLife)
  }

  if (player.hp <= 0) {
    const winner = getWinner(player1, player2);
    button.disabled = true;
    player.hp = 0;

    changeLifeAmount(player.hp, playerLife)
    arenas.appendChild(playerEndFightTitle(winner, "wins"))
    console.log(player.name, ":", player.hp);
  }
}

function getWinner(player1, player2) {
  const name = player1.hp > player2.hp ? player1.name : player2.name;
  return name;
}

function playerEndFightTitle(name, action) {
  const loseTitle = createElement("div", "loseTitle");
  loseTitle.innerText = `${name} ${action}`;
  return loseTitle;
}

function createElement(htmlTag, classname) {
  const el = document.createElement(htmlTag);
  if (classname) el.classList.add(classname);
  return el;
}

function createPlayer(playerObj) {
  const player = createElement("div", `player${playerObj.player}`);
  const progressbar = createElement("div", "progressbar");
  const life = createElement("div", "life");
  const name = createElement("div", "name");
  const character = createElement("div", "character");
  const img = createElement("img");

  img.src = playerObj.img;
  life.style.width = `${playerObj.hp}%`
  name.innerText = playerObj.name;

  progressbar.appendChild(life);
  progressbar.appendChild(name);
  character.appendChild(img);
  player.appendChild(progressbar);
  player.appendChild(character);

  return player;
}

button.addEventListener("click", () => {
  changeHp(player1);
  changeHp(player2);
  console.log("clicked!");
})

arenas.appendChild(createPlayer(player1));
arenas.appendChild(createPlayer(player2));
