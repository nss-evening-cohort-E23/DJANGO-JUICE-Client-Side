import { clientCredentials } from '../client';

const getOrders = () => new Promise((resolve, reject) => {
  fetch(`${clientCredentials.databaseURL}/orders`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then(resolve)
    .catch(reject);
});

const getSingleOrder = (id) => new Promise((resolve, reject) => {
  fetch(`${clientCredentials.databaseURL}/orders/${id}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(data)) // will resolve a single object
    .catch(reject);
});

const createOrder = (order) => new Promise((resolve, reject) => {
  fetch(`${clientCredentials.databaseURL}/orders`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(order),
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

const updateOrder = (order) => new Promise((resolve, reject) => {
  fetch(`${clientCredentials.databaseURL}/orders/${order.id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(order),
  })
    .then((data) => resolve(data))
    .catch(reject);
});

const deleteOrder = (id) => new Promise((resolve, reject) => {
  fetch(`${clientCredentials.databaseURL}/orders/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then(resolve)
    .catch(reject);
});

const getOpenOrderByUserId = (id) => new Promise((resolve, reject) => {
  fetch(`${clientCredentials.databaseURL}/orders?user_id=${id}&is_open=true`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      // if the api returns an array with the single object inside
      // extract the first object from the array and resolve it
      if (Array.isArray(data) && data.length > 0) {
        resolve(data[0]);
      } else {
        resolve({});
      }
    })
    .catch(reject);
});

export {
  getOrders, getSingleOrder, createOrder, updateOrder, deleteOrder, getOpenOrderByUserId,
};
