const CatalogPage = require('../pages/CatalogPage');
const MenuDrawer = require('../pages/MenuDrawer');
const LoginPage = require('../pages/LoginPage');
const users = require('../data/users');

describe('Navigation Drawer', () => {

    it('should open the navigation drawer', async () => {

        await CatalogPage.openMenuDrawer();
        await MenuDrawer.goToLogin();
        await LoginPage.login(
            users.validUser.username,
            users.validUser.password);

        await browser.pause(3000);

    });

});