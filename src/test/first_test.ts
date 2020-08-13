import { Selector } from 'testcafe';
import homePage from '../lib/pages/home/home_page';

fixture('home page fixture').page('https://todo.microsoft.com/tasks/');

test('check home page title', async t =>
 await t
 .maximizeWindow()
 .expect(homePage.title().textContent).eql('Microsoft To Do'));

 test('check that user can login', async t => 
  await t 
    .maximizeWindow())