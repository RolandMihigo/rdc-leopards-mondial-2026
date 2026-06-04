const footballTeam = {
  team: "RD Congo",
  year: 2026,
  headCoach: "Sébastien Desabre",
  players: [
    { name: "Lionel Mpasi", position: "gardien", isCaptain: false },
    { name: "Matthieu Epolo", position: "gardien", isCaptain: false },
    { name: "Timothy Fayulu", position: "gardien", isCaptain: false },
    { name: "Aaron Wan-Bissaka", position: "defenseur", isCaptain: false },
    { name: "Gédéon Kalulu", position: "defenseur", isCaptain: false },
    { name: "Arthur Masuaku", position: "defenseur", isCaptain: false },
    { name: "Joris Kayembe", position: "defenseur", isCaptain: false },
    { name: "Rocky Bushiri", position: "defenseur", isCaptain: false },
    { name: "Axel Tuanzebe", position: "defenseur", isCaptain: false },
    { name: "Chancel Mbemba", position: "defenseur", isCaptain: true },
    { name: "Steve Kapuadi", position: "defenseur", isCaptain: false },
    { name: "Dylan Batubinsika", position: "defenseur", isCaptain: false },
    { name: "Noah Sadiki", position: "milieu", isCaptain: false },
    { name: "Edo Kayembe", position: "milieu", isCaptain: false },
    { name: "Samuel Moutoussamy", position: "milieu", isCaptain: false },
    { name: "Charles Pickel", position: "milieu", isCaptain: false },
    { name: "Ngal’ayel Mukau", position: "milieu", isCaptain: false },
    { name: "Nathanaël Mbuku", position: "attaquant", isCaptain: false },
    { name: "Brian Cipenga", position: "attaquant", isCaptain: false },
    { name: "Gaël Kakuta", position: "attaquant", isCaptain: false },
    { name: "Meschack Elia", position: "attaquant", isCaptain: false },
    { name: "Theo Bongonda", position: "attaquant", isCaptain: false },
    { name: "Yoane Wissa", position: "attaquant", isCaptain: false },
    { name: "Simon Banza", position: "attaquant", isCaptain: false },
    { name: "Fiston Mayele", position: "attaquant", isCaptain: false },
    { name: "Cédric Bakambu", position: "attaquant", isCaptain: false },
  ],
};

const teamName = document.getElementById("team");
const teamYear = document.getElementById("year");
const headCoach = document.getElementById("head-coach");
const playerSelect = document.getElementById("players");
const playerCards = document.getElementById("player-cards");

teamName.textContent = footballTeam.team;
teamYear.textContent = footballTeam.year;
headCoach.textContent = footballTeam.headCoach;

const displayPlayers = (players) => {
  playerCards.innerHTML = players
    .map(
      (player) => `
      <div class="player-card">
        <h2>${player.isCaptain ? "(Capitaine) " : ""}${player.name}</h2>
        <p>Poste : ${player.position.charAt(0).toUpperCase() + player.position.slice(1)}</p>
      </div>
    `,
    )
    .join("");
};

playerSelect.addEventListener("change", (e) => {
  const value = e.target.value;
  const filteredPlayers =
    value === "all"
      ? footballTeam.players
      : footballTeam.players.filter((player) => player.position === value);

  displayPlayers(filteredPlayers);
});

displayPlayers(footballTeam.players);
