import { loadHeaderFooter } from './utils.js';
import CartList from './shoppingCart.js';

loadHeaderFooter();

const cart = new CartList('so-cart', document.querySelector('.cart-product-list'));
cart.init();

export function getLocalStorage(key) {
  console.log(key);
  return JSON.parse(localStorage.getItem(key));
  
}

console.log(getLocalStorage('so-cart'));

function getCartContents() {
  let markup = '';
  const cartItems = getLocalStorage('so-cart');
  // console.log(Object.keys(cartItems));
  if (Object.keys(cartItems).length > 0) {
    const htmlItems = cartItems.map((item) => { 
    markup = renderCartItem(item); 
    return markup;
      
    });
    document.querySelector('.cart-product-list').innerHTML = htmlItems.join('');
  }
}

function renderCartItem(item) {
  const newItem = `<li class="cart-card divider">
  <a href="#" class="cart-card__image">
    <img
      src="${item.Images.PrimaryMedium}"
      alt="${item.Name}"
    />
  </a>
  <a href="#">
    <h2 class="card__name">${item.Name}</h2>
  </a>
  <p class="cart-card__color">${item.Colors[0].ColorName}</p>
  <p class="cart-card__quantity">qty: 1</p>
  <p class="cart-card__price">$${item.FinalPrice}</p>
</li>`;
  return newItem;
}

getCartContents();
