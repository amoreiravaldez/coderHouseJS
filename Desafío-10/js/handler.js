// Busco todos los botones del DOM que hagan referencia a la clase .btnAddNewItem y loopeo entre ellos
// con un forEach para añadir un event listener a cada uno.

let btnAddNewItem = document.querySelector('.btnAddNewItem')
let inputWorkerDetails = document.querySelectorAll("input");

btnAddNewItem.addEventListener('click', () => {

    let invalidValues = false;

    // // Creo objetos para cada tipo de trabajador
    // let accountants = new Workers();
    // let administrators = new Workers();
    // let it = new Workers();

    // Creo una sola variable llamada WorkersAll, un array, con los tres objetos que necesito.

    let workersAll = [new Workers(), new Workers(), new Workers()];  

    // Hago un forEach entre todos los inputs para guardar los valores que el usuario registra para el nuevo presupuesto

    workersAll.forEach( wrkr => {

        let i = 0;
        inputWorkerDetails.forEach( x => {
            
            workersAll[wrkr][i] = x.value;
            workersAll[wrkr][i+1] = [x].value;
            workersAll[wrkr][i+2] = [x].value;
            
            console.log(x.value);
            console.log([x+1].value);
            console.log([x+2].value);
        })
    })

    console.log(workersAll)

    // inputWorkerDetails.forEach( item => {
        
    //     if (isNaN(item.value) || parseFloat(item.value) < 0) {
    //         invalidValues = true;
    //     } else {
    //         newValue  = parseFloat(item.value)
    //     };

    //     switch (item.id) {
    //         case 'services-acc-quantity':
    //             accountants.quantity = newValue;
    //             break;
    //         case 'services-acc-hours':
    //             accountants.hours = newValue;
    //             break;        
    //         case 'services-acc-rate':
    //             accountants.rate = newValue;
    //             break;
    //         case 'services-adm-quantity':
    //             administrators.quantity = newValue;
    //             break;
    //         case 'services-adm-hours':
    //             administrators.hours = newValue;
    //             break;        
    //         case 'services-adm-rate':
    //             administrators.rate = newValue;
    //             break;
    //         case 'services-it-quantity':
    //             it.quantity = newValue;
    //             break;
    //         case 'services-it-hours':
    //             it.hours = newValue;
    //             break;        
    //         case 'services-it-rate':
    //             it.rate = newValue;
    //             break;
    //         default: 
    //             break;
    //     }   
    // }
    // )

    //  Sí hay valores inválidos no llamo a ninguna función

    if (invalidValues) {

        // Creo un nuevo objeto Budget con los presupuestos por tipo de trabajador. 
        // const newBudget = new Budget(accountants,administrators,it);
        const newBudget = new Budget (workersAll[0], workersAll[1], workersAll[2]);
        
        // Llamo a la función para actualizar el DOM

        updateBudget(newBudget);
    } else {
        
        document.querySelector(".services-totals").innerHTML = "Por favor seleccione cantidades, horas y tarifas válidas.";
        return;
    }

});