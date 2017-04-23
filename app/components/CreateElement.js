function createElement(elementName, property, value) {
  const element = document.createElement(elementName);
  element[property] = value;
  return element;
}

export default createElement;
