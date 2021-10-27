import React from "react";

let WordHeader = ({ word }) => {
  console.table(word);
  let id = word.id ? <sup>{word.id}</sup> : <></>;
  let tulu = word.tulu ? (
    <tr>
      <th>Tulu</th>
      <td class="tulu">
        {id}
        {word.tulu}
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
    <>
      <table>
        {tulu}
        {english}
        {origin}
      </table>
    </>
  );
};

export default WordHeader;
