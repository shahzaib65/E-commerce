// src/api.js

const BASE_URL = 'https://dummyjson.com';

const api = {
  getProducts: () => {
    return fetch(`${BASE_URL}/products`).then((response) => response.json());
  },

  getProduct: (id) => {
    return fetch(`${BASE_URL}/products/${id}`).then((response) => response.json());
  },

  searchProducts: (query) => {
    return fetch(`${BASE_URL}/products/search?q=${query}`).then((response) => response.json());
  },

  getProductCategories: () => {
    return fetch(`${BASE_URL}/products/categories`).then((response) => response.json());
  },

  getProductsByCategory: (categoryName) => {
    return fetch(`${BASE_URL}/products/category/${categoryName}`).then((response) => response.json());
  },

  addProduct: (productData) => {
    return fetch(`${BASE_URL}/products/add`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(productData),
    }).then((response) => response.json());
  },

  updateProduct: (id, productData) => {
    return fetch(`${BASE_URL}/products/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(productData),
    }).then((response) => response.json());
  },

  partialUpdateProduct: (id, productData) => {
    return fetch(`${BASE_URL}/products/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(productData),
    }).then((response) => response.json());
  },

  deleteProduct: (id) => {
    return fetch(`${BASE_URL}/products/${id}`, {
      method: 'DELETE',
    }).then((response) => response.json());
  },

  getProductsAuth: (token) => {
    return fetch(`${BASE_URL}/auth/products`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }).then((response) => response.json());
  },
};

export default api;
