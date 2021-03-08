var inputUtente = prompt("dammi una parola");
var isPalindromo = palindroma(inputUtente);

if (isPalindromo) {
  console.log("la parola e' palindroma");
} else {
  console.log("la parola NON e' palindroma!!!");
}

function palindroma(inputUtente) {
  var lunghezzaParola = inputUtente.length;
  for (var i = 0; i < lunghezzaParola / 2; i++) {
    if (inputUtente.charAt(i) !== inputUtente.charAt((lunghezzaParola - 1)- i)) {
      return false;
    }
  }
  return true;
}
