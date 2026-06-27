const CatalogPage = require('../pages/CatalogPage');
const MenuDrawer = require('../pages/MenuDrawer');
const LoginPage = require('../pages/LoginPage');
const users = require('../data/users');
const ProductPage = require('../pages/ProductPage');
const CartPage = require('../pages/CartPage');
const CheckoutPage = require('../pages/CheckoutPage');
const checkout = require('../data/checkout')
const PaymentPage = require('../pages/PaymentPage');
const payment = require('../data/payment')
const ReviewOrderPage = require('../pages/ReviewOrderPage'); 
const CompleteOrderPage = require('../pages/CompleteOrderPage'); 


describe('Navigation Drawer', () => {

    it('should open the navigation drawer', async () => {

        await CatalogPage.openMenuDrawer();
        await MenuDrawer.goToLogin();
        await LoginPage.login(
            users.validUser.username,
            users.validUser.password);

        await CatalogPage.openFirstProduct();
        await ProductPage.addToCart();
        await ProductPage.openCart();
        await CartPage.proceedToCheckout();
        await CheckoutPage.fillShippingDetails(checkout.shipping);
        await PaymentPage.fillPaymentDetails(payment.payment1);
        await ReviewOrderPage.placeOrder();
        await CompleteOrderPage.verifyCheckoutComplete();
        

        await browser.pause(3000);

    });

});