const mongoose = require('mongoose');
//const URI='mongodb://127.0.0.1/usuario_db';
const URI='mongodb://atlas-sql-68e155dc13815444fb3864e3-gfizha.a.query.mongodb.net/sample_mflix?ssl=true&authSource=admin';
mongoose.connect(URI)
.then(db=> console.log('BD conectada'))
.catch(err => console.error(err));

module.exports=mongoose;