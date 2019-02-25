
'use strict';

const mongoose = require('mongoose');

let schema_editoriales = new mongoose.Schema(
    {
        codigo: {type: String, required: true},
        nombre: {type: String, required: true},
        pais: {type: String, required: true}
    }
);

module.exports = mongoose.model('Editorial', schema_editoriales);