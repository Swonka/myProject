import { browser, element, by, protractor } from 'protractor';
import { AppPage } from './app.po';
import { delay } from 'q';

describe('Shopping List test', () =>{

    let page: AppPage;

    beforeEach(() => {
        page = new AppPage();
      });

      it('1.1 access shopping-list page', () => {
        // Arrange (may be empty)
        // Act
        // Assert
        browser.get('');

        element(by.id('shopping-list')).click();

        expect(element(by.id('title')).getText()).toEqual('shopping list');
        
        //write code to log in.
    
        // more code here
    
        //expect(true).toBeTruthy();
      });

      it('1.2: add item to shopping list', () => {
        // Arrange (may be empty)
        // Act
        // Assert
   
        browser.get('');
        element(by.id('shopping-list')).click();

        element.all(by.id('single-item')).then((el) =>{
        
            const before = el.length; //

        
            element(by.id('name')).sendKeys('Bread');
            
            //browser.sleep(2000);
            element(by.id('amount')).sendKeys(5);
            
            //browser.sleep(2000);
            element(by.id('submit-button')).click();
            
            //browser.sleep(2000);
            element.all(by.id('single-item')).then((el2) =>{
                const after = el2.length;

                expect(before + 1).toEqual(after);
        });


    });
})

    it('1.3 add ingredient to shopping list from recipe', () => {
        // Arrange (may be empty)
        // Act
        // Assert

        browser.get('');
        element(by.id('shopping-list')).click();

        element.all(by.id('single-item')).then((el) =>{
        
            const before = el.length; //

            browser.get('/recipes')

           //element(by.id('single-recipe')).get(1).click();

           element.all(by.id('single-recipe')).get(1).click()

           browser.sleep(2000);
           //element(by.id('dropdown-menu)')).click();
           
            element(by.id('dropdown-button')).click()

           element(by.id('shopping-button')).click();

           element(by.id('shopping-list')).click()

           element.all(by.id('single-item')).then((el2) =>{
            const after = el2.length;

            expect(before + 2).toEqual(after);
        });

        });



      });


    });











