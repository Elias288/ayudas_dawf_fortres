/**
 * Constante tamaño minimo para la página en pc
 */
const pcSize = 800;

/**
 * Funcion que toma el texto de entrada y lo devuelve en formato camelCase
 * @param {string} text Texto a convertir
 * @returns {string}
 */
const toCamelCase = (text) => {
    return text
        .replace(/(?:^\w|[A-Z]|\b\w)/g, function (word, index) {
            return index === 0 ? word.toLowerCase() : word.toUpperCase();
        })
        .replace(/\s+/g, '')
}

/**
 * Función que toma las filas de la tabla y le agrega la seleccion y el showPath
 * @param {NodeListOf<Element>} filas Lista de filas de una tabla
 */
function selectedRow(filas) {
    filas.forEach(fila => {
        fila.addEventListener('click', function () {
            // Remover la clase de todas las filas
            filas.forEach(function (fila) {
                fila.classList.remove('selected');
            });

            // Agregar la clase a la fila clickeada
            fila.classList.add('selected');

            const command = fila.firstChild.innerText,
                key = fila.querySelector('input[type="hidden"]').value

            showPath(command, key)
        });
    })
}

/**
 * @param {string} command
 * @param {string} keys
 */
const showPath = (command, keys) => {
    const showPathDiv = document.getElementById('showPath')
    showPathDiv.style.height = "fit-content"
    showPathDiv.querySelector('.command').innerText = command
    showPathDiv.querySelector('.keys').innerText = keys
}

/**
 * Oculta el showPath (solo para links)
 */
const disablePath = () => {
    const showPathDiv = document.getElementById('showPath')
    showPathDiv.style.height = "0"
    showPathDiv.querySelector('.command').innerText = ""
    showPathDiv.querySelector('.keys').innerText = ""
}

export {
    pcSize,
    toCamelCase,
    selectedRow,
    showPath,
    disablePath
}