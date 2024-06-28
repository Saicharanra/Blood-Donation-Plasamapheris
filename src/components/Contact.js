import React, { useState } from 'react';
import Contact from './Contact.css'
const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [mapUrl, setMapUrl] = useState('https://www.google.com/maps/d/embed?mid=1l5snpD-ZltEr_LIcAe2AHswTCM0&hl=en&ll=17.412348675805067,78.4631&z=13');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ name, email, message, mapUrl });
    alert("From Submitted successfully")
    setName('');
    setEmail('');
    setMessage('');
  };
  return (
    <div className="container">
      <h2 className="title">Contact Us</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name" className="label">Name:</label>
          <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} className="input-field" required/>
        </div>
        <div className="form-group">
          <label htmlFor="email" className="label">Email:</label>
          <input type="email"id="email"value={email} onChange={(e) => setEmail(e.target.value)} className="input-field" required/>
        </div>
        <div className="form-group">
          <label htmlFor="message" className="label">Message:</label>
          <textarea id="message" value={message} onChange={(e) => setMessage(e.target.value)} className="input-field textarea-field" required>
          </textarea>
        </div>
        <button type="submit" className="button">Submit</button>
      </form>
      {mapUrl && (
        <div className="map-container">
          <h3 className="title">Location</h3>
          <iframe title="Map" className="map" src={mapUrl} allowFullScreen></iframe>
        </div>
      )}
    </div>
  );
};
export default ContactForm;