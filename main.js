const player1 = {
  name: "Scorpion",
  hp: 80,
  img: "http://reactmarathon-api.herokuapp.com/assets/scorpion.gif",
  weapon: "harpoon",
  attack: () => console.log(this.name + " Fight..."),
}

const player2 = {
  name: "Sonya",
  hp: 100,
  img: "http://reactmarathon-api.herokuapp.com/assets/sonya.gif",
  weapon: "gun",
  attack: () => console.log(this.name + " Fight..."),
}

function createPlayer(classname, playerObj) {
  const arenas = document.querySelector(".arenas")
  const player = document.createElement("div");
  player.classList.add(`${classname}`);
  const progressbar = document.createElement("div");
  progressbar.classList.add("progressbar");
  const life = document.createElement("div");
  life.classList.add("life");
  const name = document.createElement("div");
  name.classList.add("name");
  const character = document.createElement("div");
  character.classList.add("character");
  const img = document.createElement("img");

  img.src = playerObj.img;
  life.style.width = `${playerObj.hp}%`
  name.innerText = playerObj.name;

  progressbar.appendChild(life);
  progressbar.appendChild(name);
  character.appendChild(img);
  player.appendChild(progressbar);
  player.appendChild(character);
  arenas.appendChild(player);
}

createPlayer("player1", player1);
createPlayer("player2", player2);
