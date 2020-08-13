import { Selector } from 'testcafe';

const elementsByXpath = Selector((xpath: string) => {
  const iterator = document.evaluate(xpath, document, null, XPathResult.UNORDERED_NODE_ITERATOR_TYPE, null);
  const items: Node[] = [];

  let item = iterator.iterateNext();

  while(item) {
    items.push(item);
    item = iterator.iterateNext();
  }

  return items;
})

export default function(xpath: string) {
  return Selector(elementsByXpath(xpath));
}