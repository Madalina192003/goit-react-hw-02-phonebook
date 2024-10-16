import React from 'react';

const ContactListItem = ({ id, name, number, deleteContact }) => (
  <li>
    {name}: {number}
    <button onClick={() => deleteContact(id)}>Șterge</button>
  </li>
);

export default ContactListItem;
