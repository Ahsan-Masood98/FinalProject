import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Row } from "reactstrap";
import { getUpcommingGamesList } from "../redux/actions/gamesAction";
import { selectUpcommingGames } from "../redux/slices/gamesSlice";
import GameCard from "../components/GameCard/GameCard";

const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUpcommingGamesList());
  }, []);
  const games = useSelector(selectUpcommingGames);

  console.log(games);
  return (
    <div style={{ padding: "0rem 5rem" }}>
      <p className="fs-3">Upcomming Games</p>
      <Row>
        {games?.map((games, index) => (
          <GameCard key={index} {...games} />
        ))}
      </Row>
    </div>
  );
};

export default Home;
