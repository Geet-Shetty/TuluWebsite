import React from "react";
import Word from "./Word";

// add checks to only do things if they are not null/undefined
let List = ({ word_list, linkRouter }) => {
  let list_elements = [];
  word_list.forEach((element) => {
    list_elements.push(
      <li>
        <a href="" onclick={linkRouter} word_id={element._id}>
          <Word word={element.word} />
        </a>
      </li>
    );
  });
  return (
    <>
      <ul class="words">{list_elements}</ul>
    </>
  );
};

export default List;
