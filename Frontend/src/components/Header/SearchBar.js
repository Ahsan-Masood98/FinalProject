import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getSearchedList } from "../../redux/actions/gamesAction";
import "./searchBar.css";

const SearchBar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [textInput, setTextInput] = useState("");

  const inputHandler = (e) => {
    setTextInput(e.target.value);
  };
  const submitSearch = (e) => {
    e.preventDefault();
    dispatch(getSearchedList(textInput));
    setTextInput("");
    navigate("/searched");
  };
  const clearSearched = () => {
    // dispatch({ type: "CLEAR_SEARCHED" });
  };
  return (
    <div className="search">
      <input value={textInput} onChange={inputHandler} type="text" />
      <button onClick={submitSearch} type="submit">
        Search
      </button>
    </div>
  );
};

export default SearchBar;
