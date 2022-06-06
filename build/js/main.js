import ExternalServices from './externalServices.js';
import ProductList from './productList.js';
import { loadHeaderFooter } from './utils.js';

const dataSource = new ExternalServices('tents');
let element = document.querySelector('.product-list');
const productList = new ProductList('tents', dataSource, element);
loadHeaderFooter();
productList.init()
console.log(productList);
