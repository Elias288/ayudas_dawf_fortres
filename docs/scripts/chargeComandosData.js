import comandosData from '../data/comandos.mjs';
import { toCamelCase } from './generalFunctons.js'

document.addEventListener("DOMContentLoaded", function () {
    const contentDiv = document.getElementById('content');

    if ("content" in document.createElement('template')) {
        const articleTemplate = document.querySelector('#articleTemplate'), // instancias de documentos clonados
            rowTemplate = document.querySelector('#rowTemplate') // instancias de documentos clonados

        comandosData.forEach(sectionData => {
            const cloneArticle = articleTemplate.content.cloneNode(true), // article clonado
                articleMenu = cloneArticle.querySelector('#menu'), // elemento #menu
                camelId = toCamelCase(sectionData.name.normalize("NFD").replace(/[\u0300-\u036f]/g, ""))

            cloneArticle.querySelector('article').id = camelId;
            cloneArticle.querySelector('h2 code').textContent = sectionData.key
            cloneArticle.querySelector('h2 span').textContent = sectionData.name

            sectionData.data.forEach(obj => { // por cada articulo se obteniene su lista de data
                const cloneRow = rowTemplate.content.cloneNode(true), // se clona un row por cada dato
                    rowComando = cloneRow.querySelector('.row label .comando'),
                    camelCommand = toCamelCase(obj.command.normalize("NFD").replace(/[\u0300-\u036f]/g, ""))

                cloneRow.querySelector('input[type="radio"]').id = `radio_${camelCommand}`
                cloneRow.querySelector('.row label').htmlFor = `radio_${camelCommand}`

                if (obj.type === "link") { // si el tipo de dato es un link
                    const link = document.createElement('a') // se crea el elemento a
                    link.classList.add('comando') // se le agrega la clase
                    link.textContent = obj.command // se le agrega el texto
                    link.href = `#${camelCommand}` // se le agrega la url

                    rowComando.replaceWith(link) // se remplaza el rowComando por el link
                } else { // si el tipo de dato es texto
                    rowComando.textContent = obj.command // se le agrega el texto
                }

                cloneRow.querySelector('.row code').innerText = obj.key
                cloneRow.querySelector('.row input[type="hidden"]').value = obj.path

                articleMenu.appendChild(cloneRow)
            })

            contentDiv.appendChild(cloneArticle)
        })

    }
});