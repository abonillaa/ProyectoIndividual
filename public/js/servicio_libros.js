 'use strict';

 //Archivo que se conecta directamente con el backend

 let listar_elementos = () => {

 };

 let registrar_libro = (pisbn, ptitulo, pcategoria, peditorial, pautor, pprecio) => {
    let request = $.ajax({
        url: "http://localhost:4000/api/registrar_libro",
        method: "POST",
        data: { 
            isbn : pisbn,
            titulo : ptitulo,
            categoria : pcategoria,
            editorial : peditorial,
            autor: pautor,
            precio: pprecio
        },
        contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
        dataType: "json"
      });
       
      request.done(function( msg ) {

        swal.fire({
            type: 'success',
            title: 'Libro agregado correctamente',
            text: `El libro ${ptitulo} ha sido agregado correctamente`
        });
       
      });
       
      request.fail(function( jqXHR, textStatus ) {
       
      }); 
 };