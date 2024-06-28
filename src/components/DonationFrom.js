import React, { useState } from 'react';
const DonationForm = ({ showForm, setShowForm }) => {
  const [formData, setFormData] = useState({
    name: '', bloodType: '', contact: '', state: '',  city: '' 
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,[name]: value
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    setFormData({
      name: '', bloodType: '', contact: '',state: '', city: ''  
    });
    setShowForm(false);
  };
  const getCityOptions = () => {
    const { state } = formData;
    switch (state) {
      case "Andhra Pradesh":
        return ['Guntur','Anantapur','Krishna','Srikakulam','Visakhapatnam'];
      case 'Telangana':
        return ['Bhupalpally','Warangal','Khammam','Medak','Sangareddy'];
      case 'Kerala':
        return ['Thiruvananthapuram', 'Kollam', 'Alappuzha','Kottayam','Ernakulam'];
      case 'Tamil Nadu':
        return [ 'Chengalpattu', 'Coimbatore', 'Dharmapuri', 'Erode', 'Karur','Nagapattinam'];
      case 'Delhi':
        return ['Central Delhi','North Delhi','South Delhi','North Delhi','Shahdara'];
      default:
        return [];
    }
  };
  return (
    <div style={{ display: showForm ? 'block' : 'none', padding: "20px", border: "1px solid black", borderRadius: '5px', margin: '20px auto', maxWidth: "400px" }}>
      <h2 style={{ textAlign: "center" }}>Donor Registration Form</h2>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: "20px" }}>
          <label htmlFor="name" style={{ display: "block", marginBottom: "5px",fontSize:"20px"}}>Name:</label>
          <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
        </div>
        <div style={{ marginBottom: "20px" }}>
          <label htmlFor="bloodType" style={{ display: "block", marginBottom: "5px",fontSize:"20px"}}>Blood Type:</label>
          <select id="bloodType" name="bloodType" value={formData.bloodType} onChange={handleChange} required>
            <option value="">Select Blood Type</option>
            <option value="A+">A+</option>
            <option value="A-">A-</option>
            <option value="B+">B+</option>
            <option value="B-">B-</option>
            <option value="AB+">AB+</option>
            <option value="AB-">AB-</option>
            <option value="O+">O+</option>
            <option value="O-">O-</option>
          </select>
        </div>
        <div style={{ marginBottom: "20px" }}>
          <label htmlFor="contact" style={{ display: "block", marginBottom: "5px",fontSize:"20px" }}>Contact:</label>
          <input type="text" id="contact" name="contact" value={formData.contact} onChange={handleChange} required />
        </div>
        <div style={{ marginBottom: "20px" }}>
          <label htmlFor="state" style={{ display: "block", marginBottom: "5px",fontSize:"20px" }}>State:</label>
          <select id="state" name="state" value={formData.state} onChange={handleChange} required>
            <option value="">Select State</option>
            <option value="Andhra Pradesh">Andhra Pradesh</option>
            <option value="Telangana">Telangana</option>
            <option value="Kerala">Kerala</option>
            <option value="Tamil Nadu">Tamil Nadu</option>
            <option value="Delhi">Delhi</option>
          </select>
        </div>
        <div style={{ marginBottom: "20px" }}>
          <label htmlFor="city" style={{ display: "block", marginBottom: "5px",fontSize:"20px"}}>City:</label>
          <select id="city" name="city" value={formData.city} onChange={handleChange} required>
            <option value="">Select City</option>
            {getCityOptions().map((city, index) => (
              <option key={index} value={city}>{city}</option>
            ))}
          </select>
        </div>
        <button type="submit" style={{backgroundColor:"Blue",color:"white",fontSize:"20px"}}>Submit</button>
      </form>
    </div>
  );
};
export default DonationForm;