import React, { useState } from "react";
import { StyledButton, Subtitle } from "../Home/styles";
import { LoginContainer, StyledFrom } from "../Login/styles";
import { Button, Form } from "react-bootstrap";
import { ReactComponent as GoogleLogo } from "src/icons/google.svg";
import { LoginLink, StyledInfoText } from "./styles";
import { useHistory } from "react-router-dom";

const SignUp = () => {
  const history = useHistory();
  const [signUpWithGoogle, setSignUpWithGoogle] = useState();
  return (
    <LoginContainer>
      <StyledButton
        variant="outline-success"
        onClick={setSignUpWithGoogle}
        style={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <GoogleLogo style={{ width: 16, marginRight: 24 }} />
        Sign Up with Google
      </StyledButton>
      <Subtitle style={{ margin: 0 }}>or</Subtitle>

      <StyledFrom>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group controlId="formBasicPassword">
          <Form.Label>Repeat Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Button
            variant="success"
            type="submit"
            style={{ width: 250 }}
            onClick={() => history.replace("/event")}
          >
            Submit
          </Button>
        </div>
        <StyledInfoText>
          <div>
            Already have an account?{" "}
            <LoginLink onClick={() => history.replace("/login")}>
              Login
            </LoginLink>
          </div>
        </StyledInfoText>
      </StyledFrom>
    </LoginContainer>
  );
};

export default SignUp;
