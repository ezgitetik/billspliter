import React, { useState } from "react";
import { Container, StyledFrom } from "./styles";
import { StyledButton } from "../Home/styles";
import CustomCard from "../../components/CustomCard";
import CustomModal from "../../components/CustomModal";
import { FlexContainer } from "../../components/CustomCard/styles";
import { Form, Image } from "react-bootstrap";
import CustomDropdown from "../../components/CustomDropdown";
import { useHistory } from "react-router-dom";

const EventPage = () => {
  const history = useHistory();
  const [newEventModal, showNewEventModal] = useState(false);

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
              src="https://cdn.filestackcontent.com/6uvo4KDWS6CM3J8tTV93"
            />
          </FlexContainer>
          <Form.Group controlId="formEventName">
            <Form.Label>Event Name</Form.Label>
            <Form.Control type="email" placeholder="Enter Event Name" />
          </Form.Group>
          <Form.Group controlId="formEventCurrency">
            <Form.Label>Event Currency</Form.Label>
            <CustomDropdown
              items={["EURO", "USD", "TL"]}
              onSelect={(event: any) => console.log(event)}
              placeholder="Select Currency"
            />
          </Form.Group>
        </StyledFrom>
      </>
    );
  };

  return (
    <>
      <Container>
        <StyledButton
          style={{ width: 150 }}
          variant="success"
          onClick={() => showNewEventModal(true)}
        >
          + New Event
        </StyledButton>
        <CustomCard
          image="https://cdn.filestackcontent.com/6uvo4KDWS6CM3J8tTV93"
          title="Prag Trip"
          subtitle="10.7.2015 - 16.8.2015"
          userCount={4}
          onClick={() => history.push("/event/1")}
        />
        <CustomCard
          image="https://cdn.filestackcontent.com/aOX5KMNoQkG2YaE1ZBEO"
          title="Diyarbakir Trip"
          subtitle="12.12.2019 - 16.12.2019"
          userCount={6}
          onClick={() => history.push("/event/2")}
        />
        <CustomCard
          image=" https://cdn.filestackcontent.com/Z0VSZNG3R9WthJFH3tQQ"
          title="Paris Trip"
          subtitle="10.1.2017 - 16.8.2017"
          userCount={2}
          onClick={() => history.push("/event/3")}
        />
        <CustomCard
          image="https://cdn.filestackcontent.com/QvCNV5lFTN6Awy2GI1FN"
          title="Italy Trip"
          subtitle="1.1.2019 - 6.2.2019"
          userCount={5}
          onClick={() => history.push("/event/4")}
        />
      </Container>
      <CustomModal
        show={newEventModal}
        handleClose={() => showNewEventModal(false)}
        header="Create New Event"
        body={() => renderModalBody()}
      />
    </>
  );
};
export default EventPage;
