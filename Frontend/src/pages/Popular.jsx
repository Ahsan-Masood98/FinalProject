import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Row } from "reactstrap";
import { getPopularGamesList } from "../redux/actions/gamesAction";
import { selectPopularGames } from "../redux/slices/gamesSlice";
import GameCard from "../components/GameCard/GameCard";

const Popular = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPopularGamesList());
  }, []);
  const games = useSelector(selectPopularGames);

  console.log(games);
  return (
    <div style={{ padding: "0rem 5rem" }}>
      <p className="fs-3">Popular Games</p>
      <Row>
        {games?.map((games, index) => (
          <GameCard key={index} {...games} />
        ))}
      </Row>
    </div>
  );
};

export default Popular;
