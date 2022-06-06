import ExternalServices from './externalServices.js';
import ProductDetails from './productDetails.js';
import { getParams } from './utils.js';
import { loadHeaderFooter } from './utils.js';

loadHeaderFooter();
console.log('there again');


const dataSource = new ExternalServices();
console.log(dataSource.getData());
const productId = getParams('product');
let product = new ProductDetails(productId, dataSource);
product.init();
console.log('there again2');

// console.log(dataSource.findProductById(productId));

let products = [];


function setLocalStorage(key, data) {
  localStorage.setItem(key, JSON.stringify(data));
}


// or should we do it this way?
// async function getProductsDataAwait() {
//   products = await fetch("../json/tents.json").then(convertToJson);
// }

//add to cart button event handler
function addToCart() {
  setLocalStorage('so-cart', product);
}

// getProductsData();

// // add listener to Add to Cart button
// document.getElementById('addToCart').addEventListener('click', addToCart); // get rid of this

// Function to add class to cart to access css that contains animation --KE
function cartAnimation(){
  document.querySelector('.cart').classList.add('cartAnimate')
}

// // adding listener to Add Cart button to animate backpack (cart) --KE
// document.querySelector('#addToCart').addEventListener('click', cartAnimation);