const {User, UserSchema} = require("./user.model");

function setupModels(sequelize) 
    {
        //configuraciones iniciales de los modelos
        User.init(UserSchema, User.config(sequelize));
        
        //Asociaciones en los modelos

    }

module.exports = {setupModels}