import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Button,
  Form,
  FormGroup,
  Input,
  Label,
  Col,
  Row,
  Card,
  Container,
  FormText,
  FormFeedback,
} from "reactstrap";
import axios from "axios";

const SignUp = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    name: "",
    age: 0,
    contact: "",
  });
  const [validateEmail, setValidateEmail] = useState("");
  const [validatePassword, setValidatePassword] = useState("");
  const validateEmailHandler = (e) => {
    const emailRex =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (emailRex.test(e.target.value) === true) {
      setValidateEmail("has-success");
    } else {
      setValidateEmail("has-danger");
    }
  };
  const validatePasswordHandler = (e) => {
    const passRegEx =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    if (passRegEx.test(e.target.value) === true) {
      setValidatePassword("has-success");
    } else {
      setValidatePassword("has-danger");
    }
  };
  const submitForm = async (event) => {
    event.preventDefault();
    // console.log(event.target.elements);
    const {
      email: { value: emailValue },
      password: { value: passwordValue },
      name: { value: name },
      age: { value: age },
      contact: { value: contact },
    } = event.target.elements;

    setFormData({
      email: emailValue,
      password: passwordValue,
      name: name,
      age: age,
      contact: contact,
    });
    console.log(formData);
    try {
      await axios
        .post("http://localhost:4000/api/user/register", {
          ...formData,
        })
        .then((e) => {
          console.log(e.data.message);
        });
      navigate("/auth/login");
    } catch (error) {
      console.log("failed to register user: ", error);
      alert(error.response.data.message);
    }
  };
  return (
    <Container>
      <Row>
        <Col xs="3"></Col>
        <Col
          xs="6"
          style={{
            width: "100%",
            height: "100vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Card
            style={{
              padding: "3rem",
              border: "solid 1px",
            }}
          >
            <h4>Sign Up form</h4>

            <Form onSubmit={(e) => submitForm(e)}>
              <Row>
                <Col md={6}>
                  <FormGroup>
                    <Label for="email">Email</Label>
                    <Input
                      id="eamil"
                      name="email"
                      placeholder="a@gmail.com"
                      type="email"
                      valid={validateEmail === "has-success"}
                      invalid={validateEmail === "has-danger"}
                      onChange={(e) => {
                        validateEmailHandler(e);
                      }}
                      required
                    />
                    <FormFeedback>
                      Uh oh! Looks like there is an issue with your email.
                      Please input a correct email.
                    </FormFeedback>
                    <FormFeedback valid>
                      That's a tasty looking email you've got there.
                    </FormFeedback>
                  </FormGroup>
                </Col>
                <Col md={6}>
                  <FormGroup>
                    <Label for="password">Password</Label>
                    <Input
                      id="password"
                      name="password"
                      placeholder="123abc****"
                      type="password"
                      valid={validatePassword === "has-success"}
                      invalid={validatePassword === "has-danger"}
                      onChange={(e) => validatePasswordHandler(e)}
                      required
                    />
                    <FormFeedback>
                      Password must be of min 8 characters, 1 uppercase & 1
                      lowercase letter, 1 number & 1 special character:
                    </FormFeedback>
                    <FormFeedback valid>
                      Your Password is Good to Go.
                    </FormFeedback>
                  </FormGroup>
                </Col>
              </Row>

              <Row>
                <Col md={6}>
                  <FormGroup>
                    <Label for="name">Name</Label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="with a placeholder"
                      type="text"
                      required
                    />
                  </FormGroup>
                </Col>
                <Col md={6}>
                  <FormGroup>
                    <Label for="age">Age</Label>
                    <Input
                      id="age"
                      name="age"
                      placeholder="Age placeholder"
                      type="number"
                      required
                    />
                  </FormGroup>
                </Col>
              </Row>

              <Row>
                <Col md={6}>
                  <FormGroup>
                    <Label for="contact">Contact</Label>
                    <Input
                      id="contact"
                      name="contact"
                      placeholder="Contact placeholder"
                      type="text"
                      required
                    />
                  </FormGroup>
                </Col>
              </Row>
              <div className="text-center">
                {validatePassword && validateEmail === "has-success" ? (
                  <Button
                    style={{ width: "50%", fontWeight: "bold" }}
                    type="submit"
                  >
                    Submit
                  </Button>
                ) : (
                  <Button style={{ width: "50%", fontWeight: "bold" }} disabled>
                    Submit
                  </Button>
                )}
              </div>
              <br />
              <FormText>
                <Link to="/auth/login">
                  Already have a Account click here to Login
                </Link>
              </FormText>
            </Form>
          </Card>
        </Col>
        <Col xs="3"></Col>
      </Row>
    </Container>
  );
};

export default SignUp;
