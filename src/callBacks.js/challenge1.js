
const XMLHttpRequest = require('xmlhttprequest');

//📲 XMLHttpRequest es un objeto de JS que permite 
//hacer peticiones hacia servicios en la nube(URLs o APIs).

const API = 'https://api.escuelajs.co/api/v1';

//dentro de la constante API guardamos la direccion de la Fake API como se especifica en su
//documentacion. dentro de v1 tenemos acceso a /products /categori etc.

function fetchData (urlApi,callBACK){
    let xhttp = new XMLHttpRequest();

    xhttp.open('GET',urlApi,true);
    xhttp.onreadystatechange = function(event){

        if(xhttp.readyState === 4){////validamos el tipo de estado (0-4)
            if(xhttp.status === 200) {
                callBACK(null, JSON.parse(xhttp.responseText))                
            } else 
            { 
                const error = new Error('Error ' + urlApi); 
                return callBACK(error, null); 
            }
        }
    };
    xhttp.send();
};

// fecth data tiene dos parametros. la url que recibe y el callback.
//con xmlhttprequest podemos manejar todo el flujo de informacion. 
//y podemos hacer peticiones de diversos modos

//dentro de fetchData haecmos el llamado a xhttp. que sera una referencia a xmlhttprequest

//xmlhttp.open() → Prepara la petición para
//               ser enviada tomando tres parámetros: prótocolo(tipo de peticion), url, asíncrono (true).
//xmlhttp.onreadystatechange → Un eventHandler que es llamado cuando la propiedad readyState cambia.
//xmlhttp.readyState → Retorna el estado de la petición.
//xmlhttp.status → Retorna el estado de la respuesta de la petición. (200,400,500)
//xmlhttp.send() → Envía la petición.

//📪 Existen 5 estados en un llamado XMLHttpRequest:

//0 → State UNSENT: este estado tiene el valor 0 dentro del método para peticiones de XMLHttpRequest. Este describe que el cliente ha sido creado, pero aún no se ha abierto o enviado una petición.
//1 → State OPENED: este estado tiene el valor de 1 dentro del método para peticiones de XMLHttpRequest. Se encarga de decir que el método open() ha sido llamado y utilizado.
//2 → State HEADERS_RECEIVED: tiene el valor de 2 dentro del método para peticiones de XMLHttpRequest. Este se encarga de mostrar que se ha llamado el método open() y que la información acerca de los headers y el status están disponible.
//3 → State LOADING: este estado tiene el valor de 3 dentro del método para peticiones de XMLHttpRequest. Se encarga de demostrar que se está descargando un elemento y que puede ser representado en responsetext.
//4 → State DONE: tiene el valor de 4 dentro del método para peticiones de XMLHttpRequest. Como su nombre revela, este estado se encarga de comentar que la operación se ha realizado.


