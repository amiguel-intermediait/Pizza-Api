const { Model, DataTypes } = require('sequelize');
import sequelize from "../db/db";


export class ingredient extends Model {}
ingredient.init({
    name: DataTypes.STRING,
    calories: DataTypes.INTEGER
}, {
    sequelize,
    modelName: "ingredient",
    timestamps: false
});

module.exports = ingredient;