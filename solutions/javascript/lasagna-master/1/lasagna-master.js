/// <reference path="./global.d.ts" />
// @ts-check

/**
 * Implement the functions needed to solve the exercise here.
 * Do not forget to export them so they are available for the
 * tests. Here an example of the syntax as reminder:
 *
 * export function yourFunction(...) {
 *   ...
 * }
 */

export function cookingStatus(remainingTime) {

  if(remainingTime === undefined){
    return 'You forgot to set the timer.';
  }
  
  if(remainingTime === 0){
    return 'Lasagna is done.';
  }

  return 'Not done, please wait.'
}

export function preparationTime(layers,time=2 ) {
  return layers.length * time
}

export function quantities(layers) {
  let noodles=0,sauce=0;
  layers.forEach(function (layer) {
    if (layer === 'sauce'){
      sauce+=0.2;
    }
    if(layer === 'noodles'){
      noodles+=50;
    }
  })

  return {
    noodles,sauce
  }
}

export function addSecretIngredient(friendsList, myList) {
  myList.push(friendsList.at(-1))
}

export function scaleRecipe(recipe, portions=1) {
  const SCALE = 2;
  const scaleFactor = portions/SCALE;
  const scaledRecipe = {}
  
  for(const [key,value] of Object.entries(recipe)){
    scaledRecipe[key]=value * scaleFactor
  }
  
  return scaledRecipe
}