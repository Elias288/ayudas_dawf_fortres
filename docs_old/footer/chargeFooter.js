/**
 * Carga el footer
 * @returns {Promise<void>}
 */
const chargeFooter = () => {
    return fetch('footer/footer.html')
        .then(res => res.text())
        .then(footerContent => {
            const main = document.querySelector('main')
            if (main) main.innerHTML += footerContent;
        })
}

export { chargeFooter }