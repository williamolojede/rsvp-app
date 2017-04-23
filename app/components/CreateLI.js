import createElement from './CreateElement';

function createLI(text) {
  const li = createElement('li');

  // add element to li
  function appendToLI(elementName, property, value) {
    const element = createElement(elementName, property, value);
    li.appendChild(element);
    return element;
  }

  appendToLI('span', 'textContent', text);
  const label = appendToLI('label', 'textContent', 'Confirm');
  label.appendChild(createElement('input', 'type', 'checkbox'));
  const select = createElement('select');
  const optionComing = createElement('option', 'textContent', 'Coming');
  const optionNotComing = createElement('option', 'textContent', 'Not Coming');
  select.appendChild(optionComing);
  select.appendChild(optionNotComing);
  label.appendChild(select);
  appendToLI('button', 'textContent', 'edit');
  appendToLI('button', 'textContent', 'remove');

  return li;
}

export default createLI;
