
'use strict';

const express = require('express');
const router = express.Router();
const api_editoriales = require('./editoriales.api');

router.route('/registrar_editorial')
    .post(
        function(req,res){
            api_editoriales.registrar(req,res);
        }
    );

module.exports = router;