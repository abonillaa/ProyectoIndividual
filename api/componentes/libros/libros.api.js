
'use strict';
//API se va a encargar de interectuar directamente con la base de datos. Ya sea para agregarlos o para mostrarlos

//Importamos el modelo desde el archivo del esquema
const modelo_libro = require('./libros.model');

module.exports.registrar = (req,res) => {

    //Se obtienen los datos que vienen en el body del request con el modelo del libro
    let nuevo_libro = new modelo_libro(
        {
            isbn: req.body.isbn,
            titulo: req.body.titulo,
            categoria: req.body.categoria,
            editorial: req.body.editorial,
            autor: req.body.autor,
            precio: req.body.precio
        }
    );
    //Con la funcion save agregamos el registro, ademas nos permite saber si hubo algun error en el procesos
    nuevo_libro.save(function(error){
        if(error){
            res.json(
                {
                    success: false,
                    msg: `El libro no pudo ser registrado, puede verificar el siguiente error: ${error}`
                }
            )
        }
        else{
            res.json(
                {
                    success: true,
                    msg: `El libro fue agregado correctamente`
                }
            )
        }
    });
};

