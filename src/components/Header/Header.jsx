import React, { useRef } from "react";
import {auth} from "../../config/firebase";
import {useAuthState} from "react-firebase-hooks/auth";
import { signOut } from 'firebase/auth';
import { Container, Row, Col,NavItem } from "reactstrap";
import { Link, NavLink } from "react-router-dom";
import "../../styles/header.css";
import Login from "../../pages/Login";

import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import {provider} from "../../config/firebase";

const navLinks = [
  {
    path: "/home",
    display: "Home",
  },
  {
    path: "/cars",
    display: "Books",
  },
  {
    path: "/contact",
    display: "Contact",
  },
  
];




const Header = () => {
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
    console.log("test");
   const result=await (signInWithPopup(auth, provider))
//   .then((result) => {
console.log(result);
Navigate('/');}
  return (
    <header className="header">
      {/* ============ header top ============ */}
      {/* <div className="header__top">
        <Container>
          <Row>
            <Col lg="6" md="6" sm="6">
              <div className="header__top__left">
                <span>Need Help?</span>
                <span className="header__top__help">
                  <i class="ri-phone-fill"></i> +1-202-555-0149
                </span>
              </div>
            </Col>

            <Col lg="6" md="6" sm="6">
              <div className="header__top__right d-flex align-items-center justify-content-end gap-3">
                <Link to="#" className=" d-flex align-items-center gap-1">
                  <i class="ri-login-circle-line"></i> Login
                </Link>

                <Link to="#" className=" d-flex align-items-center gap-1">
                  <i class="ri-user-line"></i> Register
                </Link>
              </div>
            </Col>
          </Row>
        </Container>
      </div> */}

      {/* =============== header middle =========== */}
      {/* <div className="header__middle">
        <Container>
          <Row>
            <Col lg="4" md="3" sm="4">
              <div className="logo">
                <h1>
                  <Link to="/home" className=" d-flex align-items-center gap-2">
                    <i class="ri-car-line"></i> 
                  <span>
                      Library
                    </span>
                  </Link>
                </h1>
              </div>
            </Col>

            <Col lg="3" md="3" sm="4">
              <div className="header__location d-flex align-items-center gap-2">
                <span>
                  <i class="ri-earth-line"></i>
                </span>
                <div className="header__location-content">
                  <h4>Bangladesh</h4>
                  <h6>Sylhet City, Bangladesh</h6>
                </div>
              </div>
            </Col>

            <Col lg="3" md="3" sm="4">
              <div className="header__location d-flex align-items-center gap-2">
                <span>
                  <i class="ri-time-line"></i>
                </span>
                <div className="header__location-content">
                  <h4>Sunday to Friday</h4>
                  <h6>10am - 7pm</h6>
                </div>
              </div>
            </Col> 

            <Col
              lg="2"
              md="3"
              sm="0"
              className=" d-flex align-items-center justify-content-end "
            >
              <button className="header__btn btn ">
                <Link to="/contact">
                  <i class="ri-phone-line"></i> Request a call
                </Link>
              </button>
            </Col>
          </Row>
        </Container>
      </div> */}

      {/* ========== main navigation =========== */}

      <div className="main__navbar">
        <Container>
          <div className="navigation__wrapper d-flex align-items-center justify-content-between">
            <span className="mobile__menu">
              <i class="ri-menu-line" onClick={toggleMenu}></i>
            </span>

            <div className="navigation" ref={menuRef} onClick={toggleMenu}>
              <div className="menu">
                {navLinks.map((item, index) => (
                  <NavLink
                    to={item.path}
                    className={(navClass) =>
                      navClass.isActive ? "nav__active nav__item" : "nav__item"
                    }
                    key={index}
                  >
                    {item.display}
                  </NavLink>
                ))}
                {user?<img src={user ?.photoURL||""} width ="50px"  height="50px" style={{ borderRadius: "50%" }} alt="User Profile Picture" ></img>:""}
          {user?<NavLink to="" style={{color:"white" }}>{user?.displayName}</NavLink>:""}
                {!user?<NavLink to=""  onClick={login}
                    
                    className={(navClass) =>
                      navClass.isActive ? "nav__active nav__item" : "nav__item"
                    }
                    
                  >Login
                    </NavLink>:
                    <NavLink to=""  onClick={signOut1}
                    
                    className={(navClass) =>
                      navClass.isActive ? "nav__active nav__item" : "nav__item"
                    }
                    
                  >SignOut
                    </NavLink>}
              </div>
            </div>

            
          
          {/* <Link to="/" >Home</Link> */}
          {/* <Link to="/login">Login</Link> */}
          
          
          
          <div className="nav__right">
              <div className="search__box">
                <input type="text" placeholder="Search" />
                <span>
                  <i class="ri-search-line"></i>
                </span>
              </div>
            </div>
          </div>
         
        </Container>
      </div>
    </header>
  );
};

export default Header;
