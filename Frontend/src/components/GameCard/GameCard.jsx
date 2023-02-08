import React from "react";
import {
  Button,
  Card,
  CardBody,
  CardSubtitle,
  CardText,
  CardTitle,
  Col,
  Row,
} from "reactstrap";
import { useDispatch, useSelector } from "react-redux";
import {
  getGameDetail,
  getGameScreenshots,
} from "../../redux/actions/gameDetail";
import "./gameCard.css";
import { Link } from "react-router-dom";
import GameDetailModal from "./GameDetailModal";
import { isLoaded } from "../../redux/slices/detailSlice";

const GameCard = ({ background_image, name, released, id }) => {
  const dispatch = useDispatch();
  const getDeatilHandler = () => {
    dispatch(getGameDetail(id));
    dispatch(getGameScreenshots(id));
    dispatch(isLoaded());
  };

  return (
    <Col sm="6" md="4" lg="3" className="game-disp">
      <Card className="game-card">
        <CardBody>
          <CardTitle tag="h5">{name}</CardTitle>
          <CardSubtitle className="mb-2 text-muted" tag="h6">
            {released}
          </CardSubtitle>
          <Link to="" onClick={getDeatilHandler}>
            <GameDetailModal />
          </Link>
        </CardBody>
        <img className="game-img" alt={name} src={background_image} />
      </Card>
    </Col>
  );
};

export default GameCard;
