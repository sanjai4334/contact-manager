// src/components/ContactList.jsx
import React from 'react';
import ContactBar from './ContactBar';

const ContactList = ({ contacts, onEdit, onDelete }) => {
  return (
    <div className="container mt-3">
      <h2>Contact List</h2>
      {contacts.map((contact) => (
        <ContactBar 
          key={contact.id} 
          contact={contact} 
          onEdit={onEdit} 
          onDelete={onDelete} 
        />
      ))}
    </div>
  );
};

export default ContactList;
