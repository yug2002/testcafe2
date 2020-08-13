import xpathSelector from '../../utils/element_by_xpath';
import Data from '../../../data/constants';
import BasePage from '../base/base_page';
const { common: {inputByType: input}, loginPage: { personalAccount, errorElement }} = Data.pageLocators;


export default class LoginPage extends BasePage {

  inputByType(type: string) : Selector {
    return xpathSelector(input(type));
  }

  accountElement(): Selector {
    return xpathSelector(personalAccount);
  }

  errorElement(error: string): Selector {
    return xpathSelector(errorElement(error));    
  }  
}

//export default new LoginPage();