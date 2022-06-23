import e from "express";
import {  arrayStringInterface, foodtypeInterface, ingredientInterface, ingredientTypeInterface, ingredientAllergent } from "../interfaces/interfaces";
const Recipe = require("../models/foodtype") ;
const Ingredient = require("../models/ingredient");
const Foodtype = require("../models/recipe");

export const hasAllegensService = async (allergens: string[], recipe:string) => {
    const { ingredients } = await Recipe.findOne({where: { name: recipe  },
        include: [
          {
            model: Ingredient,
            include: [
                Foodtype
            ],
          }
        ],
      });

    
    const ingredientsArray: foodtypeInterface[] = ingredients.map((ingredient: ingredientInterface) => ({
            name: ingredient.foodtype.name,
            isAllergen: ingredient.foodtype.isAllergen
        }
    ));

    const allergensArray: arrayStringInterface[] = allergens.map((allergen: string) => ({
            name:allergen
        }
    ));

    for(let i = 0; i < ingredientsArray.length; i++ ){
        for(let j = 0; j < allergensArray.length; j++){
            if((ingredientsArray[i].isAllergen)&&(ingredientsArray[i].name == allergensArray[j].name)){
                return true;
            }
        }
    }
    return false;
}

export const hasFoodTypeService = async (foodtype: string[], recipe:string) => {
    const { ingredients } = await Recipe.findOne({where: { name: recipe  },
        include: [
          {
            model: Ingredient,
            include: [
                Foodtype
            ],
          }
        ],
    });
    const ingredientsArray: foodtypeInterface[] = ingredients.map((ingredient: ingredientInterface) => ({
            name: ingredient.foodtype.name,
        }
    ));
    const foodtypeArray: arrayStringInterface[] = foodtype.map((foodtype: string) => ({
            name:foodtype
        }
    ));
    for(let i = 0; i < ingredientsArray.length; i++ ){
        for(let j = 0; j < foodtypeArray.length; j++){
            if(ingredientsArray[i].name == foodtypeArray[j].name){
                return true;
            }
        }
    }
    return false;
}

export const removefoodTypesService = async (foodtype: string[], recipe:string) => {
    const ingredients  = await Recipe.findOne({where: { name: recipe  },
        include: [
          {
            model: Ingredient,
            include: [
                Foodtype
            ],
          }
        ],
    });
    const ingredientsArray: ingredientTypeInterface[] = ingredients.map((ingredient: ingredientInterface) => ({
        name: ingredient.name,
        foodtype: ingredient.foodtype.name,
        }
    ));
    const foodtypeArray: arrayStringInterface[] = foodtype.map((foodtype: string) => ({
        name:foodtype
        }
    ));
    let responseArray : ingredientTypeInterface[] = [];
    for(let i = 0; i < ingredientsArray.length; i++){
        for(let j = 0; j < foodtypeArray.length; j++){
            if(ingredientsArray[i].foodtype !== foodtypeArray[j].name){
                responseArray.push(ingredientsArray[i])
            }
        }
    }
    return responseArray;
}

export const removeAllergensService = async (allergens: string[], recipe:string) => {
    const { ingredients } = await Recipe.findOne({where: { name: recipe  },
        include: [
          {
            model: Ingredient,
            include: [
                Foodtype
            ],
          }
        ],
    });
    console.log(ingredients);
    const ingredientsArray: foodtypeInterface[] = ingredients.map((ingredient: ingredientInterface) => ({
        name: ingredient.foodtype.name,
        isAllergen: ingredient.foodtype.isAllergen
    }
));

    const foodtypeArray: arrayStringInterface[] = allergens.map((allergen: string) => ({
        name:allergen
        }
    ));
    let responseArray : ingredientAllergent[] = [];
    for(let i = 0; i < ingredientsArray.length; i++){
        for(let j = 0; j < foodtypeArray.length; j++){
            if((ingredientsArray[i].isAllergen)&&(ingredientsArray[i].name == foodtypeArray[j].name)){
                console.log('lala')
            }else{
                responseArray.push(ingredientsArray[i])
            }
        }
    }
    return responseArray;
}
