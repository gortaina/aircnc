const Booking = require('../models/Booking');

module.exports = {

  async store(req, res) {
    const { user_id } = req.headers;
    const { spot_id } = req.params;
    const { date }   = req.body;

    const booking = await Booking.create({
      user: user_id,
      spot: spot_id,
      date,
    });

    //popula o objeto user e spot
    await booking.populate('spot').populate('user').execPopulate();
    //antes
    //{
    //  "_id": "5d9a5f143f20da313407cc01",
    //  "user": "5d9a4dc7db6d4a221c204979",
    //  "spot": "5d9a528b59335c2c0c44e7a7",
    //  "date": "05 de outubro",
    //  "__v": 0
    //}
    //depois
//    {
//      "_id": "5d9a5fa03436c12170138d67",
//      "user": {
//        "_id": "5d9a4dc7db6d4a221c204979",
//        "email": "kratdos@gmail.com",
//        "__v": 0
//      },
//      "spot": {
//        "techs": [
//          "ccc",
//          "ReactJS",
//          "React Native",
//          "Node.js",
//          "bbb"
//        ],
//        "_id": "5d9a528b59335c2c0c44e7a7",
//        "user": "5d9a4dc7db6d4a221c204979",
//        "thumbnail": "Mother-1570394762674.jpg",
//        "company": "Mother2",
//        "price": 127,
//        "__v": 0
//      },
//      "date": "05 de outubro",
//      "__v": 0
//    }

    return res.json(booking);
  }
}