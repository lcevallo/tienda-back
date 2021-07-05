'use strict'

var Cliente = require('../models/cliente');

const registro_cliente = async function(req, res){
    //
    res.status(200).send({
        message: 'Hola Mundo'
    });
}

const login_cliente = async function(req, res){
    var data = req.body;
    var cliente_arr = [];

    cliente_arr = await Cliente.find({email: data.email});

    if(cliente_arr.length == 0) {
        res.status(200).send({message: 'No se encontro el correo', data: undefined});
    } else {
        let user = cliente_arr[0];
        
        if(user.password == data.password) {
            res.status(200).send({data:user})
        } else{
            res.status(200).send({message: 'La contraseña no coincide', data: undefined});
        }
        

    }

    res.status(200).send({data: data});

}

module.exports = {
    registro_cliente,
    login_cliente
}