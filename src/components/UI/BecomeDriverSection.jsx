// import React from "react";
import "../../styles/become-driver.css";
import { Container, Row, Col } from "reactstrap";
import driverImg from "../../assets/all-images/pngegg (6).png";
import { Link, NavLink } from "react-router-dom";
import React, { useRef } from "react";
import {auth} from "../../config/firebase";
import {useAuthState} from "react-firebase-hooks/auth";
import { signOut } from 'firebase/auth';
// import { Container, Row, Col,NavItem } from "reactstrap";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import {provider} from "../../config/firebase";
import {useState} from "react"

const BecomeDriverSection = () => {
  const [userStatus, setUserStatus] = useState(false);

  const menuRef = useRef(null);
  const Navigate=useNavigate();
  const toggleMenu = () => menuRef.current.classList.toggle("menu__active");
  const [user] = useAuthState(auth);
  console.log(auth);
  console.log(user?.displayName);
  const signOut1=async()=>
  {
   await signOut(auth)
   console.log("su")
  }

  const login=async()=>{
    setUserStatus(!userStatus);
    console.log("test");
   const result=await (signInWithPopup(auth, provider))
//   .then((result) => {
console.log(result);
Navigate('/');}

  return (
    <section className="become__driver">
      <Container>
        <Row>
          <Col lg="6" md="6" sm="12" className="become__driver-img">
            <img src={driverImg} alt="" className="w-50 h-75" />
          </Col>

          <Col lg="6" md="6" sm="12">
            <h2 className="section__title become__driver-title">
              Being a ReaderDigest <br></br>
              Join us!
            </h2>


            <NavLink to=""  onClick={login}
                    
                    className={(navClass) =>
                      navClass.isActive ? "nav__active nav__item" : "nav__item"
                    }
                    
                  >{userStatus ? "SignOut" : "login"}
                    </NavLink>:
                    <NavLink to=""  onClick={signOut1}
                    
                    className={(navClass) =>
                      navClass.isActive ? "nav__active nav__item" : "nav__item"
                    }
                    
                  >
                    </NavLink>


            {/* <button className="btn become__driver-btn mt-4">
              Login now
            </button> */}
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default BecomeDriverSection;
