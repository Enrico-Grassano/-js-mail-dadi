// Generare un numero random da 1 a 6 sia per l'utente che per il computer.
var userNumber = Math.floor(Math.random() * 6) + 1;
console.log("Numero utente:", userNumber);
var pcNumber = Math.floor(Math.random() * 6) + 1;
console.log("Numero PC:", pcNumber);
// Stabilire il vincitore in baase al punteggio più alto.
if (userNumber > pcNumber) {
    console.log("Utente vince.");
} else if (userNumber == pcNumber) {
    console.log("Pareggio.");
} else {
    console.log("PC vince.");
}