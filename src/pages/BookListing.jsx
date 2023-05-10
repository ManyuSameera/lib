// import React, { useState } from "react";
// import { Container, Row, Col } from "reactstrap";
// import Helmet from "../components/Helmet/Helmet";
// import CommonSection from "../components/UI/CommonSection";
// import CarItem from "../components/UI/BookItem";
// import carData from "../assets/data/bookData";
// import { Link } from "react-router-dom";
// import FindCarForm from "../components/UI/FindBookForm";
// //import MyContext from '../components/UI/Mycontext';


// // const [searching,setSearching]=useState("");
// const CarListing = () => {
//   const [data, setData] = useState(null);
//   const[searching,setSearching]=useState("");
//   return (
//     <Helmet title="Cars">
//       <CommonSection title="Book Listing" />

//       <section>
//         <Container>
//           <Row style={{display: "flex", justifyContent : "center", marginBottom: "40px"}}>
//             <Col md={3}>
//               <Container >
//             <div className="nav__right" >
//               <div className="search__box">
//                 <input type="text" placeholder="Search" onChange={(e)=>setSearching(e.target.value)}/>
//                 <span>
//                   <i class="ri-search-line"></i>
//                 </span>
//               </div>
//             </div>
//             </Container>
//             </Col>
//           </Row>

// <Row>
// <Col>
//             <FindCarForm/>
//             </Col>
// </Row>

//           <Row>
//               {  carData.filter((e)=>{
//                   return searching.toLowerCase() === '' ? e : e.author.toLowerCase().includes(searching) || e.bookName.toLowerCase().includes(searching);
//                 }).map((e)=>{
//     return(
//       <Col lg="4" md="4" sm="6" className="mb-5">
//       <div className="car__item">
//         <div className="car__img">
//           <img src={e.imgUrl} alt="" className="w-100" />
//         </div>

//         <div className="car__item-content mt-4">
//           <h4 className="section__title text-center">{e.bookName}</h4>
//           <h6 className="rent__price text-center mt-">
//            {e.author}
//           </h6>

//           <button className=" w-50 car__item-btn car__btn-rent">
//             <Link to={`/cars/${e.bookName}`}>Rent</Link>
//           </button>

//           <button className=" w-50 car__item-btn car__btn-details">
//             <Link to={`/cars/${e.bookName}`}>Details</Link>
//           </button>
//         </div>
//       </div>
//     </Col>
//     )
//   })
//             }
//             {/* {carData.map((item) => (
//               <CarItem item={item} key={item.id} />
//             ))} */}
//           </Row>
//         </Container>
//       </section>
//     </Helmet>
//   );
// };

// export default CarListing;
// import React, { useState } from "react";
// import { Container, Row, Col, Form, FormGroup } from "reactstrap";
// import Helmet from "../components/Helmet/Helmet";
// import CommonSection from "../components/UI/CommonSection";
// import CarItem from "../components/UI/BookItem";
// import carData from "../assets/data/bookData";
// import { Link } from "react-router-dom";
// import FindCarForm from "../components/UI/FindBookForm";
// //import MyContext from '../components/UI/Mycontext';


// // const [searching,setSearching]=useState("");
// const CarListing = () => {
//   const[one,setOne]=useState(true)
//   const[authorname,setAuthorName]=useState("")
//   const[genrename,setGenreName]=useState("")
//   const[publishdate,setPulishDate]=useState("")
//   const datas=(e)=>{
//     // console.log()
//     e.preventDefault();
    
//     console.log("work")
//     setAuthorName(document.getElementById("author").value)
//     // console.log(document.getElementById("author").value)
//     console.log(authorname);
//     setGenreName(document.getElementById("catogrey").value);
//     console.log(genrename);
//     setPulishDate(document.getElementById("date").value);
//     setOne(false)
//   }
//   const [data, setData] = useState(null);
//   const[searching,setSearching]=useState("");
//   return (
//     <Helmet title="Cars">
//       <CommonSection title="Book Listing" />

//       <section>
//         <Container>
//           <Row style={{display: "flex", justifyContent : "center", marginBottom: "40px"}}>
//             <Col md={3}>
//               <Container >
//             <div className="nav__right" >
//               <div className="search__box">
//                 <input type="text" placeholder="Search" onChange={(e)=>setSearching(e.target.value)}/>
//                 <span>
//                   <i class="ri-search-line"></i>
//                 </span>
//               </div>
//             </div>
//             </Container>
//             </Col>
//             <Form className="form">
//       <div className=" d-flex align-items-center justify-content-between flex-wrap">
//       <FormGroup className="select__group">
//         <select placeholder="AuthorName" id="author"> 
//             <option value="">Select an author</option>{carData.map((carData)=>(
//               <option key={carData.id} value={carData.author}>{carData.author}</option>
//             ))}
//           </select>
//         </FormGroup>

//         <FormGroup className="select__group">
//           <select id="catogrey">
//             <option value="Fiction">Fiction</option>
//             <option value="Non-Fiction">Non-Fiction</option>
//           </select>
//         </FormGroup>

//         <FormGroup className="select__group">
//             <select placeholder="date" id="date"> 
//                 <option value="">Select an date</option>{carData.map((carData)=>(
//                   <option key={carData.id} value={carData.publish_date}>{carData.publish_date}</option>
//                 ))}
//             </select>
//         </FormGroup>
      
//         {/* <FormGroup className="form__group">
//           <input
//             className="journey__time"
//             type="time"
//             placeholder="Publish date"
//             required
//           />
//         </FormGroup> */}


//         <FormGroup className="form__group">
//           <button className="btn find__car-btn" onClick={datas}>Find Book</button>
//         </FormGroup>
//       </div>
//     </Form>
//             <Col>
//             </Col>
//           </Row>
//           <Row>
//               {  carData.filter((e)=>{
//                   return searching.toLowerCase() === '' ? e : e.author.toLowerCase().includes(searching) || e.bookName.toLowerCase().includes(searching);
//                 }).map((e)=>{
//                   if(one){
                   
//                       return(
//                         <Col lg="4" md="4" sm="6" className="mb-5">
//                         <div className="car__item">
//                           <div className="car__img">
//                             <img src={e.imgUrl} alt="" className="w-100" />
//                           </div>
                  
//                           <div className="car__item-content mt-4">
//                             <h4 className="section__title text-center">{e.bookName}</h4>
//                             <h6 className="rent__price text-center mt-">
//                              {e.author}
//                             </h6>
                  
//                             <button className=" w-50 car__item-btn car__btn-rent">
//                               <Link to={`/cars/${e.bookName}`}>Rent</Link>
//                             </button>
                  
//                             <button className=" w-50 car__item-btn car__btn-details">
//                               <Link to={`/cars/${e.bookName}`}>Details</Link>
//                             </button>
//                           </div>
//                         </div>
//                       </Col>
//                       )
                      
//                   }else{
//                     if(e.author===authorname&&e.genre===genrename||e.publish_date===publishdate){
//                     return(
//                       <Col lg="4" md="4" sm="6" className="mb-5">
//                       <div className="car__item">
//                         <div className="car__img">
//                           <img src={e.imgUrl} alt="" className="w-100" />
//                         </div>
                
//                         <div className="car__item-content mt-4">
//                           <h4 className="section__title text-center">{e.bookName}</h4>
//                           <h6 className="rent__price text-center mt-">
//                            {e.author}
//                           </h6>
                
//                           <button className=" w-50 car__item-btn car__btn-rent">
//                             <Link to={`/cars/${e.bookName}`}>Rent</Link>
//                           </button>
                
//                           <button className=" w-50 car__item-btn car__btn-details">
//                             <Link to={`/cars/${e.bookName}`}>Details</Link>
//                           </button>
//                         </div>
//                       </div>
//                     </Col>
//                     )
//                     }

//                   }
                 
//   })
//             }
//             {/* {carData.map((item) => (
//               <CarItem item={item} key={item.id} />
//             ))} */}
//           </Row>
//         </Container>
//       </section>
//     </Helmet>
//   );
// };

// export default CarListing;
import React, { useState,useEffect } from "react";
import { Container, Row, Col, Form, FormGroup } from "reactstrap";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/CommonSection";
import CarItem from "../components/UI/BookItem";
import carData from "../assets/data/bookData";
import { Link } from "react-router-dom";
import FindCarForm from "../components/UI/FindBookForm";
import AOS from 'aos';
//import MyContext from '../components/UI/Mycontext';


// const [searching,setSearching]=useState("");
const CarListing = () => {
  useEffect(()=>{
    AOS.init({
      duration:2000,
      easing:'ease-in-out'
    })
  },[]);
  const[one,setOne]=useState(true)
  const[authorname,setAuthorName]=useState("")
  const[genrename,setGenreName]=useState("")
  const[publishdate,setPulishDate]=useState("")
  
  const datas=(e)=>{
    // console.log()
    e.preventDefault();
    
    console.log("work")
    setAuthorName(document.getElementById("author").value)
    // console.log(document.getElementById("author").value)
    console.log(authorname);
    setGenreName(document.getElementById("catogrey").value);
    console.log(genrename);
    setPulishDate(document.getElementById("date").value);
    setOne(false)
  }
  const [data, setData] = useState(null);
  const[searching,setSearching]=useState("");
  return (
    <Helmet title="Cars">
      <CommonSection title="Book Listing" />

      <section >
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
            <Form className="form">
      <div className=" d-flex align-items-center justify-content-between flex-wrap">
      <FormGroup className="select__group">
        <select placeholder="AuthorName" id="author"> 
            <option value="">Select an author</option>{carData.map((carData)=>(
              <option key={carData.id} value={carData.author}>{carData.author}</option>
            ))}
          </select>
        </FormGroup>

        <FormGroup className="select__group">
          <select id="catogrey">
            <option value="Fiction">Fiction</option>
            <option value="Non-Fiction">Non-Fiction</option>
          </select>
        </FormGroup>

        <FormGroup className="select__group">
            <select placeholder="date" id="date"> 
                <option value="">Select an date</option>{carData.map((carData)=>(
                  <option key={carData.id} value={carData.publish_date}>{carData.publish_date}</option>
                ))}
            </select>
        </FormGroup>
      
        {/* <FormGroup className="form__group">
          <input
            className="journey__time"
            type="time"
            placeholder="Publish date"
            required
          />
        </FormGroup> */}


        <FormGroup className="form__group">
          <button className="btn find__car-btn" onClick={datas}>Find Book</button>
        </FormGroup>
      </div>
    </Form>
            <Col>
            </Col>
          </Row>
          <Row>
              {  carData.filter((e)=>{
                  return searching.toLowerCase() === '' ? e : e.author.toLowerCase().includes(searching) || e.bookName.toLowerCase().includes(searching);
                }).map((e)=>{
                  if(one){
                   
                      return(
                        <Col lg="4" md="4" sm="6" className="mb-5"  >
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
                      
                  }else{
                    if(e.author===authorname&&e.genre===genrename||e.publish_date===publishdate){
                    return(
                      <Col lg="4" md="4" sm="6" className="mb-5">
                      <div className="car__item"  data-aos="fade-down">
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
                    }

                  }
                 
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
