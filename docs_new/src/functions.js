/**
   * Funcion que toma el texto de entrada y lo devuelve en formato camelCase
   * @param {string} text Texto a convertir
   * @returns {string}
   */
export function toCamelCase(text) {
    return text
        .replace(/(?:^\w|[A-Z]|\b\w)/g, function (word, index) {
            return index === 0 ? word.toLowerCase() : word.toUpperCase();
        })
        .replace(/\s+/g, "");
};

/**
 * Funcion que toma el texto de entrada y lo devuelve en sin acentos
 * @param {string} text Texto a convertir
 * @returns {string}
 */
export function normalizeText(text) {
    return text.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
};