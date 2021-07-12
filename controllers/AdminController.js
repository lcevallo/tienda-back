'use strict'

var Admin= require('../models/admin');
var bacrypt =  require('bcrypt-nodejs');


const registro_admin = async function(req, res){

}



const login_admin= async function(req, res){
    var data = req.body;
    var admin_arr = [];

    admin_arr = await  Admin.find({email: data.email});

    if(admin_arr.length == 0){
        res.status(200).send({message: 'No se encontro el correo ', data: undefined});
    } else {
       //LOGIN
        let user = admin_arr[0];
        bcrypt.compare(data.password, user.password, async function(error, check){
            if(check){
                res.status(200).send({data: user});
            } else{
                res.status(200).send({message: 'La contraseña no coincide ', data: undefined});
            }
        });
    }


}


module.exports = {
    registro_admin,
    login_admin
}