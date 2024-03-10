import data from '../data/stonesense.json' assert {type: 'json'}

document.addEventListener('DOMContentLoaded', function () {
    const content = document.querySelector('.content');

    const article = this.createElement('article')
    article.innerHTML += `
    <div>
        <h2>${data.name}</h2>
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
    data.data.forEach(obj => {
        var newRow = tbody.insertRow();
        var cell1 = newRow.insertCell(0);
        var cell2 = newRow.insertCell(1);

        newRow.onmouseenter = () => showPath(obj.command, obj.key)

        cell1.innerHTML = `<span >${obj.command}</span>`;
        cell2.innerHTML = `<span class="bold">${obj.key}</span><input type="hidden" name="path" value="${obj.path}">`;
    })

    content.appendChild(article)

    selectedRow();
})