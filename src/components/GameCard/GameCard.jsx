import React from "react";
import { Card, CardBody, CardText, CardTitle, Col, Row } from "reactstrap";
import "./gameCard.css";

const GameCard = ({ background_image, name, released, id }) => {
  return (
    <Col sm="6" md="4" lg="3" className="game-disp">
      <Card className="game-card">
        <CardBody>
          <CardTitle tag="h5">{name}</CardTitle>
          <CardText>{released}</CardText>
        </CardBody>
        <img className="game-img" alt={name} src={background_image} />
      </Card>
    </Col>
  );
};

export default GameCard;
