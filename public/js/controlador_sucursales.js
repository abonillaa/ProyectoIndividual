
'use strict';

const input_codigo = document.querySelector('#txt_codigo');
const input_nombre = document.querySelector('#txt_nombre');
const input_telefono = document.querySelector('#txt_telefono');
const input_direccion = document.querySelector('#txt_direccion');
const btn_enviar = document.querySelector('#enviar_datos');

let validar_datos = () => {

    let error = false;

    if(input_codigo.value == ''){
        error = true;
        input_codigo.classList.add('input_error');
    }
    else{
        input_codigo.classList.remove('input_error');
    }

    if(input_nombre.value == ''){
        error = true;
        input_nombre.classList.add('input_error');
    }
    else{
        input_nombre.classList.remove('input_error');
    }

    if(input_telefono.value == ''){
        error = true;
        input_telefono.classList.add('input_error');
    }
    else{
        input_telefono.classList.remove('input_error');
    }

    if(input_direccion.value == ''){
        error = true;
        input_direccion.classList.remove('borde');
        input_direccion.classList.add('input_error');
    }
    else{
        input_direccion.classList.remove('input_error');
    }
    return error;
};

let obtener_datos = () =>{

    if(!validar_datos()){
        let codigo = input_codigo.value;
        let nombre = input_nombre.value;
        let telefono = input_telefono.value;
        let direccion = input_direccion.value;

        registrar_sucursal(codigo, nombre, telefono, direccion);
    }
    else{
        swal.fire({
            type: 'warning',
            title: 'No se pudo agregar la Sucursal',
            text: 'Por favor revisar los campos resaltados'
        });
    }
};

btn_enviar.addEventListener('click', obtener_datos);