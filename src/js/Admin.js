import ExternalServices from "./externalServices.js";


export class Admin{
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
            <input name="email" type="email" value="user1@email.com" required>
            <label for="password">Password</label>
            <input name="password" type="text" required>
            <input type="submit" name="submit" class="button" id="loginBtn" value="Login" >
        </fieldset>
    </form>`
        document.querySelector(outputSelector).innerHTML = form;
        document.querySelector('#loginBtn').addEventListener('click', login);
    }
}