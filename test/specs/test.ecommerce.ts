import checkOutPage from "../pageobjects/checkOutPage";
import dashboardPage from "../pageobjects/dashboardPage";
import loginPage from "../pageobjects/loginPage";
import reviewPage from "../pageobjects/reviewPage";
import loginData from '../testData/incorrectCreds.json' assert {type:"json"};



describe("WebdriverIO and TypeScript E2E Ecommerce", () => {
  const baseUrl = "https://rahulshettyacademy.com/loginpagePractise/";
  const dashboardUrl = "https://rahulshettyacademy.com/angularpractice/shop";
  const products = ["iphone X", "Nokia Edge"];

  xit("Add device to card and assert Total", async () => {
    await browser.url(baseUrl);
    await browser.maximizeWindow();
    await expect(browser).toHaveTitle(
      expect.stringContaining("Rahul Shetty Academy")
    );
    await loginPage.login("rahulshettyacademy", "learning");

    await dashboardPage.checkOutBtn.waitForExist();
    await expect(browser).toHaveTitle("ProtoCommerce");
    await expect(browser).toHaveUrl(dashboardUrl);
    await dashboardPage.addProductsToCart(products);
    await dashboardPage.clickCheckOutBtn();
    const sumOfElements = await reviewPage.sumOfElements();
    const totalPrice = await reviewPage.totalPrice();
    await expect(sumOfElements).toEqual(totalPrice);
    await checkOutPage.clickCheckOutBtn();
    await checkOutPage.purchaseBtn.waitForExist();
    await checkOutPage.enterCountry("ind");
    await checkOutPage.clickPurchaseBtn();
    await expect(await checkOutPage.successMsg).toBeDisplayed();
  });

  loginData.forEach(({username,password}) => {
    console.log('-------------------');
    console.log(loginData);
    console.log('-------------------');
    it(`Login with incorrect credentials: ${username} and ${password} Smoke`, async () => {
      await browser.url(baseUrl);
      await browser.maximizeWindow();
      await expect(browser).toHaveTitle(
        expect.stringContaining("Rahul Shetty Academy")
      );
      await loginPage.login(username, password);
      await expect(await loginPage.alertMessage).toBeDisplayed();
    });
    
  });


});
