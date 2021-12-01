import React from "react";
import { Link, NavLink, Outlet } from "react-router-dom";
import Word from "./Word";
import { useEffect, useState } from "react";
// import { list } from "../App";

// add checks to only do things if they are not null/undefined
let List = ({ word_list }) => {
  useEffect(() => {
    console.log("listhook");
  }, []);
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
              to={`/${word._id}`}
              key={word._id}
            >
              <Word word={word.word} />
            </NavLink>
          );
        })}
      </ul>
      <Outlet />
    </>
  );
};

export default List;
