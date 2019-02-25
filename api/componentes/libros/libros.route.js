
'use strict';

const express = require('express');
const router = express.Router();
const  api_libros = require('./libros.api');

router.route('/registrar_libro')
    .post(
        function(req,res){
            api_libros.registrar(req,res);
        }
    );

module.exports = router;