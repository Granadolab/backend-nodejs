const express = require('express');
const response = require('../../network/response');
const router = express.Router();

router.get('/:userId', function(req, res){
    
    getChats().then((result) => {
        response.success(req, res, result, 200);
    }).catch((err) => {
        response.error(req, res, err, 500);
    });
});

router.post('/', function(req, res){
    
    addChat(req.body.user, req.body.message)
    .then((resp) => {
        response.success(req, res, resp, 201);
    }).catch((err) => {
        response.error(req, res, err, 500);
    });
});
