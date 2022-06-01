import ProductData from './productData.js';
import ProductList from './productList.js';
import { loadHeaderFooter, getParams } from './utils.js';

loadHeaderFooter();

const category = getParams('category');

const dataSource = new ProductData();
let element = document.querySelector('.product-list');
const productList = new ProductList(category, dataSource, element);
productList.init()