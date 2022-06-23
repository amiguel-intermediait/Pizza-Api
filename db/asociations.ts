const recipe = require("../models/foodtype") ;
const ingredient = require("../models/ingredient");
const foodtype = require("../models/recipe");

foodtype.hasMany(ingredient);
ingredient.belongsTo(foodtype);
recipe.belongsToMany(ingredient, { through: "recipe_ingredient" });
ingredient.belongsToMany(recipe, { through: "recipe_ingredient" });