
// Solicitar el nombre del usuario y guardarlo en la variable nombre.
let nombre = prompt('Por favor, ingrese su nombre');

// Solicitar el apellido del usuario y guardarlo en la variable apellido.
let apellido = prompt('Por favor, ingrese su apellido');

// Solicitar la edad del usuario y guardarlo en la variable edad.
let edad = Number(prompt('Por favor, ingrese su edad.'));

// Imprimir un mensaje por consola utilizando las variables generadas anteriormente.
console.log('Su nombre es ' + nombre + ' ' + apellido + ', y tiene ' + edad + ' años.');

// Mostrar en un alert el mismo mensaje.
alert(`Su nombre es ${nombre} ${apellido} y tiene ${edad} años.`);