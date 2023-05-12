function nameMenuItem(name) {
  return `Delicious ${name}`
}

function createMenuItem(name, price, type) {
  var menuItem = {
    name: name,
    price: price,
    type: type
  }
  return menuItem
}

function addIngredients(ingredient, ingredientsArray) {
  if(!ingredientsArray.includes(ingredient)){
    ingredientsArray.push(ingredient)
  }
  return ingredientsArray
}

function formatPrice(initialPrice) {
  return `$${initialPrice}`
}

function decreasePrice(price) {
  price = price - price * .1
  return price
}

function createRecipe(title, ingredients, menuItemType) {
  var recipe = {
    title: title,
    ingredients: ingredients,
    type: menuItemType
  }
  return recipe 
}
module.exports = {
  nameMenuItem,
  createMenuItem,
  addIngredients,
  formatPrice,
  decreasePrice,
  createRecipe
}


