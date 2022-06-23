import { Request, Response } from "express"
import {  arrayStringInterface, foodtypeInterface, ingredientInterface, ingredientTypeInterface, ingredientAllergent } from "../interfaces/interfaces";
const Recipe = require("../db/models/recipe") ;
const Ingredient = require("../db/models/ingredient")
const Foodtype = require("../db/models/foodtype")
export const hasAllergens = async(req: Request, res: Response) => {
    try {
        const { allergens, recipe } = req.body;
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
                    return res.json(true);
                }
            }
        }
        return res.json(false);
    } catch (error) {
        console.log(error);
        res.status(404).json({
            msg:"Recipe doesn't exist"
        })
    }
}

export const hasFoodTypes = async(req: Request, res: Response) => {
    try {
        const { foodtype, recipe } = req.body;
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
                    return res.json(true);
                }
            }
        }
        return res.json(false);
    } catch (error) {
        console.log(error);
        res.status(404).json({
            msg:"Recipe doesn't exist"
        })
    }
}

export const removefoodTypes = async(req: Request, res: Response) => {
    try {
        const { foodtype, recipe } = req.body;
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
        return res.json(responseArray);
    } catch (error) {
        console.log(error);
        res.status(404).json({
            msg:"Recipe doesn't exist"
        })
    }
}

export const removeAllergens = async(req: Request, res: Response) => {
    try {
        const { allergens, recipe } = req.body;
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
        const ingredientsArray: ingredientAllergent[] = ingredients.map((ingredient: ingredientInterface) => ({
            name: ingredient.name,
            allergen: ingredient.foodtype.isAllergen,
            }
        ));
        const foodtypeArray: arrayStringInterface[] = allergens.map((allergen: string) => ({
            name:allergen
            }
        ));
        let responseArray : ingredientAllergent[] = [];
        for(let i = 0; i < ingredientsArray.length; i++){
            for(let j = 0; j < foodtypeArray.length; j++){
                if(!((ingredientsArray[i].allergen)&&(ingredientsArray[i].name == foodtypeArray[j].name))){
                    responseArray.push(ingredientsArray[i])
                }
            }
        }
        return res.json(responseArray);
    } catch (error) {
        console.log(error);
        res.status(404).json({
            msg:"Recipe doesn't exist"
        })
    }
}


