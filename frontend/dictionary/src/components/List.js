import React from "react";
import { NavLink } from "react-router-dom";
import Word from "./Word";

// add checks to only do things if they are not null/undefined
let List = ({ word_list, linkRouter }) => {
  let list_elements = [];
  word_list.forEach((element) => {
    list_elements.push(
      <li class="tulu_font">
        <a href="" onclick={linkRouter} word_id={element._id}>
          <Word word={element.word} />
        </a>
      </li>
    );
  });
  return (
    <>
      <ul class="words">
        {word_list.map((word) => {
          return (
            <NavLink
              style={({ isActive }) => ({
                display: "block",
                margin: "1rem 0",
                color: isActive ? "white" : "",
              })}
              to={`/display/${word._id}`}
              key={word._id}
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
