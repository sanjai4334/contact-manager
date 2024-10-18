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
    <div style={{ position: 'relative', minHeight: '100vh' }}>
        <SearchBar searchTerm={searchTerm} onSearchChange={setSearchTerm} />
      <ContactList contacts={filteredContacts} onEdit={handleEditContact} onDelete={handleDeleteContact} />
      {showForm && (
        <div className="popup-overlay" style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          zIndex: 1000
        }}>
          <div className="popup-content" style={{
            backgroundColor: 'white',
            padding: '20px',
            borderRadius: '5px',
            boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)'
          }}>
            <ContactForm onSubmit={handleAddContact} existingContact={editContact} />
            <button onClick={() => setShowForm(false)} style={{
              marginTop: '10px',
              padding: '5px 10px',
              backgroundColor: '#f0f0f0',
              border: 'none',
              borderRadius: '3px',
              cursor: 'pointer'
            }}>Close</button>
          </div>
        </div>
      )}
      <button 
        className="btn btn-primary rounded-circle" 
        onClick={() => setShowForm(true)}
        style={{
          position: 'fixed',
          bottom: '20px',
          right: '20px',
          width: '60px',
          height: '60px',
          fontSize: '24px'
        }}
      >
        +
      </button>
    </div>
  );
};

export default Home;
