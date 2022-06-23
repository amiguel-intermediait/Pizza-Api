export interface ingredientInterface {
    id: string;
    name: string;
    isAllergen: string;
    foodtype: foodtypeInterface;
  }

export interface foodtypeInterface{
  id: string,
  name: string,
  isAllergen: boolean
}

export interface arrayStringInterface{
  name: string
}

export interface recipeInterface{
  name: string,
  ingredients : ingredientInterface[]
}

export interface ingredientTypeInterface{
  name:string,
  foodtype:string
}

export interface ingredientAllergent{
  name:string,
  allergen: boolean
}
