export interface ingredientInterface {
    name: string;
    isAllergen: true;
    foodtype: foodtypeInterface;
  }

export interface foodtypeInterface{
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
  isAllergen: boolean
}
