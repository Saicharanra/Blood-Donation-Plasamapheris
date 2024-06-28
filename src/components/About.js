import React from 'react'
import {Container, Media, Row } from "reactstrap";
import binoculars from "../images/binoculars.png";
import ourgoal from "../images/ourgoal.png"
const About = () => {
  return (
    <div>
        <Container fluid>
          <h1 style={{backgroundColor:"#ADFF2F",textAlign:"center",height:"50px"}}>About Us</h1>
        </Container>
        <hr style={{width:"250px", margin:"auto",borderWidth:"5px"}} className="header-line" />
      <div className="row row-context text-center col-md-10">
        <p style={{fontFamily:"Tiems New Roman",fontSize:"30px"}}>
         Giving the "right" type of blood donation-based on your blood type and patient needs-helps <br/>
         ensure the best use of your valuable contribution.Here are some things to consider when <br/>
         determining how you can have the most impact<br/>
          Through this website, we seek donors who are willing to donate blood,
          as well as provide the timeliest support to those in frantic need of
          it.
        </p>
      </div>
      <Row style={{ backgroundColor: "#ccccb3" }}>
        <Media left>
          <Media>
            <Media object src={binoculars} alt="Our Vision" />
          </Media>
          <Media body>
            <Media style={{color:"green",fontSize:"50px"}}>
              Our Vision
            </Media>
            < p style={{fontSize:"25px", textAlign:"justify"}}>
              Bringing Dignity to Life of people by making Quality blood and
              blood products available when needed.Provide a global platform to celebrate and thank individuals who
              donate blood voluntarily, for altruistic reasons and without any
              monetary reward.
            </p>
          </Media>
        </Media>
      </Row>
      <hr style={{border:"2px, solid, #000766",width:"95%"}}/>
      <Row style={{ backgroundColor: "#ccccb3" }}>
        <Media className="col-12 mt-2">
          <Media body className="ml-5 text-center col-md-8">
            <Media style={{color:"green",fontSize:"50px",textAlign:"center"}}>
              Our Goal
            </Media>
            <p style={{fontSize:"25px", textAlign:"center"}}>
              This website aims at maintaining all the information pertaining to
              blood donors, different blood groups and help receivers manage in
              a better way.
              To provide transparency in this field, make the process of
              obtaining blood which is hassle-free and corruption-free and make
              the system of blood donating and receiving effective.
            </p>
          </Media>
          <Media right middle col-md-4>
            <Media object src={ourgoal} alt="Our Goal" />
          </Media>
        </Media>
      </Row>
      </div>
  )
}

export default About