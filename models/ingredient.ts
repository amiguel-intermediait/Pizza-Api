const { Model, DataTypes } = require('sequelize');
import sequelize from "../db/db";

// Una banda de musica
class ingredient extends Model {}
ingredient.init({
    name: DataTypes.STRING
}, {
    sequelize,
    modelName: "ingredient",
    timestamps: false
});

module.exports = ingredient;