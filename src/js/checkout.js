import { loadHeaderFooter } from './utils.js';
import CheckoutProcess from './checkoutProcess.js';

loadHeaderFooter();

const myCheckout = new CheckoutProcess('so-cart');
myCheckout.init();
document.querySelector('#zip').addEventListener('blur', myCheckout.calculateOrdertotal.bind(myCheckout));

document.querySelector('#checkoutSubmit').addEventListener('click', (e) => {
  e.preventDefault();
  myCheckout.checkout();
});
