import stonesenseData from '../data/stonesense.mjs';
import { selectedRow, showPath } from './generalFunctons.js'

document.addEventListener('DOMContentLoaded', function () {
    const content = document.getElementById('content');

    const article = this.createElement('article')
    article.innerHTML += `
    <div>
        <h2>${stonesenseData.name}</h2>
        <table id="menu">
            <thead>
                <tr>
                    <th class="bold">Acción</th>
                    <th class="bold">Comando</th>
                </tr>
            </thead>
            <tbody></tbody>
        </table>
    </div>
    `

    const tbody = article.querySelector('tbody')
    stonesenseData.data.forEach(obj => {
        var newRow = tbody.insertRow();
        var cell1 = newRow.insertCell(0);
        var cell2 = newRow.insertCell(1);

        newRow.onmouseenter = () => showPath(obj.command, obj.key)

        cell1.innerHTML = `<span >${obj.command}</span>`;
        cell2.innerHTML = `<span class="bold">${obj.key}</span><input type="hidden" name="path" value="${obj.path}">`;
    })

    content.appendChild(article)
    selectedRow(content.querySelectorAll('table tbody tr'));
})