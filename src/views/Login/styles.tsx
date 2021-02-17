import styled from "styled-components";
import { Form } from "react-bootstrap";

export const LoginContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const StyledFrom = styled(Form)`
  width: 250px;
  font-size: 20px;
  margin-top: 16px;

  .form-check {
    align-items: center;
    display: flex;
    /* justify-content: center; */
    font-size: 15px;
  }
`;
