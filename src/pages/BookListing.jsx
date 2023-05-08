import React, { useState } from "react";
import { Container, Row, Col } from "reactstrap";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/CommonSection";
import CarItem from "../components/UI/BookItem";
import carData from "../assets/data/bookData";

const ITEMS_PER_PAGE = 10;

const CarListing = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const lastIndex = currentPage * ITEMS_PER_PAGE;
  const firstIndex = lastIndex - ITEMS_PER_PAGE;
  const currentItems = carData.slice(firstIndex, lastIndex);

  return (
    <Helmet title="Cars">
      <CommonSection title="Book Listing" />

      <section>
        <Container>
          <Row>
            <Col lg="12">
              <div className="d-flex align-items-center gap-3 mb-5">
                <span className="d-flex align-items-center gap-2">
                  <i class="ri-sort-asc"></i> Sort By
                </span>

                <select>
                  <option>Select</option>
                  <option value="low">Author</option>
                  <option value="high">Fiction</option>
                  <option value="high">Non-Fiction</option>
                </select>
              </div>
            </Col>

            {currentItems.map((item) => (
              <CarItem item={item} key={item.id} />
            ))}
          </Row>

          <Row className="justify-content-center">
            <Col lg="4">
              <nav>
                <ul className="pagination page" style={{display:'flex',justifyContent:'center'}}>
                  {carData.length > ITEMS_PER_PAGE &&
                    Array(Math.ceil(carData.length / ITEMS_PER_PAGE))
                      .fill()
                      .map((_, i) => (
                        <li
                          key={i}
                          className={`page-item ${
                            i + 1 === currentPage ? "active" : ""
                          }`}
                        >
                          <button
                            className="page-link "
                            onClick={() => handlePageChange(i + 1)}
                          >
                            {i + 1}
                          </button>
                        </li>
                      ))}
                </ul>
              </nav>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default CarListing;
