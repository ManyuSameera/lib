import React from "react";
import Slider from "react-slick";

import "../../styles/testimonial.css";

const Testimonial = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 1000,
    swipeToSlide: true,
    autoplaySpeed: 2000,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Slider {...settings}>
      <div className="testimonial py-4 px-3">
        <div className="mt-3 d-flex align-items-center gap-4">
          <img src={"https://images.unsplash.com/photo-1618666012174-83b441c0bc76?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzh8fGJvb2slMjBjb3ZlcnxlbnwwfDF8MHx8&auto=format&fit=crop&w=500&q=60"} alt="" className="w-25 h-25 rounded-2" />

          <div>
            <h6 className="mb-0 mt-3">Harry Potter</h6>
            <p className="section__description">J.K.Rowling</p>
          </div>
        </div>
      </div>

      <div className="testimonial py-4 px-3">
        <div className="mt-3 d-flex align-items-center gap-4">
          <img src={"https://m.media-amazon.com/images/I/61nwLbDFRLL.jpg"} alt="" className="w-25 h-25 rounded-2" />

          <div>
            <h6 className="mb-0 mt-3">The Adventures of Finn</h6>
            <p className="section__description">Mark Twain</p>
          </div>
        </div>
      </div>

      <div className="testimonial py-4 px-3">
        <div className="mt-3 d-flex align-items-center gap-4">
          <img src={"https://m.media-amazon.com/images/M/MV5BMTU0NDgxNDg0NV5BMl5BanBnXkFtZTcwMjE4MzkwOA@@._V1_FMjpg_UX1000_.jpg"} alt="" className="w-25 h-25 rounded-2" />
          <div>
            <h6 className="mb-0 mt-3">Anna Karenina</h6>
            <p className="section__description">Leo Tolstoy</p>
          </div>
        </div>
      </div>

      <div className="testimonial py-4 px-3">
        <div className="mt-3 d-flex align-items-center gap-4">
          <img src={"https://cloud.firebrandtech.com/api/v2/img/111/9780785839996/XL"} alt="" className="w-25 h-25 rounded-2" />

          <div>
            <h6 className="mb-0 mt-3">The Great Gatsby</h6>
            <p className="section__description">F. Scott Fitzgerald</p>
          </div>
        </div>
      </div>
    </Slider>
  );
};

export default Testimonial;
