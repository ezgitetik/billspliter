import React, { useState } from "react";
import { StyledButton } from "../Home/styles";
import CustomCard from "../../components/CustomCard";
import { Container, StyledFrom } from "../Event/styles";
import CustomModal from "../../components/CustomModal";
import { FlexContainer } from "../../components/CustomCard/styles";
import { Form, Image } from "react-bootstrap";
import CustomDropdown from "../../components/CustomDropdown";

export const Users = () => {
  const [showNewUserModal, setShowNewUserModal] = useState(false);
  const [expense, setExpense] = useState([
    {
      name: "Hotel",
      date: "27.05.1992",
      amount: "150 TL",
    },
  ]);

  const renderModalBody = () => {
    return (
      <>
        <StyledFrom>
          <FlexContainer style={{ justifyContent: "center" }}>
            <Image
              style={{
                width: "6rem",
                height: "6rem",
                marginBottom: "16px",
                borderRadius: " 50%",
              }}
              src="https://cdn.filestackcontent.com/ZHdA0jbT1WLmDiag3SnA"
            />
          </FlexContainer>
          <Form.Group controlId="userName">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" placeholder="Enter Name" />
          </Form.Group>
          <Form.Group controlId="userLastName">
            <Form.Label>Last Name</Form.Label>
            <Form.Control type="text" placeholder="Enter Last Name" />
          </Form.Group>
          <Form.Group controlId="userLastName">
            <Container>
              <Form.Label
                style={{
                  fontWeight: 500,
                  marginTop: "2rem",
                  fontSize: "1.2rem",
                }}
              >
                Expenses
              </Form.Label>
            </Container>
            {expense.length > 0 && (
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  fontWeight: 500,
                }}
              >
                <Form.Group
                  controlId="expenseName"
                  style={{ marginRight: 8, flex: 0.33 }}
                >
                  <Form.Label>Expense Name</Form.Label>
                </Form.Group>
                <Form.Group
                  controlId="expenseDate"
                  style={{ marginRight: 8, flex: 0.33 }}
                >
                  <Form.Label>Date</Form.Label>
                </Form.Group>
                <Form.Group controlId="expenseAmount" style={{ flex: 0.33 }}>
                  <Form.Label>Amount</Form.Label>
                </Form.Group>
              </div>
            )}
            {expense?.map((exp: any) => {
              return (
                <div style={{ display: "flex" }} key={exp}>
                  <Form.Group
                    controlId="expenseName"
                    style={{ marginRight: 8 }}
                  >
                    <Form.Control
                      type="text"
                      //    placeholder="Name"
                      value={exp.name}
                    />
                  </Form.Group>
                  <Form.Group
                    controlId="expenseDate"
                    style={{ marginRight: 8 }}
                  >
                    <Form.Control
                      type="text"
                      //  placeholder="Date"
                      value={exp.date}
                    />
                  </Form.Group>
                  <Form.Group controlId="expenseAmount">
                    <Form.Control
                      type="text"
                      //  placeholder="Amount"
                      value={exp.amount}
                    />
                  </Form.Group>
                </div>
              );
            })}
          </Form.Group>
          <Container>
            <StyledButton
              style={{ width: 150 }}
              variant="success"
              onClick={() =>
                setExpense([...expense, { name: "", date: "", amount: "" }])
              }
            >
              + Add Expense
            </StyledButton>
          </Container>
        </StyledFrom>
      </>
    );
  };

  return (
    <Container>
      <StyledButton
        style={{ width: 150 }}
        variant="success"
        onClick={() => setShowNewUserModal(true)}
      >
        + Add User
      </StyledButton>
      <CustomCard
        image="https://cdn.filestackcontent.com/ZHdA0jbT1WLmDiag3SnA"
        title="Ali Kemal Saglam"
        subtitle="Total Expense: -130 TL"
        expenseCount={3}
        onClick={() => console.log("true")}
      />
      <CustomCard
        image="https://cdn.filestackcontent.com/DrATwIzYTJeU7FC3PyFh"
        title="Ezgi Tetik Saglam"
        subtitle="Total Expense: -250 TL"
        expenseCount={3}
        onClick={() => console.log("true")}
      />
      <CustomModal
        show={showNewUserModal}
        handleClose={() => setShowNewUserModal(false)}
        header="Create New Event"
        body={() => renderModalBody()}
      />
    </Container>
  );
};
