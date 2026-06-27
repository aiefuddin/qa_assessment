const BasePage = require('./BasePage');
class CatalogPage extends BasePage {

    get menuButton() {
        return $('~View menu');
    }

    get products(){
        return $$('id=com.saucelabs.mydemoapp.android:id/productIV');
    }

    async openMenuDrawer() {
        await this.click(this.menuButton);
    }

    //first visible prod
    async openFirstProduct(){

        await $('id=com.saucelabs.mydemoapp.android:id/productIV').waitForDisplayed(); //tunggu all habis load
        const products = await this.products;
        await this.click(products[0]);
    }

}

module.exports = new CatalogPage();