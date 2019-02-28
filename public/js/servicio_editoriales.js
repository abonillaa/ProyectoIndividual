'use strict';

let listar_datos = () =>{

};

let registrar_editorial = (pcodigo, pnombre, ppais) =>{
    let request = $.ajax({
        url: "http://localhost:4000/api/registrar_editorial",
        method: "POST",
        data: { 
            codigo : pcodigo,
            nombre : pnombre,
            pais : ppais
        },
        contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
        dataType: "json"
      });
       
      request.done(function( msg ) {

        swal.fire({
            type: 'success',
            title: 'Editorial agregada correctamente',
            text: `La editorial ${pnombre} ha sido agregada correctamente`
        });
       
      });
       
      request.fail(function( jqXHR, textStatus ) {
       
      }); 

};