import React from 'react';
import QRCode from 'qrcode.react';

const TestQRCode = () => {
  return (
    <div>
      <h2>Test QR Code</h2>
      <QRCode 
        value="https://example.com" 
        size={256} 
      />
    </div>
  );
};

export default TestQRCode;
    