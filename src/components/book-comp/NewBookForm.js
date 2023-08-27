import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { CustomInput } from "../custom-input/CustomInput";
import { useDispatch, useSelector } from "react-redux";
import { UserLayout } from "../layout/UserLayout";
import { postBookAction } from "../../pages/Books/bookAction";

export const NewBookForm = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.userInfo);

  const [form, setForm] = useState({});

  const handleOnChange = (e) => {
    const { name, value } = e.target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    console.log(form);
    dispatch(postBookAction(form));
  };

  const inputs = [
    {
      label: "Book title",
      name: "title",
      type: "text",
      placeholder: "Learn to be a fullstack developer",
      required: true,
    },
    {
      label: "Author",
      name: "author",
      type: "text",

      placeholder: "Florin popin, Uncle Bob",
      required: true,
    },
    {
      label: "Year",
      name: "year",
      type: "number",
      placeholder: "1998, 2000, 2020",
      required: true,
    },
    {
      label: "Thumbnail",
      name: "thumbnail",
      type: "url",
      placeholder: "http://...",
      required: true,
    },
    {
      label: "Summary",
      name: "summary",
      type: "text",
      as: "textarea",
      placeholder: "Book summary.... ",
      rows: 10,
      required: true,
    },
  ];

  return (
    <UserLayout title="Add New Books">
      {" "}
      {user?.role !== "admin" ? (
        <h1> Unauthorize access </h1>
      ) : (
        <div className="py-3">
          <Form onSubmit={handleOnSubmit}>
            {inputs.map((item, i) => (
              <CustomInput key={i} {...item} onChange={handleOnChange} />
            ))}

            <div className="d-grid">
              <Button variant="primary" type="submit">
                {" "}
                Add Book{" "}
              </Button>
            </div>
          </Form>
        </div>
      )}
    </UserLayout>
  );
};
