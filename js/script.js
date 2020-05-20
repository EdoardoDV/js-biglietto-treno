var km = prompt('Quanti chilometri devi percorrere?');
var age = prompt('Quanti anni hai?');
if (age > 65) {
var prezzo = (km*.21) * .6
}
else if (age < 18) {
var prezzo = (km*.21) * .8
}
else {
var prezzo = (km*.21)
}
document.getElementById('prezzo').innerHTML = 'il prezzo da pagare corrisponde a ' + prezzo + ' Euro';