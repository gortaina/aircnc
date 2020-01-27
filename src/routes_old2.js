const express = require('express');
//const SessionController = require('./controllers/SessionController');

const routes = express.Router();


// antes era const app = express(), agora é routes
// routes tem get, put, post...
routes.post('/users/', (req, res) =>{
    return res.json(req.body);

});

//exporta as rotas
module.exports = routes;
