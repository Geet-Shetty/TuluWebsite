import React from "react";

let WordHeader = ({ word }) => {
  return (
    <>
      <table>
        <tr>
          <th>Tulu</th>
          <th>English</th>
        </tr>
        <tr>
          <td>
            <h3 class="tulu">
              <sup>{word.word.id}</sup>
              {word.word.tulu}
            </h3>
          </td>
          <td>
            <h3 class="english">{word.word.english}</h3>
          </td>
        </tr>
      </table>
      <h3 class="english">Origin: {word.word.origin}</h3>
    </>
  );
};

export default WordHeader;
