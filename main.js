// come capisco che e' una parola palindroma?
// Puo' essere pari e dispara.
// Lettere e vocali sono identiche simmetricamente SE e' para.
// SE INVECE e' dispara, SOLO le lettere piu' esterne saranno identiche, mentre quella interna
// sara' diversa.



var input_utente = prompt("dammi una parola");
var parola_utente = palindroma(input_utente);

if (palindroma(parola_utente)) {
  console.log("la parola e' palindroma");
} else {
  console.log("la parola non e' palindroma");
}

function palindroma(input_utente) {
  var lunghezza_parola = input_utente.length;
  for (var i = 0; i < lunghezza_parola / 2; i++) {
    if (input_utente.charAt(i) !== input_utente.charAt(lunghezza_parola - 1 - i)) {
      return false;
    }
  }
  return true;
}
