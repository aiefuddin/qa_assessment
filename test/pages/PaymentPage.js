const BasePage = require('./BasePage');

class PaymentPage extends BasePage {

    get cardNameField() {
        return $('id=com.saucelabs.mydemoapp.android:id/nameET');
    }

    get cardNumberField() {
        return $('id=com.saucelabs.mydemoapp.android:id/cardNumberET');
    }

    get expirationDateField() {
        return $('id=com.saucelabs.mydemoapp.android:id/expirationDateET');
    }

    get securityCodeField() {
        return $('id=com.saucelabs.mydemoapp.android:id/securityCodeET');
    }

    get reviewOrderButton() {
        return $('~Saves payment info and launches screen to review checkout data');
    }

    async fillPaymentDetails(data) {

        await this.type(this.cardNameField, data.cardName);
        await this.type(this.cardNumberField, data.cardNumber);
        await this.type(this.expirationDateField, data.expiryDate);
        await this.type(this.securityCodeField, data.securityCode);
        await this.click(this.reviewOrderButton);
    }
}

module.exports = new PaymentPage();