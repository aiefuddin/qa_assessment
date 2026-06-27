const BasePage = require('./BasePage');

class CartPage extends BasePage {

    get checkoutButton() {
        return $('~Confirms products for checkout');
    }

    async proceedToCheckout() {
        await this.click(this.checkoutButton);
    }

}

module.exports = new CartPage();