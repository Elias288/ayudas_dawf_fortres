import data from '../data/comandos.json' assert { type: 'json' };

document.addEventListener("DOMContentLoaded", function () {
    const content = document.getElementById('content');

    data.forEach(sectionData => {
        const article = this.createElement('article'), camelId = toCamelCase(sectionData.name
            .normalize("NFD").replace(/[\u0300-\u036f]/g, "") // quita los acentos
        )
        article.id = camelId

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
        `

        const tbody = article.querySelector('tbody');

        sectionData.data.forEach(obj => {
            var newRow = tbody.insertRow();
            var cell1 = newRow.insertCell(0);
            var cell2 = newRow.insertCell(1);
            const camelCommand = toCamelCase(obj.command.normalize("NFD").replace(/[\u0300-\u036f]/g, "")
            )

            if (obj.type === "link") {
                cell1.innerHTML = `<a href="#${camelCommand}" onclick="disablePath()">${obj.command}</a>`;
            } else {
                cell1.innerHTML = `<span>${obj.command}</span>`;
            }

            cell2.innerHTML = `<code>${obj.key}</code><input type="hidden" name="path" value="${obj.path}">`;
        })

        content.appendChild(article)
    })

    selectedRow();
});