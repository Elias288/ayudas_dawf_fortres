import stonesenseData from '../data/stonesense.mjs';
import { toCamelCase } from './generalFunctons.js'

document.addEventListener('DOMContentLoaded', function () {
    const contentDiv = document.getElementById('content');

    if ("content" in document.createElement('template')) {
        const articleTemplate = document.querySelector('#articleTemplate'), // instancias de documentos clonados
            rowTemplate = document.querySelector('#rowTemplate') // instancias de documentos clonados 

        const cloneArticle = articleTemplate.content.cloneNode(true), // article clonado
            articleMenu = cloneArticle.querySelector('#menu'), // elemento #menu
            camelId = toCamelCase(stonesenseData.name.normalize("NFD").replace(/[\u0300-\u036f]/g, ""))

        cloneArticle.querySelector('article').id = camelId;
        cloneArticle.querySelector('h2 span').textContent = stonesenseData.name

        stonesenseData.data.forEach(obj => {
            const cloneRow = rowTemplate.content.cloneNode(true), // se clona un row por cada dato
                rowComando = cloneRow.querySelector('.row label .comando'),
                camelCommand = toCamelCase(obj.command.normalize("NFD").replace(/[\u0300-\u036f]/g, ""))

            cloneRow.querySelector('input[type="radio"]').id = `radio_${camelCommand}`
            cloneRow.querySelector('.row label').htmlFor = `radio_${camelCommand}`
            rowComando.textContent = obj.command // se le agrega el texto
            cloneRow.querySelector('.row code').innerText = obj.key

            articleMenu.appendChild(cloneRow)
        })

        contentDiv.appendChild(cloneArticle)
    }
})