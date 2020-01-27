// index - lista sessões
// show - recupera uma unica sessao
// store - criar uma sessaõ
// update - atualiza
// destroy - apaga a sessaõ
// exemplo
//module.exports = {
//    index()
//}

module.exports = {
	store(req, res) {
		return res.json({ message: 'Deusa Atena! |>'})
	}
};