import React from 'react';

interface Props {
  item: string;
  price: number;
}

const PaymentButton = ({ item, price }: Props) => {
  const handleClick = () => {
    alert(`Payment for ${item} - $${price}`);
  };

  return (
    <button
      onClick={handleClick}
      style={{
        padding: '8px 16px',
        backgroundColor: '#4CAF50',
        color: 'white',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer'
      }}
    >
      Pay ${price}
    </button>
  );
};

export default PaymentButton;
