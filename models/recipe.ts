const { Model, DataTypes } = require('sequelize');
import sequelize from "../db/db";

class recipe extends Model {}
recipe.init({
    name: DataTypes.STRING
}, {
    sequelize,
    modelName: "recipe",
    timestamps: false
});

module.exports = recipe;