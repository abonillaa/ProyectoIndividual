
'use strict';

//Requerimos a mongoose
const mongoose = require('mongoose');

//Definimos el schema que sera utilizado a la hora de guardar datos de los libros
let schema_libros = new mongoose.Schema(
    {
        isbn : {type: String, require:true},
        titulo: {type: String, required: true},
        categoria: {type: String, required: true},
        editorial: {type: String, required: true},
        autor: {type: String, required: true},
        precio: {type: Number, required: true}
    }
);

//Exportamos el esquema de libros
module.exports = mongoose.model('Libro', schema_libros);