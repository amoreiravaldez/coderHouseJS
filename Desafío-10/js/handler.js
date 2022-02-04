// Busco todos los botones del DOM que hagan referencia a la clase .btnAddNewItem y loopeo entre ellos
// con un forEach para añadir un event listener a cada uno.
let navHome = document.querySelectorAll('.button-home');
let navAboutUs = document.querySelectorAll('.button-about-us');
let navServices = document.querySelectorAll('.button-services');
let navContactUs = document.querySelectorAll('.button-contact-us');
let btnAddNewItem = document.querySelector('.btnAddNewItem')
let btnretrieveHistoricalItems = document.querySelector('#retrieveHistoricalItems');
let btndeleteHistoricalItems = document.querySelector('#deleteHistoricalItems');
let inputWorkerDetails = document.querySelectorAll("input");

navHome.forEach(navBtn => {
    navBtn.addEventListener('click', () => {
        document.querySelector('#home').scrollIntoView({behavior:'smooth'});
    });
});

navAboutUs.forEach(navBtn => {
    navBtn.addEventListener('click', () => {
        document.querySelector('#about-us').scrollIntoView({behavior:'smooth'});
    });
});

navServices.forEach(navBtn => {
    navBtn.addEventListener('click', () => {
        document.querySelector('#services').scrollIntoView({behavior:'smooth'});
    });
});

navContactUs.forEach(navBtn => {
    navBtn.addEventListener('click', () => {
        document.querySelector('#contact-us').scrollIntoView({behavior:'smooth'});
    });
});

btnAddNewItem.addEventListener('click', () => {

    let validValues = true;

    // Creo objetos para cada tipo de trabajador
    let accountants = new Workers();
    let administrators = new Workers();
    let it = new Workers();

    // Hago un forEach entre todos los inputs para guardar los valores que el usuario registra para el nuevo presupuesto

    inputWorkerDetails.forEach( item => {
        
        if (isNaN(item.value) || parseFloat(item.value) < 0) {
            
            validValues = false;
            
        } else {

            newValue  = parseFloat(item.value);
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

    if (validValues) {

        // Creo un nuevo objeto Budget con los presupuestos por tipo de trabajador. 
        const newBudget = new Budget(accountants,administrators,it);

        // Llamo a la función para actualizar el DOM
        updateBudget(newBudget);

    } else {
        
        document.querySelector(".services-totals").innerHTML = "Por favor seleccione cantidades, horas y tarifas válidas.";
        return;
    }

});

btnretrieveHistoricalItems.addEventListener('click', () => {


    // Identifico la sección de contacto
    let contactSection = document.querySelector('#contact-us-budgets');
    
    // Hago el check para saber si tengo data en la localStorage 
    // Si no tengo datos en el local storage
    if (localStorage.getItem('historicalBudgets') === null) {

        // Si no tengo datos, imprimo el mensaje de que no existen presupuestos anteriores.
        document.querySelector(".services-totals").innerHTML = "No existen presupuestos anteriores";        
    
    // Si tengo datos en el local storage
    } else {

        // Hago el retrieve de la key del localStorage y la convierto en un objeto nuevamente
        let oldBudgetsJSON = localStorage.getItem('historicalBudgets');
        let oldBudgets = JSON.parse(oldBudgetsJSON);

        // Si no tengo datos en el la sección de presupuestos.
        if (document.querySelector('#contact-us-budgets').children.length == 0) {

            // Imprimo en el DOM los presupuestos del local storage
            oldBudgets.forEach(budgetItem => {   
                let previousBudget = document.createElement('div');
                previousBudget.innerHTML = `<h4> Presupuesto N°: ${budgetItem.id}</h3>
                <div>  Costo Estimado: $${budgetItem.totalCost}</p>
                <div> Contadores: ${budgetItem.accountants.quantity}. Administradores: ${budgetItem.administrators.quantity}. Programadores: ${budgetItem.it.quantity}.</b>`;
                previousBudget.setAttribute('class', 'test'); 
                contactSection.appendChild(previousBudget);
                budgetId = budgetItem.id;
            })
            
            budgetId += 1;
            historicalBudgets = oldBudgets;
            historicalBudgetsJSON = oldBudgetsJSON;
            localStorage.removeItem('historicalBudgets');
            localStorage.setItem('historicalBudgets', oldBudgetsJSON);

        } 
        // Si tengo datos en el la sección de presupuestos.
        else {

            if (oldBudgetsJSON === historicalBudgetsJSON) {
                document.querySelector(".services-totals").innerHTML = "Todos los presupuestos han sido cargados.";
            }
            else {
                oldBudgets.forEach(budgetItem => {   
                    let previousBudget = document.createElement('div');
                    previousBudget.innerHTML = `<h4> Presupuesto N°: ${budgetItem.id}</h3>
                    <div>  Costo Estimado: $${budgetItem.totalCost}</p>
                    <div> Contadores: ${budgetItem.accountants.quantity}. Administradores: ${budgetItem.administrators.quantity}. Programadores: ${budgetItem.it.quantity}.</b>`;
                    previousBudget.setAttribute('class', 'test'); 
                    contactSection.appendChild(previousBudget);
                })
            }
        }
    } 
});

btndeleteHistoricalItems.addEventListener('click', () => {
    budgetId = 1;
    historicalBudgets.length = 0;
    localStorage.removeItem('historicalBudgets');
    document.querySelector('#contact-us-budgets').innerHTML = "";
    document.querySelector(".services-totals").innerHTML = "Los presupuestos han sido borrados";
});


