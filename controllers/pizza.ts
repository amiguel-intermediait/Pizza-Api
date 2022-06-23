import { Request, Response } from "express"
import { hasAllegensService, hasFoodTypeService, removeAllergensService, removefoodTypesService } from "../services/pizzaService"
import {  arrayStringInterface, foodtypeInterface, ingredientInterface, ingredientTypeInterface, ingredientAllergent } from "../interfaces/interfaces";
const Recipe = require("../models/foodtype") ;
const Ingredient = require("../models/ingredient");
const Foodtype = require("../models/recipe");
export const hasAllergens = async(req: Request, res: Response) => {
    try {
        const { allergens, recipe } = req.query;
        const result = hasAllegensService(allergens,recipe);
        res.json({
            result
        })
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
        const result = hasFoodTypeService(foodtype,recipe);
        res.json({
           result
        })
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
        const result =  removefoodTypesService(foodtype,recipe);
        res.json({
            result
        })
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
        const result =  removeAllergensService(allergens,recipe);
        res.json({
        })
    } catch (error) {
        console.log(error);
        res.status(404).json({
            msg:"Recipe doesn't exist"
        })
    }
}


