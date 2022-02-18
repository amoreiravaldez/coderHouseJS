function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

// Cuando el documento esté cargado y listo.
$(document).ready(function () {


    // Realizo una llamada a un JSON que tengo guardado en el file testimonios.json

    let URLGET = 'js/testimonios.json'

    fetch(URLGET)
    .then(response => response.json())
    .then(response => {

        let newNumber;
        let newComments = [];

        // Definir un set de comentarios random
        do {
            newNumber = randomIntFromInterval(1,10);

            if (!newComments.includes(newNumber)) {
                
                newComments.push(newNumber);
            }
            
        } while (newComments.length !=4);

        // Loopear a través del array de número de comentario.
        newComments.forEach(commentId =>             
            
            {
                
                // Traigo para cada valor del array, el elemento correspondiente.
                let result = response.filter(obj => {
                    return obj.id === commentId;
                })

                console.log(result[0].designation);
                
                // Genero el nuevo elemento de feedback.
                newFeedback = 
                `<div class="personal-data">
                    <div>
                        <img src="${result[0].avatar}"></img>
                    </div>
                    <div>
                        <h4 class="reviewer-name-role">${result[0].name} - ${result[0].designation}</h4>
                        <h5 class="reviewer-location">${result[0].location}</h5>
                        <div class="reviewer-feedback"><h5>${result[0].message}</h5></div>
                        <div class="reviewer-qualification"><h5>Puntuación: ${result[0].rating}</h5></div>
                    </div>
                </div>`
                $("#about-us-reviews").prepend(newFeedback);            
            }
        )

    }           
    )
}
)