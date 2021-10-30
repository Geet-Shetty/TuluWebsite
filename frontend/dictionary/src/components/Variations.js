import React from "react";

let Variations = ({ variations }) => {
  if (variations !== undefined) {
    let sections = [];
    variations.forEach((section) => {
      let word_list = [];
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
            <td colSpan={1} class="section_subheader thick">
              {section.origin}
            </td>
            <td>{word_list}</td>
          </tr>
        </>
      );
    });
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
};

export default Variations;
