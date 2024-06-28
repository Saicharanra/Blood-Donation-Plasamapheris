import React, { useState } from 'react';

const FindDonor = () => {
  const [bloodType, setBloodType] = useState('');
  const [formData, setFormData] = useState({
    state: '',
    contact: ''
  });

  const handleBloodTypeChange = (e) => {
    setBloodType(e.target.value);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("BloodType: ", bloodType);
    console.log("State: ", formData.state);
    setBloodType('');
    setFormData({ state: ''});
  };

  const getCityOptions = () => {
    const { state } = formData;
    switch (state) {
      case "Andhra Pradesh":
        return ['Guntur', 'Anantapur', 'Krishna', 'Srikakulam', 'Visakhapatnam'];
      case 'Telangana':
        return ['Bhupalpally', 'Warangal', 'Khammam', 'Medak', 'Sangareddy'];
      case 'Kerala':
        return ['Thiruvananthapuram', 'Kollam', 'Alappuzha', 'Kottayam', 'Ernakulam'];
      case 'Tamil Nadu':
        return ['Chengalpattu', 'Coimbatore', 'Dharmapuri', 'Erode', 'Karur', 'Nagapattinam'];
      case 'Delhi':
        return ['Central Delhi', 'North Delhi', 'South Delhi', 'North Delhi', 'Shahdara'];
      default:
        return [];
    }
  };

  return (
    <div style={{padding: "20px", border: "1px solid black", borderRadius: '5px', margin: '20px auto', maxWidth: "400px" }}>
    <div className="find-donor-container" >
      <h2 style={{ textAlign: "center" }}>Find a Donor</h2>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: "20px" }}>
        <label htmlFor='bloodType'>Blood Type:</label><br/>
        <select value={bloodType} onChange={handleBloodTypeChange}>
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
          <label htmlFor="state">State:</label><br/>
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
        <button type="submit" style={{backgroundColor:"blue",color:"white",fontSize:"20px"}}>Submit</button>
      </form>
    </div>
    </div>
  );
};

export default FindDonor;
