class BasePage {

    async click(element) {
        await element.waitForDisplayed();
        await element.click();
    }

    async type(element, text) {
        await element.waitForDisplayed();
        await element.waitForEnabled();
        await element.clearValue(); //kalau test overlapped
        await element.setValue(text);
    }

    async getText(element) {
        await element.waitForDisplayed();
        return await element.getText();
    }

    async isDisplayed(element) {
        return await element.isDisplayed();
    }

    async waitForElement(element) {
        await element.waitForDisplayed();
    }

}

module.exports = BasePage;