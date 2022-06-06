import ExternalServices from './externalServices.js';
import ProductList from './productList.js';
import { loadHeaderFooter, getParams } from './utils.js';

loadHeaderFooter();

const category = getParams('category');

const dataSource = new ExternalServices();
let element = document.querySelector('.product-list');
const productList = new ProductList(category, dataSource, element);
productList.init()