function takeOrder(newOrder, deliveryOrders) {
  if(deliveryOrders.length < 3) {
    deliveryOrders.push(newOrder)
  }
  return deliveryOrders
}

function refundOrder(orderNumber, deliveryOrders) {
  var index = deliveryOrders.findIndex(order => order['orderNumber'] === orderNumber)
  if (index !== -1) {
    deliveryOrders.splice(index, 1)
  }
  return deliveryOrders
}

function listItems(deliveryOrders) {
  var itemList = deliveryOrders.map(order => order.item)
  return itemList.join(", ")
}

function searchOrder(deliveryOrders, item) {
  var orderItems = listItems(deliveryOrders)
  return orderItems.includes(item)
}

module.exports = {
  takeOrder,
  refundOrder,
  listItems,
  searchOrder
}