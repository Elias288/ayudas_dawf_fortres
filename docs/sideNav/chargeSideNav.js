import { pcSize } from "../scripts/generalFunctons.js"
let isNavOpen = false;

/**
 * Carga el sidenav en la pagina html
 * @returns {Promise<void>}
 */
const chargeSideNav = () => {
    return fetch('sideNav/sideNav.html')
        .then(res => res.text())
        .then(sideNav => {
            // document.getElementById('sideNav').innerHTML = sideNav
            const header = document.querySelector('header')

            if (header) header.innerHTML += sideNav
        })
}

/**
 * Le asigna la función de cerrar el sideNav si está en tamaño PC
 */
const setDisableMenuFunction = () => {
    const sideNavLinks = document.querySelectorAll('#sideNav a')

    sideNavLinks.forEach(link => {
        link.addEventListener('click', disableMenu)
    })
}

/**
 * Función que si el la ventana es menor a 800px oculta el sideNav
 */
const disableMenu = () => {
    const sideNav = document.getElementById("sideNav"),
        windowWidth = window.innerWidth;

    if (!sideNav) return

    // si la pagina se ve desde el celular
    if (windowWidth <= pcSize) {
        sideNav.style.width = "0"
        isNavOpen = false;
    }
}

/**
 * Función que muestra/oculta el sideNav
 * @returns {void}
 */
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

/**
 * Función que modifica el tamaño del sideNav dependiendo del tamaño de la página
 */
const onResizeFunction = () => {
    const windowWidth = window.innerWidth,
        sideNav = document.getElementById("sideNav");

    if (!sideNav) return

    if (windowWidth >= pcSize) {
        sideNav.style.width = "295px"
    } else {
        sideNav.style.width = "0"
        isNavOpen = false;
    }
}

export {
    chargeSideNav,
    setDisableMenuFunction,
    toggleSideNav,
    onResizeFunction
}