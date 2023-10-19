import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import './payment.css'
import { residencies } from '../../data';

const Payment = () => {
  const [cardNumber, setCardNumber] = useState('');
  const [expiry, setExpiry] = useState('');
  const [cvv, setCVV] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');

  const {id} = useParams()
  // const {idn} = useRoutes()

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate payment processing
    setTimeout(() => {
      setIsSubmitting(false);
      setSuccessMessage('Payment successful!');
    }, 2000);
  };

  return (
    <div className="Payment">
      <div>
        {
          residencies.map((residence, index) => (
          <div>
            {residence.id === parseInt(id) ?
              residence.title
             : ''}
          </div>
        ))}
      </div>
      <form onSubmit={handleSubmit}>
        <label>
          Card Number: 
          </label>
          <input
            type="number"
            value={cardNumber}
            onChange={(e) => setCardNumber(e.target.value)}
            required
          />
        
        <label>
          Expiry Date:
          </label>
          <input className='date'
            type="date"
            value={expiry}
            onChange={(e) => setExpiry(e.target.value)}
            required
          />
        
        <label>
          CVV:
          </label>
          <input
            type="number"
            value={cvv}
            onChange={(e) => setCVV(e.target.value)}
            required
          />
        
        <button className='btn' type="submit" disabled={isSubmitting}>
          {isSubmitting ? 'Processing...' : 'Pay Now'}
        </button>
        {successMessage && <div className="SuccessMessage">{successMessage}</div>}
      </form>
    </div>
  );
};

export default Payment;
