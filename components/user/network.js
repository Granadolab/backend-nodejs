const express = require('express');
const response = require('../../network/response');
const router = express.Router();
const {addName, getName, updateName,deleteName} = require('./controller');


router.get('/', function(req, res){
    
    res.header({
        "pass-app":"usted esta usando pass-app en nuestras cabeceras para usuarios"
    });
    //* Call controller 
    getName().then((result) => {
        response.success(req, res, result, 200);
    }).catch((err) => {
        response.error(req, res, err, 500);
    });
});

router.post('/', function(req, res){


    
    addName(req.body.name)
        .then((resp) => {
        response.success(req, res, resp, 201);
        }).catch((err) => {
            response.error(req, res, err, 500);
        });
});


router.patch('/:id', function(req, res){
   
   const id = req.params.id;
   const message = req.body.message;

   updateName(id, message).then((result) => {
        response.success(req, res, result, 200);
    }).catch((err) => {
        response.error(req, res, err, 500);
    });;
});



router.delete('/:id', function(req, res){
    const id = req.params.id;

    deleteName(id)
    .then((resp) => {
        response.success(req, res, `Usuario ${id} ha sido elimiando`, 201);
    }).catch((err) => {
        response.error(req, res, err, 500);
    });
});


module.exports = router;