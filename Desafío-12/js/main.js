// Declaro las variables con scope global

let currentTotalCost = 0;
let budgetId = 1;
let historicalBudgets = [];
let historicalBudgetsJSON;

const updateBudget = (budget) => {

    // Calculo el valor del nuevo costo total utilizando el método que devuelve el valor total de costo unitario por cantidad de items.
    currentTotalCost = budget.totalCost;

    // Actualizo el valor del nuevo costo total en la página.
    document.querySelector(".services-totals").innerHTML = `Valor Estimado: ARS $${currentTotalCost}`

    // Añado un ID al presupuesto y actualizo el número

    budget.id = budgetId;
    budgetId +=1;

    // Actualizo los presupuestos históricos
    historicalBudgets.push(budget);

    // Identifico la sección de contacto y borro su contenido
    let contactSection = document.querySelector('#contact-us-budgets');
    contactSection.innerHTML = "";
    
    // Ordeno los presupuestos por su costo total
    historicalBudgets.sort((a,b) => (a.totalCost > b.totalCost) ? 1 : ((b.totalCost > a.totalCost) ? -1 : 0));

    // Imprimo de forma procedural los elementos en el DOM
    
    historicalBudgets.forEach(budgetItem => {

        
        // Desafío Jquery - Creación de divs con Jquery
        let itemDescription = `<div class="test">
                                        <h4>Presupuesto N°: ${budgetItem.id}</h4>
                                        <div>Costo Estimado: $${budgetItem.totalCost}</div>
                                        <div>Contadores: ${budgetItem.accountants.quantity}. Administradores: ${budgetItem.administrators.quantity}. Programadores: ${budgetItem.it.quantity}.</b>
                                </div>`
        $("#contact-us-budgets").prepend(itemDescription)

        // previousBudget.setAttribute('class', 'test'); 

        // let previousBudget = document.createElement('div');
        // previousBudget.innerHTML = `<h4>Presupuesto N°: ${budgetItem.id}</h4>
        //                         <div>Costo Estimado: $${budgetItem.totalCost}</p>
        //                         <div>Contadores: ${budgetItem.accountants.quantity}. Administradores: ${budgetItem.administrators.quantity}. Programadores: ${budgetItem.it.quantity}.</b>`;
        // previousBudget.setAttribute('class', 'test'); 
        // contactSection.appendChild(previousBudget);
    })

    historicalBudgetsJSON = JSON.stringify(historicalBudgets);
    localStorage.setItem('historicalBudgets', historicalBudgetsJSON);
}