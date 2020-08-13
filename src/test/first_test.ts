import homePage from '../lib/pages/home/home_page';
import loginPage from '../lib/pages/login/login_page';
import Data from '../data/constants';

fixture('home page fixture').page('https://todo.microsoft.com/tasks/');

test('check home page title', async t =>
 await t
 .maximizeWindow()
 .expect(homePage.title().textContent).eql('Microsoft To Do'));

 test('check that user can login', async t => 
  await t     
    .click(homePage.buttonByName('Get started'))
    .typeText(loginPage.inputByType('email'), Data.login)
    .click(loginPage.inputByType('submit'))
    .click(loginPage.accountElement())
    .typeText(loginPage.inputByType('password'), Data.password)
    .click(loginPage.inputByType('submit'))    
    );