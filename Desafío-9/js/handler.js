// Busco todos los botones del DOM que hagan referencia a la clase .btnAddNewItem y loopeo entre ellos
// con un forEach para añadir un event listener a cada uno.

let btnAddNewItem = document.querySelector('.btnAddNewItem')
let inputWorkerDetails = document.querySelectorAll("input");


btnAddNewItem.addEventListener('click', () => {

    let invalidValues = 0;

    // Creo objetos para cada tipo de trabajador
    accountants = new Workers();
    administrators = new Workers();
    it = new Workers();

    // Hago un forEach entre todos los inputs para guardar los valores que el usuario registra para el nuevo presupuesto

    inputWorkerDetails.forEach( item => {
        
        if (isNaN(item.value) || parseFloat(item.value) < 0) {
            invalidValues = 1;
        } else {
            newValue  = parseFloat(item.value)
        };

        switch (item.id) {
            case 'services-acc-quantity':
                accountants.quantity = newValue;
                break;
            case 'services-acc-hours':
                accountants.hours = newValue;
                break;        
            case 'services-acc-rate':
                accountants.rate = newValue;
                break;
            case 'services-adm-quantity':
                administrators.quantity = newValue;
                break;
            case 'services-adm-hours':
                administrators.hours = newValue;
                break;        
            case 'services-adm-rate':
                administrators.rate = newValue;
                break;
            case 'services-it-quantity':
                it.quantity = newValue;
                break;
            case 'services-it-hours':
                it.hours = newValue;
                break;        
            case 'services-it-rate':
                it.rate = newValue;
                break;
            default: 
                break;
        }   
    }
    )

    //  Sí hay valores inválidos no llamo a ninguna función

    if (invalidValues == 1) {
        document.querySelector(".services-totals").innerHTML = "Por favor seleccione cantidades, horas y tarifas válidas.";
        return;
    } else {

        // Creo un nuevo objeto Budget con los presupuestos por tipo de trabajador. 
        const newBudget = new Budget(accountants,administrators,it);
    
        // Llamo a la función para actualizar el DOM
    
        updateBudget(newBudget);
    }

});