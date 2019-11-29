import { browser, element, by, protractor } from 'protractor';
import { AppPage } from './app.po';
import { delay } from 'q';

describe('Shopping List test', () =>{

    let page: AppPage;

    beforeEach(() => {
        page = new AppPage();
      });

      it('1.2 access shopping-list page', () => {
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
        element(by.id('name')).sendKeys('Bread');
        element(by.id('amount')).sendKeys(5);
        element(by.id('submit-button')).click();
    
        expect(true).toBeTruthy();
    
        //expect
      });










});
