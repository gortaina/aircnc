const User = require('../models/User');

// O async para a requisição ser assíncrona!
module.exports = {
	async store(req, res) {
		// os colchetes no email é para destruturação
		const { email } = req.body;

		// use sempre o await em requisições do banco, pois mesmo demorando uns millisegundos
		// pode dar timeout na app! Usou o await tem que incluir async na função!
		// logo quando tem await ele espera a conclusão da instrução antes de passar para próxima linha
		const user = await User.create({ email });

		return res.json(user);

	}
};


// index - lista sessões
// show - recupera uma unica sessao
// store - criar uma sessaõ
// update - atualiza
// destroy - apaga a sessaõ
// exemplo
//module.exports = {
//    index()
//}