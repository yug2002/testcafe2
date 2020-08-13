import Data from '../../../data/constants';
const { todoPage: { title }} = Data.pageLocators;
import xpathSelector from '../../utils/element_by_xpath';
import BasePage from '../base/base_page';

export default class ToDoPage extends BasePage {
  title(): Selector {
    return xpathSelector(title);
  }
}

