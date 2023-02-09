
/**
 * 
 * @param {Array<Carta>} deck Ejemplo: [7A, 8C, 4H]
 * @returns {String} Retorna la ultima carta del deck mezclado
 */

export const pedirCarta = (deck) => {

    if ( deck.length === 0 ) {
        throw 'No hay cartas en el deck';
    }
    const carta = deck.pop();
    return carta;
}