import React from "react";
import "../../styles/find-book-form.css";
import "../../styles/find-book-form.css";
import { Form, FormGroup } from "reactstrap";
import bookData from '../../assets/data/bookData'
import carData from "../../assets/data/bookData";

const FindCarForm = ({bookData}) => {
  return (
    <Form className="form">
      <div className=" d-flex align-items-center justify-content-between flex-wrap">
        

        <FormGroup className="select__group">
        <select placeholder="AuthorName">
            <option value="">Select an author</option>{carData.map((carData)=>(
              <option key={carData.id} value={carData.id}>{carData.author}</option>
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
        <FormGroup className="select__group">
          <select>
            <option value="ac">Fiction</option>
            <option value="non-ac">Non-Fiction</option>
          </select>
        </FormGroup>
        <FormGroup className="form__group">
          <input type="date" placeholder="Journey date" required />
        </FormGroup>

        <FormGroup className="form__group">
          <button className="btn find__car-btn">Find Book</button>
        </FormGroup>
      </div>
    </Form>
  );
};

export default FindCarForm;
