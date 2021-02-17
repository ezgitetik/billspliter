import React from "react";
import { Card } from "react-bootstrap";
import { CountText, EventCard, FlexContainer } from "./styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileInvoice, faUsers } from "@fortawesome/free-solid-svg-icons";
import CSS from "csstype";

type TProps = {
  title?: string;
  subtitle?: string;
  text?: string;
  link?: string;
  image?: string;
  userCount?: number;
  expenseCount?: number;
  onClick?: any;
  style?: CSS.Properties;
  hoverEffect?: boolean;
};
const CustomCard: React.FC<TProps> = ({
  title,
  subtitle,
  text,
  link,
  image,
  userCount,
  expenseCount,
  onClick,
  style,
  hoverEffect = true,
}) => {
  return (
    <EventCard
      hoverEffect={hoverEffect}
      border="success"
      style={{ width: "100%", flexDirection: "row", margin: "16px", ...style }}
      onClick={onClick}
    >
      {image && (
        <Card.Img
          style={{
            width: "4rem",
            height: "4rem",
            margin: "16px",
            borderRadius: " 50%",
          }}
          src={image}
        />
      )}
      <Card.Body>
        {title && <Card.Title>{title}</Card.Title>}
        {subtitle && (
          <Card.Subtitle
            style={{ fontSize: "13px" }}
            className="mb-2 text-muted"
          >
            {subtitle}
          </Card.Subtitle>
        )}
        {text && <Card.Text>{text}</Card.Text>}
        {link && <Card.Link href="#">{link}</Card.Link>}
        {userCount && (
          <FlexContainer>
            <FontAwesomeIcon icon={faUsers} />
            <CountText>{userCount}</CountText>
          </FlexContainer>
        )}
        {expenseCount && (
          <FlexContainer>
            <FontAwesomeIcon icon={faFileInvoice} />
            <CountText>{expenseCount}</CountText>
          </FlexContainer>
        )}
      </Card.Body>
    </EventCard>
  );
};

export default CustomCard;
