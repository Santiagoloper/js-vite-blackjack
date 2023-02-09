/**
 * 
 * @param {String} carta Recibe el string de una carta
 * @returns {Number} Devuelve el valor que toma esa carta
 */
export const valorCarta = ( carta ) => {

    const valor = carta.substring(0, carta.length - 1);
    return ( isNaN( valor ) ) ? 
            ( valor === 'A' ) ? 11 : 10
            : valor * 1;
}