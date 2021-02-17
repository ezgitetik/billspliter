import React, { useState } from "react";
import { StyledButton, Subtitle } from "../Home/styles";
import { LoginContainer, StyledFrom } from "./styles";
import { Button, Form } from "react-bootstrap";
import { ReactComponent as GoogleLogo } from "src/icons/google.svg";
import { LoginLink, StyledInfoText } from "../SignUp/styles";
import { useHistory } from "react-router";

const Login = () => {
  const history = useHistory();
  const [isLoginWithGoogle, setLoginWithGoogle] = useState();
  return (
    <LoginContainer>
      <StyledButton
        variant="outline-success"
        onClick={setLoginWithGoogle}
        style={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <GoogleLogo style={{ width: 16, marginRight: 24 }} />
        Login with Google
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
        <Form.Group controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Remember me" />
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
            Are you new at Bill Splitter?{" "}
            <LoginLink onClick={() => history.replace("/signup")}>
              Sign Up
            </LoginLink>
          </div>
        </StyledInfoText>
      </StyledFrom>
    </LoginContainer>
  );
};

export default Login;
