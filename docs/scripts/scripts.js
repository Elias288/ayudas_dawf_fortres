import {
    chargeSideNav,
    setDisableMenuFunction,
    toggleSideNav,
    onResizeFunction
} from '../sideNav/chargeSideNav.js'

document.addEventListener("DOMContentLoaded", async function () {
    await chargeSideNav()

    setDisableMenuFunction()
    document.getElementById('MenuToggle').addEventListener('click', toggleSideNav)

})

onresize = () => { onResizeFunction() } // cuando la página se reescala
