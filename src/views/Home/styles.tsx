import styled from "styled-components";
import { ReactComponent as CannabisLogo } from "src/icons/expense.svg";
import { Button } from "react-bootstrap";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  flex-direction: column;
  background-color: #ffffff;
`;

export const InnerContainer = styled.div`
  margin: 100px 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Logo = styled(CannabisLogo)`
  width: 200px;
  height: auto;
`;

export const Title = styled.div`
  font-size: 50px;
  font-weight: bold;
  color: rgb(50, 166, 76);
  margin: 30px; ;
`;

export const Subtitle = styled.div`
  font-size: 20px;
  max-width: 450px;
  text-align: center;
  margin: 25px;
`;

export const StyledButton = styled(Button)`
  margin: 16px;
  width: 250px;
  height: 45px;
`;

export const IconContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
