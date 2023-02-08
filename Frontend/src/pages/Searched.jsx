import React from "react";
import { useSelector } from "react-redux";
import { Row } from "reactstrap";
import GameCard from "../components/GameCard/GameCard";
import { selectSearchedList } from "../redux/slices/gamesSlice";

const Searched = () => {
  const games = useSelector(selectSearchedList);
  return (
    <div style={{ padding: "0rem 5rem" }}>
      <p className="fs-3">Search Result</p>
      <Row>
        {games?.map((games, index) => (
          <GameCard key={index} {...games} />
        ))}
      </Row>
    </div>
  );
};

export default Searched;
