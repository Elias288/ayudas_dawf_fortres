import data from '../data/comandos.json' assert { type: 'json' };
import { toCamelCase, selectedRow } from './generalFunctons.js'

document.addEventListener("DOMContentLoaded", function () {
    const content = document.getElementById('content');

    data.forEach(sectionData => {
        const article = this.createElement('article'), // Crea elemento article
            camelId = toCamelCase(sectionData.name
                .normalize("NFD").replace(/[\u0300-\u036f]/g, "") // quita los acentos
            )
        article.id = camelId // setea el id al article

        article.innerHTML = `
        <div>
            <h2><code>${sectionData.key}</code> ${sectionData.name}</h2>
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
        ` // estructura del article

        const tbody = article.querySelector('tbody'); // tbody del article

        sectionData.data.forEach(obj => {
            var newRow = tbody.insertRow(); // inserta una nueva fila al tbody
            var cell1 = newRow.insertCell(0);
            var cell2 = newRow.insertCell(1);


            if (obj.type === "link") { // si el tipo del objeto es un link
                const camelCommand = toCamelCase(obj.command
                    .normalize("NFD").replace(/[\u0300-\u036f]/g, "")
                )
                cell1.innerHTML = `<a href="#${camelCommand}">${obj.command}</a>`;
            } else { // si el tipo del objeto es un texto
                cell1.innerHTML = `<span>${obj.command}</span>`;
            }

            cell2.innerHTML = `<code>${obj.key}</code><input type="hidden" name="path" value="${obj.path}">`;
        })

        content.appendChild(article)
    })

    selectedRow(content.querySelectorAll('table tbody tr'));
});