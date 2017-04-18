document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('#registrar');
  const input = document.querySelector('input');
  const invitedList_UL = document.querySelector('#invitedList');
  const mainDiv = document.querySelector('.main');

  const div = document.createElement('div')
  const filterLabel = document.createElement('label')
  const filterCheckbox = document.createElement('input');

  filterLabel.textContent = "Hide those who haven't responded";
  filterCheckbox.type = 'checkbox';
  div.appendChild(filterLabel);
  div.appendChild(filterCheckbox);
  mainDiv.insertBefore(div,invitedList_UL);

  filterCheckbox.addEventListener('change', e => {
    const isChecked = e.target.checked;
    // converts htmlcollection to an iterable array
    const lis = Array.from(invitedList_UL.children);
    if (isChecked) {
      lis.forEach((li) => {
        if (li.className === 'responded') {
          li.style.display = '';
        } else {
          li.style.display = 'none';
        }
      });
    } else {
      lis.forEach((li) => {
        li.style.display = '';
      });
    }
  });


  function createLI(text) {

    function createElement(elementName, property, value) {
      const element = document.createElement(elementName);
      element[property] = value;
      return element;
    }

    function appendToLI(elementName, property, value) {
      const element = createElement(elementName, property, value);
      li.appendChild(element);
      return element;
    }

    const li = createElement('li');
    appendToLI('span', 'textContent', text);
    appendToLI('label', 'textContent', 'Confirmed')
      .appendChild(createElement('input', 'type', 'checkbox'));
    appendToLI('button', 'textContent', 'edit');
    appendToLI('button', 'textContent', 'remove');

    return li;
  }

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const text = input.value;
    input.value = '';
    const li = createLI(text);
    invitedList_UL.appendChild(li);
  });

  invitedList_UL.addEventListener('change', e => {
    const checkbox = event.target;
    const checked = checkbox.checked;
    const listItem = checkbox.parentNode.parentNode;

    if (checked) {
      listItem.className = 'responded';
    } else {
      listItem.className = '';
    }
  });

  invitedList_UL.addEventListener('click', e => {
    if (e.target.tagName === 'BUTTON') {
      const button = e.target;
      const li = e.target.parentNode;
      const ul = li.parentNode;
      const action = button.textContent;

      const nameActions = {
        remove: () => {
          ul.removeChild(li);
        },
        edit: () => {
          const span  = li.firstElementChild;
          const input = document.createElement('input');
          input.type = 'text';
          input.value = span.textContent;
          li.insertBefore(input, span);
          li.removeChild(span);
          button.textContent = 'save';
        },
        save: () => {
          const span = document.createElement('span');
          const input = li.firstElementChild;
          span.textContent = input.value;
          li.insertBefore(span, input);
          li.removeChild(input);
          button.textContent = 'edit';
        }
      }
      
      // select and run action in button's name
      nameActions[action]();
    }
  });
});
