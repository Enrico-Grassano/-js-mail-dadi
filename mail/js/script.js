// Chiedi all'utente la sua email.
var userEmail = prompt("Inserisci la tua email.");
console.log("Email dell'utente:", userEmail);
// Crea un array contenente le email autorizzate.
var authorizedEmails = [
    "grassano.enrico1996@gmail.com",
    "bezos.jeffrey1964@gmail.com",
    "musk.elon1971@gmail.com",
    "gates.bill1955@outlook.com",
    "jobs.steve1955@gmail.com"
];
console.log("Email autorizzate:");
for (var i = 0; i < authorizedEmails.length; i++) {
    console.log(authorizedEmails[i]);
}
// Controlla che l'email dell'utente sia nella lista delle email autorizzate.
var emailFound = false;
for (var i = 0; i < authorizedEmails.length; i++) {
    if (authorizedEmails[i] == userEmail) {
        emailFound = true;
    }
}
// Stampa un messaggio appropriato sull'esito del controllo.
if (emailFound) {
    console.log("La mail dell'utente è presente nella lista.");
} else {
    console.log("La mail dell'utente non è presente nella lista.");
}

