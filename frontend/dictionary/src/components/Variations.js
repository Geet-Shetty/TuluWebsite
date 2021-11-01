import React from "react";

let Variations = ({ variations }) => {
  if (variations === undefined) {
    return <></>;
  } else {
    let sections = [];
    variations.forEach((section) => {
      let word_list = [];
      if (section.words.length) {
        section.words.forEach((word) => {
          word_list.push(
            <>
              {/* <td> */}
              <a href="" onclick="">
                {word.id === 0 ? "" : <sup>{word.id}</sup>}
                {word.tulu}
              </a>{" "}
              ({word.english}) <br></br>
              {/* </td> */}
            </>
          );
        });
        sections.push(
          <>
            {" "}
            <tr>
              <th colSpan={1} class="section_subheader">
                {section.origin}
              </th>
              <td>{word_list}</td>
            </tr>
          </>
        );
      }
    });
    if (sections.length) {
      return (
        <>
          <h2 class="section_header">Variations</h2>
          <table>
            <th>Origins</th>
            <th>Words</th>
            {sections}
          </table>
        </>
      );
    } else {
      return <></>;
    }
  }
};

export default Variations;
