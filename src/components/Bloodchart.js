import React from 'react';
import bloodBg from '../images/bloodBg.jpg'; 
import bloodchart from '../images/bloodchart.jpeg';

function App() {
  const backgroundStyle = {
    backgroundImage: `url(${bloodBg})`, 
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '100vh',
  };
  const chartStyle = {
    width: "500px",
    height: "400px",
  };
  const headingStyle = {
    color: "white",
    textAlign: "center",
    textDecoration: "underline",
  };
  const textStyle = {
    color: "white",
    fontSize: "20px",
    textAlign: "center",
  };
  return (
    <div style={backgroundStyle}>
      <div>
        <img src={bloodchart} alt="bloodchart" style={chartStyle}/>
        <h1 style={headingStyle}>The Blood Chart of Different Blood Groups</h1>
        <p style={textStyle}>
          Group AB can donate to other AB's but can receive from all others.<br/>
          Group B can donate red blood cells to B's and AB's.<br/>
          Group A can donate red blood cells to A's and AB's.<br/>
          Group O can donate red blood cells to anybody.<br/>
          AB positive: You can receive any blood type.<br/>
          AB negative: You can receive blood that's AB negative, A negative, B negative or O negative.<br/>
          O positive: You can receive blood that's O positive or O negative.<br/>
          O negative: You can only receive blood that's O negative.<br/>
          The 4 blood groups are A, B, AB and O.<br/>
          Each of these will be either Rh-positive or Rh-negative.<br/> 
          In an emergency, a transfusion of O negative red blood cells can be given to anybody, but it is better to match the exact blood group to avoid serious reactions.
        </p>
      </div>
    </div>
  );
}

export default App;

