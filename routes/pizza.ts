import { Router } from 'express';
import { hasAllergens, hasFoodTypes, removefoodTypes, removeAllergens } from '../controllers/pizza';

const router = Router();

router.get('/allergens', hasAllergens);
router.get('/foodtypes', hasFoodTypes);
router.post('/removeallergens', removeAllergens);
router.post('/removefoodtypes',removefoodTypes);
// router.get('/',removeIngredients);
// router.get('/',doubleIngredients);



export default router;