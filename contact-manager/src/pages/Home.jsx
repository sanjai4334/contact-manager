// src/pages/Home.jsx
import React, { useState } from 'react';
import ContactList from '../components/ContactList';
import ContactForm from '../components/ContactForm';
import SearchBar from '../components/SearchBar';

const Home = () => {
  const [contacts, setContacts] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [editContact, setEditContact] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  const handleAddContact = (newContact) => {
    setContacts([...contacts, { ...newContact, id: Date.now() }]);
    setShowForm(false);
  };

  const handleEditContact = (contact) => {
    setEditContact(contact);
    setShowForm(true);
  };

  const handleDeleteContact = (id) => {
    const updatedContacts = contacts.filter(contact => contact.id !== id);
    setContacts(updatedContacts);
  };

  // Filter contacts based on search term
  const filteredContacts = contacts.filter(contact => 
    contact.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <button className="btn btn-primary mb-3" onClick={() => setShowForm(true)}>
        Add Contact
      </button>
      {showForm && (
        <ContactForm onSubmit={handleAddContact} existingContact={editContact} />
      )}
      <SearchBar searchTerm={searchTerm} onSearchChange={setSearchTerm} />
      <ContactList contacts={filteredContacts} onEdit={handleEditContact} onDelete={handleDeleteContact} />
    </div>
  );
};

export default Home;
