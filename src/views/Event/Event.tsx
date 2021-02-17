import React from "react";
import { useParams } from "react-router-dom";
import CustomNavbar from "../../components/CustomNavbar";
import TripPage from "../Trip";
import EventPage from "./EventPage";

const Event = () => {
  const params: { trip: string } = useParams();
  const tripId = params?.trip;
  const isEvent = !tripId;
  return (
    <>
      <CustomNavbar
        brand="Bill Splitter"
        links={[
          { name: "Events", link: "/event" },
          { name: "Settings", link: "/event" },
          { name: "Logout", link: "/" },
        ]}
      />
      {isEvent && <EventPage />}
      {tripId && <TripPage id={tripId} />}
    </>
  );
};

export default Event;
