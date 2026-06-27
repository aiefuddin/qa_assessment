const BasePage = require('./BasePage');

class ReviewOrderPage extends BasePage {

    get placeOrderButton() {
        return $('~Completes the process of checkout');
    }

    async placeOrder() {
        await this.click(this.placeOrderButton);
    }

}

module.exports = new ReviewOrderPage();