const BasePage = require('./BasePage');

class MenuDrawer extends BasePage {

    get loginMenuItem() {
        return $('~Login Menu Item');
    }

    async goToLogin() {
        await this.click(this.loginMenuItem);
    }

}

module.exports = new MenuDrawer();