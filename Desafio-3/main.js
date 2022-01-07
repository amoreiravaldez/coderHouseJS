// Declaro la variable termo de carácter numérico que contiene un valor que posteriormente voy a reducir hasta llegar a cero y salir del bucle.

let termo = 5; 

while (termo > 0) {

    if (termo > 1) {
        console.log("Toma, te paso un mate!");
        console.log("( ^-^)_旦”");

        console.log("Gracias, acá te lo devuelvo!");
        console.log("”旦_(^-^)")
    } else {
        console.warn("Toma, te paso un mate, aunque creo que es el último.");
        console.warn("( ^-^)_旦”");

        console.log("Gracias, acá te lo devuelvo!");
        console.log("”旦_(^-^)")
    }
    
    termo -= 1;
}

// Una vez que el bucle llega a cero, salgo y muestro el mensaje final por consola.

console.error("Nos quedamos sin agua! Ahí voy a cargar más.")
console.error("(o⌓o)....")