import { Dropdown } from "react-bootstrap";
import styled from "styled-components";

export const StyledDropdown = styled(Dropdown)`
  .btn.dropdown-toggle {
    width: 100%;
    height: calc(1.5em + 0.75rem + 2px);
    padding: 0.375rem 0.75rem;
    font-size: 1rem;
    color: #495057;
    background-color: #fff;
    border: 1px solid #ced4da;
    border-radius: 0.25rem;
    display: flex;
    justify-content: space-between;
    align-items: center;

    &:focus,
    :active {
      background-color: #fff;
      color: #495057;
      border-radius: 0.25rem;
      box-shadow: none !important;
      border: solid 1px rgb(0, 156, 76);
    }
  }
`;

export const Menu = styled(StyledDropdown.Menu)`
  border-radius: 0.25rem;
  box-shadow: 0 2px 12px 2px rgba(58, 58, 58, 0.2);
  border: 1px solid #ced4da;
  min-width: 100%;
  overflow-y: scroll;
  max-height: 250px;
`;
