/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const x = 10;
const y = 8;

if (x == y){
  console.log("I numeri sono uguali");
} else{
  if (x > y){
    console.log("Il primo numero e piu grande del secondo");
  } else {
    console.log("Il secondo numero e piu grande del primo");
  }
}

/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

if (x != 5){
  console.log("not equal");
}

/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: usa l'operatore modulo)
*/

/* SCRIVI QUI LA TUA RISPOSTA */

if (x % 5 == 0){
  console.log("divisibile")
}

/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

if ((x == 8) || (y == 8) || (x + y == 8) || (x - y == 8)) {
  console.log("verificato")
}


/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let totalShoppingCart = 40;

if (totalShoppingCart >= 50){
  console.log("Hai diritto alla spedizione gratuita il totale sara " + totalShoppingCart);
} else {
  totalShoppingCart += 10;
  console.log("La spedizione ha un costo di 10 quindi il totale sara " + totalShoppingCart);
}


/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let sconto = (totalShoppingCart * 0.2);
let totale = (totalShoppingCart - sconto);


if (totale >= 50){
  console.log("Hai diritto alla spedizione gratuita il totale sara " + totale);
} else {
  totale += 10;
  console.log("La spedizione ha un costo di 10 quindi il totale sara " + totale);
}


/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/

const z = 30;

let numOrdinati;

// Ordinamento usando condizioni
if (x >= y && x >= z) {

  if (y >= z) {
    numOrdinati = [x, y, z]; 
  } else {
    numOrdinati = [x, z, y]; 
  }
} else if (y >= x && y >= z) {
  if (x >= z) {
    numOrdinati = [y, x, z]; 
  } else {
    numOrdinati = [y, z, x]; 
  }
} else {
  if (x >= y) {
    numOrdinati = [z, x, y];
  } else {
    numOrdinati = [z, y, x]; 
  }
}

console.log(numOrdinati);


/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const valore = "ciao";

console.log(typeof valore);


/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

/* SCRIVI QUI LA TUA RISPOSTA */

if (x % 2 == 0){
  console.log("Il numero e pari");
} else {
  console.log("Il numero e dispari");
}

/* ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.
  */
  
let val = 7;

if (val < 5) {
    console.log("Meno di 5");
  } else if (val < 10) {
    console.log("Meno di 10");
  } else {
    console.log("Uguale a 10 o maggiore");
  }


/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
*/

const me = {

  name: 'John',
  lastName: 'Doe',
  skills: ['javascript', 'html', 'css'],
};

me.city = "Toronto";
console.log(me)


/* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
*/

/* SCRIVI QUI LA TUA RISPOSTA */

delete me.lastName;
console.log(me);

/* ESERCIZIO 13
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
*/

/* SCRIVI QUI LA TUA RISPOSTA */

me.skills.pop()
console.log(me)


/* ESERCIZIO 14
  Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const lista= Array.from({ length: 10 }, (_, i) => i + 1);
console.log(lista);


/* ESERCIZIO 15
  Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

lista[lista.length - 1] = 100;
console.log(lista);

