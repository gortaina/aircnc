const mongoose = require('mongoose');

// com o mongoose ele facilita a manipulação de dados do mongoDB
// como create, delete, update, pesquisa
const UserSchema = new mongoose.Schema({
    email: String,
});

module.exports = mongoose.model('User', UserSchema);
