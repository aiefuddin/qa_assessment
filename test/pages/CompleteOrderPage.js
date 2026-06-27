const BasePage = require('./BasePage');

class CompleteOrderPage extends BasePage {

    get checkoutCompleteTitle() {
        return $('id=com.saucelabs.mydemoapp.android:id/completeTV');
    }

    get successMessage() {
        return $('id=com.saucelabs.mydemoapp.android:id/thankYouTV');
    }

    async verifyCheckoutComplete() {
        await this.checkoutCompleteTitle.waitForDisplayed();


        await expect(this.checkoutCompleteTitle).toHaveText('Checkout Complete');
        await expect(this.successMessage).toHaveText('Thank you for your order');
    }
}

module.exports = new CompleteOrderPage();