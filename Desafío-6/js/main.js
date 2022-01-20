// Busco el botón en el DOM del sitio por su ID.
let currentTotalCost = 0;

// Busco todos los botones del DOM que hagan referencia a la clase .btnAddNewItem y loopeo entre ellos
// con un forEach para añadir un event listener a cada uno.

let btnAddNewItem = document.querySelectorAll('.btnAddNewItem').forEach(item => {
    item.addEventListener('click', () => {
        
        const newWorker = newWorkerDetails(item.id);
        updateResults(newWorker);
        
    })
});

// Utilizo una única función para definir los inputs de usuario cada vez que presiona uno de los botones.
// Tengo que diferenciar por ID para poder entender que clase de trabajador quiere adicionar al proyecto.

const newWorkerDetails = (workerId) => {

    let workerTitle;
    let workerCostPerHour;
    let hoursQuantity;
    let newWorkerItem;
    
    switch (workerId) 
    {   

        case 'services-accountant':
            
            workerTitle = prompt("Por favor, ingresa el número de contadores que necesita para el desarrollo de su proyecto:");
            workerCostPerHour = parseFloat(prompt("Por favor, ingresa el monto que se encuentra dispuesto a abonar por hora de trabajo."));
            hoursQuantity = parseFloat(prompt("Por favor, ingresa la cantidad de horas mensuales que estima que cada contador deberá trabajar."));
            newWorkerItem = new Item (workerTitle,workerCostPerHour, hoursQuantity);
            break;

        case 'services-administrator':

            workerTitle = prompt("Por favor, ingresa el número de administradores que necesita para el desarrollo de su proyecto:");
            workerCostPerHour = parseFloat(prompt("Por favor, ingresa el monto que se encuentra dispuesto a abonar por hora de trabajo."));
            hoursQuantity = parseFloat(prompt("Por favor, ingresa la cantidad de horas mensuales que estima que cada administrador deberá trabajar."));
            newWorkerItem = new Item (workerTitle,workerCostPerHour, hoursQuantity);
            break;

        case 'services-it':

            workerTitle = prompt("Por favor, ingresa el número de programadores que necesita para el desarrollo de su proyecto:");
            workerCostPerHour = parseFloat(prompt("Por favor, ingresa el monto que se encuentra dispuesto a abonar por hora de trabajo."));
            hoursQuantity = parseFloat(prompt("Por favor, ingresa la cantidad de horas mensuales que estima que cada programador deberá trabajar."));
            newWorkerItem = new Item (workerTitle,workerCostPerHour, hoursQuantity);
            break;

        default:

            alert('Ha ocurrido un error.');    
            break;    
    }

    return newWorkerItem;
}


// Valido si el costo ingresado o la cantidad de horas ingresada son números luego de haberlos parseado en la función anterior. Si lo son ejecuto las instrucciones de agregar el item, si no es un número muestro un mensaje notificando el error y salgo de la función.

// const
// if (isNaN(newItemDetails.cost) || isNaN(newItemDetails.quantity)) {

//     alert("El costo unitario o la cantidad del item son incorrectas. Por favor ingrese un número válido para el nuevo item.");

// } else {

//     // Calculo el valor del nuevo costo total utilizando el método que devuelve el valor total de costo unitario por cantidad de items.
//     currentTotalCost += newItemDetails.amountByQuantity();

//     // Actualizo el valor del nuevo costo total en la página.
//     document.getElementById("spanTotalCost").innerHTML = `Costo Total: ARS $${currentTotalCost}`

//     // Agrego un div en la página web para mostrar el item nuevo con su costo unitario y costo total.
//     const newTaskDiv = document.createElement('div');
//     newTaskDiv.innerHTML = `Item: ${newItemDetails.title}. El costo unitario del mismo es de  ARS $${newItemDetails.cost}. El costo total por este item es de ARS $${newItemDetails.amountByQuantity()}.`;
//     newTaskDiv.className = 'newTaskDiv';
//     document.body.appendChild(newTaskDiv)
