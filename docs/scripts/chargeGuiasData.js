import guias from '../data/guias.json' assert { type: 'json' };

document.addEventListener('DOMContentLoaded', function () {
    const content = document.querySelector('.content');

    guias.forEach(data => {
        const article = this.createElement('article')
        article.classList.add('text')
        article.id = toCamelCase(data.name
            .normalize("NFD").replace(/[\u0300-\u036f]/g, ""))

        article.innerHTML += `
            <div>
                <h2>${data.name}</h2>
                ${data.content}
            </div>
        `

        content.appendChild(article)
    })
})