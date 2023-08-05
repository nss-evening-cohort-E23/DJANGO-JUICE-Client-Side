import { clientCredentials } from '../utils/client';

const endpoint = clientCredentials.databaseURL;

const getItems = (uid) => fetch(`${endpoint}/item.json?orderBy="uid"&equalTo="${uid}"`, {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json',
  },
})
  .then((response) => response.json())
  .then((data) => Object.values(data))
  .catch((error) => {
    throw error;
  });

const deleteSingleItem = (firebaseKey) => fetch(`${endpoint}/item/${firebaseKey}.json`, {
  method: 'DELETE',
  headers: {
    'Content-Type': 'application/json',
  },
})
  .then((response) => response.json())
  .then((data) => data)
  .catch((error) => {
    throw error;
  });

const getSingleItem = (firebaseKey) => fetch(`${endpoint}/item/${firebaseKey}.json`, {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json',
  },
})
  .then((response) => response.json())
  .then((data) => data)
  .catch((error) => {
    throw error;
  });

const getOrderItems = async (itemFirebaseKey) => {
  // eslint-disable-next-line no-useless-catch
  try {
    const orderItems = await getItems(); // Call the getItems function to get the list of order items
    const matchingKeys = [];

    orderItems.forEach((order) => {
      if (order.item && order.item.includes(itemFirebaseKey)) {
        matchingKeys.push(order.item.firebaseKey);
      }
    });

    return matchingKeys;
  } catch (error) {
    throw error;
  }
};

export {
  getItems,
  deleteSingleItem,
  getSingleItem,
  getOrderItems,
};
