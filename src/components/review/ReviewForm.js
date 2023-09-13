import React from 'react'
import {CustomInput} from "../custom-input/CustomInput.js";
import { Button, Form } from 'react-bootstrap';
import { AiFillStar } from 'react-icons/ai';
export const ReviewForm = ({selectedReview}) => {
  return (
    <div>

        <Form>
            <CustomInput label="Title" name="title" placeholder="Best book I have ever read"/>


            <Form.Group className="mb-3">
            <Form.Label>Leave Star</Form.Label>

            <div className='fs-3'>
            <AiFillStar title='1'/>
            <AiFillStar />
            <AiFillStar />
            <AiFillStar/>
            <AiFillStar/>
            </div>
            </Form.Group>


            <CustomInput
             label="Review Message" 
             name="message"
             as="textarea"
             placeholder="Best book the way it us written and deliver the value"/>

            <div className="d-grid">
                <Button variant="success">
                    Submit Review
                </Button>

            </div>

        </Form>



    </div>
  )
};
