
describe("WebdriverIO and TypeScript", () => {
    const baseUrl = "https://rahulshettyacademy.com/loginpagePractise/";
    const dashboardUrl = "https://rahulshettyacademy.com/angularpractice/shop"
    const automationPracticeUrl = "https://rahulshettyacademy.com/AutomationPractice/";
    const testingBlog = "https://only-testing-blog.blogspot.com/";
    const veggiesOffersUrl = "https://rahulshettyacademy.com/seleniumPractise/#/offers";

    xit("Login failure Test", async () => {
        await browser.url("https://rahulshettyacademy.com/loginpagePractise/");
        await browser.maximizeWindow();
        await expect(browser).toHaveTitle(expect.stringContaining("Rahul Shetty Academy"));
        const userName = $("#username");
        await userName.setValue("rahulshettyacademy")
        const password = $("#password");
        await password.setValue("learningss");
        const loginButton = $("#signInBtn");
        await loginButton.click();
        const alertMessage = $(".alert-danger");
        await alertMessage.waitForDisplayed();
        console.log(await alertMessage.getText());
        const credsTextElement = $('p[class="text-center text-white"]')
        await expect(credsTextElement).toHaveText("(username isasd rahulshettyacademy and Password is learning)");
        await browser.pause(5000);
    });
    xit('Login success test',async()=>{
            await browser.url(baseUrl);
            await browser.maximizeWindow();
            await expect(browser).toHaveTitle(expect.stringContaining("Rahul Shetty Academy"));
            const userName = $("#username");
            await userName.setValue("rahulshettyacademy")
            const password = $("#password");
            await password.setValue("learning");
            const loginButton = $("#signInBtn");
            await loginButton.click();
            const checkOutBtn = $('//*[contains(text(),"Checkout")]');
            await checkOutBtn.waitForExist();
            await expect(browser).toHaveTitle("ProtoCommerce");
            await expect(browser).toHaveUrl(dashboardUrl);


    

    });
    xit('UI controls',async()=>{
        await browser.url(baseUrl);
        await browser.maximizeWindow();
        await expect(browser).toHaveTitle(expect.stringContaining("Rahul Shetty Academy"));
        const userName = $("#username");
        await userName.setValue("rahulshettyacademy")
        const password = $("#password");
        await password.setValue("learning");
        const radioButtons = $$(".customradio")
        const adminRadioButton = (radioButtons[0].$('input'));
        const userRadioButton = (radioButtons[1].$('input'));
        await userRadioButton.click();
        // await browser.pause(5000);

        const modalBox = $('.modal-content');
        const modalBody = $('.modal-body');
        const modalCancelButton = $('#cancelBtn');
        const modalOkButton = $('#okayBtn');
        
        await modalBox.waitForDisplayed();
        await expect(modalBody).toBeDisplayed();
        await expect(modalCancelButton).toBeDisplayed();
        await expect(modalOkButton).toBeDisplayed();
        await modalCancelButton.click();
        await expect(modalBox).not.toBeDisplayed();
        await expect(adminRadioButton).toBeSelected();

        await userRadioButton.click();
        await modalBox.waitForDisplayed();
        await modalOkButton.click();
        await expect(userRadioButton).toBeSelected();

        await adminRadioButton.click();
        await expect(modalBox).not.toBeDisplayed();



        const dropDown = $('select.form-control');
        await dropDown.selectByAttribute('value','teach');
        console.log('-------------------');
        console.log(await dropDown.getValue());
        console.log(await dropDown.getText());
        console.log('-------------------');
        await dropDown.selectByVisibleText('Consultant');
        console.log('-------------------');
        console.log(await dropDown.getValue());
        console.log(await dropDown.getText());
        console.log('-------------------');
        await dropDown.selectByIndex(0);
        console.log('-------------------');
        const dropdownValue = await dropDown.getValue();
        await expect(dropdownValue).toBe('stud');


        console.log('-------------------');

        // const loginButton = $("#signInBtn");
        // await loginButton.click();
        // const checkOutBtn = $('//*[contains(text(),"Checkout")]');
        // await checkOutBtn.waitForExist();
        // await expect(browser).toHaveTitle("ProtoCommerce");
        // await expect(browser).toHaveUrl(dashboardUrl);
    });
    xit('Dynamic dropdown',async()=>{
        await browser.url(automationPracticeUrl);
        await browser.maximizeWindow();
        await expect(browser).toHaveTitle(expect.stringContaining("Practice Page"));
        const dropDown = $('input#autocomplete');
        await dropDown.setValue('ind');
        const elementText = $('//*[text()="India"]');
        await elementText.waitForDisplayed();
        let options = $$('[class="ui-menu-item"] div');
        console.log('-------------------');
        console.log(await options.length);
        console.log('-------------------');
        for (let i = 0; i < await options.length; i++) {
            const option = options[i];
            const text = await option.getText();
            console.log('-------------------');
            console.log(text);
            console.log('-------------------');
            console.log('-------------------');
            console.log('No elements found. Index is :'+i);
            console.log('-------------------');
            if (text === 'India') {
                await option.click();
                await browser.pause(5000);
                break;
            }

        }   
    });
    xit('Checkbox',async()=>{
        await browser.url(automationPracticeUrl);
        await browser.maximizeWindow();
        const checkBoxElements = $$('input[type="checkbox"]')
        await checkBoxElements[0].click();
        await expect(checkBoxElements[0]).toBeChecked();
        await expect(checkBoxElements[1]).not.toBeChecked();
        await browser.saveScreenshot('checkbox.png');

    });
    xit('Mouse Hover',async()=>{
        await browser.url(automationPracticeUrl);
        await browser.maximizeWindow();
        const mouseHoverElement = $('#mousehover');
        const topElement = $('=Top');
        await mouseHoverElement.scrollIntoView();
        await browser.pause(3000);
        await mouseHoverElement.moveTo();
        await browser.pause(3000);
        await mouseHoverElement.moveTo();
        await browser.pause(3000);
        await topElement.click();
        await browser.pause(3000);
    });

    xit('Double click Test later Testing blog',async()=>{
        await browser.maximizeWindow();
        await browser.url(testingBlog);
        const dbClickElement = $("//button[.='Double-Click Me To See Alert']");
        await dbClickElement.scrollIntoView();
        await dbClickElement.waitForDisplayed();
        await browser.pause(3000);



        await browser.pause(3000);
        console.log('-------------------');
        console.log(await browser.isAlertOpen());  
        console.log(await browser.getAlertText());
        console.log('-------------------');
        await browser.pause(3000);
        await browser.acceptAlert();
        await browser.pause(3000);
    });

    xit('Web tables sorting',async()=>{
        /**
         * Maximize the window
         * Navigate to the URL
         * Fetch the column header element
         * Click on the column header to sort the table
         * Now identify locator for fetching all elements of the name column
         * Get all the elements
         * Get all the texts of elements
         * Sort the text in ascending order
         * Compare the sorted text with the original text
         */
        await browser.maximizeWindow();
        await browser.url(veggiesOffersUrl);
        const veggieHeader = $('tr th:nth-child(1)');
        await browser.pause(3000);
        await veggieHeader.click();
        await browser.pause(3000);
        const veggiesNamesLocators = $$('tbody tr td:nth-child(1)');
        const veggiesNames = await veggiesNamesLocators.map(async (element) => await element.getText());
        let finalVeggies = [...veggiesNames];
        let sortedVeggiesNames = finalVeggies.sort();
        console.log('-------------------');
        console.log(sortedVeggiesNames);
        console.log(veggiesNames);
        console.log('-------------------');
        await expect(veggiesNames).toEqual(sortedVeggiesNames);
        // await browser.pause(3000);

    });

    it('Window handling',async()=>{
        await browser.maximizeWindow();
        await browser.url(baseUrl);
        const extUrlElement = $('.blinkingText');
        await extUrlElement.click();
        const windowHandles = await browser.getWindowHandles();
        await browser.switchToWindow(windowHandles[1]);
        await browser.pause(2000);

        console.log('-------------------');
        console.log(await browser.getTitle());
        console.log('-------------------');

        const headerElement = $('h1');
        await headerElement.waitForDisplayed();
        await browser.closeWindow();
        await browser.pause(2000);
        await browser.switchToWindow(windowHandles[0]);
        console.log('-------------------');
        console.log(await browser.getTitle());
        console.log('-------------------');
        await browser.pause(2000);

        const frameElement = $('#courses-iframe');
        await browser.switchFrame(frameElement)


    }   );

    i
});