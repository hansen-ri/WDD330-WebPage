function formDataToJSON(formElement) {
  const formData = new FormData(formElement),
    convertedJSON = {};

  formData.forEach(function (value, key) {
    convertedJSON[key] = value;
  });

  return convertedJSON;
}

function packageItems(items) {
  const simplifiedItems = items.map((item) => {
    console.log(item);
    return {
      id: item.Id,
      price: item.FinalPrice,
      name: item.Name,
      quantity: 1,
    };
  });
  return simplifiedItems;
}

export default class CheckoutProcess {
   constructor(key) {
     this.key = key;
    //  this.outputSelector = outputSelector;
     this.list = [];
     this.itemTotal = 0;
     this.shipping = 0;
     this.tax = 0;
     this.orderTotal = 0;
   }
   init() {
     this.list = getLocalStorage(this.key);
     this.calculateItemSummary();
   }
   calculateItemSummary() {
     // calculate and display the total amount of the items in the cart, and the number of items.
     this.list.forEach(element => {
        this.itemTotal += element;
     });
   }
   calculateOrdertotal() {
     // calculate the shipping and tax amounts. Then use them to along with the cart total to figure out the order total
     let length = this.list.length;
     this.shipping = (((length - 1) * 2) + 10);
     // display the totals.
     this.tax = this.itemTotal * 0.06;
     this.orderTotal = this.itemTotal + this.shipping + this.tax;
     this.displayOrderTotals();
   }
   displayOrderTotals() {
     // once the totals are all calculated display them in the order summary page
     document.getElementById('subtotal').textContent = `$${this.itemTotal}`;
     document.getElementById('shipping').textContent = `$${this.shipping}`;
     document.getElementById('tax').textContent = `$${this.tax}`;
     document.getElementById('order-total').textContent = `$${this.orderTotal}`;
   }
   async checkout(form) {
      const formElement = document.forms['checkout'];

      const json = formDataToJSON(formElement);
      // add totals, and item details
      json.orderDate = new Date();
      json.orderTotal = this.orderTotal;
      json.tax = this.tax;
      json.shipping = this.shipping;
      json.items = packageItems(this.list);
      console.log(json);
      try {
        const res = await services.checkout(json);
        console.log(res);
      } catch (err) {
        console.log(err);
      }
   } 
}