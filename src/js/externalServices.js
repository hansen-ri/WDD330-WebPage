const baseURL = 'http://157.201.228.93:2992/';

async function convertToJson(res) {
   let jsonResponse = res.json();
   if (res.ok) {
     return jsonResponse;
   } else {
     throw { name: 'servicesError', message: jsonResponse };
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
   async checkout(payload) {
      const options = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      };
      return await fetch(baseURL + 'checkout/', options).then(convertToJson);
   }  

   async loginRequest(creds){
      const options = {
         method: 'POST', 
         headers: {
            'Content-Type': 'application/json', 
         }, 
         body: JSON.stringify(user)
      }
      const response = await fetch(baseURL + 'login', options).then(convertToJson);
      return response.accessToken;
   }

   async getOrders(token) {
      const options = {
         method: 'GET', 
         headers: {
            'Authorization': `Bearer ${token}` 
         }
      }
      const response = await fetch(baseURL + 'orders', options).then(convertToJson);
      return response;
   }

}






 