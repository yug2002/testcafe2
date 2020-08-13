import Home from './home/home_page';
import Login from './login/login_page';
import Todo from './todo/todo_page';

export const getPage = (page: string) => {
  switch(page.toLowerCase()) {
    case 'home': return new Home();
    break;
    case 'login': return new Login();
    break;
    case 'todo': return new Todo();
    break;
    default: throw new Error('No any page found');
  };
}