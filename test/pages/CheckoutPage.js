const BasePage = require('./BasePage');

class CheckoutPage extends BasePage {

    get fullNameField() {
        return $('id=com.saucelabs.mydemoapp.android:id/fullNameET');
    }

    get addressField1() {
        return $('id=com.saucelabs.mydemoapp.android:id/address1ET');

    }

    get addressField2() {
        return $('id=com.saucelabs.mydemoapp.android:id/address2ET');

    }
    
    get cityField() {
        return $('id=com.saucelabs.mydemoapp.android:id/cityET');

    }

    get stateRegionField() {
        return $('id=com.saucelabs.mydemoapp.android:id/stateET');

    }

    get zipCodeField() {
        return $('id=com.saucelabs.mydemoapp.android:id/zipET');

    }


    get countryField() {
        return $('id=com.saucelabs.mydemoapp.android:id/countryET');

    }

    get toPaymentButton() {
        return $('~Saves user info for checkout');

    }

    

    async fillShippingDetails(data) {

        await this.type(this.fullNameField, data.fullName);
        await this.type(this.addressField1, data.address1);
        await this.type(this.addressField2, data.address2);
        await this.type(this.cityField, data.city);
        await this.type(this.stateRegionField, data.stateRegion);
        await this.type(this.zipCodeField, data.zipCode);
        await this.type(this.countryField, data.country);
        await $('android=new UiScrollable(new UiSelector().scrollable(true)).scrollTextIntoView("To Payment")');
        await this.click(this.toPaymentButton);
        
    }

}

module.exports = new CheckoutPage();