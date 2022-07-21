// DEPENDENCIAS
import {user_ob} from './user.js';
import {user} from './user_array.js';

//ELEMENTOS DEL DOM
let caja_texto = document.querySelector("#caja_texto");
let caja_usuario = document.querySelector("#root")

// BOTONES
let bt_sigueinte = document.getElementById("bt_sigueinte");
let bt_anterior = document.getElementById("bt_anterior");
let bt_user = document.getElementById("bt_user");


// USUARIO ACTUALO
let nameUser = 0;
caja_texto.innerHTML = user[nameUser][1];

//FUNCIONES
function boton_siguiente(){
    if(nameUser <=6){
        nameUser++;
        caja_texto.innerHTML = user[nameUser][1];
    }
}
function boton_anterior(){
    if(nameUser>=1){
        nameUser--;
        caja_texto.innerHTML = user[nameUser][1];
    }
}

// EVENTOS
bt_sigueinte.addEventListener('click', boton_siguiente);
bt_anterior.addEventListener('click', boton_anterior);




// MOSTRAR DATOS DEL USUARIO
function mostrar(){
    caja_usuario.innerHTML = '<h1>' + user_ob[nameUser].nikname + '</h1>' +
    '<h1>' + user_ob[nameUser].name + '</h1>'+
    '<h1>' + user_ob[nameUser].adress + '</h1>'+
    '<h1>' + user_ob[nameUser].email + '</h1>'+
    '<h1>' + user_ob[nameUser].phone + '</h1>';
}

bt_user.addEventListener('click', mostrar);
