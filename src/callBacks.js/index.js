//Una función de callback es una función que se pasa a otra función como un argumento, 
//que luego se invoca dentro de la función externa para completar algún tipo de rutina o acción.

//para el sigiente ejemplo es muy cencillo. pero podriamos con la misma logica de callbacks
//llamar distintas funciones callback que hagan distintas operaciones y haci generar una calculadora.


function sum(num1, num2) {/////////////// definimos una funcion
    return num1 + num2;
  }
  
  function calc(num1, num2, sumCallBack) {////////// definimos una funcion que va a hacer un callBack
    return sumCallBack(num1, num2);
  };
  
  console.log(calc(2, 2, sum));/////////////////////definimos que funcion entra en el callback
  
  setTimeout(function () { /////////////// setTimeour es una funcion del API del browser. que en este caso recibe como argumento  una funcion console.log
    console.log('Hola JavaScript');
  }, 5000)
  
  function gretting(name) {
    console.log(`Hola ${name}`);
  }
  
  setTimeout(gretting, 2000, 'Oscar'); /// lo mismo. una funcion que recibe como argumento de su parametro una funcion. para este caso el tercer argumento responde al parametro de la funcion llamada en el callback 

  