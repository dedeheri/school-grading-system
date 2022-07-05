const mongoose = require('mongoose');

 const setDatabaseConfig = () => {
    mongoose.connect(process.env.DATABASE , {
        useNewUrlParser : true, useUnifiedTopology : true
    })
    .then( () => {
        console.log('Database Stabil')
    })
    .catch(e  => console.log(e))
};

module.exports = setDatabaseConfig;