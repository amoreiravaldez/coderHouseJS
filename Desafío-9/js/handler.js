// Busco todos los botones del DOM que hagan referencia a la clase .btnAddNewItem y loopeo entre ellos
// con un forEach para añadir un event listener a cada uno.

let btnAddNewItem = document.querySelectorAll('.btnAddNewItem').forEach(item => {
    item.addEventListener('click', () => {
        
        const newWorker = newWorkerDetails(item.id);

        if (isNaN(newWorker.title) || isNaN(newWorker.cost) || isNaN(newWorker.quantity) || newWorker.title < 1 || newWorker.cost < 1 || newWorker.quantity < 1) {

            alert("El costo por hora o la cantidad de horas son incorrectas. Por favor ingrese un número válido para el nuevo item.");
            return;
    
        } else {

            workersDistribution(newWorker);
            updateResults(newWorker);
            
        }
    })
});
