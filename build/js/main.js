import ProductData from './productData.js';
import ProductList from './productList.js';
import { loadHeaderFooter } from './utils.js';

const dataSource = new ProductData('tents');
let element = document.querySelector('.product-list');
const productList = new ProductList('tents', dataSource, element);
loadHeaderFooter();
productList.init()
console.log(productList);
