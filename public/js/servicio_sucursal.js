 'use strict';

 let registrar_sucursal = (pcodigo, pnombre, ptelefono, pdireccion) =>{

    let request = $.ajax({
        url: "http://localhost:4000/api/registrar_sucursal",
        method: "POST",
        data: { 
            codigo : pcodigo,
            nombre : pnombre,
            telefono : ptelefono,
            direccion : pdireccion
        },
        contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
        dataType: "json"
      });
       
      request.done(function( msg ) {

        swal.fire({
            type: 'success',
            title: 'Sucursal agregada correctamente',
            text: `La sucursal ${pnombre} ha sido agregado correctamente`
        });
       
      });
       
      request.fail(function( jqXHR, textStatus ) {
       
      }); 
 };