import { input, invitedListUL, warningP } from './../selectors';
import createLI from './CreateLI';

// invitee list
const invitees = [];

function AddInvitee(e) {
  e.preventDefault();
  // removes class each time there's submission,
  // so that on each theres a new warning shown.
  warningP.classList.remove('active');

  // removes whitespace from both sides of user input
  const text = input.value.trim().toUpperCase();

  // checks if user entered whitespaces
  if (text === '') {
    // activate warining message
    if (!warningP.classList.contains('active')) {
      warningP.textContent = 'Please enter an invitee\'s name.';
      warningP.classList.add('active');
    }

  // check if the invitee is already on the list, uses es7 .contains
  } else if (invitees.includes(text)) {
    if (!warningP.classList.contains('active')) {
      warningP.textContent = `${text} already exist on your list.`;
      warningP.classList.add('active');
      input.value = '';
    }
  } else {
    // used to store invitees name for form validation
    invitees.push(text);
    input.value = '';
    const li = createLI(text);
    invitedListUL.appendChild(li);
  }
}

export default AddInvitee;
