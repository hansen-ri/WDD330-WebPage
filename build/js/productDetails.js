var a=(c,o,d)=>new Promise((e,s)=>{var u=t=>{try{r(d.next(t))}catch(i){s(i)}},p=t=>{try{r(d.throw(t))}catch(i){s(i)}},r=t=>t.done?e(t.value):Promise.resolve(t.value).then(u,p);r((d=d.apply(c,o)).next())});import{setLocalStorage as h}from"./utils.js";export default class l{constructor(o,d){this.productId=o,this.product={},this.dataSource=d}init(){return a(this,null,function*(){this.product=yield this.dataSource.findProductById(this.productId),console.log("this is the product ID:"+this.productId),document.querySelector("main").innerHTML=this.renderProductDetails(),document.getElementById("addToCart").addEventListener("click",this.addToCart.bind(this))})}addToCart(){h("so-cart",this.product)}renderProductDetails(){return console.log("this is the product:"+this.product),`<section class="product-detail"> <h3>${this.product.Brand.Name}</h3>
      <h2 class="divider">${this.product.NameWithoutBrand}</h2>
      <img
         clas="divider"
         src="${this.product.Image}"
         alt="${this.product.NameWithoutBrand}"
      />
      <p class="product-card__price">$${this.product.FinalPrice}</p>
      <p class="product__color">${this.product.Colors[0].ColorName}</p>
      <p class="product__description">
      ${this.product.DescriptionHtmlSimple}
      </p>
      <div class="product-detail__add">
         <button id="addToCart" data-id="${this.product.Id}">Add to Cart</button>
      </div></section>`}}
