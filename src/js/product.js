import ProductData from './productData.js';
import ProductDetails from './productDetails.js';
import { getParams } from './utils.js';

// console.log(dataSource.getData());
const dataSource = new ProductData('tents');
const productId = getParams('product');
const product = new ProductDetails(productId, dataSource);
product.init();

// console.log(dataSource.findProductById(productId));

// let products = [];


function setLocalStorage(key, data) {
  localStorage.setItem(key, JSON.stringify(data));
}


// or should we do it this way?
// async function getProductsDataAwait() {
//   products = await fetch("../json/tents.json").then(convertToJson);
// }

// add to cart button event handler
// function addToCart(e) {
//   setLocalStorage('so-cart', product);
// }

// // getProductsData();
// // add listener to Add to Cart button
// document.getElementById('addToCart').addEventListener('click', addToCart);
