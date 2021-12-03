import React from "react";
import { NavLink } from "react-router-dom";
import Word from "./Word";

// add checks to only do things if they are not null/undefined
let List = ({ word_list }) => {
  return (
    <>
      <ul className="words">
        {word_list.map((word) => {
          return (
            <NavLink
              style={({ isActive }) => ({
                display: "block",
                margin: "1rem 0",
                color: isActive ? "white" : "cornflowerblue",
              })}
              to={`/display/${word._id}`}
              key={word._id}
              className="tulu_font"
            >
              <Word word={word.word} />
            </NavLink>
          );
        })}
      </ul>
    </>
  );
};

export default List;
