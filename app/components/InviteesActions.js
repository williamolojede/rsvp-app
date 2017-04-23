function InviteesActions(e) {
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
        const span = li.firstElementChild;
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
      },
    };

    // select and run action in button's name
    nameActions[action]();
  }
}

export default InviteesActions;
