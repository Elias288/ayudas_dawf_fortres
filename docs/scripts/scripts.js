import {
    chargeSideNav,
    setDisableMenuFunction,
    toggleSideNav,
    onResizeFunction
} from '../sideNav/SideNav.js'
import { chargeFooter } from '../footer/chargeFooter.js'

document.addEventListener("DOMContentLoaded", async function () {
    await chargeSideNav()

    setDisableMenuFunction()
    document.getElementById('menuToggle').addEventListener('click', toggleSideNav)

    await chargeFooter();
})

onresize = () => { onResizeFunction() } // cuando la página se reescala
