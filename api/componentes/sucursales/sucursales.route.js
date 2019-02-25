 
 'use strict';

 const express = require('express');
 const router = express.Router();
 const api_sucursales = require('./sucursales.api');

 router.route('/registrar_sucursal')
    .post(
        function(req,res){
            api_sucursales.registrar(req,res);
        }
    );

module.exports = router;