import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Col, Row } from "reactstrap";
import {
  getPopularGamesList,
  getNewGamesList,
  getUpcommingGamesList,
} from "../redux/actions/gamesAction";
import {
  selectPopularGames,
  selectNewGames,
  selectUpcommingGames,
} from "../redux/slices/gamesSlice";
import GameCard from "../components/GameCard/GameCard";
import { Link } from "react-router-dom";
import "./home.css";
import CarouselSlide from "../components/Carousel/CarouselSlide";

const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPopularGamesList());
    dispatch(getNewGamesList());
    dispatch(getUpcommingGamesList());
  }, [dispatch]);

  const popularGames = useSelector(selectPopularGames);
  const newGames = useSelector(selectNewGames);
  const upcommingGames = useSelector(selectUpcommingGames);
  return (
    <div style={{ padding: "0rem 5rem" }}>
      <CarouselSlide items={upcommingGames} />
      <Row>
        <Col sm="8">
          <div className="tittle">
            <p className="fs-3">
              <b>Popular Games</b>
            </p>
          </div>
        </Col>
        <Col sm="4">
          <div className="btn__all">
            <Link className="arrow_right" to="/popular">
              View All
            </Link>
          </div>
        </Col>
      </Row>
      <Row>
        {popularGames?.map(
          (games, index) =>
            index < 4 && ( // <= only 8 items
              <GameCard key={index} {...games} />
            )
        )}
      </Row>
      <Row>
        <Col sm="8">
          <div className="tittle">
            <p className="fs-3">
              <b>Latest Games</b>
            </p>
          </div>
        </Col>
        <Col sm="4">
          <div className="btn__all">
            <Link className="arrow_right" to="/latest">
              View All
            </Link>
          </div>
        </Col>
      </Row>
      <Row>
        {newGames?.map(
          (games, index) =>
            index < 4 && ( // <= only 8 items
              <GameCard key={index} {...games} />
            )
        )}
      </Row>
      <Row>
        <Col sm="8">
          <div className="tittle">
            <p className="fs-3">
              <b>Upcomming Games</b>
            </p>
          </div>
        </Col>
        <Col sm="4">
          <div className="btn__all">
            <Link className="arrow_right" to="/upcomming">
              View All
            </Link>
          </div>
        </Col>
      </Row>
      <Row>
        {upcommingGames?.map(
          (games, index) =>
            index < 4 && ( // <= only 8 items
              <GameCard key={index} {...games} />
            )
        )}
      </Row>
    </div>
  );
};

export default Home;
