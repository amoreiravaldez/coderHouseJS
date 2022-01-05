let year = prompt('Ingresá el número de año.');
let month = prompt('Ingresá el número de año.');

// Valido si el año ingresado es un número

if (isNaN(year) == true) {
    console.log('El año seleccionado no es un valor numérico');
    alert('El año seleccionado no es un valor numérico.');
}
else if (isNaN(year) == false) {

    // Valido si el mes ingresado es un número

    if (isNaN(month) == true) {
        console.log('El mes seleccionado no es un valor numérico');
        alert('El mes seleccionado no es un valor numérico.');
    }
    else if (isNaN(month) == false) {
        
        // Chequeo si es un mes con 31 días
        if (month == 1 || month == 3 || month == 5 || month == 7 || month == 8 || month == 10 || month == 12) {
            
            console.log(`El mes número ${month} en el año ${year} tiene 31 días.`);
            alert(`El mes número ${month} en el año ${year} tiene 31 días.`);
        }
        // Chequeo si es un mes con 30 días
        else if (month == 4 || month == 6 || month == 9 || month == 11) {
            
            console.log(`El mes número ${month} en el año ${year} tiene 30 días.`);
            alert(`El mes número ${month} en el año ${year} tiene 30 días.`);

        }

        // Chequeo si el mes seleccionado es febrero y realizo cálculo de año bisiesto.
        else if (month == 2) {

            if (year%4 == 0) {

                if (year%100 == 0) {

                    if (year%400 == 0) {

                        console.log(`El mes número ${month} en el año ${year} tiene 29 días.`);
                        alert(`El mes número ${month} en el año ${year} tiene 29 días.`);
                    }
                    else {
                        console.log(`El mes número ${month} en el año ${year} tiene 28 días.`);
                        alert(`El mes número ${month} en el año ${year} tiene 28 días.`);
                    }
                   
                }
                else {

                    console.log(`El mes número ${month} en el año ${year} tiene 29 días.`);
                    alert(`El mes número ${month} en el año ${year} tiene 29 días.`);
                }
            }
            else {
                console.log(`El mes número ${month} en el año ${year} tiene: 28 días.`);
                alert(`El mes número ${month} en el año ${year} tiene: 28 días.`);
            }
        }
 
    }
}

// Año bisiesto:

// 1. Si el año es uniformemente divisible por 4, vaya al paso 2. De lo contrario, vaya al paso 5.
// 2. Si el año es uniformemente divisible por 100, vaya al paso 3. De lo contrario, vaya al paso 4.
// 3. Si el año es uniformemente divisible por 400, vaya al paso 4. De lo contrario, vaya al paso 5.
// 4. El año es un año bisiesto (tiene 366 días).
// 5. El año no es un año bisiesto (tiene 365 días).