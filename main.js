// come capisco che e' una parola palindroma?
// Puo' essere pari e dispara.
// Lettere e vocali sono identiche simmetricamente SE e' para.
// SE INVECE e' dispara, SOLO le lettere piu' esterne saranno identiche, mentre quella interna
// sara' diversa.



var parola_inserita_utente = prompt("dammi una parola");
var parola_utente = palindroma(parola_inserita_utente);


function palindroma(parola_utente) {
  var lunghezza_parola = parola_utente.length;
  for (var i = 0; i < lunghezza_parola / 2; i++) {
    if (parola_utente.charAt(i) !== parola_utente.charAt(lunghezza_parola - 1 - i)) {
      return false;
    }
  }
  return true;
}

if (palindroma(parola_utente)) {
  console.log("la parola e' polindroma");
} else {
  console.log("la parola non e' polindroma");
}
