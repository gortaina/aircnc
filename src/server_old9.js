const express = require('express');
const mongoose = require('mongoose');
// usa-se o nome para lib/modulos e o caminho relativo para arquivos não precisa colocar o path todo ./routes.js
// basta o nome, como ./routes
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


//node 2
//mongodb://<username>:<password>@dbomni-shard-00-00-txagc.mongodb.net:27017,dbomni-shard-00-01-txagc.mongodb.net:27017,dbomni-shard-00-02-txagc.mongodb.net:27017/admin?ssl=true&replicaSet=DBOmni-shard-0&authSource=admin&retryWrites=true&w=majority
//mongodb://user:password@dbomni-shard-00-00-txagc.mongodb.net:27017,dbomni-shard-00-01-txagc.mongodb.net:27017,dbomni-shard-00-02-txagc.mongodb.net:27017/nomedobanco?ssl=true&replicaSet=DBOmni-shard-0&authSource=admin&retryWrites=true&w=majority'
//mongoose.connect('mongodb://user:password@dbomni-shard-00-00-txagc.mongodb.net:27017,dbomni-shard-00-01-txagc.mongodb.net:27017,dbomni-shard-00-02-txagc.mongodb.net:27017/nomedobanco?ssl=true&replicaSet=DBOmni-shard-0&authSource=admin&retryWrites=true&w=majority', {
//  useNewUrlParser: true,
//  useUnifiedTopology: true,
//});



// define a rota -  GET, POST, PUT, DELETE
// req.query  - GET  - acessar com Query params - para filtros
// req.params - PUT, POST  - acessar com Path params - para edição, delete e para criação(POST) de objetos filhos de outros já criados
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
