import xpathSelector from '../../utils/element_by_xpath';
import Data from '../../../data/constants';
const { homePage: {title}, common: { buttonByName: button } } = Data.pageLocators;

class HomePage {
  public title() {    
    return xpathSelector(title);    
  }

  public buttonByName(name: string) {
    return xpathSelector(button(name));
  }
}

export default new HomePage();