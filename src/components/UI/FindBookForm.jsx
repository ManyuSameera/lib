import React from "react";
import "../../styles/find-book-form.css";
import "../../styles/find-book-form.css";
import { Form, FormGroup } from "reactstrap";

const FindCarForm = () => {
  return (
    <Form className="form">
      <div className=" d-flex align-items-center justify-content-between flex-wrap">
        <FormGroup className="form__group">
          <input type="text" placeholder="Name of the book" required />
        </FormGroup>

        <FormGroup className="form__group">
          <input type="text" placeholder="Author" required />
        </FormGroup>

        <FormGroup className="form__group">
          <input type="date" placeholder="Journey date" required />
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
          <button className="btn find__car-btn">Find Book</button>
        </FormGroup>
      </div>
    </Form>
  );
};

export default FindCarForm;