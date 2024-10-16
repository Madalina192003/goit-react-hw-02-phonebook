import React from 'react';
import ContactListItem from './ContactListItem';

const ContactList = ({ contacts, deleteContact }) => (
  <ul>
    {contacts.map(({ id, name, number }) => (
      <ContactListItem
        key={id}
        id={id}
        name={name}
        number={number}
        deleteContact={deleteContact}
      />
    ))}
  </ul>
);

export default ContactList;
