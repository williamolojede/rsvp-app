// import all selected dom elements
import { mainDiv, form, invitedListUL } from './selectors';
import AddInvitee from './components/AddInvitee';
import ToggleResponded from './components/ToggleResponded';
import ResponseConfirmation from './components/ResponseConfirmation';
import InviteesActions from './components/InviteesActions';

const div = document.createElement('div');
const filterLabel = document.createElement('label');
const filterCheckbox = document.createElement('input');

filterLabel.textContent = "Hide those who haven't responded";
filterCheckbox.type = 'checkbox';
div.appendChild(filterLabel);
div.appendChild(filterCheckbox);
mainDiv.insertBefore(div, invitedListUL);

// submit event listner on form
form.addEventListener('submit', AddInvitee);

// change event listner on filterCheckbox
filterCheckbox.addEventListener('change', ToggleResponded);

// change event listner on invitedListUL's checkbox
invitedListUL.addEventListener('change', ResponseConfirmation);

// click events listner for actions on invittees
invitedListUL.addEventListener('click', InviteesActions);
