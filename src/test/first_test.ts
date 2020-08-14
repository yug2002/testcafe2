
import Data from '../data/constants';
import { getPage as pages } from '../lib/pages/page_factory';
import HomePage from '../lib/pages/home/home_page';
import LoginPage from '../lib/pages/login/login_page';
import ToDoPage from '../lib/pages/todo/todo_page';

fixture('home page fixture').page(Data.applicationUrl);

const homePage = pages('Home') as HomePage;
const loginPage = pages('Login') as LoginPage;
const todoPage = pages('ToDo') as ToDoPage;

test('check home page title', async test => {
  await test
    .maximizeWindow()
    .expect(homePage.title().textContent).eql('Microsoft To Do');
});

test('check that user can login', async test => 
  await test     
    .click(homePage.buttonByName('Get started'))
    .typeText(loginPage.inputByType('email'), Data.login)
    .click(loginPage.inputByType('submit'))
    .click(loginPage.accountElement())
    .typeText(loginPage.inputByType('password'), Data.password)
    .click(loginPage.inputByType('submit'))
    .expect(todoPage.title().textContent).eql('To Do'));