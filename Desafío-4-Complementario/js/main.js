
// Solicitar peso del usuario y el planeta objetivo.
const pesoUsuarioTierra = prompt("Por favor, inserte su peso en kilogramos en el planeta tierra.")
const planetaSeleccionado = prompt("Por favor selecione un planeta (Mercurio, Tierra, Jupiter, Marte, Saturno, Venus, Urano, Neptuno).").toLowerCase()

// Primera función - Obtención de la gravedad según el planeta seleccionado.
function gravedadesPlanetas (planeta) {

    let gravedadSeleccionada;
    switch (planeta) {
        case "mercurio":
            gravedadSeleccionada = 3.7; 
            break;
        case "tierra":
            gravedadSeleccionada = 9.8; 
            break;
        case "jupiter":
            gravedadSeleccionada = 24.79; 
            break;
        case "marte":
            gravedadSeleccionada = 3.7; 
            break;
        case "saturno": 
            gravedadSeleccionada = 10.44; 
            break;
        case "venus", "urano":
            gravedadSeleccionada = 8.87;
            break;
        case "neptuno":
            gravedadSeleccionada = 11.15;
            break;
        default:
            gravedadSeleccionada = 0;
     
    }
    return gravedadSeleccionada;
}

// Segunda función - Calculo de peso dependiendo del planeta seleccionado.
function calcularPesoPlaneta (peso, planeta) { 

    return Math.round(peso / gravedadesPlanetas("tierra") * gravedadesPlanetas(planeta));
}

// Tercera función - Actualización del DOM
function actualizaciónValoresWeb (pesoOriginal, nuevoPeso) {
    
    if (nuevoPeso == 0 || (pesoUsuarioTierra < 0 || isNaN(pesoUsuarioTierra))) {
        document.getElementById("pesoTierra").innerHTML = "";
        document.getElementById("pesoPlanetaSeleccionado").innerHTML = "";
        alert("El planeta o el peso seleccionados no son válidos."); 
    } else {
        document.getElementById("text1").innerHTML = `Peso en la tierra:`;
        document.getElementById("text2").innerHTML = `Peso en ${planetaSeleccionado}:`;
        document.getElementById("pesoTierra").innerHTML = `${pesoOriginal} KG`;
        document.getElementById("pesoPlanetaSeleccionado").innerHTML = `${nuevoPeso} KG`;
    }
}

// Ejecutar las acciones
// Llamo a la función de actualizaciónValoresWeb que a su vez utiliza el valor obtenido de la función calcularPesoPlaneta

actualizaciónValoresWeb(pesoUsuarioTierra, calcularPesoPlaneta(pesoUsuarioTierra, planetaSeleccionado));
