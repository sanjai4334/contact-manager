import React from 'react';
import ContactBar from './ContactBar';

const ContactList = ({ contacts, onEdit, onDelete }) => {
  const sortedContacts = [...contacts].sort((a, b) => a.name.localeCompare(b.name));

  return (
    <div className="container mt-3">
      <h2>Contact List</h2>
      {sortedContacts.map((contact) => (
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
