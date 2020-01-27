const express = require('express');
//const mongoose = require('mongoose');
// usa-se o nome para lib/modulos e o caminho relativo para arquivos não precisa colocar o path todo ./routes.js
// basta o nome, como ./routes
const routes = require('./routes');

const app = express();

// porta de acesso 27017
//mongoose.connect('mongodb+srv://user:password@dbomni-txagc.mongodb.net/nomedobanco?retryWrites=true&w=majority',{
//    useNewUrlParser: true,
//    useUnifiedTopology: true,
//});

// define a rota -  GET, POST, PUT, DELETE
// req.query  - GET  - acessar com Query params - para filtros
// req.params - PUT  - acessar com Path params - para edição, delete
// req.body   - POST - acessar CORPO(Body) da requisição - para criação, edição

app.use(express.json());
// depois da linha app.use(express.json());
app.use(routes);

// o processo abaixo foi para o arquivo routes.js
//app.post('/users/', (req, res) =>{
//    return res.json(req.body);
//
//});



app.listen(3333);
