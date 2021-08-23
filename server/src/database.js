// conexión a db MongoDB
const mongosee = require('mongoose');
mongosee.connect('mongodb://Localhost/mean-employees', {
  useUnifiedTopology : true,
  useNewUrlParser: true,
  useFindAndModify : false  
})
.then(db => console.log('Db is connected'))
.catch((err) => console.log(err));