// Número minimo
var min = 0;

// Numero maximo
var max = 100;

// Numero aleatorio
var numero_secreto = Math.floor(Math.random() * (max - min + 1)) + min;

console.log(numero_secreto);

var mensaje = "Ingresa un número para adivinar el número mágico";

while (true) {
	var numero_del_usuario = prompt(mensaje, "0");

	numero_del_usuario = parseInt(numero_del_usuario);

	if (numero_del_usuario == numero_secreto) {
		alert("Felicidades, has adivinado el número secreto");
		break;
	} else if (numero_del_usuario === 0) {
		break;
	} else if (numero_del_usuario > numero_secreto) {
		mensaje = "Lo sentimos, el número que ingresaste es mayor al numero mágico";
	} else if (numero_del_usuario < numero_secreto) {
		mensaje = "Lo sentimos, el número que ingresaste es menor al numero mágico";
	} 
}