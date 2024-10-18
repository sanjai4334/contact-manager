import React, { useState } from "react";
import { FaPhone, FaEnvelope, FaEdit, FaTrash, FaQrcode, FaFileDownload } from "react-icons/fa";
import 'bootstrap/dist/css/bootstrap.min.css';

const ContactBar = ({ contact, onEdit, onDelete }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [showQRCode, setShowQRCode] = useState(false);

  // Toggle expanded view
  const toggleExpanded = () => {
    setIsExpanded((prev) => !prev);
  };

  // Generate initials for fallback profile picture
  const getInitials = (name) => {
    const [firstName, lastName] = name.split(" ");
    return `${firstName[0].toUpperCase()}${lastName ? lastName[0].toUpperCase() : ''}`;
  };

  // Use a placeholder or initials if no profile picture
  const profilePic = contact.profilePic ? (
    <img
      src={contact.profilePic}
      alt="Profile"
      className="rounded-circle me-2"
      style={{ width: '50px', height: '50px', objectFit: 'cover' }}
    />
  ) : (
    <div className="rounded-circle bg-secondary text-white d-flex align-items-center justify-content-center me-2" style={{ width: '50px', height: '50px' }}>
      {getInitials(contact.name)}
    </div>
  );

  // vCard Generation
  const downloadVCard = (e) => {
    e.stopPropagation();
    const vCardData = `
BEGIN:VCARD
VERSION:3.0
FN:${contact.name}
TEL:${contact.phone}
EMAIL:${contact.email}
END:VCARD
    `;

    const blob = new Blob([vCardData], { type: "text/vcard" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = `${contact.name}.vcf`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Create QR data with more contact info
  const qrData = `BEGIN:VCARD\nVERSION:3.0\nFN:${contact.name}\nTEL:${contact.phone}\nEMAIL:${contact.email}\nEND:VCARD`;

  return (
    <div className="card mb-3">
      <div className="card-body p-2 d-flex align-items-center" onClick={toggleExpanded} style={{ cursor: 'pointer' }}>
        {/* Profile Picture and Name Only */}
        {profilePic}
        <h5 className="mb-0 flex-grow-1">{contact.name}</h5>
      </div>

      {/* Expanded Details (only shown when expanded) */}
      {isExpanded && (
        <div className="card-body pt-0">
          <p className="card-text mb-1"><FaPhone className="me-2" /> {contact.phone}</p>
          <p className="card-text mb-1"><FaEnvelope className="me-2" /> {contact.email}</p>
          <div className="d-flex justify-content-between mt-2">
            <FaEdit className="icon me-3" onClick={(e) => { e.stopPropagation(); onEdit(contact); }} />
            <FaTrash className="icon" onClick={(e) => { e.stopPropagation(); onDelete(contact.id); }} />
            <FaQrcode className="icon me-3" onClick={(e) => { e.stopPropagation(); setShowQRCode((prev) => !prev); }} />
            <FaFileDownload className="icon" onClick={downloadVCard} />
          </div>

          {/* QR Code (shown only if QR icon is clicked) */}
          {showQRCode && (
            <div className="mt-3 text-center">
              <h6>QR Code:</h6>
              <img
                src={`https://api.qrserver.com/v1/create-qr-code/?data=${encodeURIComponent(qrData)}&size=256x256`}
                alt="QR Code"
                className="img-fluid"
              />
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default ContactBar;
