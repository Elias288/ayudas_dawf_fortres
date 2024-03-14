import stonesenseData from '../data/stonesense.mjs';
import { selectedRow, toCamelCase } from './generalFunctons.js'

document.addEventListener('DOMContentLoaded', function () {
    const content = document.getElementById('content');

    const article = this.createElement('article')
    article.innerHTML += `
    <div>
        <h2>${stonesenseData.name}</h2>
        <div id="menu">
            <div class="row listHeader">
                <span class="bold comando">Acción</span>
                <span class="bold">Comando</span>
            </div>
        </div>
    </div>
    `

    const menu = article.querySelector('#menu')
    stonesenseData.data.forEach(obj => {
        const camelCommand = toCamelCase(obj.command
            .normalize("NFD").replace(/[\u0300-\u036f]/g, "")
        )
        menu.innerHTML += `
            <div>
                <input type="radio" name="radio" id="radio_${camelCommand}">
                <div class="row">
                    <label for="radio_${camelCommand}">
                        <span class="comando">${obj.command}</span>
                        <code>${obj.key}</code>
                        <input type="hidden" value="${obj.path}">
                    </label>
                </div>
            </div>
        `
    })

    content.appendChild(article)
    selectedRow(content.querySelectorAll('table tbody tr'));
})