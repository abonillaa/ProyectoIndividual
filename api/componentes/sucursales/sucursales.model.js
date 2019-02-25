
'use strict';

const mongoose = require('mongoose');

let schema_sucursales = new mongoose.Schema(
    {
        codigo: {type: String, required: true},
        nombre: {type: String, required: true},
        telefono: {type: String, required: true},
        direccion: {type: String, required: true}
    }
);

module.exports = mongoose.model('Sucursal', schema_sucursales);