function createRestaurant(name) {
  var restaurant = {
    name: name,
    menus: {
      breakfast:[],
      lunch: [],
      dinner: []
    }
  }
  return restaurant
}

function addMenuItem(restaurant, menuItem) {
  if(menuItem.type === 'breakfast'){
    if (!restaurant.menus.breakfast.includes(menuItem)) {
      restaurant.menus.breakfast.push(menuItem)
    }
  } else if(menuItem.type === 'lunch') {
    if (!restaurant.menus.lunch.includes(menuItem)) {
      restaurant.menus.lunch.push(menuItem)
    }
  } else {
    if (!restaurant.menus.dinner.includes(menuItem)) {
      restaurant.menus.dinner.push(menuItem)
    }
  }
  return restaurant
}

function removeMenuItem(restaurant, itemName, itemType) {
  if(itemType === 'breakfast') {
    var index = restaurant.menus.breakfast.findIndex(menuItem => menuItem['name'] == itemName) 
    restaurant.menus.breakfast.splice(index, 1)
  } else if(itemType === 'lunch') { 
    var index = restaurant.menus.lunch.findIndex(menuItem => menuItem['name'] == itemName) 
    restaurant.menus.lunch.splice(index, 1)
  } else {
    var index = restaurant.menus.dinner.findIndex(menuItem => menuItem['name'] == itemName) 
    restaurant.menus.dinner.splice(index, 1)
  }
  if (index !== -1) {
    var message =  `No one is eating our ${itemName} - it has been removed from the ${itemType} menu!`
  } else { 
    var message = `Sorry, we don't sell ${itemName}, try adding a new recipe!`
  }
  return message
}


module.exports = {
  createRestaurant, 
  addMenuItem,
  removeMenuItem,
  // checkForFood
}