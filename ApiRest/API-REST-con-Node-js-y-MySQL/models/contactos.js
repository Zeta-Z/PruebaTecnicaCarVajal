'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class contactos extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  contactos.init({
    nombre: DataTypes.STRING,
    Apellido: DataTypes.STRING,
    correo: DataTypes.STRING,
    telefonoFijo: DataTypes.INTEGER,
    celular: DataTypes.INTEGER,
    direccion: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'contactos',
  });
  return contactos;
};