const User = require('../models/User');
const Spot = require('../models/Spot');

// O async para a requisição ser assíncrona!
module.exports = {

  async index(req, res) {
    const { tech } = req.query;
    console.log(tech);
    //O mongoDB vai user o tech-String no techs-array
    // e retorna apenas o resultados que derem match
    //const spots = await Spot.find({ techs: "ReactJS" }); 
    const spots = await Spot.find({ techs: tech }); 
    // traz todos
    //const spots = await Spot.find(); 
    
    //console.log(spots2);
    return res.json(spots);
  },




  async store(req, res) {
    //console.log(req.body); // nao consegui ler  [Object: null prototype] {
    //console.log(req.file);

    const { filename } = req.file;
    const { company, techs, price } = req.body;
    // header é por contexto da app, autenticacao, idioma
    const { user_id } = req.headers;

    //validação com o objeto User, repare que está maiusculo 
    const user = await User.findById(user_id);

    if(!user){
      return res.status(400).json({ error: 'Usuário não exite.'});
    }
    //erro esperado,  CastError: Cast to ObjectId failed for value "011d9a07db066f0c33a41fe39f" at path "_id" for model "User"
    //significa que vc mandou um valor com uma casa a menos ou a mais.
    //d9a07db066f0c33a41fe39f - original funciona
    //11d9a07db066f0c33a41fe39f - modificado, não funciona
    //UnhandledPromiseRejectionWarning: ReferenceError: User is not defined
    //faltou defininr const User = require('../models/User');
    //async store(req, res) {
    //faltou virgula ?


    const spot = await Spot.create({
      user: user_id,
      thumbnail: filename,
      company,
      techs: techs.split(',').map( tech => tech.trim()),
      price

    })

    return res.json(spot);
    //return res.json({ok: true})
  }
};
