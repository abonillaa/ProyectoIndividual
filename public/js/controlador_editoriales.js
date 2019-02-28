
'use strict';

const input_codigo = document.querySelector('#txt_codigo');
const input_nombre = document.querySelector('#txt_nombre');
const select_pais = document.querySelector('#sel_pais');
const boton_enviar = document.querySelector('#btn_enviar');

let validar_datos = () => {
    
    let error = false;

    if(input_codigo.value == ''){
        
        input_codigo.classList.add('input_error');
        error = true;
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

    if(select_pais.value == ''){
        error = true;
        select_pais.classList.remove('borde');
        select_pais.classList.add('input_error');
    }
    else{
        select_pais.classList.remove('input_error');
    }

    return error;
};

let obtener_datos = () =>{

    if(validar_datos() == false){
        let codigo = input_codigo.value;
        let nombre = input_nombre.value;
        let pais = select_pais.value;

        registrar_editorial(codigo, nombre, pais);
    }

    else{
        swal.fire({
            type: 'warning',
            title: 'No se pudo agregar la Editorial',
            text: 'Por favor revisar los campos resaltados'
        });
    }
};

boton_enviar.addEventListener('click', obtener_datos);