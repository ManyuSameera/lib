// import React from "react";
// import { Link } from "react-router-dom";
import { Container, Row, Col, Form, FormGroup, Input } from "reactstrap";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/CommonSection";
import '../styles/contact.css'

// import "../styles/contact.css";

// const socialLinks = [
//   {
//     url: "#",
//     icon: "ri-facebook-line",
//   },
//   {
//     url: "#",
//     icon: "ri-instagram-line",
//   },
//   {
//     url: "#",
//     icon: "ri-linkedin-line",
//   },
//   {
//     url: "#",
//     icon: "ri-twitter-line",
//   },
// ];

// const Contact = () => {
//   return (
//     <Helmet title="Contact">
//       <CommonSection title="Contact" />
//       <section>
//         <Container>
//           <Row>
//             <Col lg="7" md="7">
//               <h6 className="fw-bold mb-4">Get In Touch</h6>

//               <Form>
//                 <FormGroup className="contact__form">
//                   <Input placeholder="Your Name" type="text" />
//                 </FormGroup>
//                 <FormGroup className="contact__form">
//                   <Input placeholder="Email" type="email" />
//                 </FormGroup>
//                 <FormGroup className="contact__form">
//                   <textarea
//                     rows="5"
//                     placeholder="Message"
//                     className="textarea"
//                   ></textarea>
//                 </FormGroup>

//                 <button className=" contact__btn" type="submit">
//                   Send Message
//                 </button>
//               </Form>
//             </Col>

//             <Col lg="5" md="5">
//               <div className="contact__info">
//                 <h6 className="fw-bold">Contact Information</h6>
//                 <p className="section__description mb-0">
//                   123 ZindaBazar, Sylhet, Bangladesh
//                 </p>
//                 <div className=" d-flex align-items-center gap-2">
//                   <h6 className="fs-6 mb-0">Phone:</h6>
//                   <p className="section__description mb-0">+88683896366</p>
//                 </div>

//                 <div className=" d-flex align-items-center gap-2">
//                   <h6 className="mb-0 fs-6">Email:</h6>
//                   <p className="section__description mb-0">example@gmail.com</p>
//                 </div>

//                 <h6 className="fw-bold mt-4">Follow Us</h6>

//                 <div className=" d-flex align-items-center gap-4 mt-3">
//                   {socialLinks.map((item, index) => (
//                     <Link
//                       to={item.url}
//                       key={index}
//                       className="social__link-icon"
//                     >
//                       <i class={item.icon}></i>
//                     </Link>
//                   ))}
//                 </div>
//               </div>
//             </Col>
//           </Row>
//         </Container>
//       </section>
//     </Helmet>
//   );
// };

// export default Contact;
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
// import styled from "styled-components";



const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_xf7xv4u",
        "template_ahvu3pp",
        form.current,
        "eHmW_XodFjp6QH9RC"
      )
      .then(() => {
        alert('Mail sent successfully!');
        e.target.reset();
      })
      .catch(() => {
        alert('Oops! Something went wrong.');
      });
  };

  return (
    //  <StyledContactForm>
    <>
    {/* <Helmet title="Contact"> */}
       <CommonSection title="Contact" />
       {/* <section> */}
         {/* <Container className="contact-wrapper"> */}
           {/* <Row> */}
             {/* <Col lg="7" md="7"> */}
      <div className="form-wrapper">
      <h2 className="fw-bold mb-4 contact-title">Get In Touch</h2>
      <Form>
        <form ref={form} onSubmit={sendEmail} className="contact-form">
          <FormGroup className="contact-from-item">
          <label>Name</label>
          <input className="contact-input" type="text" name="user_name" />
          </FormGroup>

          <FormGroup className="contact-from-item">
          <label>Email</label>
          <input className="contact-input" type="email" name="user_email" />
          </FormGroup>

          <FormGroup className="contact-from-item">
          <label className="textarea-label">Message</label>
          <textarea name="message" className="contact-input" />
          </FormGroup>

          <FormGroup className="contact-from-item">
          <button className=" contact__btn" type="submit" >Send</button>
          </FormGroup>
        </form>
      </Form>

      </div>
      {/* </Col> */}
           {/* </Row> */}
        {/* </Container> */}
      {/* </section> */}
     {/* </Helmet> */}
      </>
    //  {/* </StyledContactForm> */}
  );
};

export default Contact;


 