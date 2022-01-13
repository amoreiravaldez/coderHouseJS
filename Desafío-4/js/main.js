// Busco el botón en el DOM del sitio por su ID.

let btnAddNewItem = document.getElementById("btnAddNewItem");
let currentTotalCost = 0;

// Agrego un Event Listener para detectar cuando se hace click sobre el botón.

btnAddNewItem.addEventListener("click", () => {
    
    // Guardo en una variable el titulo del nuevo item.
    const newItemTitle = asknewItemTitle();

    // Guardo en una variable el costo del nuevo item.
    const newItemCost = askNewItemCost();

    // Valido si el costo ingresado es un número luego de haberlo parseado en la función anterior. Si lo es ejecuto las instrucciones de agregar el item, si no es un número muestro un mensaje notificando el error y salgo de la función.

    if (isNaN(newItemCost)) {

        alert("Por favor ingrese un número válido para el nuevo item.");
        return;

    } else {

        // Calculo el valor del nuevo costo total.
        currentTotalCost = updateTotalCost(currentTotalCost,newItemCost)

        // Actualizo el valor del nuevo costo total en la página.
        document.getElementById("spanTotalCost").innerHTML = `Costo Total: ARS $${currentTotalCost}`

        // Agrego un div en la página web para mostrar el item nuevo con su costo.
        const newTaskDiv = document.createElement('div');
        newTaskDiv.innerHTML = `Item: ${newItemTitle}. El costo del mismo es de  ARS $${newItemCost}`;
        newTaskDiv.className = 'newTaskDiv';
        document.body.appendChild(newTaskDiv);

    }
});

// Solicito que el usuario ingrese el título de la nueva tarea
const asknewItemTitle = () => {
 
    const itemTitle = prompt("Por favor, ingresa un nuevo item para tu presupuesto.");
    return itemTitle;
}

// Solicito que el usuario ingrese la duración estimada de la nueva tarea
const askNewItemCost = () => {

    const itemCost = parseFloat(prompt("Por favor, ingresa el costo estimado de este item."));
    return itemCost;
}

const updateTotalCost = (previousTotal, costToAdd) => {

    return previousTotal + costToAdd;
}

