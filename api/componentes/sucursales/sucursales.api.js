
'use strict';

const modelo_sucursal = require('./sucursales.model');

module.exports.registrar = (req,res) => {
    let nueva_sucursal = new modelo_sucursal(
        {
            codigo: req.body.codigo,
            nombre: req.body.nombre,
            telefono: req.body.telefono,
            direccion: req.body.direccion
        }
    );

    nueva_sucursal.save(function(error){
        if(error){
            res.json(
                {
                    success: false,
                    msg: `No se ha podido agregar la sucursal,  favor verificar el error: ${error}`
                }
            )
        }
        else{
            res.json(
                {
                    success: true,
                    msg: `La sucursal se ha agregado correctamente`
                }
            )
        }
    });
};