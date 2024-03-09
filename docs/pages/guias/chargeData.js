import guias from '/docs/pages/guias/data.json' assert { type: 'json' };

document.addEventListener('DOMContentLoaded', function () {
    const main = document.querySelector('main');

    guias.forEach(data => {
        const section = this.createElement('section')
        section.classList.add('text')
        section.id = toCamelCase(data.name
            .normalize("NFD").replace(/[\u0300-\u036f]/g, ""))

        section.innerHTML += `
            <article>
                <h2>${data.name}</h2>
                ${data.content}
            </article>
        `

        main.appendChild(section)

    })
})