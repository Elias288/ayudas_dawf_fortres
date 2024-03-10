let isNavOpen = false;
const pcSize = 800;

const disableMenu = () => {
    const windowWidth = window.innerWidth,
        sideNav = document.getElementById("sideNav");

    if (sideNav && windowWidth <= pcSize) {
        sideNav.style.width = "0"
        isNavOpen = false;
    }
};

const toggleSideNav = () => {
    const sideNav = document.getElementById("sideNav")
    if (!sideNav) return

    if (isNavOpen) {
        sideNav.style.width = "0"
        isNavOpen = false;
    } else {
        sideNav.style.width = "100%"
        isNavOpen = true
    }
};

onresize = (evt) => {
    const windowWidth = window.innerWidth,
        sideNav = document.getElementById("sideNav");
    if (!sideNav) return

    if (windowWidth >= pcSize)
        sideNav.style.width = "295px"
    else {
        sideNav.style.width = "0"
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

    var filas = document.querySelectorAll('table tbody tr')

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

const toCamelCase = (text) => {
    return text.replace(/(?:^\w|[A-Z]|\b\w)/g, function (word, index) {
        return index === 0 ? word.toLowerCase() : word.toUpperCase();
    })
        .replace(/\s+/g, '')
}

// Carga el sidenav en la pagina html
fetch('sideNav/sideNav.html')
    .then(res => res.text())
    .then(sideNav => {
        // document.getElementById('sideNav').innerHTML = sideNav
        const header = document.querySelector('header')

        if (header) header.innerHTML += sideNav
    })

