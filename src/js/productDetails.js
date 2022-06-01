import { setLocalStorage } from './utils.js';
import { getLocalStorage } from './utils.js';
// import { loadHeaderFooter } from './utils.js';

// loadHeaderFooter();

export default class ProductDetails {
   constructor(productId, dataSource) {
      this.productId = productId;
      this.product = {};
      this.products = [];
      this.dataSource = dataSource;
   }
   async init() {
      this.product = await this.dataSource.findProductById(this.productId);
      
      var text = this.renderProductDetails();
      console.log(text);
      console.log("here");
      document.querySelector('#details-main').innerHTML = this.renderProductDetails();
      document.getElementById('addToCart').addEventListener('click', this.addToCart.bind(this));
   }
   addToCart() {
      if (getLocalStorage('so-cart') != null){
         this.products = getLocalStorage('so-cart')
      }
      this.products.push(this.product)
      setLocalStorage('so-cart', this.products);
   }

   renderProductDetails () {
   
      return `<section class="product-detail"> <h3>${this.product.Brand.Name}</h3>
      <h2 class="divider">${this.product.NameWithoutBrand}</h2>
      <img
         clas="divider"
         src="${this.product.Image.PrimaryLarge}"
         alt="${this.product.NameWithoutBrand}"
      />
      <p class="product-card__price">$${this.product.FinalPrice}</p>
      <p class="product__color">${this.product.Colors[0].ColorName}</p>
      <p class="product__description">
      ${this.product.DescriptionHtmlSimple}
      </p>
      <div class="product-detail__add">
         <button id="addToCart" data-id="${this.product.Id}">Add to Cart</button>
      </div></section>`;
   }
}


 
 // getProductsData();
//  add listener to Add to Cart button
//  document.getElementById('addToCart').addEventListener('click', addToCart);
 