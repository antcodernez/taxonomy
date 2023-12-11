const { Sequelize } = require("sequelize");
const {config} = require("../config/config");
const setupModels = require("../db/models/index.models");

const USER = encodeURIComponent(config.dbUser);
const PASSWORD = encodeURIComponent(config.dbPassword);
const URI = `${config.dbDialect}://${USER}:${PASSWORD}@${config.dbHost}:${config.dbPort}/${config.dbName}`;

//const URI = "mysql://tester:tucola23@localhost:3306/my_store";

const sequelize = new Sequelize(URI, {
  dialect: config.dbDialect,
}); // el va a usar el pooling por detras

//se corre despues de crear la instancia
setupModels(sequelize);

// sequelize.sync() //Va a hacer una sincronizacion; va a tomar los modelos y va a crear la estructura
// sequelize.sync() no se recomienda porque no se puede llevar un sistema de migraciones y se debe de cambiar en produccion

// Existe el modo de sincronización global sequelize.sync() o particular modelo.sync()` donde tendremos parámetros:
//force: true. Eliminar la existencia previa y creando en secuencia.
//alter: true. Revisa si se cambiará alguna estructura, la nueva vs la previa.
module.exports = sequelize;
