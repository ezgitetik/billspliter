import { Tabs } from "react-bootstrap";
import styled from "styled-components";

export const TripTab = styled(Tabs)`
  width: 100%;
  margin-bottom: 16px;
  a {
    color: black;
    width: calc(100% / 3);
  }

  .nav-link.active {
    color: rgb(0, 156, 76);
  }
`;
