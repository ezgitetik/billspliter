import React, { useEffect, useState } from "react";
import { Dropdown } from "react-bootstrap";
import { Menu, StyledDropdown } from "./styles";

type TProps = {
  items: any[];
  placeholder?: string;
  selected?: string;
  onSelect: any;
  clearSelection?: boolean;
};
const CustomDropdown: React.FC<TProps> = ({
  items,
  placeholder = "Select",
  selected,
  clearSelection,
  onSelect,
}) => {
  const [selectedItem, setSelectedItem] = useState(selected);
  const handleSelect = (key: any) => {
    setSelectedItem(key);
    onSelect(key);
  };
  useEffect(() => {
    selected && setSelectedItem(selected);
  }, [selected]);
  useEffect(() => {
    clearSelection && setSelectedItem("0");
  }, [clearSelection]);
  return (
    <StyledDropdown onSelect={handleSelect}>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        {selectedItem ?? placeholder}
      </Dropdown.Toggle>

      <Menu>
        {items.map((item: any, index: number) => (
          <Dropdown.Item eventKey={item} key={index + 1}>
            {item}
          </Dropdown.Item>
        ))}
      </Menu>
    </StyledDropdown>
  );
};

export default CustomDropdown;
