const XMLHttpRequest = require('xmlhttprequest'); // Importa el módulo XMLHttpRequest

const API = 'https://api.escuelajs.co/api/v1'; // URL de la API

function fetchData(urlApi, callback) { // Define la función fetchData que acepta dos argumentos: la URL de la API y una función de devolución de llamada
  let xhttp = new XMLHttpRequest(); // Crea una instancia del objeto XMLHttpRequest

  xhttp.open('GET', urlApi, true); // Abre una solicitud GET para la URL de la API

  xhttp.onreadystatechange = function (event) { // Establece una función de devolución de llamada que se ejecutará cada vez que cambie el estado de la solicitud HTTP
    if (xhttp.readyState === 4) { // Si el estado de la solicitud es 4, significa que se ha completado
      if (xhttp.status === 200) { // Si el código de estado HTTP es 200, significa que la solicitud se ha completado correctamente
        callback(null, JSON.parse(xhttp.responseText)); // Llama a la función de devolución de llamada con null como primer argumento (indicando que no hay errores) y la respuesta HTTP convertida en un objeto JavaScript como segundo argumento
      } else { // Si el código de estado HTTP no es 200, significa que la solicitud no se ha completado correctamente
        const error = new Error('Error ' + urlApi); // Crea un objeto Error con un mensaje de error personalizado
        return callback(error, null); // Llama a la función de devolución de llamada con el error como primer argumento y null como segundo argumento
      }
    }
  };

  xhttp.send(); // Envía la solicitud HTTP GET a la API
}

//En realidad, XMLHttpRequest es un objeto que está disponible tanto en los navegadores web como en 
//Node.js, aunque su implementación puede ser diferente.

//En los navegadores web, XMLHttpRequest es el objeto utilizado para realizar solicitudes 
//HTTP asíncronas desde el navegador y recibir respuestas del servidor. En Node.js, 
//la librería xmlhttprequest implementa XMLHttpRequest para que se pueda usar en 
//entornos de servidor, como Node.js.

//Por lo tanto, la línea 1 del código importa la implementación de XMLHttpRequest 
//para Node.js mediante la librería xmlhttprequest.


//xhttp es una referencia al objeto xmlhttprequest?

//Sí, xhttp es una instancia de la clase XMLHttpRequest.

//En JavaScript, los objetos se crean a partir de una clase o constructor. 
//En este caso, XMLHttpRequest es una clase que se utiliza para crear objetos que representan 
//solicitudes HTTP asíncronas.

//Cuando se utiliza el operador new para crear una nueva instancia de la clase 
//XMLHttpRequest en la línea 5 del código, se crea un nuevo objeto XMLHttpRequest 
//y se almacena en la variable xhttp. Por lo tanto, xhttp es una instancia de la clase 
//XMLHttpRequest que se utiliza para realizar la solicitud HTTP.


//la función callback en la linea 13 y 16 recibe argumentos para sus parametros. 
//pero en que momento definimos la funcion?

//La función callback se define como un argumento en la función fetchData() en la línea 4 del código:

function fetchData(urlApi, callback) {
    // ...
}

//  Aquí, callback es un parámetro de la función fetchData() 
//que se espera que sea una función de devolución de llamada que se llamará cuando se 
//complete la solicitud HTTP.

//  En el código, la función callback se llama en la línea 12 con dos argumentos, null y 
//JSON.parse(xhttp.responseText), si la solicitud HTTP se completa correctamente, o se llama 
//en la línea 16 con un objeto de error personalizado y null si hay un error.

  //En resumen, la función callback no se define en el código, sino que se espera que sea 
  //proporcionada como un argumento cuando se llama a la función fetchData().


//función de devolución de llamada. que es eso?

//Una función de devolución de llamada (también conocida como "callback" en inglés) es una 
//función que se pasa como argumento a otra función. La función de devolución de llamada se 
//llama dentro de la función principal y puede tener acceso a las variables locales de la 
//función principal.

//En el contexto de la programación asíncrona, las funciones de devolución de llamada se 
//utilizan comúnmente para manejar eventos asíncronos, como la finalización de una solicitud 
//HTTP o la respuesta de una base de datos. En lugar de esperar una respuesta sincrónica, 
//se pasa una función de devolución de llamada a la función que realiza la operación asíncrona, 
//y la función de devolución de llamada se llama cuando la operación asíncrona se completa.

//Las funciones de devolución de llamada son comunes en JavaScript y se utilizan en muchas 
///bibliotecas y frameworks, como Node.js y jQuery.

/////////////////////////////////////////////////////////////////////////////////////////////////

//La línea 21 envía la solicitud HTTP GET a la URL de la API utilizando el objeto XMLHttpRequest 
//que se creó anteriormente y configurado en la función fetchData.

//La función send() es un método del objeto XMLHttpRequest que se utiliza para enviar la solicitud 
//HTTP. En este caso, la solicitud es una solicitud GET, que se utiliza para recuperar datos de un 
//servidor. Cuando se llama a send(), la solicitud se envía al servidor y la función onreadystatechange 
//se llama cada vez que cambia el estado de la solicitud, como cuando se completa la 
//solicitud y se recibe una respuesta del servidor.

//////////////////////////////////////////////////////////////////////

//entre la línea 8 y la 21 se verifica si la conexión con la URL especificada en la 
//variable urlApi es exitosa o no. La función onreadystatechange se ejecuta cada vez que 
//cambia el estado de la solicitud HTTP y, cuando el estado alcanza el valor 4, significa 
//que la solicitud ha sido completada y se puede verificar el estado de la respuesta del servidor.

//En la línea 9 se establece true como el tercer parámetro de la función open(), lo que indica 
//que la solicitud HTTP debe ser asíncrona. Esto significa que el código no se bloqueará mientras
// espera la respuesta del servidor. Cuando se completa la solicitud HTTP, la función 
//onreadystatechange se ejecuta y se verifica el estado de la respuesta del servidor en la 
//línea 11. Si el código de estado HTTP es 200, significa que la solicitud se ha completado 
//correctamente y se llama a la función de devolución de llamada con los datos de la respuesta
// como argumento. Si el código de estado HTTP no es 200, significa que la solicitud no se ha 
//completado correctamente y se llama a la función de devolución de llamada con un objeto Error 
//que indica que se ha producido un error.

//////////////////////////////////////////////////////////////////////////////////////////////////


//El método open() en la línea 6 recibe tres parámetros:

//method: El método HTTP a utilizar para la solicitud (por ejemplo, "GET", "POST", "PUT", etc.).
//url: La URL a la que se enviará la solicitud HTTP.
//async: Un valor booleano que indica si la solicitud debe ser asíncrona o no. 
//Si este valor es true, la solicitud es asíncrona, lo que significa que el 
//código no se bloqueará mientras se espera la respuesta del servidor. 
//Si este valor es false, la solicitud es síncrona, lo que significa que el
// código se bloqueará mientras se espera la respuesta del servidor. En este 
//caso, el valor es true, lo que significa que la solicitud es asíncrona.

















