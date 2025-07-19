export const orders = JSON.parse(localStorage.getItem('orders')) || [];

export function addOrder(order) {
  orders.unshift(order);
  saveTStorage();
}

function saveTStorage() {
  localStorage.setItem('orders', JSON.stringify(orders));
}