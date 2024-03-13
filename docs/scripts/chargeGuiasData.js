import contentList from "../data/guias.mjs";
import { toCamelCase } from "./generalFunctons.js";

document.addEventListener('DOMContentLoaded', function () {
    const content = document.getElementById('content');

    contentList.forEach(contentData => {
        const article = this.createElement('article'),
            camelId = toCamelCase(contentData.name
                .normalize("NFD").replace(/[\u0300-\u036f]/g, "") // quita los acentos
            )
        article.id = camelId // setea el id al article
        article.classList.add('text')

        article.innerHTML = `<div>${contentData.content}</div>`

        content.appendChild(article)
    })
})