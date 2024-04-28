import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import './Donate.css';
import sou from './../../assets/smile.png';
import Cart from '../Cart/Cart';

const Donate = () => {
  const [formData, setFormData] = useState({
    noun: '',
    email: '',
    password: '',
    address: '',
    city: '',
    donation: '',
    quantity: '',
    image: null,
  });

  const [submittedData, setSubmittedData] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedData([...submittedData, formData]); // Ajouter les données soumises au tableau
  };

  return (
    <section id='donate'>
      <div className='container4'>
        <div className='row'>
          <div className='col-md-0'>
            <h1>Help To Save</h1>
            <p>Join us in making a difference! At Eat Together, we believe in the power of community and compassion. By lending a helping hand to those in need, we not only nourish their bodies but also feed their spirits. Every act of kindness, no matter how small, has the potential to make a significant impact in someone's life. Together, let's spread love, hope, and sustenance one meal at a time. Join our mission today and be a part of something truly meaningful.</p>
            <form onSubmit={handleSubmit} encType="multipart/form-data" className='ff'>
              <input name="noun" value={formData.noun} onChange={handleChange} placeholder="noun of the establishment" /><br />
              
              <input name="address" value={formData.address} onChange={handleChange} placeholder="Address" /><br />
              <input name="city" value={formData.city} onChange={handleChange} placeholder="City" /><br />
              <input name="donation" value={formData.donation} onChange={handleChange} placeholder="Donation" /><br />
              <input name="quantity" value={formData.quantity} onChange={handleChange} placeholder="Quantity" /><br />
              <input name="Expiration date" value={formData.quantity} onChange={handleChange} placeholder="Expiration date" /><br />
              <Button variant="primary" type="submit">Submit</Button>
            </form>
          </div>
        </div>
      </div>
      {submittedData.length > 0 && <Cart formData={submittedData} />} {/* Passer le tableau de données soumises au composant Cart */}
    </section>
  );
}

export default Donate;
