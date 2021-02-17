import styled from "styled-components";
import { Card } from "react-bootstrap";

export const EventCard = styled(Card)<{ hoverEffect: boolean }>`
  cursor: pointer;

  @media (min-width: 1024px) {
    transition: 0.3s transform cubic-bezier(0.155, 1.105, 0.295, 1.12),
      0.3s box-shadow,
      0.3s -webkit-transform cubic-bezier(0.155, 1.105, 0.295, 1.12);
    &:hover {
      transform: ${({ hoverEffect }) => (hoverEffect ? "scale(1.07)" : "")};
    }
  }
`;

export const FlexContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

export const CountText = styled.div`
  font-size: 12px;
  margin-left: 4px;
  font-weight: 400;
`;
