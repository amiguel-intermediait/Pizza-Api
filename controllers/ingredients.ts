import { Request, Response } from "express"
const ingredient = require("../db/models/ingredient");
export const getIngredients = async(req: Request, res: Response) => {
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

export const postIngredient = (req: Request, res: Response) => {
    const { body } = req;
    res.json({
        msg: 'postIngredient',
        body
    })
}