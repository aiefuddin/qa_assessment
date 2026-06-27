const BasePage = require('./BasePage');

class LoginPage extends BasePage {

    get usernameField() {
        return $('id=com.saucelabs.mydemoapp.android:id/nameET');
    }

    get passwordField() {
        return $('id=com.saucelabs.mydemoapp.android:id/passwordET');
    }

    get loginButton() {
        return $('~Tap to login with given credentials');
    }

    async login(username, password) {
        await this.type(this.usernameField, username);
        await this.type(this.passwordField, password);
        await this.click(this.loginButton);
    }

}

module.exports = new LoginPage();