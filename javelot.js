var nombreDes = 6;
var score = 0;

function lancerDe() {
  // random --> [0,1[
  return Math.floor(6 * Math.random() + 1);
}

function getDice(i) {
  return document.querySelector("#dice" + (i + 1)).textContent
}

// function getDices() {
//   liste_des = [];
//   for (let i = 0; i < nombreDes; i++) {
//     liste_des[i] = document.querySelector("#dice" + (i + 1)).textContent;
//   }
//   return liste_des
// }

function lancerDes() {
  for (let i = 0; i < nombreDes; i++) {
    if (isTicked(i)) {
      disableCheckbox(i);
    } else document.querySelector("#dice" + (i + 1)).textContent = lancerDe()
  }
  score += getSumValidTickedNumber();
  majScore()
}

// function calculScore() {
//   liste_des = getDices();
//   let score = 0;
//   for (let index = 0; index < liste_des.length; index++) {
//     if (liste_des[i] % 2 != 0) {
//       // le nombre est impair
//       score += liste_des[i];
//     }
//   }
//   return score;
// }

document.querySelector("#roll_dices").addEventListener("click", (event) => {
  lancerDes()
  event.preventDefault();
})

// function getCheckboxValue() {
//   Ticked = []
//   for (let i = 0; i < nombreDes; i++) {
//     if (isTicked(i)) {
//       Ticked[i] = true;
//     } else Ticked[i] = false;
//   }
//   return Ticked
// }

function isTicked(i) {
  return document.querySelector("#tick" + (i + 1)).checked
}

function disableCheckbox(i) {
  if (isTicked(i)) {
    document.querySelector("#tick" + (i + 1)).disabled = true
  }
}

function getSumValidTickedNumber() {
  let somme = 0
  for (let i = 0; i < nombreDes; i++) {
    if (isTicked(i) && parseInt(getDice(i)) % 2 != 0) {
      value = parseInt(getDice(i));
      somme += value;
    }
  }
  return somme
}

function majScore () {
  document.querySelector("#score").textContent = score
}