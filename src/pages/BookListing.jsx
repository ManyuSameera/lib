import React, { useState } from "react";
import { Container, Row, Col } from "reactstrap";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/CommonSection";
import CarItem from "../components/UI/BookItem";
import carData from "../assets/data/bookData";
import { Link } from "react-router-dom";
import FindCarForm from "../components/UI/FindBookForm";
//import MyContext from '../components/UI/Mycontext';


// const [searching,setSearching]=useState("");
const CarListing = () => {
  const [data, setData] = useState(null);
  const[searching,setSearching]=useState("");
  return (
    <Helmet title="Cars">
      <CommonSection title="Book Listing" />

      <section>
        <Container>
          <Row style={{display: "flex", justifyContent : "center", marginBottom: "40px"}}>
            <Col md={3}>
              <Container >
            <div className="nav__right" >
              <div className="search__box">
                <input type="text" placeholder="Search" onChange={(e)=>setSearching(e.target.value)}/>
                <span>
                  <i class="ri-search-line"></i>
                </span>
              </div>
            </div>
            </Container>
            </Col>
          </Row>

<Row>
<Col>
            <FindCarForm/>
            </Col>
</Row>

          <Row>
              {  carData.filter((e)=>{
                  return searching.toLowerCase() === '' ? e : e.author.toLowerCase().includes(searching) || e.bookName.toLowerCase().includes(searching);
                }).map((e)=>{
    return(
      <Col lg="4" md="4" sm="6" className="mb-5">
      <div className="car__item">
        <div className="car__img">
          <img src={e.imgUrl} alt="" className="w-100" />
        </div>

        <div className="car__item-content mt-4">
          <h4 className="section__title text-center">{e.bookName}</h4>
          <h6 className="rent__price text-center mt-">
           {e.author}
          </h6>

          <button className=" w-50 car__item-btn car__btn-rent">
            <Link to={`/cars/${e.bookName}`}>Rent</Link>
          </button>

          <button className=" w-50 car__item-btn car__btn-details">
            <Link to={`/cars/${e.bookName}`}>Details</Link>
          </button>
        </div>
      </div>
    </Col>
    )
  })
            }
            {/* {carData.map((item) => (
              <CarItem item={item} key={item.id} />
            ))} */}
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default CarListing;