import React from 'react';

const Cart = ({ formData }) => {
  if (!formData || formData.length === 0) {
    return <div>No data available</div>;
  }

  return (
    <div>
      <h2>Cart</h2>
      {formData.map((data, index) => (
        <div key={index}>
          <p>Noun: {data.noun}</p>
          <p>Address: {data.address}</p>
          <p>City: {data.city}</p>
          <p>Donation: {data.donation}</p>
          <p>Quantity: {data.quantity}</p>
          {/* Ajoutez ici d'autres champs du formulaire si nécessaire */}
          <hr />
        </div>
      ))}
    </div>
  );
}

export default Cart;
