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
  let list_elements = [];
  // console.log(list);
  word_list.forEach((word) => {
    list_elements.push(
      // <li class="tulu_font">
      //   <a href="" onclick={linkRouter} word_id={element._id}>
      //     <Word word={element.word} />
      //   </a>
      // </li>
      <NavLink
        style={({ isActive }) => ({
          display: "block",
          margin: "1rem 0",
          color: isActive ? "white" : "",
        })}
        to={`/display/${word._id}`}
      >
        <Word word={word.word} />
      </NavLink>
    );
  });
  return (
    <>
      <ul class="words">{list_elements}</ul>
      <Outlet />
    </>
  );
};

export default List;
