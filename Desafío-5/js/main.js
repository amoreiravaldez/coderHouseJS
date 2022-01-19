// Busco el botón en el DOM del sitio por su ID.

let btnAddNewItem = document.getElementById("btnAddNewItem");
let currentTotalCost = 0;

// Agrego un Event Listener para detectar cuando se hace click sobre el botón.

btnAddNewItem.addEventListener("click", () => {
    
    // Utilizo una única función para solicitar los valores de título del item y prompt, esta función devuelve un objeto que guardo en una variable.
    const newItemDetails = asknewItemDetails();

    // Valido si el costo ingresado o la cantidad ingresada  son números luego de haberlos parseado en la función anterior. Si lo son ejecuto las instrucciones de agregar el item, si no es un número muestro un mensaje notificando el error y salgo de la función.

    if (isNaN(newItemDetails.cost) || isNaN(newItemDetails.quantity)) {

        alert("El costo unitario o la cantidad del item son incorrectas. Por favor ingrese un número válido para el nuevo item.");

    } else {

        // Calculo el valor del nuevo costo total utilizando el método que devuelve el valor total de costo unitario por cantidad de items.
        currentTotalCost += newItemDetails.amountByQuantity();

        // Actualizo el valor del nuevo costo total en la página.
        document.getElementById("spanTotalCost").innerHTML = `Costo Total: ARS $${currentTotalCost}`

        // Agrego un div en la página web para mostrar el item nuevo con su costo unitario y costo total.
        const newTaskDiv = document.createElement('div');
        newTaskDiv.innerHTML = `Item: ${newItemDetails.title}. El costo unitario del mismo es de  ARS $${newItemDetails.cost}. El costo total por este item es de ARS $${newItemDetails.amountByQuantity()}.`;
        newTaskDiv.className = 'newTaskDiv';
        document.body.appendChild(newTaskDiv);
    }
});

// Solicito que el usuario ingrese el título del nuevio item, su costo unitario y la cantidad a presupuestar.
const asknewItemDetails = () => {
    const itemTitle = prompt("Por favor, ingresa un nuevo item para tu presupuesto.");
    const itemCost = parseFloat(prompt("Por favor, ingresa el costo unitario de este item."));
    const itemQuantity = parseFloat(prompt("Por favor, ingresa la cantidad de este item."));
    const newUserItem = new Item (itemTitle,itemCost, itemQuantity)
    return newUserItem;
}

// Constructor del objeto item.
class Item {
    constructor (newTitle, newCost, newQuantity) {
        this.title = newTitle;
        this.cost = newCost;
        this.quantity = newQuantity;
        this.amountByQuantity = () => { 
            return newCost * newQuantity;
        }
    }
}