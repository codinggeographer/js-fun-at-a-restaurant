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

module.exports = {
  nameMenuItem,
  createMenuItem,
  addIngredients,
  formatPrice,
  // decreasePrice,
  // createRecipe
}


