// Declaro las variables con scope global
let currentTotalCost = 0;
const workers = [0,0,0];
let budgetId = 1;

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
            break;

        case 'services-administrator':

            workerQuantity = parseFloat(prompt("Por favor, ingresa el número de administradores que necesita para el desarrollo de su proyecto:"));
            workerCostPerHour = parseFloat(prompt("Por favor, ingresa el monto que se encuentra dispuesto a abonar por hora de trabajo."));
            hoursQuantity = parseFloat(prompt("Por favor, ingrese la cantidad de horas mensuales de trabajo estimadas"));
            break;

        case 'services-it':

            workerQuantity = parseFloat(prompt("Por favor, ingresa el número de programadores que necesita para el desarrollo de su proyecto:"));
            workerCostPerHour = parseFloat(prompt("Por favor, ingresa el monto que se encuentra dispuesto a abonar por hora de trabajo."));
            hoursQuantity = parseFloat(prompt("Por favor, ingrese la cantidad de horas mensuales de trabajo estimadas"));
            break;

        default:

            alert('Ha ocurrido un error.');    
            break;    
    }

    newWorkerItem = new Item (workerQuantity,workerCostPerHour, hoursQuantity, workerId);
    return newWorkerItem;
}


// Valido si el costo ingresado o la cantidad de horas ingresada son números luego de haberlos parseado en la función anterior. Si lo son ejecuto las instrucciones de agregar el item, si no es un número muestro un mensaje notificando el error y salgo de la función.

const updateResults = (updateNewWorker) => {

    // Calculo el valor del nuevo costo total utilizando el método que devuelve el valor total de costo unitario por cantidad de items.
    currentTotalCost += updateNewWorker.title * updateNewWorker.amountByQuantity();

    // Actualizo el valor del nuevo costo total en la página.
    document.querySelector(".services-totals").innerHTML = `COSTO ESTIMADO: ARS $${currentTotalCost}`

    // Desafío 8 - En la sección de Contactos voy a agregar tarjetas que hagan referencia a los presupuestos estimados anteriormente, antes de añadir nuevos trabajadores.

    let contactSection = document.querySelector('#contact-us-budgets');
    let previousBudget = document.createElement("div");

    previousBudget.innerHTML = `<h4> Presupuesto N°: ${budgetId}</h3>
                                <div>  Costo Estimado: $${currentTotalCost}</p>
                                <div> Contadores: ${workers[0]}. Administradores: ${workers[1]}. Programadores: ${workers[2]}.</b>`;
    previousBudget.setAttribute('class', 'test'); 
    contactSection.appendChild(previousBudget);
    budgetId += 1;
}


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
}