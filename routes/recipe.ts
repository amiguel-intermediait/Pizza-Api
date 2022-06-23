import { Router } from 'express';
import { getRecipes, postRecipe } from '../controllers/recipes';

const router = Router();

router.get('/', getRecipes);
router.post('/', postRecipe)

export default router;