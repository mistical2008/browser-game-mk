const player1 = {
  name: "SCORPION",
  hp: 80,
  img: "http://reactmarathon-api.herokuapp.com/assets/scorpion.gif",
  weapon: "harpoon",
  attack: () => console.log(this.name + " Fight..."),
}

const player2 = {
  name: "SONYA",
  hp: 100,
  img: "http://reactmarathon-api.herokuapp.com/assets/sonya.gif",
  weapon: "gun",
  attack: () => console.log(this.name + " Fight..."),
}

function createElement(htmlTag, classname) {
  const el = document.createElement(htmlTag);
  if (classname) el.classList.add(classname);
  return el;
}

function createPlayer(classname, playerObj) {
  const arenas = document.querySelector(".arenas")
  const player = createElement("div", classname);
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
  arenas.appendChild(player);
}

createPlayer("player1", player1);
createPlayer("player2", player2);
