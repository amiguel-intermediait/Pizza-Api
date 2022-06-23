const { Model, DataTypes } = require('sequelize');
import sequelize from "../db/db";

class foodtype extends Model {}
foodtype.init({
    name: DataTypes.STRING,
    isAllergen: DataTypes.BOOLEAN
}, {
    sequelize,
    modelName: "foodtype",
    timestamps: false
});

module.exports = foodtype;