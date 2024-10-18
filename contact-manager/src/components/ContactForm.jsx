import React, { useState } from 'react';

const ContactForm = ({ onSubmit, existingContact }) => {
  const [name, setName] = useState(existingContact ? existingContact.name : '');
  const [phone, setPhone] = useState(existingContact ? existingContact.phone : '');
  const [email, setEmail] = useState(existingContact ? existingContact.email : '');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ name, phone, email });
    setName('');
    setPhone('');
    setEmail('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label className="form-label">Name</label>
        <input
          type="text"
          className="form-control"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Phone</label>
        <input
          type="text"
          className="form-control"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Email</label>
        <input
          type="email"
          className="form-control"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <button type="submit" className="btn btn-primary">Save Contact</button>
    </form>
  );
};

export default ContactForm;
