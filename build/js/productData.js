function convertToJson(res) {
   if (res.ok) {
     return res.json();
   } else {
     throw new Error('Bad Response');
   }
}

let products = [];

export default class ExternalServices {
   constructor(category) {
      this.category = category;
      this.path = `../json/${this.category}.json`;
   }
   getData() {
      return fetch(this.path)
         .then(convertToJson).then((data) => data)
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
      const products = await this.getData()
      return products.find((item) => item.Id === id);
   }

}

// // get tents data
// function getProductsData() {

//  }





 