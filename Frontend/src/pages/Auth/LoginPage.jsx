import React, { useState } from "react";
import "./login.css";
import {
  Row,
  Col,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  Container,
  Card,
  CardTitle,
  FormFeedback,
  FormText,
} from "reactstrap";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const LoginPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
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
    const {
      email: { value: emailVlaue },
      password: { value: passwordVlaue },
    } = event.target.elements;

    setFormData({ email: emailVlaue, password: passwordVlaue });
    console.log(formData);
    try {
      const {
        data: { user, token },
      } = await axios.post("http://localhost:4000/api/user/login", {
        ...formData,
      });
      localStorage.setItem("userData", JSON.stringify(user)); // object ko stringify kero werna browser isay promise treat kerta hai
      localStorage.setItem("auth_token", token);
      // JSON.parse(localStorage.getItem("userData"));
      navigate("/");
    } catch (error) {
      console.log("failed to login user: ", error);
      alert(error.response.data.message);
    }
  };
  return (
    <Container>
      <div>
        <Row
          style={{
            width: "100%",
            height: "100vh",
            display: "flex",
            // flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Col sm="3"></Col>
          <Col xs="6">
            <Card body className="my-2">
              <CardTitle tag="h3" className="text-center">
                Login Page
              </CardTitle>
              <Form onSubmit={(e) => submitForm(e)}>
                <FormGroup>
                  <Label for="exampleEmail">Email</Label>
                  <Input
                    id="exampleEmail"
                    name="email"
                    placeholder="Enter Your Email"
                    type="email"
                    valid={validateEmail === "has-success"}
                    invalid={validateEmail === "has-danger"}
                    onChange={(e) => {
                      validateEmailHandler(e);
                    }}
                    required
                  />
                  <FormFeedback>
                    Uh oh! Looks like there is an issue with your email. Please
                    input a correct email.
                  </FormFeedback>
                  <FormFeedback valid>
                    That's a tasty looking email you've got there.
                  </FormFeedback>
                </FormGroup>
                <FormGroup>
                  <Label for="password">Password</Label>
                  <Input
                    id="password"
                    name="password"
                    placeholder="Enter Your Password"
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
                <div className="text-center">
                  {validatePassword && validateEmail === "has-success" ? (
                    <Button
                      style={{ width: "50%", fontWeight: "bold" }}
                      type="submit"
                    >
                      Submit
                    </Button>
                  ) : (
                    <Button
                      style={{ width: "50%", fontWeight: "bold" }}
                      disabled
                    >
                      Submit
                    </Button>
                  )}
                </div>
                {/* <Button
                  color="primary"
                  style={{ width: "50%", fontWeight: "bold" }}
                >
                  SignUp
                </Button> */}

                <br />
                <FormText>
                  <Link to="/auth/signup">
                    Dont have a Account click here to Register
                  </Link>
                </FormText>
              </Form>
            </Card>
          </Col>
          <Col sm="3"></Col>
        </Row>
      </div>
    </Container>
  );
};

export default LoginPage;
