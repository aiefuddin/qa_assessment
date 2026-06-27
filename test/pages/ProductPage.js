const BasePage = require('./BasePage');

class ProductPage extends BasePage {

    get addToCartButton() {
        return $('~Tap to add product to cart');
    }

     get cartButton(){
        return $('id=com.saucelabs.mydemoapp.android:id/cartIV');
    }

    async addToCart() {
        await $('android=new UiScrollable(new UiSelector().scrollable(true)).scrollTextIntoView("Add to cart")');
        await this.click(this.addToCartButton);
    }

    async openCart() {
    await this.click(this.cartButton);
    }



}

module.exports = new ProductPage();