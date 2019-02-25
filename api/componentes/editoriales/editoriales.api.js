'use strict';

const modelo_editorial = require('./editoriales.model');

module.exports.registrar = (req,res) =>{

    let nueva_editorial = new modelo_editorial(
        {
            codigo: req.body.codigo,
            nombre: req.body.nombre,
            pais: req.body.pais
        }
    );

    nueva_editorial.save(function(error){
        if(error){
            res.json(
                {
                    success: false,
                    msg: `La editorial no pudo ser agregada. Verificar el error: ${error}`
                }
            )
        }
        //respuesta json sdfsfdds
        else{
            res.json(
                {
                    success: true,
                    msg: `La editorial fue agregada correctamente`
                }
            )
        }
    });
};