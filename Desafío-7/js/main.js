// Declaro las variables con scope global
let currentTotalCost = 0;
const workers = [0,0,0];

// Busco todos los botones del DOM que hagan referencia a la clase .btnAddNewItem y loopeo entre ellos
// con un forEach para añadir un event listener a cada uno.

let btnAddNewItem = document.querySelectorAll('.btnAddNewItem').forEach(item => {
    item.addEventListener('click', () => {
        
        const newWorker = newWorkerDetails(item.id);

        if (isNaN(newWorker.title) || isNaN(newWorker.cost) || isNaN(newWorker.quantity) || newWorker.title < 1 || newWorker.cost < 1 || newWorker.quantity < 1) {

            alert("El costo por hora o la cantidad de horas son incorrectas. Por favor ingrese un número válido para el nuevo item.");
            return;
    
        } else {

            updateResults(newWorker);
            workersDistribution(newWorker);
        
        }
    })
});

// Utilizo una única función para definir los inputs de usuario cada vez que presiona uno de los botones.
// Tengo que diferenciar por ID para poder entender que clase de trabajador quiere adicionar al proyecto.

const newWorkerDetails = (workerId) => {

    let workerQuantity;
    let workerCostPerHour;
    let hoursQuantity;
    let newWorkerItem;
    
    switch (workerId) 
    {   

        case 'services-accountant':
            
            workerQuantity = parseFloat(prompt("Por favor, ingrese el número de contadores estimado para su proyecto"));
            workerCostPerHour = parseFloat(prompt("Por favor, ingrese el monto dispuesto a abonar por hora de trabajo"));
            hoursQuantity = parseFloat(prompt("Por favor, ingrese la cantidad de horas mensuales de trabajo estimadas"));
            newWorkerItem = new Item (workerQuantity,workerCostPerHour, hoursQuantity, workerId);
            break;

        case 'services-administrator':

            workerQuantity = parseFloat(prompt("Por favor, ingresa el número de administradores que necesita para el desarrollo de su proyecto:"));
            workerCostPerHour = parseFloat(prompt("Por favor, ingresa el monto que se encuentra dispuesto a abonar por hora de trabajo."));
            hoursQuantity = parseFloat(prompt("Por favor, ingrese la cantidad de horas mensuales de trabajo estimadas"));
            newWorkerItem = new Item (workerQuantity,workerCostPerHour, hoursQuantity, workerId);
            break;

        case 'services-it':

            workerQuantity = parseFloat(prompt("Por favor, ingresa el número de programadores que necesita para el desarrollo de su proyecto:"));
            workerCostPerHour = parseFloat(prompt("Por favor, ingresa el monto que se encuentra dispuesto a abonar por hora de trabajo."));
            hoursQuantity = parseFloat(prompt("Por favor, ingrese la cantidad de horas mensuales de trabajo estimadas"));
            newWorkerItem = new Item (workerQuantity,workerCostPerHour, hoursQuantity, workerId);
            break;

        default:

            alert('Ha ocurrido un error.');    
            break;    
    }

    return newWorkerItem;
}


// Valido si el costo ingresado o la cantidad de horas ingresada son números luego de haberlos parseado en la función anterior. Si lo son ejecuto las instrucciones de agregar el item, si no es un número muestro un mensaje notificando el error y salgo de la función.

const updateResults = (updateNewWorker) => {

    // Calculo el valor del nuevo costo total utilizando el método que devuelve el valor total de costo unitario por cantidad de items.
    currentTotalCost += updateNewWorker.title * updateNewWorker.amountByQuantity();

    // Actualizo el valor del nuevo costo total en la página.
    document.querySelector(".services-totals").innerHTML = `COSTO ESTIMADO: ARS $${currentTotalCost}`
}

// Desafío Arrays

const workersDistribution = (updateNewWorker) => {
        
    // Muestro en un alert la cantida de trabajadores por área estimados
    
    switch (updateNewWorker.id) 
    {  
        case 'services-accountant':
            workers[0] += 1;
            break;
        case 'services-administrator':
            workers[1] += 1;
            break;
        case 'services-it':
            workers[2] += 1;
            break;
        default:
            alert('Ha ocurrido un error.');    
            break;    
    }

    // Cantidad nominal.
    alert(`Contadores: ${workers[0]}. Administradores: ${workers[1]}. Programadores: ${workers[2]}.`);

    // Cantidad porcentual utilizando el método map - Desafío Array.

    const workersPercentage = workers.map( x => x/(workers[0] + workers[1] + workers[2]) * 100);
    alert(`Tu equipo se encuentra compuesto por un ${Math.round(workersPercentage[0])}% de contadores, un ${Math.round(workersPercentage[1])}% de administradores, y un ${Math.round(workersPercentage[2])}% de programadores.`)

    // Ordenar Array Numéricamente - Desafío Array Opcional

    let arrayOrdenAscendente = [];
    arrayOrdenAscendente = workersPercentage.sort(function(a, b){return a - b});
    alert(`El orden de los porcentajes de forma ascendente es: ${Math.round(arrayOrdenAscendente[0])}, ${Math.round(arrayOrdenAscendente[1])}, ${Math.round(arrayOrdenAscendente[2])}.`)

    let arrayOrdenDescendente = [];
    arrayOrdenDescendente = workersPercentage.sort(function(a, b){return b - a});
    alert(`El orden de los porcentajes de forma ascendente es: ${Math.round(arrayOrdenDescendente[0])}, ${Math.round(arrayOrdenDescendente[1])}, ${Math.round(arrayOrdenDescendente[2])}.`)
}