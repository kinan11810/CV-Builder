import React from 'react';
import PaymentButton from '../../components/PaymentButton';

const PaymentPage = () => {
  return (
    <div style={{ padding: '40px', textAlign: 'center' }}>
      <h1>Final Step - Payment</h1>
      <p>Please complete the payment to download your CV.</p>

      <div style={{ marginTop: '30px' }}>
        <PaymentButton item="cv-download" price={10} />
      </div>
    </div>
  );
};

export default PaymentPage;
