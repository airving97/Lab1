import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Contact() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    contactNumber: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Captured Form Data:", formData);
    alert(`Thank you, ${formData.firstName}! Your message has been received.`);
    navigate('/');
  };

  return (
    <div style={{ maxWidth: '600px', margin: '0 auto' }}>
      <h1>Contact Me</h1>
      
      <div style={{ background: '#f4f4f4', padding: '1rem', borderRadius: '6px', marginBottom: '2rem' }}>
        <p style={{ margin: '0.25rem 0' }}><strong>Email:</strong> airving@my.centennialcollege.ca</p>
        <p style={{ margin: '0.25rem 0' }}><strong>Location:</strong> Toronto, ON</p>
      </div>

      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <input 
          type="text" 
          name="firstName" 
          placeholder="First Name" 
          value={formData.firstName} 
          onChange={handleChange} 
          required 
          style={{ padding: '0.5rem', fontSize: '1rem' }}
        />
        <input 
          type="text" 
          name="lastName" 
          placeholder="Last Name" 
          value={formData.lastName} 
          onChange={handleChange} 
          required 
          style={{ padding: '0.5rem', fontSize: '1rem' }}
        />
        <input 
          type="tel" 
          name="contactNumber" 
          placeholder="Contact Number" 
          value={formData.contactNumber} 
          onChange={handleChange} 
          required 
          style={{ padding: '0.5rem', fontSize: '1rem' }}
        />
        <input 
          type="email" 
          name="email" 
          placeholder="Email Address" 
          value={formData.email} 
          onChange={handleChange} 
          required 
          style={{ padding: '0.5rem', fontSize: '1rem' }}
        />
        <textarea 
          name="message" 
          placeholder="Your Message" 
          rows="5" 
          value={formData.message} 
          onChange={handleChange} 
          required 
          style={{ padding: '0.5rem', fontSize: '1rem' }}
        />
        <button 
          type="submit" 
          style={{ padding: '0.75rem', background: '#4A90E2', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer', fontSize: '1rem' }}
        >
          Send Message
        </button>
      </form>
    </div>
  );
}