// should create function fizzBuzz
function fizzBuzz(numero) {
	if (numero % 3 == 0 && numero % 5 == 0) {
		return "FizzBuzz";
	} else if (numero % 3 == 0) {
		return "Fizz";
	} else if (numero % 5 == 0) {
		return "Buzz";
	} else {
		return numero;
	}
}

for (var i = 1; i <= 100; i++) {
	console.log(fizzBuzz(i));
}