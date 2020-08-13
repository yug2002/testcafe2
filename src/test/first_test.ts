
import Data from '../data/constants';
import { getPage as pages } from '../lib/pages/page_factory';
import HomePage from '../lib/pages/home/home_page';
import LoginPage from '../lib/pages/login/login_page';
import ToDoPage from '../lib/pages/todo/todo_page';

fixture('home page fixture').page('https://todo.microsoft.com/tasks/');

const homePage = pages('Home') as HomePage;
const loginPage = pages('Login') as LoginPage;
const todoPage = pages('ToDo') as ToDoPage;

test('check home page title', async t => {
  await t
  .maximizeWindow()
  .expect(homePage.title().textContent).eql('Microsoft To Dr');
});
 

 test('check that user can login', async t => 
  await t     
    .click(homePage.buttonByName('Get started'))
    .typeText(loginPage.inputByType('email'), Data.login)
    .click(loginPage.inputByType('submit'))
    .click(loginPage.accountElement())
    .typeText(loginPage.inputByType('password'), Data.password)
    .click(loginPage.inputByType('submit'))
    .expect(todoPage.title().textContent).eql('To Do'));