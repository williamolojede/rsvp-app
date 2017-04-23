import { invitedListUL } from './../selectors';

function ToggleResponded(e) {
  const isChecked = e.target.checked;
  // converts htmlcollection to an iterable array
  const lis = Array.from(invitedListUL.children);
  if (isChecked) {
    lis.forEach((li) => {
      if (li.className === 'responded') {
        li.style.display = ''; // eslint-disable-line no-param-reassign
      } else {
        li.style.display = 'none'; // eslint-disable-line no-param-reassign
      }
    });
  } else {
    lis.forEach((li) => {
      li.style.display = ''; // eslint-disable-line no-param-reassign
    });
  }
}

export default ToggleResponded;
