import guias from '../data/guias.json' assert { type: 'json' };

document.addEventListener('DOMContentLoaded', function () {
    const content = document.getElementById('content');

    guias.forEach(data => {
        const article = this.createElement('article')
        article.classList.add('text')
        article.id = toCamelCase(data.name
            .normalize("NFD").replace(/[\u0300-\u036f]/g, ""))

        article.innerHTML += `<div>${data.content}</div>`

        content.appendChild(article)
    })
})