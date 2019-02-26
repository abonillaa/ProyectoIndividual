'use strict'; 

const input_isbn = document.querySelector('#txt_isbn');
const input_titulo = document.querySelector('#txt_titulo');
const select_categoria = document.querySelector('#sel_categoria');
const input_editorial = document.querySelector('#det_editorial');
const input_autor = document.querySelector('#txt_autor');
const input_precio = document.querySelector('#txt_precio');
const btn_enviar = document.querySelector('#btn_enviar');

let validar_datos = () => {
    let error = false;

    if(input_isbn.value == ''){
        input_isbn.classList.add('input_error');
        error = true;
    }
    else{
        input_isbn.classList.remove('input_error');
    }

    if(input_titulo.value == ''){
        input_titulo.classList.add('input_error');
        error = true;
    }
    else{
        input_titulo.classList.remove('input_error');
    }

    if(select_categoria.value == ''){
        select_categoria.classList.remove('borde');
        select_categoria.classList.add('input_error');
        error = true;
    }
    else{
        select_categoria.classList.remove('input_error');
    }

    if(input_editorial.value == ''){
        input_editorial.classList.add('input_error');
        error = true;
    }
    else{
        input_editorial.classList.remove('input_error');
    }

    if(input_autor.value == ''){
        input_autor.classList.add('input_error');
        error = true;
    }
    else{
        input_autor.classList.remove('input_error');
    }

    if(input_precio.value == ''){
        input_precio.classList.add('input_error');
        error = true;
    }
    else{
        input_precio.classList.remove('input_error');
    }

    return error;
};

let obtener_datos = () => {
    if(validar_datos() == false){

        let isbn = input_isbn.value;
        let titulo = input_titulo.value;
        let categoria = select_categoria.value;
        let editorial = input_editorial.value;
        let autor = input_autor.value;
        let precio = input_precio.value;

        registrar_libro(isbn, titulo, categoria, editorial, autor, precio);
    }

    else{
        swal.fire({
            type: 'warning',
            title: 'Libro no Agregado',
            text: 'Por favor revise los campos resaltados'
        });
    }
};

btn_enviar.addEventListener('click', obtener_datos);

