let heroi = "Victor";
let heroiXP = 20000;
let nivel = "";

if (heroiXP < 1000) {
    console.log("Classificação: Ferro");
}else if (heroiXP > 1001 && heroiXP < 2000) {
    console.log("Classificação: Bronze");
}else if (heroiXP > 2001 && heroiXP < 5000) {
    console.log("Classificação: Prata");
}else if (heroiXP > 5001 && heroiXP < 7000) {
    console.log("Classificação: Ouro");
}else if (heroiXP > 7001 && heroiXP < 8000) {
    console.log("Classificação: Platina");
}else if (heroiXP > 8001 && heroiXP < 9000) {
    console.log("Classificação: Ascendente");
}else if (heroiXP > 9001 && heroiXP < 10000) {
    console.log("Classificação: Imortal");
}else if (heroiXP >= 10001 ) {
    console.log("Classificação: Radiante");
    nivel = "Radiante";
} else ("Digite o número de XP corretamente!");

console.log('"O Herói de nome ' + heroi + ' está no nível de ' + nivel + '."');
