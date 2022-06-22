import ExternalServices from "./externalServices.js";


export default class Admin{
    constructor(outputSelector) {
        this.mainElement = document.querySelector(outputSelector);
        this.token = null;
        this.services = new ExternalServices();
      }

    async login(creds, next) {
        try {
            this.token = await this.services.loginRequest(creds);
            next()
        } 
        catch(err) {
            // remember this from before?
            alertMessage(err.message.message);
        }
    }

    showLogin(){
        let form = `<form name="login" method="post">
        <fieldset>
            <legend>Login Form</legend>
            <label for="email">Email</label>
            <input id="email" name="email" type="email" value="user1@email.com" required>
            <label for="password">Password</label>
            <input id="password" name="password" type="text" required>
            <input type="submit" name="submit" class="button" id="loginBtn" value="Login" >
        </fieldset>
        </form>`
        document.querySelector('main').innerHTML = form;
        // document.querySelector('#loginBtn').addEventListener('click', login);
        document.querySelector('#loginBtn').addEventListener('click', (e) => {
            e.preventDefault();
            const email = document.querySelector('#email').value;
            const password = document.querySelector('#password').value;
            this.login({email, password}, this.showOrders.bind(this));
            
        });
    }

    async showOrders() {
        try {
          const orders = await this.services.getOrders(this.token);
          this.mainElement.innerHTML = orderHtml();
          const parent = document.querySelector('#orders tbody');
          // why not a template like we have done before?  The markup here was simple enough that I didn't think it worth the overhead...but a template would certainly work!
          parent.innerHTML = orders.map(order=> `<tr><td>${order.id}</td><td>${new Date(order.orderDate).toLocaleDateString('en-US')}</td><td>${order.items.length}</td><td>${order.orderTotal}</td></tr>`).join('');
        } catch(err) {
          console.log(err);
        }
      }

      orderHtml() {
        return `<h2>Current Orders</h2>
        <table id="orders">
        <thead>
        <tr><th>Id</th><th>Date</th><th>#Items</th><th>Total</th>
        </thead>
        <tbody class="order-body"></tbody>
        </table>
        `;
      }
}