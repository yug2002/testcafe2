import { Selector } from 'testcafe';
import xpathSelector from '../../utils/element_by_xpath';

class HomePage {
  public title() {
    const xpath: string = `//h1/span`;
    return xpathSelector(xpath);    
  }
}

export default new HomePage();