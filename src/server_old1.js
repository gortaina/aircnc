const express = require("express");
const app = express();



// define a rota -  GET, POST, PUT, DELETE
app.get('/', (req, res) =>{
    // formato simples, só para teste
    //return res.send('Alô mundo');
    //return res.json('Alô mundo');
    return res.json({ message: "GET -Meteoro de Pegasus!!! |> |> |> "});

});

// use o insomia(open source) ou getpostman(pago)
app.post('/user/pegasus', (req, res) =>{
    // formato simples, só para teste
    //return res.send('Alô mundo');
    //return res.json('Alô mundo');
    return res.json({ message: "POST - Meteoro de Pegasus!!! |> |> |> \n |> |> |>"});

});

// req.query - GET - acessar com Query params - para filtros
app.get('/user/idade', (req, res) =>{
    return res.json({ idade: req.query.idade});

});

// req.params - PUT - acessar com Path params - para edição, delete
app.put('/users/:id', (req, res) =>{
    return res.json({ id: req.params.id});

});

// o módulo express não entende por padrão a requisição json
// a linha abaixo o faz entender
app.use(express.json());
// req.body - POST - acessar CORPO(Body) da requisição - para criação, edição
app.post('/users/', (req, res) =>{
    return res.json(req.body);

});


app.listen(3333);
