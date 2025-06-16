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

let playerWinns = 0;
let dataWinns = 0;

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
    console.log("Player winns this round!");
    playerWinns++;
  } else {
    console.log("Data winns this round!");
    dataWinns++;
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
  console.log(`Current score: Player ${playerWinns} - ${dataWinns} Data`);
}

if (playerWinns > dataWinns) {
  console.log("Player Winns the game!");
} else {
  console.log("Data has bested you!");
}
