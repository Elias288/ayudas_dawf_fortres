import comandosData from '../data/comandos.mjs';
import { toCamelCase, selectedRow } from './generalFunctons.js'

document.addEventListener("DOMContentLoaded", function () {
    const content = document.getElementById('content');

    comandosData.forEach(sectionData => {
        const article = this.createElement('article'), // Crea elemento article
            camelId = toCamelCase(sectionData.name
                .normalize("NFD").replace(/[\u0300-\u036f]/g, "") // quita los acentos
            )
        article.id = camelId // setea el id al article

        article.innerHTML = `
            <div>
                <h2><code>${sectionData.key}</code> ${sectionData.name}</h2>
                <div id="menu">
                    <div class="row listHeader">
                        <span class="bold comando">Acción</span>
                        <span class="bold">Comando</span>
                    </div>
                </div>
            </div>
        ` // estructura del article

        const menu = article.querySelector('#menu')
        sectionData.data.forEach((obj) => {
            const camelCommand = toCamelCase(obj.command
                .normalize("NFD").replace(/[\u0300-\u036f]/g, "")
            )
            menu.innerHTML += `
                <div>
                    <input type="radio" name="radio" id="radio_${camelCommand}">
                    <div class="row">
                        <label for="radio_${camelCommand}">
                            ${obj.type === "link" ? `<a href="#${camelCommand}" class="comando">${obj.command}</a> ` : `<span class="comando">${obj.command}</span>`}
                            <code>${obj.key}</code>
                            <input type="hidden" value="${obj.path}">
                        </label>
                    </div>
                </div>
            `
        })

        content.appendChild(article)
    })
});