import React from 'react';

function CallButton({ phoneNumber }) {
  const handleCallClick = () => {
    window.open(`tel:${phoneNumber}`, '_self');
  };

  return (
    <button onClick={handleCallClick}>
       {phoneNumber}
    </button>
  );
}

export default CallButton;
