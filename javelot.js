function lancerDe() {
  // random --> [0,1[
  return Math.floor(6 * Math.random() + 1);
}

function lancerDes() {
  for (let i = 0; i < 6; i++) {
    if(isTicked(i)) {
      disableCheckbox(i);
    } else document.querySelector("#dice"+ (i + 1)).textContent = lancerDe()
  }
}

function estPair(de) {
  return de % 2 == 0;
}

function calculScore(liste_des) {
  let score = 0;
  for (let index = 0; index < liste_des.length; index++) {
    if (liste_des[i] % 2 != 0) {
      // le nombre est impair
      score += liste_des[i];
    }
  }
  return score;
}

document.querySelector("#roll_dices").addEventListener("click", (event) => {
  lancerDes()
  event.preventDefault();
})

function getDices() {
  liste_des = [];
  for (let i = 0; i < 6; i++) {
    liste_des[i] = document.querySelector("#dice" + (i+1)).textContent;
  }
  return liste_des
}

function getAllTicked() {
  Ticked = []
  for (let i = 0; i < 6; i++) {
    if(isTicked(i)) {
      Ticked[i] = true;
    }
    else Ticked[i] = false;
  }
  return Ticked
}

function isTicked(i) {
  return document.querySelector("#tick" + (i+1)).checked
}

function disableCheckbox(i) {
  if (isTicked(i)) {
    document.querySelector("#tick" + (i+1)).disabled = true
  }
}