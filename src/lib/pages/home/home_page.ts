import xpathSelector from '../../utils/element_by_xpath';
import Data from '../../../data/constants';
import BasePage from '../base/base_page';
const { homePage: {title}, common: { buttonByName: button } } = Data.pageLocators;

export default class HomePage extends BasePage {
  public title() {    
    return xpathSelector(title);    
  }

  public buttonByName(name: string) {
    return xpathSelector(button(name));
  }
}

//export default new HomePage();