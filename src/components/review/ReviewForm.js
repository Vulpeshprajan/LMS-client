import React, { useState } from "react";
import { CustomInput } from "../custom-input/CustomInput.js";
import { Button, Form } from "react-bootstrap";
import { AiFillStar } from "react-icons/ai";
export const ReviewForm = ({ selectedReview }) => {
  const [form, setForm] = useState({
    status: "inactive",
    star: 5,
  });

  const handleOnChange = (e) => {
    const { name, value } = e.target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  return (
    <div>
      <Form>
        <CustomInput
          label="Title"
          name="title"
          placeholder="Best book I have ever read"
          onChange={handleOnChange}
        />

        <Form.Group className="mb-3">
          <Form.Label>Leave Star</Form.Label>

          <div className="fs-3">
            <input
              value="1"
              onChange={handleOnChange}
              type="radio"
              name="star"
              id="s1"
            />
            <label htmlFor="s1">
              <AiFillStar />
            </label>

            <input
              value="2"
              onChange={handleOnChange}
              type="radio"
              name="star"
              id="s2"
            />

            <label htmlFor="s2">
              <AiFillStar />
            </label>

            <input
              value="3"
              onChange={handleOnChange}
              type="radio"
              name="star"
              id="s3"
            />
            <label htmlFor="s3">
              <AiFillStar />
            </label>

            <input
              value="4"
              onChange={handleOnChange}
              type="radio"
              name="star"
              id="s4"
            />
            <label htmlFor="s4">
              <AiFillStar />
            </label>

            <input
              value="5"
              onChange={handleOnChange}
              type="radio"
              name="star"
              id="s5"
            />
            <label htmlFor="s5">
              <AiFillStar />
            </label>
          </div>
        </Form.Group>

        <CustomInput
          label="Review Message"
          name="message"
          as="textarea"
          placeholder="Best book the way it us written and deliver the value"
          onChange={handleOnChange}
        />

        <div className="d-grid">
          <Button variant="success" type="submit">
            Submit Review
          </Button>
        </div>
      </Form>
    </div>
  );
};
