function lancer_des() {
    // random --> [0,1[
    return Math.floor(6*Math.random()+1)
}

function est_pair(de) {
    return de%2 == 0
}

function calcul_score(liste_des) {
    let score = 0
    for (let index = 0; index < liste_des.length; index++) {
        if (liste_des[i] % 2 != 0) {
            // le nombre est impair
            score += liste_des[i]
        }
    }
    return score
}