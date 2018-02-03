const assert = require('assert');
const {Builder, By, Key, until} = require('selenium-webdriver');

describe('TS_ConnApp_001',function(){

    let driver;
    const targetUrl = "https://connect.topcoder-dev.com";
    before( async function() {
        driver =  await new Builder().forBrowser('firefox').build();
    });

    after(function() {
        // runs after all tests in this block
        // return driver.quit();
    });

    beforeEach(function() {
        // runs before each test in this block
    });

    afterEach(function() {
        // runs after each test in this block
    });


   describe('Connect Application : GUI Verification of the registration page elements', function(){

       let topcoderConnectLogoSrc;
       let topRightLoginButton;
       let formTitle;

       before(async function(){
           await driver.get(targetUrl);

           await driver.findElement(By.xpath('//*[@id="root"]/div/div[1]/div/div/div/div[1]/div[2]/div/div/div/div/div/a')).click();
           await driver.findElement(By.xpath('/html/body/ui-view/div/div[1]/div/a')).click();
       });

       // //Verification of the registration page elements
       // it('Logo should be displayed on upper left hand corner in Grayscale mode', async function(){
       //     topcoderConnectLogoSrc = await driver.findElement(By.xpath('/html/body/ui-view/div/div[1]/img')).getAttribute('src');
       //     assert(topcoderConnectLogoSrc!==null,true);
       // });
       //
       // it('Check the "Login" button ',async function(){
       //     topRightLoginButtonText = await driver.findElement(By.css('.login > span')).getText();
       //     assert.equal(topRightLoginButtonText,'Already have an account?','Login button\'s message should be:Already have an account?');
       //
       // });
       //
       // it('Check the register form\' "Title"',async function(){
       //     formTitleText = await driver.findElement(By.xpath('/html/body/ui-view/div/div[2]/h3')).getText();
       //     assert.equal(formTitleText,'Register for Topcoder','Register form\' title should be: Register for Topcoder');
       // });
       //
       it('Check the register form\'s first name input',async function(){
           let formFirstNameInput = await driver.findElement(By.xpath('/html/body/ui-view/div/div[2]/form/div[1]/input')).getTagName();
           assert.equal(formFirstNameInput,'input','Register form should have first name input field');
       });

       it('Check the register form\'s last name input',async function(){
           let formLastNameInput = await driver.findElement(By.xpath('/html/body/ui-view/div/div[2]/form/div[2]/input')).getTagName();
           assert.equal(formLastNameInput,'input','Register form should have last name input field');
       });

       it('Check the register form\'s country input',async function(){
           let formCountryInput = await driver.findElement(By.xpath('//*[@id="_value"]')).getTagName();
           assert.equal(formCountryInput,'input','Register form should have country input field');
           // let countries = await driver.findElements(By.css('.angucomplete-dropdown-visible'));
           // console.log('countries before hit a key:');
           // console.log(countries.length);

           await driver.findElement(By.xpath('//*[@id="_value"]')).sendKeys('a');

           setTimeout(async function(){
               let countryList = await driver.findElement(By.css('#_dropdown.angucomplete-dropdown:not(.ng-hide)'));
               console.log('countries after hit a key:');
               console.log(countryList);
           },3000);

       });

   });

});
