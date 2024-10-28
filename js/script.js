// RACCOLTA INPUT SUI KM DA PERCORRERE DAL PASSEGGERO
const kmPasseggero = prompt("Benvenuto sul nostro sito, per poter fare un preventivo abbiamo bisogno di sapere quanti km devi percorrere per il tuo viaggio?")
console.log(parseInt(kmPasseggero));

// RACCOLTA INPUT SULL'ETA' DAL PASSEGGERO
const etaPasseggero = prompt("Perfetto, adesso ci servirebbe solo sapere un'altra cosa, quanti anni hai?")
console.log(parseInt(etaPasseggero));

// CALCOLO COSTO BIGLIETTO
const prezzoAlKm = 0.21;
const prezzoPasseggero = (kmPasseggero * prezzoAlKm);
const scontoMinor = (prezzoPasseggero * 20 / 100);
const scontoOver = (prezzoPasseggero * 40 / 100);

// DICHIARAZIONE VARIABILE GLOBALE
let prezzoFinale;

// CONDIZIONI
if (etaPasseggero < 18) {
    prezzoFinale = ((prezzoPasseggero - scontoMinor).toFixed(2) + "€");
    console.log(`Perfetto, dopo aver svolto le dovute verifiche, ti comunichiamo che essendo minorenne sul tuo biglietto è applicato uno sconto del 20% e di conseguenza per la tua tratta il costo finale del biglietto è pari a ${prezzoFinale}`);
} else if (etaPasseggero > 65) {
    prezzoFinale = ((prezzoPasseggero - scontoOver).toFixed(2) + "€");
    console.log(`Perfetto, dopo aver svolto le dovute verifiche, le comunichiamo che essendo over 65 sul suo biglietto è applicato uno sconto del 40% e di conseguenza per la vostra tratta il costo finale del biglietto è pari a ${prezzoFinale}`);
} else {
    prezzoFinale = (prezzoPasseggero.toFixed(2) + "€");
    console.log(`Perfetto, dopo aver svolto le dovute verifiche, ti comunichiamo che il per la tua tratta il costo del biglietto è pari a ${prezzoFinale}`);
}



