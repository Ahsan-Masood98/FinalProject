import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Row } from "reactstrap";
import { getNewGamesList } from "../redux/actions/gamesAction";
import { selectNewGames } from "../redux/slices/gamesSlice";
import GameCard from "../components/GameCard/GameCard";

const Latest = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getNewGamesList());
  }, []);
  const games = useSelector(selectNewGames);

  console.log(games);
  return (
    <div style={{ padding: "0rem 5rem" }}>
      <p className="fs-3">Latest Games</p>
      <Row>
        {games?.map((games, index) => (
          <GameCard key={index} {...games} />
        ))}
      </Row>
    </div>
  );
};

export default Latest;
