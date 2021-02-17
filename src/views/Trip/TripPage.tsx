import React from "react";
import CustomCard from "../../components/CustomCard";
import { Container } from "../Event/styles";
import { Tab } from "react-bootstrap";
import { TripTab } from "./styles";
import { Users } from "./Users";

const TripPage = ({ id }: any) => {
  return (
    <>
      <Container>
        <CustomCard
          image="https://cdn.filestackcontent.com/6uvo4KDWS6CM3J8tTV93"
          title="Prag Trip"
          subtitle="10.7.2015 - 16.8.2015"
          userCount={4}
          hoverEffect={false}
          style={{ margin: "0", border: "none" }}
        />
        <TripTab defaultActiveKey="users" id="trip">
          <Tab eventKey="users" title="Users">
            <Users />
          </Tab>
          <Tab eventKey="expenses" title="Expenses">
            <div />
          </Tab>
          <Tab eventKey="balance" title="Balance">
            <div />
          </Tab>
        </TripTab>
      </Container>
    </>
  );
};

export default TripPage;
