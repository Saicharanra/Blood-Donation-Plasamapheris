import React, { useState } from 'react';
import Slider from 'react-slick';
import { Row, Media, Col, Card, CardImg, CardText, CardBody, CardTitle, Button } from 'reactstrap';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import img1 from '../images/img1.png';
import gblood from "../images/gblood.jpeg";
import sblood from '../images/sblood.jpg';
import qblood from '../images/qblood.jpg';
import age from '../images/age.jpeg';
import dd from '../images/dd.jpg';
import RBC from '../images/RBC.jpg';
import heart from '../images/heart.jpg';
import DonationForm from './DonationFrom';
import FindDonar from './FindDonar';

const Home = () => {
  const [showForm, setShowForm] = useState(false);

  const toggleForm = () => {
    setShowForm(!showForm);
  };
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    justifyContent: 'center',
    cursore: "pointer"
  };

  return (
    <div>
      <Slider {...settings}>
        <div>
          <img src={img1} alt="img1.jpg" height="900px" width="100%" />
        </div>
        <div>
          <img src={gblood} alt="gblood" height="900px" width="100%" />
        </div>
        <div>
          <img src={sblood} alt="sblood" height="900px" width="100%" />
        </div>
        <div>
          <img src={qblood} alt='qblood' height="900px" width="100%" />
        </div>
      </Slider>
      <Row>
        <Col sm="5">
          <Button color="primary" onClick={toggleForm} style={{ marginBottom: "20px" }}>
            Become a Donor
          </Button>
          <DonationForm showForm={showForm} setShowForm={setShowForm} />
        </Col>
        <Col sm="5">
          <Button color="primary" onClick={toggleForm} style={{ marginBottom: "20px" }}>
            Find a Donor
          </Button>
          {showForm && <FindDonar/>} 
        </Col>
      </Row>
      <Row>
        <Col sm="5">
          <Card style={{ backgroundColor: "red" }}>
            <CardImg top src={dd} alt="eligible" style={{ height: '400px', objectFit: 'cover' }} />
            <CardBody>
              <CardTitle tag="h3">Am I Eligible to donate ?</CardTitle>
              <CardText style={{ fontSize: '20px' }}>
                The age of the donor must be above 18 years and below 65 years of age.
                He/she must have a haemoglobin count that is not less than 12.5 g/dl.
                The Weigh should not less than 45 kgs.
                One should have a normal body temperature at the time of donation.
              </CardText>
              <Button color="info">
                View details <i className="fal fa-angle-double-right"></i>
              </Button>
            </CardBody>
          </Card>
        </Col>
        <Col sm="5">
          <Card style={{ backgroundColor: "red" }}>
            <CardBody>
              <CardImg top src={RBC} alt="rbc" style={{ height: '400px', objectFit: 'cover' }} />
              <CardTitle tag="h3">Never donated blood before ?</CardTitle>
              <CardText style={{ fontSize: '20px' }}>
                The minimum donation frequency for whole blood donation in the United States is every 56 days.
                This donation frequency can vary among blood donation sites.
                At the Mayo Clinic Blood Donor Center in Rochester, Minnesota, for example, you can donate whole blood every 84 days.
                Talk with donor center staff about specific requirements.
              </CardText>
              <Button color="info">
                View details <i className="fal fa-angle-double-right"></i>
              </Button>
            </CardBody>
          </Card>
        </Col>
      </Row>
      <hr />
      <Row>
  <Col sm="5">
     <Media className="col-12 mt-2">
      <Media body className="mr-5 col-md-8 order-last order-md-first">
        <Media heading tag="h2">
          Our Mission <span className="text-muted">Saving Lives</span>
        </Media>
        <p style={{ fontSize: '20px', textAlign: 'right' }}>
          <aside>
            Blood Donation is a natural process that enables Individuals to help others. The first and foremost advantage of donating blood is the exalted feeling of saving someone's life. Such blood donation can save lives. forblooddonor.com is a platform exclusively for volunteer blood donors and receivers. It aims to connect patients in need of blood with willing donors.
          </aside>
        </p>
      </Media>
      <Media left middle className="col-md-4 order-first order-md-last">
        <Media object src={heart} alt="heart" style={{ height: '400px' }} />
      </Media>
    </Media>
  </Col>
</Row>
      <hr />
        <Col sm="5">
          <Media className="col-12 mt-2">
            <Media left middle className="ml-5 col-md-4">
              <Media object src={age} alt="drops" style={{ height: '400px', objectFit: 'cover' }} />
            </Media>
            <Media body className="col-md-8">
              <Media heading tag="h2">
                Convenient and Hassle free process{" "}
                <span className="text-muted">
                  For donors as well as receivers .
                </span>
              </Media>
              <p style={{ fontSize: "20px" }}>
                We aim to make the best use of contemporary technologies in
                delivering a promising web portal to bring together blood donors
                to fulfill all the requests in our country. Join us make a
                difference in someone's life and turn strangers into friends. Each
                drop of blood counts. We all come together as a team to help you
                achieve that
              </p>
            </Media>
          </Media>
        </Col>
      <hr />
    </div>
  );
}

export default Home;
