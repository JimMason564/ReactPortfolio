import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { emailValidation } from "../assets/helpers";

export default function Contact() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleInputChange = (e) => {
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    if (inputType === "email") {
      setEmail(inputValue);
    } else if (inputType === "Name") {
      setName(inputValue);
    } else if (inputType === "Message") {
      setMessage(inputValue);
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (!emailValidation(email)) {
      setErrorMessage("Must enter valid email address");
      return;
    }
    if (!name) {
      setErrorMessage(`Must enter name`);
      return;
    }
    if (!message) {
      setErrorMessage(`Must enter message`);
      return;
    }

    setName("");
    setMessage("");
    setEmail("");
  };

  return (
    <div>
      <header className="head">
        <div className="container">
          <h2 className="heading"> Please reach out with any questions or work inquiries</h2>
        </div>
      </header>
      <section className="page-section bg-light" id="contact">
        <div className="container">
          <div className="text-center">
         
          </div>
          <div className="row">
           
            <Form className="col-sm-4 mx-auto">
              <Form.Group
                className="mb-3"
                controlId="formName"
                onChange={handleInputChange}
              >
                <Form.Label>Name</Form.Label>
                <Form.Control type="name" placeholder="Input name here" />
                <Form.Text className="text-muted"></Form.Text>
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="formEmail"
                onChange={handleInputChange}
              >
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Email address" />
                <Form.Text className="text-muted"></Form.Text>
              </Form.Group>

              <Form.Group
                className="mb-3"
                controlId="formControlsTextarea"
                onChange={handleInputChange}
              >
                <Form.Label>Message:</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  type="message"
                  placeholder="Enter message here"
                />
              </Form.Group>
              <Button
                className="button"
                variant="primary"
                type="submit"
                onClick={handleFormSubmit}
              >
                Send
              </Button>
            </Form>
            {errorMessage && (
              <div>
                <p className="error-text">{errorMessage}</p>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
