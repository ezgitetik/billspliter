import React from "react";
import {
  Container,
  IconContainer,
  InnerContainer,
  Subtitle,
  Title,
} from "./styles";
import { StyledButton } from "./styles";
import expense from "src/icons/expense.png";
import { useHistory, useRouteMatch } from "react-router-dom";
import Login from "../Login";
import SignUp from "../SignUp";

const Home = () => {
  const history = useHistory();
  const isLogin = useRouteMatch("/login")?.isExact;
  const isSignUp = useRouteMatch("/signup")?.isExact;
  const isHome = useRouteMatch("/")?.isExact;

  return (
    <Container>
      <InnerContainer>
        <IconContainer>
          <img
            src={expense}
            style={{ width: 200, marginTop: 100 }}
            alt="fireSpot"
          />
        </IconContainer>
        <Title>Bill Splitter</Title>

        {isHome && (
          <>
            <Subtitle>
              Keep track of your shared expenses and balances with housemates,
              trips, groups, friends, and family.
            </Subtitle>
            <StyledButton
              variant="outline-success"
              onClick={() => history.push("login")}
            >
              Login
            </StyledButton>
            <Subtitle style={{ margin: 0 }}>or</Subtitle>
            <StyledButton
              variant="outline-success"
              onClick={() => history.push("signup")}
            >
              Sign up
            </StyledButton>
          </>
        )}

        {isLogin && <Login />}
        {isSignUp && <SignUp />}
      </InnerContainer>
    </Container>
  );
};

export default Home;
