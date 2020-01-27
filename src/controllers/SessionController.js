const User = require('../models/User');

module.exports = {
	async store(req, res) {
	const { email } = req.body;

		let user = await User.findOne({ email });
		if(!user){
			user = await User.create({ email });
		} else {
			return res.json({ error: 'Usuário já existe ', usuario: user});
		}

		return res.json(user);

	}
};


// index - lista sessões
// show - recupera uma unica sessao
// store - criar uma sessaõ
// update - atualiza
// destroy - apaga a sessaõ
