// Punto 1 e punto 2
let giocatore = Math.round(Math.random()*5 + 1);
console.log(giocatore);
let computer = Math.round(Math.random()*5 + 1);
console.log(computer);

// Punto 3
if(giocatore > computer){
    console.log('Hai vinto!');
}
else if(giocatore == computer){
    console.log('Pareggio! Riprova di nuovo!')
}
else{
    console.log('Hai perso...')
}