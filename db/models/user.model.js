const {Model, Datatypes, Sequelize} = require("sequelize");

const USER_TABLE = "tb_users";

const UserSchema = {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      email: {
        allowNull: false,
        type: DataTypes.STRING,
        unique: true
      },
      password: {
        allowNull: false,
        type: DataTypes.STRING
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
        field: "create_at", //este sera su nombre en la bd y arriba sera su nombre para manipularlo en JS
        defaultValue: Sequelize.NOW
      }
};


class User extends Model {
    static associate(models)
        {

        }
    static config(sequelize)
        {
            return {
                sequelize, //Que conexion va a tener
                tableName: USER_TABLE, //nombre de la tabla
                modelName: "User", //definimos el nombre del modelo
                timestamps: false
            }
        }
}

module.exports = {USER_TABLE, UserSchema, User};