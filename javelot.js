/*
VARIABLES
*/

var nombreDes = 6;
var score = 0;
var cpt = 1;
var game_started = false;



/*
FONCTIONS
*/

// Fonction qui renvoie un entier aléatoire entre 1 et 6
function lancerDe() {
  // random --> [0,1[
  return Math.floor(6 * Math.random() + 1);
}

// Fonction qui récupère la valeur du dé i
function getDice(i) {
  return document.querySelector("#dice" + (i + 1)).textContent
}

// Fonction qui lance tous les dés non-cochés, désactive les dés cochés 
// et met à jour le score
function lancerDes() {
  for (let i = 0; i < nombreDes; i++) {
    if (!isDisabled(i)) {
      if (isTicked(i)) {
        disableCheckbox(i)
      } else {
        document.querySelector("#dice" + (i + 1)).textContent = lancerDe();
        if (getDice(i) % 2 == 0) {
          document.getElementById("tick" + (i + 1)).style.display = "none";
        } else document.getElementById("tick" + (i + 1)).style.display = "block";
      }
    }
  }
  score = getSumValidTickedNumber();
  isGameOver();
}

// Fonction qui vérifie si le dé i est coché
function isTicked(i) {
  return document.querySelector("#tick" + (i + 1)).checked
}

// Fonction qui vérifie si le dé i est actif
function isDisabled(i) {
  return document.querySelector("#tick" + (i + 1)).disabled
}

// Fonction qui désactive le dé i s'il est coché
function disableCheckbox(i) {
  document.querySelector("#tick" + (i + 1)).disabled = true;
}

// Fonction qui calcule la somme des valeurs des dés impairs cochés (score actuel)
function getSumValidTickedNumber() {
  let somme = 0;
  for (let i = 0; i < nombreDes; i++) {
    if (isTicked(i) && parseInt(getDice(i)) % 2 != 0) {
      value = parseInt(getDice(i));
      somme += value;
    }
  }
  return somme;
}

// Fonction qui met à jour le score et l'affichage du bouton de lancer
function majScore() {
  document.querySelector("#score").textContent = score;
  document.querySelector("#roll_dices").style.visibility = 'hidden';
  if (isAnyEnabledDiceTicked()) document.querySelector("#roll_dices").style.visibility = 'visible'
}

// Fonction qui vérifie s'il existe un dé impair actif est coché
function isAnyEnabledDiceTicked() {
  for (let i = 0; i < nombreDes; i++) {
    if (isTicked(i) && !isDisabled(i) && parseInt(getDice(i)) % 2 != 0) {
      return true;
    }
  }
  return false;
}

// Fonction qui vérifie s'il reste des dés disponibles
function isAnyAvaliableDice() {
  for (let i = 0; i < nombreDes; i++) {
    if (!isDisabled(i) && parseInt(getDice(i)) % 2 != 0) {
      return true;
    }
  }
  return false;
}

// Fonction qui vérifie si la partie peut continuer et qui l'arrête sinon
function isGameOver() {
  if (game_started && (cpt > 3 || !isAnyAvaliableDice())) {
    for (let i = 0; i < nombreDes; i++) {
      disableCheckbox(i);
    }
    document.querySelector("#gameover").textContent = 'La partie est terminée !';
    document.querySelector("#replay").style.display = 'block';
  }
}

/*
LISTENERS
*/

// Listener bouton "nouvelle partie" (lance les dés et met à jour le score)
document.addEventListener("DOMContentLoaded", (event) => {
  lancerDes();
  game_started = true;
  event.preventDefault();
  document.querySelector("#roll_dices").style.visibility = 'hidden';
  cpt += 1;
});

// Listener bouton "lancer de dés" (lance les dés et met à jour le score)
document.querySelector("#roll_dices").addEventListener("click", (event) => {
  lancerDes();
  game_started = true;
  event.preventDefault();
  document.querySelector("#roll_dices").style.visibility = 'hidden';
  cpt += 1;

})

// Listener clic sur les checkbox (met à jour le score en direct
// et affiche le bouton lancer si un dés impair actif est coché)
document.querySelector("#tick1").addEventListener("click", (event) => {
  score = getSumValidTickedNumber();
  majScore();
})
document.querySelector("#tick2").addEventListener("click", (event) => {
  score = getSumValidTickedNumber();
  majScore();
})
document.querySelector("#tick3").addEventListener("click", (event) => {
  score = getSumValidTickedNumber();
  majScore();
})
document.querySelector("#tick4").addEventListener("click", (event) => {
  score = getSumValidTickedNumber();
  majScore();
})
document.querySelector("#tick5").addEventListener("click", (event) => {
  score = getSumValidTickedNumber();
  majScore();
})
document.querySelector("#tick6").addEventListener("click", (event) => {
  score = getSumValidTickedNumber();
  majScore();
})


/*
FONCTIONS DESACTIVEES
*/

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

// function getCheckboxValue() {
//   Ticked = []
//   for (let i = 0; i < nombreDes; i++) {
//     if (isTicked(i)) {
//       Ticked[i] = true;
//     } else Ticked[i] = false;
//   }
//   return Ticked
// }


// function getDices() {
//   liste_des = [];
//   for (let i = 0; i < nombreDes; i++) {
//     liste_des[i] = document.querySelector("#dice" + (i + 1)).textContent;
//   }
//   return liste_des
// }