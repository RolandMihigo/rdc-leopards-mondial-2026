const footballTeam = {
  team: "RD Congo",
  year: 2026,
  headCoach: "Sébastien Desabre",
  players: [
    { name: "Lionel Mpasi", age: 31, club: "Le Havre", country: "France", position: "gardien", isCaptain: false },
    { name: "Matthieu Epolo", age: 25, club: "Standard de Liège", country: "Belgique", position: "gardien", isCaptain: false },
    { name: "Timothy Fayulu", age: 26, club: "FC Noah", country: "Arménie", position: "gardien", isCaptain: false },
    { name: "Aaron Wan-Bissaka", age: 28, club: "West Ham", country: "Angleterre", position: "defenseur", isCaptain: false },
    { name: "Gédéon Kalulu", age: 29, club: "Aris Limassol", country: "Chypre", position: "defenseur", isCaptain: false },
    { name: "Arthur Masuaku", age: 32, club: "RC Lens", country: "France", position: "defenseur", isCaptain: false },
    { name: "Joris Kayembe", age: 31, club: "KRC Genk", country: "Belgique", position: "defenseur", isCaptain: false },
    { name: "Rocky Bushiri", age: 26, club: "Hibernian FC", country: "Écosse", position: "defenseur", isCaptain: false },
    { name: "Axel Tuanzebe", age: 28, club: "Burnley", country: "Angleterre", position: "defenseur", isCaptain: false },
    { name: "Chancel Mbemba", age: 31, club: "Lille", country: "France", position: "defenseur", isCaptain: true },
    { name: "Steve Kapuadi", age: 28, club: "Widzew Lodz", country: "Pologne", position: "defenseur", isCaptain: false },
    { name: "Dylan Batubinsika", age: 30, club: "AEL Larissa", country: "Grèce", position: "defenseur", isCaptain: false },
    { name: "Noah Sadiki", age: 21, club: "Sunderland", country: "Angleterre", position: "milieu", isCaptain: false },
    { name: "Edo Kayembe", age: 27, club: "Watford", country: "Angleterre", position: "milieu", isCaptain: false },
    { name: "Samuel Moutoussamy", age: 29, club: "Atromitos FC", country: "Grèce", position: "milieu", isCaptain: false },
    { name: "Charles Pickel", age: 29, club: "RCD Espanyol", country: "Espagne", position: "milieu", isCaptain: false },
    { name: "Ngal’ayel Mukau", age: 21, club: "Lille", country: "France", position: "milieu", isCaptain: false },
    { name: "Nathanaël Mbuku", age: 24, club: "Montpellier", country: "France", position: "attaquant", isCaptain: false },
    { name: "Brian Cipenga", age: 23, club: "CD Castellon", country: "Espagne", position: "attaquant", isCaptain: false },
    { name: "Gaël Kakuta", age: 35, club: "AEL Larissa", country: "Grèce", position: "attaquant", isCaptain: false },
    { name: "Meschack Elia", age: 28, club: "Alanyaspor", country: "Turquie", position: "attaquant", isCaptain: false },
    { name: "Theo Bongonda", age: 30, club: "Spartak Moscou", country: "Russie", position: "attaquant", isCaptain: false },
    { name: "Yoane Wissa", age: 29, club: "Newcastle", country: "Angleterre", position: "attaquant", isCaptain: false },
    { name: "Simon Banza", age: 29, club: "Al Jazira Club", country: "Émirats arabes unis", position: "attaquant", isCaptain: false },
    { name: "Fiston Mayele", age: 31, club: "Pyramids FC", country: "Égypte", position: "attaquant", isCaptain: false },
    { name: "Cédric Bakambu", age: 35, club: "Real Betis", country: "Espagne", position: "attaquant", isCaptain: false }
  ]
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
    .map(player => `
      <div class="player-card">
        <h2>${player.isCaptain ? "(Capitaine) " : ""}${player.name}</h2>
        <p>Âge : ${player.age} ans</p>
        <p>Poste : ${player.position.charAt(0).toUpperCase() + player.position.slice(1)}</p>
        <p>Club : ${player.club} (${player.country})</p>
      </div>
    `)
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
