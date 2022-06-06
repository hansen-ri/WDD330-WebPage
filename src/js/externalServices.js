const baseURL = 'http://157.201.228.93:2992/';

function convertToJson(res) {
   if (res.ok) {
     return res.json();
   } else {
     throw new Error('Bad Response');
   }
}

let products = [];

export default class ExternalServices {
   constructor() {
      // this.category = category;
      // this.path = `../json/${this.category}.json`;
   }
   getData(category) {
      return fetch(baseURL + `products/search/${category}`)
            .then(convertToJson).then((data) => data.Result);
      // fetch('../json/tents.json')
      // .then(convertToJson)
      // .then((data) => {
      //   products = data;
      //   console.log("just products in getData()" + products);
      // });
   }
   async findProductById(id) {
      // const product = products.find((item) => item.Id === e.target.dataset.id); // just added this 
      // return product;
      // const products = await this.getData()
      // return products.find((item) => item.Id === id);
      return await fetch(baseURL + `product/${id}`).then(convertToJson)
            .then((data) => data.Result);
   }

}

// // get tents data
// function getProductsData() {

//  }





 