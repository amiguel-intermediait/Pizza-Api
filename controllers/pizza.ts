import { Request, Response } from "express"
import { hasAllegensService, hasFoodTypeService, removeAllergensService, removefoodTypesService } from "../services/pizzaService"

export const hasAllergens = async(req: any, res: Response) => {
    try {
        console.log(req.query);
        const allergens : string[] = req.query.allergens;
        const recipe :string = req.query.recipe;
        return await hasAllegensService(allergens,recipe);
    } catch (error) {
        console.log(error);
        res.status(404).json({
            msg:"Recipe doesn't exist"
        })
    }
}

export const hasFoodTypes = async(req: any, res: Response) => {
    try {
        console.log(req.query);
        const foodtype : string[] = req.query.foodtype;
        const recipe :string = req.query.recipe;
        return await hasFoodTypeService(foodtype,recipe);
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
        const result = await removefoodTypesService(foodtype,recipe);
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
        const result =  await removeAllergensService(allergens,recipe);
        res.json({

        })
    } catch (error) {
        console.log(error);
        res.status(404).json({
            msg:"Recipe doesn't exist"
        })
    }
}


