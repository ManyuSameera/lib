import React from "react";
import { Col } from "reactstrap";
import { Link } from "react-router-dom";
import "../../styles/book-item.css";



const CarItem = (props) => {
  // const { imgUrl, model, bookName, automatic, speed, price } = props.item;
  const { imgUrl,bookName,author} = props.item;

  return (
    <Col lg="4" md="4" sm="6" className="mb-5 item">
      <div className="car__item">
        <div className="car__img">
          <img src={imgUrl} alt="" className="w-100 image" />
        </div>

        <div className="car__item-content mt-4">
          <h4 className="section__title text-center">{bookName}</h4>
          <h6 className="rent__price text-center mt-">
           {author}
          </h6>

          <button className=" w-50 car__item-btn car__btn-rent">
            <Link to={`/cars/${bookName}`}>Rent</Link>
          </button>

          <button className=" w-50 car__item-btn car__btn-details">
            <Link to={`/cars/${bookName}`}>Details</Link>
          </button>
        </div>
      </div>
    </Col>
  );
};

export default CarItem;