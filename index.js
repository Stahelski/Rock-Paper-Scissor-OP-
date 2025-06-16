// Psudokode.
//             3 variabler = Stein, saks, papir.

//             Random function, som velger tilfeldig mellom stein, saks, papir.

//
//             om spillers valg === datas valg = uavgjort.

//             om spiller valg = stein, datas valg = saks: spiller vinner. ellers, spiller taper.
//
//             om spillers valg = papir, datas valg = stein: spiller vinner. ellers spiller taper.
//
//             om spiller valg = saks, data valg = papir: spiller vinner. ellers spiller taper.
//

// eg ønske å spille 5 runder, og den som har flest poeng etter 5 runder vinner
// eg treng en plass å lagre hvert vinn
// eg må registrere hver gang en vinner
//

let playerWins = 0;
let dataWins = 0;

dataFirstTOFive = 0;
playerFirstTOFive = 0;

const stein = 1;
const saks = 2;
const papir = 3;

const numGames = 5;

let userVal;

function RPS(userVal, dataIn) {
  if (userVal === dataIn) {
    console.log("Its a tie");
  } else if (
    (userVal === stein && dataIn === saks) ||
    (userVal === saks && dataIn === papir) ||
    (userVal === papir && dataIn === stein)
  ) {
    console.log("Player wins this round!");
    playerWins++;
  } else {
    console.log("Data wins this round!");
    dataWins++;
  }
}

// Returner et tall mellom 0-2
function randomChoiseData() {
  return Math.floor(Math.random() * 4);
}

for (let i = 0; i < numGames; i++) {
  const userIn = prompt("Stein, Saks eller Papir?");
  const dataIn = randomChoiseData();

  if (userIn.toLowerCase() === "stein") {
    userVal = stein;
  } else if (userIn.toLowerCase() === "saks") {
    userVal = saks;
  } else if (userIn.toLocaleLowerCase() === "papir") {
    userVal = papir;
  } else {
    console.group("Invalid input!");
    i--;
    continue;
  }

  RPS(userVal, dataIn);
  console.log(`Current score: Player ${playerWins} - ${dataWins} Data`);
}

if (playerWins > dataWins) {
  console.log("Player Wins the game!");
} else {
  console.log("Data has bested you!");
}
