import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Header } from "../../components/layout/Header";
import { Footer } from "../../components/layout/Footer";
import { BiSolidUserDetail } from "react-icons/bi";
import { CustomInput } from "../../components/custom-input/CustomInput";
import { signInAdminAction } from "./userAction";

const Signin = () => {
  const [form, setForm] = useState({});

  const handleOnChange = (e) => {
    const { name, value } = e.target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    signInAdminAction(form);
  };
  const inputs = [
    {
      label: "Email",
      name: "email",
      required: true,
      placeholder: "Sam@gmail",
      type: "email",
    },

    {
      label: "Password",
      name: "password",
      required: true,
      placeholder: "*****",
      type: "password",
      minLength: "6",
    },
  ];

  return (
    <div>
      <Header />
      <section className="main ">
        <Form
          className=" m-5 p-5 border shadow-lg w-10"
          onSubmit={handleOnSubmit}
        >
          <h1>
            <BiSolidUserDetail />
            Admin Login Portal
          </h1>
          <hr />

          {inputs.map((item, i) => (
            <CustomInput key={i} {...item} onChange={handleOnChange} />
          ))}

          <div className="d-grid">
            <Button variant="primary" type="submit">
              Login
            </Button>
          </div>
        </Form>
      </section>
      <Footer />
    </div>
  );
};

export default Signin;
