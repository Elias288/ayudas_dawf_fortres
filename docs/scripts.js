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
        document.getElementById("sideNav").style.width = "250px"
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