import xpathSelector from '../../utils/element_by_xpath';
import Data from '../../../data/constants';
const { common: {inputByType: input}, loginPage: { personalAccount, errorElement }} = Data.pageLocators;


class LoginPage {

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

export default new LoginPage();