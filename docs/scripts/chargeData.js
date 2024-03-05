import data from '../data.json' assert { type: 'json' };

document.addEventListener("DOMContentLoaded", function () {
    const main = document.querySelector('main');

    data.forEach(sectionData => {
        const section = this.createElement('section')
        section.id = sectionData.name.replace(/[\/\s]/g, '')
        section.innerHTML += `
        <div>
            <h2><span class="code">${sectionData.key}</span> ${sectionData.name}</h2>
            <table>
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

        const tbody = section.querySelector('tbody');

        sectionData.data.forEach(obj => {
            var newRow = tbody.insertRow();
            var cell1 = newRow.insertCell(0);
            var cell2 = newRow.insertCell(1);
            newRow.onmouseenter = () => showPath(obj.command, obj.path)

            if (obj.type === "link") {
                cell1.innerHTML = `<a href="#${obj.command.replace(/[\/\s]/g, '')}" onclick="disablePath()">${obj.command}</a>`;
            } else {
                cell1.innerHTML = `<span >${obj.command}</span>`;
            }

            cell2.innerHTML = `<span class="bold">${obj.key}</span><input type="hidden" name="path" value="${obj.path}">`;
        })

        main.appendChild(section)
    })

    selectedRow();
});