
const XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;;

const API = 'https://api.escuelajs.co/api/v1';


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
///////////////////////implementacion

fetchData(`${API}/products`,function(error1,data1){
    if (error1) console.error(error1);
    fetchData(`${API}/products/${data1[0].id}`, function(error2,data2){
        if(error2) console.error(error2)
        fetchData(`${API}/categories/${data2?.category?.id}`,function(error3,data3){
            if (error3) console.error(error3);
            console.log(data1[0] )
            console.log(data2.title + ' titulo')
            console.log(data3.name + ' nombre')
        });
    });
});


