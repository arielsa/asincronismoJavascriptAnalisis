
const URL = 'https://api.thecatapi.com/v1/images/search';

fetch(URL)
    .then(respuesta => respuesta.json())
    .then(dato => {
        const img = document.querySelector('img')
        img.src=dato[0].url
    })