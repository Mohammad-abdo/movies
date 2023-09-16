const mongoose = require("mongoose");

const conn = () => {
//
  mongoose.connect(process.env.DB_URL, {
        dbName:'Movies-land',
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("DB CONNECT");
    })
    .catch((err) => {
      console.log("DB DONT CONNECT" + err);
    });
};
module.exports = { conn };
