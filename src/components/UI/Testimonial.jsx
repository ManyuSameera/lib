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
        <p className="section__description">
        The Chronicles of Narnia have enchanted millions of readers over the last fifty years, and the magical events described in C. S. Lewis's immortal prose have left many a lasting memory. For here is a world where a witch decrees eternal winter; where there are more talking animals than people; and where battles are fought by Centaurs, Giants, and Fauns. Now all seven Chronicles are bound together in this one magnificent volume with a personal introduction by Douglas Gresham, stepson of C. S. Lewis. Pauline Baynes' original and much-loved illustrations have been made even more memorable by the addition of colour. This spectacular gift edition will guarantee that C. S. Lewis's timeless world of Narnia will catch the imagination of yet another generation of readers.
        </p>

        <div className="mt-3 d-flex align-items-center gap-4">
          <img src={"https://images.unsplash.com/photo-1629992101753-56d196c8aabb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8Ym9vayUyMGNvdmVyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"} alt="" className="w-25 h-25 rounded-2" />

          <div>
            <h6 className="mb-0 mt-3">The Chronicles of Narnia</h6>
            <p className="section__description">C.S. Lewis</p>
          </div>
        </div>
      </div>

      <div className="testimonial py-4 px-3">
        <p className="section__description">
        What if the real key to a more fulfilling career was not to scale up but to work for yourself and become a successful and sustainable company of one? The New York Times bestselling author of Deep Work Cal Newport calls this book a “must-read for any entrepreneur who prioritizes a rich life over riches.” Company of One offers a refreshingly original business strategy that’s focused on a commitment to being better instead of bigger. Why? Because staying small provides one with the freedom to pursue more meaningful pleasures in life―and avoid the headaches that come with traditional growth-oriented business. Having personally discovered the benefits of cutting out the corporate hierarchy that constantly demands more.
        </p>

        <div className="mt-3 d-flex align-items-center gap-4">
          <img src={"https://images.unsplash.com/photo-1641154748135-8032a61a3f80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8Ym9vayUyMGNvdmVyfGVufDB8MXwwfHw%3D&auto=format&fit=crop&w=500&q=60"} alt="" className="w-25 h-25 rounded-2" />

          <div>
            <h6 className="mb-0 mt-3">Company of One</h6>
            <p className="section__description">Paul Jarvis</p>
          </div>
        </div>
      </div>

      <div className="testimonial py-4 px-3">
        <p className="section__description">
        Continuing the story of The Hobbit, this is the second part of Tolkien's epic masterpiece, The Lord of the Rings. Frodo and the Companions of the Ring have been beset by danger during their quest to prevent the ruling ring from falling into the hands of the Dark Lord by destroying it in the cracks of doom. They have lost the wizard, Gandalf, in the battle with an evil spirit in the Mines of Moria and at the Falls of Rauros, Boromir, seduced by the power of the Ring, tried to seize it by force. While Frodo and Sam made their escape the rest of the company were attacked by Orcs. Now they continue their journey alone down the great River Anduin alone, that is, save for the mysterious creeping figure that follows wherever they go.
        </p>

        <div className="mt-3 d-flex align-items-center gap-4">
          <img src={"https://images.unsplash.com/photo-1621351183012-e2f9972dd9bf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8Ym9vayUyMGNvdmVyfGVufDB8MXwwfHw%3D&auto=format&fit=crop&w=500&q=60"} alt="" className="w-25 h-25 rounded-2" />

          <div>
            <h6 className="mb-0 mt-3">The Two Towers</h6>
            <p className="section__description">J.R.R.Tolkien</p>
          </div>
        </div>
      </div>

      <div className="testimonial py-4 px-3">
        <p className="section__description">
        When she was five, her mother handed her a paintbrush and said, “draw your heart out.” Rupi Kaur views her life as an exploration of that artistic journey. Through her poetry and illustrations, she engages with love, loss, trauma, healing and femininity. For Rupi, writing has always been a collective experience. At the age of seventeen she began sharing her work. The stage was her first love and spoken word is where she found her voice. Rupi pursued her love for language by studying rhetoric at the University of Waterloo. She began working on her first collection milk and honey, which eventually became a New York Times bestseller. Rupi’s passion is expression. For her that expression takes many forms.
        </p>

        <div className="mt-3 d-flex align-items-center gap-4">
          <img src={"https://images.unsplash.com/photo-1544947950-fa07a98d237f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"} alt="" className="w-25 h-25 rounded-2" />

          <div>
            <h6 className="mb-0 mt-3">Milk and Honey</h6>
            <p className="section__description">Rupi Kaur</p>
          </div>
        </div>
      </div>
    </Slider>
  );
};

export default Testimonial;
