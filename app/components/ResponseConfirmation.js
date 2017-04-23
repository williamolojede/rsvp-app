function RespnseConfirmation() {
  const checkbox = event.target;
  const checked = checkbox.checked;
  const listItem = checkbox.parentNode.parentNode;

  if (checked) {
    checkbox.parentNode.firstChild.textContent = 'Confirmed';
    listItem.className = 'responded';
  } else {
    listItem.className = '';
    checkbox.parentNode.firstChild.textContent = 'Confirm';
  }
}

export default RespnseConfirmation;
