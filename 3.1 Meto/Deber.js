'use strict';

function concatenar(array) {
    for (let i = 0; i < array.length; i++) {
        let fila = '';
        for (let j = 0; j < array.length; j++) {
            let resultado = array[i] + '' + array[j];
            fila += resultado.padStart(2, '0') + ' ';
        }
        alert(fila);
    }
}

let array = [0, 2, 4, 8];
concatenar(array);