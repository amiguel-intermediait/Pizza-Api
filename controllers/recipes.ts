import { Request, Response } from "express"
const recipe = require("../db/models/recipe") ;
const ingredient = require("../db/models/ingredient")
const foodtype = require("../db/models/foodtype")
export const getRecipes = async(req: Request, res: Response) => {
    try {
        const recipes = await recipe.findAll({
            include: [
              {
                model: ingredient, 
                include: [
                  foodtype
                ]  
              }
            ]
          });
        res.json({recipes});
    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg:"Server error"
        })
    }
}

export const postRecipe = (req: Request, res: Response) => {
    const { body } = req;
    res.json({
        msg: 'postRecipes',
        body
    })
}