// instalar para este proyecto el paquete fetch de node: >npm i node-fetch
// agregar el "type":"module" al package.jason par hacer la prueba con el RunCode
// fetch es un modulo importado, en nuestro entorno. pero es un metodo __proto__ en  el browser
import fetch from 'node-fetch';
const API = 'https://api.escuelajs.co/api/v1';

function fetchData(urlApi){
    return fetch(urlApi);
};

fetchData(`${API}/products`)
    .then(response => response.json() )
    .then(products=>{
        console.log(products);
    })    
    .catch(error => console.log(error));


////////////////////////////////////////////
import fetch from 'node-fetch';
function fetchData2(urlApi){
    return fetch(urlApi);
};


const API2 = 'https://api.escuelajs.co/api/v1';

fetchData2(`${API2}/products`)
    .then (respuesta=>respuesta.json())
    .then(productos => {
        return fetchData2(`${API2}/products/${productos[0].id}`)
    })
    .then (respuesta => respuesta.json())
    .then(product => {
    console.log(product.title);
    return fetchData2(`${API2}/categories/${product.category.id}`)
  })
    .then (respuesta=>respuesta.json())
    .then (categoria => {
        console.log(categoria.name);
    })
///////////////////////////////

import fetch from 'node-fetch';
function fetchData3(urlApi){
    return fetch(urlApi);
};


const API3 = 'https://api.escuelajs.co/api/v1';

fetchData3(`${API3}/products`)
  .then(response => response.json())
  .then(products => {
    console.log(products)
    return fetchData3(`${API3}/products/${products[0].id}`)
  })
  .then(response => response.json())
  .then(product => {
    console.log(product.title);
    return fetchData3(`${API2}/categories/${product.category.id}`)
  })
  .then(response => response.json())
  .then(category => {
    console.log(category.name);
  })
  .catch(err => console.log(err))
  .finally(() => console.log('Finally'));


/////////////////////////
//explicacion y ejemplo facil: https://www.youtube.com/watch?v=tlTFyXauOa4

