const axios = require('axios');

let products = [];

const loadProducts = async () => {
    const res = await axios.get('https://fakestoreapi.com/products');
    products = await res.data;
}

(async () => {
    await loadProducts();
    console.log(products);
})();