import React, { useEffect } from "react";

import HeroSlider from "../components/UI/HeroSlider";
import Helmet from "../components/Helmet/Helmet";

import { Container, Row, Col } from "reactstrap";
import FindCarForm from "../components/UI/FindBookForm";
import AboutSection from "../components/UI/AboutSection";
import ServicesList from "../components/UI/ServicesList";
import carData from "../assets/data/bookData";
import CarItem from "../components/UI/BookItem";
import BecomeDriverSection from "../components/UI/BecomeDriverSection";
import Testimonial from "../components/UI/Testimonial";

import BlogList from "../components/UI/BlogList";
import { useState} from "react";

import AOS from 'aos';

const Home = () => {

  useEffect(()=>{
    AOS.init({
      duration:2000,
      easing:'ease-in-out'
    })
  },[]);
  const [currentPage, setCurrentPage] = useState(1);
const [itemsPerPage, setItemsPerPage] = useState(10);

  return (
    <Helmet title="Home">
      {/* ============= hero section =========== */}
      <section className="p-0 hero__slider-section">
        <HeroSlider />

        
      </section>
      {/* <section>
      <div className="hero__form">
          <Container>
            <Row className="form__row">
              <Col lg="4" md="4">
                <div className="find__cars-left">
                  <h2>Find the book here</h2>
                </div>
              </Col>

              <Col lg="8" md="8" sm="12">
                <FindCarForm />
              </Col>
            </Row>
          </Container>
        </div>
      </section> */}
      {/* =========== about section ================ */}
      {/* <AboutSection /> */}
      {/* ========== services section ============ */}
      {/* <section>
        <Container>
          <Row>
            <Col lg="12" className="mb-5 text-center">
              <h6 className="section__subtitle">See our</h6>
              <h2 className="section__title">Popular Services</h2>
            </Col>

            <ServicesList />
          </Row>
        </Container>
      </section> */}
      {/* =========== car offer section ============= */}
      <section>
        <Container>
          <Row className="text-center mb-5" data-aos="fade-down">
            <Col lg="12">
              {/* <h6 className="section__subtitle">Come with</h6> */}
              <h2 className="section__title">Let's track down the book</h2>
            </Col>

            {carData.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage).map((item) => (
              <CarItem item={item} key={item.id} />
            ))}<div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '2rem'   }}  data-aos="fade-down">
            <button
              style={{ 
                padding: '0.5rem 1rem', 
                backgroundColor: '#fff', 
                color: '#000', 
                border: '1px solid #000', 
                borderRadius: '0.25rem',
                marginRight: '0.5rem',
                cursor: 'pointer',
              }}
              onClick={() => setCurrentPage((prevPage) => prevPage - 1)}
              disabled={currentPage === 1}
            >
              Prev
            </button>
            {Array.from({ length: Math.ceil(carData.length / itemsPerPage) }, (_, i) => (
              <button
                key={i}
                style={{ 
                  padding: '0.5rem 1rem', 
                  backgroundColor: currentPage === i + 1 ? '#000d6b' : '#fff', 
                  color: currentPage === i + 1 ? '#fff' : '#000', 
                  border: '1px solid #000', 
                  borderRadius: '0.25rem',
                  marginRight: '0.5rem',
                  cursor: 'pointer',
                }}
                onClick={() => setCurrentPage(i + 1)}
              >
                {i + 1}
              </button>
            ))}
            <button
              style={{ 
                padding: '0.5rem 1rem', 
                backgroundColor: '#fff', 
                color: '#000', 
                border: '1px solid #000', 
                borderRadius: '0.25rem',
                marginLeft: '0.5rem',
                cursor: 'pointer',
              }}
              onClick={() => setCurrentPage((prevPage) => prevPage + 1)}
              disabled={currentPage === Math.ceil(carData.length / itemsPerPage)}
            >
              Next
            </button>
          </div>
          
          </Row>
        </Container>
      </section>
      {/* =========== become a driver section ============ */}
      <BecomeDriverSection />

      {/* =========== testimonial section =========== */}
      <section>
        <Container>
          <Row  data-aos="fade-down">
            <Col lg="12" className="mb-4 text-center">
              <h6 className="section__subtitle">Explore</h6>
              <h2 className="section__title">Newest Arrivals</h2>
            </Col>

            <Testimonial />
          </Row>
        </Container>
      </section>

      <section style={{backgroundColor: "lightgray"}}>
        <Container>
          <Row  data-aos="fade-down">
            <Col lg="12" className="mb-4 text-center">
              <h6 className="section__subtitle">Explore</h6>
              <h2 className="section__title">Top Fictional Books</h2>
            </Col>

            <BlogList />
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Home;
