let isNavOpen = false;

const disableMenu = () => {
    const windowWidth = window.innerWidth;
    if (windowWidth <= 1000) {
        document.getElementById("sideNav").style.width = "0"
        isNavOpen = false;
    }
};

const toggleSideNav = () => {
    if (isNavOpen) {
        document.getElementById("sideNav").style.width = "0"
        isNavOpen = false;
    } else {
        document.getElementById("sideNav").style.width = "100%"
        isNavOpen = true
    }
};

onresize = (evt) => {
    const windowWidth = window.innerWidth;

    if (windowWidth >= 1000)
        document.getElementById("sideNav").style.width = "260px"
    else {
        document.getElementById("sideNav").style.width = "0"
        isNavOpen = false;
    }
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

const disablePath = () => {
    const showPathDiv = document.getElementById('showPath')
    showPathDiv.style.height = "0"
    showPathDiv.querySelector('.command').innerText = ""
    showPathDiv.querySelector('.keys').innerText = ""
}

function selectedRow() {

    var filas = document.querySelectorAll('table tr')

    filas.forEach(fila => {
        fila.addEventListener('click', function () {
            // Remover la clase de todas las filas
            filas.forEach(function (fila) {
                fila.classList.remove('selected');
            });

            // Agregar la clase a la fila clickeada
            fila.classList.add('selected');
        });
    })
}
