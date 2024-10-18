// src/components/TextMessageModal.jsx
import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

const TextMessageModal = ({ contact, show, onHide }) => {
  const [message, setMessage] = useState('');

  const handleSendMessage = () => {
    alert(`Message sent to ${contact.name}: "${message}"`);
    setMessage(''); // Clear the message input
    onHide(); // Close the modal
  };

  return (
    <Modal show={show} onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title>Send Text Message</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>To: {contact.name}</p>
        <textarea
          rows="4"
          className="form-control"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Type your message here..."
        />
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onHide}>
          Close
        </Button>
        <Button variant="primary" onClick={handleSendMessage}>
          Send Message
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default TextMessageModal;
