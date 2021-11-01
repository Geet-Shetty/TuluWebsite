import React from "react";

let WordHeader = ({ word }) => {
  if (word !== undefined) {
    let id = word.id ? <sup>{word.id}</sup> : <></>;
    let tulu = word.tulu ? (
      <tr>
        <th>Tulu</th>
        <td class="tulu two">
          <a class="disabled">
            {id}
            {word.tulu}
          </a>
        </td>
      </tr>
    ) : (
      <></>
    );

    let english = word.english ? (
      <tr>
        <th>English</th>
        <td class="english">{word.english}</td>
      </tr>
    ) : (
      <></>
    );

    let origin = word.origin ? (
      <tr>
        <th>Origin</th>
        <td>{word.origin}</td>
      </tr>
    ) : (
      <></>
    );
    return (
      <div id="word">
        <table>
          {tulu}
          {english}
          {origin}
        </table>
      </div>
    );
  } else {
    return <></>;
  }
};

export default WordHeader;
