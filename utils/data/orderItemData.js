import { clientCredentials } from '../client';

const getOrderItems = () => new Promise((resolve, reject) => {
  fetch(`${clientCredentials.databaseURL}/orderitems`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then(resolve)
    .catch(reject);
});

const getSingleOrderItem = (id) => new Promise((resolve, reject) => {
  fetch(`${clientCredentials.databaseURL}/orderitems/${id}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(data)) // will resolve a single object
    .catch(reject);
});

const createOrderItem = (orderItem) => new Promise((resolve, reject) => {
  fetch(`${clientCredentials.databaseURL}/orderitems`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(orderItem),
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

const updateOrderItem = (orderItem) => new Promise((resolve, reject) => {
  fetch(`${clientCredentials.databaseURL}/orderitems/${orderItem.id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(orderItem),
  })
    .then((data) => resolve(data))
    .catch(reject);
});

const deleteOrderItem = (id) => new Promise((resolve, reject) => {
  fetch(`${clientCredentials.databaseURL}/orderitems/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then(resolve)
    .catch(reject);
});

const getOrderItemsByOrderId = (id) => new Promise((resolve, reject) => {
  fetch(`${clientCredentials.databaseURL}/orderitems?order_id=${id}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then(resolve)
    .catch(reject);
});

export {
  getOrderItems, getSingleOrderItem, createOrderItem, updateOrderItem, deleteOrderItem, getOrderItemsByOrderId,
};
