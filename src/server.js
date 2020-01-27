const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');


const app = express();

// porta de acesso 27017
//node 3
//mongodb+srv://<username>:<password>@dbomni-txagc.mongodb.net/admin?retryWrites=true&w=majority
//mongodb+srv://user:password@dbomni-txagc.mongodb.net/nomedobanco?retryWrites=true&w=majority
mongoose.connect('mongodb+srv://user:password@dbomni-txagc.mongodb.net/nomedobanco?retryWrites=true&w=majority',{
  useNewUrlParser: true,
  useUnifiedTopology: true,
});



// define a rota -  GET, POST, PUT, DELETE
// req.query  - GET  - acessar com Query params - para filtros
// req.params - PUT, POST  - acessar com Path params - para edição, delete e para criação(POST) de objetos filhos de outros já criados
// req.body   - POST - acessar CORPO(Body) da requisição - para criação, edição

app.use(express.json());
// depois da linha app.use(express.json());
app.use(routes);

app.listen(3333);
