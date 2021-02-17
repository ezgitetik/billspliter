import React from "react";
import {
  Button,
  Form,
  FormControl,
  Nav,
  Navbar,
  NavDropdown,
} from "react-bootstrap";

type TProps = {
  brand?: string;
  links?: { name: string; link: string }[];
  dropdownItems?: { name: string; link: string }[];
  showSearchBox?: boolean;
};
const CustomNavbar: React.FC<TProps> = ({
  brand,
  links,
  dropdownItems,
  showSearchBox,
}) => {
  return (
    <Navbar bg="light" expand="lg" sticky="top">
      {brand && (
        <Navbar.Brand style={{ color: "rgb(0, 156, 76)" }} href="/event">
          {brand}
        </Navbar.Brand>
      )}
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          {links?.map((link) => {
            return (
              <Nav.Link key={link.name} href={link.link}>
                {link.name}
              </Nav.Link>
            );
          })}
          {dropdownItems?.length && (
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              {dropdownItems?.map((item) => {
                return (
                  <NavDropdown.Item key={item.name} href="#action/3.1">
                    {item.name}
                  </NavDropdown.Item>
                );
              })}
            </NavDropdown>
          )}
        </Nav>
        {showSearchBox && (
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-success">Search</Button>
          </Form>
        )}
      </Navbar.Collapse>
    </Navbar>
  );
};

export default CustomNavbar;
